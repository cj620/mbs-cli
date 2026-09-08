import { EventEmitter, once } from 'node:events'
import {
  createServer,
  type IncomingMessage,
  type Server,
  type ServerResponse,
} from 'node:http'
import type { AddressInfo } from 'node:net'
import { describe, expect, it, vi } from 'vitest'
import { NotAuthenticatedError } from '../errors.js'
import { APIClient } from '../http.js'
import { fetchCurrentUser } from '../auth/session-login.js'

/** Mutable observations and response policy for one authenticated wire scenario. */
interface AuthenticationWireScenario {
  /** Headers received by the loopback server in request order. */
  receivedHeaders: IncomingMessage['headers'][]
  /** One-based request number that succeeds, or null when every request rejects authentication. */
  successfulRequestNumber: number | null
}

/** Lifecycle observations for a deliberately slow current-user response. */
interface SlowDripScenario {
  /** Emits response-close after Node reports that the underlying response closed. */
  closeEvents: EventEmitter
  /** Timer responsible for keeping the socket active below Axios' idle timeout. */
  chunkTimer?: ReturnType<typeof setInterval>
  /** Timer responsible for eventually completing a valid JSON response. */
  completionTimer?: ReturnType<typeof setTimeout>
  /** Whether the valid response reached its planned completion point. */
  completed: boolean
  /** Whether the response socket closed before planned completion. */
  closedBeforeCompletion: boolean
  /** Cookie header observed by the current-user endpoint. */
  receivedCookie?: string
}

const syntheticAuthUser = {
  userId: 'wire-user',
  displayName: 'Wire Test User',
  companyId: 7,
  companyName: 'Test Company',
  department: 'Operations',
  position: 'Analyst',
}

/**
 * Serves deterministic authentication failures and successes while recording
 * the exact headers emitted by Axios' real Node HTTP adapter.
 *
 * @param scenario Per-test response policy and ordered header observations.
 * @param request Incoming loopback request from APIClient.
 * @param response Outgoing synthetic business response.
 */
function handleAuthenticationRequest(
  scenario: AuthenticationWireScenario,
  request: IncomingMessage,
  response: ServerResponse,
): void {
  const requestNumber = scenario.receivedHeaders.push(request.headers)
  response.setHeader('Content-Type', 'application/json')
  if (scenario.successfulRequestNumber === requestNumber) {
    response.statusCode = 200
    response.end(JSON.stringify({ code: 200, data: { authenticated: true }, msg: 'ok' }))
    return
  }

  response.statusCode = 401
  response.end(JSON.stringify({ code: 401, data: null, msg: 'authentication required' }))
}

/**
 * Writes one harmless whitespace chunk so the response stays active without
 * completing its JSON document.
 *
 * @param response Current slow-drip HTTP response.
 */
function writeSlowDripChunk(response: ServerResponse): void {
  if (!response.destroyed) response.write(' ')
}

/**
 * Completes the slow-drip endpoint with a valid current-user response when the
 * client has not already cancelled and closed the socket.
 *
 * @param scenario Lifecycle observations and timer handles for the response.
 * @param response Current slow-drip HTTP response.
 */
function completeSlowDripResponse(
  scenario: SlowDripScenario,
  response: ServerResponse,
): void {
  scenario.completed = true
  if (scenario.chunkTimer) clearInterval(scenario.chunkTimer)
  if (!response.destroyed) response.end(`${JSON.stringify(syntheticAuthUser)}}`)
}

/**
 * Records whether the client closed a slow-drip socket before the server's
 * planned valid response, and releases both response timers.
 *
 * @param scenario Lifecycle observations and timer handles for the response.
 */
function recordSlowDripClose(scenario: SlowDripScenario): void {
  scenario.closedBeforeCompletion = !scenario.completed
  if (scenario.chunkTimer) clearInterval(scenario.chunkTimer)
  if (scenario.completionTimer) clearTimeout(scenario.completionTimer)
  scenario.closeEvents.emit('response-close')
}

/**
 * Starts a valid current-user JSON response in small frequent chunks, ensuring
 * an Axios idle timeout alone cannot enforce the caller's absolute deadline.
 *
 * @param scenario Lifecycle observations used by the regression assertion.
 * @param request Incoming current-user request from the real Axios adapter.
 * @param response Outgoing response that remains active until completion or cancellation.
 */
function handleSlowDripCurrentUserRequest(
  scenario: SlowDripScenario,
  request: IncomingMessage,
  response: ServerResponse,
): void {
  scenario.receivedCookie = request.headers.cookie
  response.writeHead(200, { 'Content-Type': 'application/json' })
  response.write('{"code":200,"data":')
  scenario.chunkTimer = setInterval(writeSlowDripChunk, 10, response)
  scenario.completionTimer = setTimeout(completeSlowDripResponse, 400, scenario, response)
  response.once('close', recordSlowDripClose.bind(undefined, scenario))
}

/**
 * Starts one HTTP server on an ephemeral IPv4 loopback port.
 *
 * @param server Unstarted synthetic server owned by the current test.
 * @returns Origin URL suitable for APIClient and auth-center helpers.
 * @throws Error when the server cannot bind or does not expose an IPv4 address.
 */
async function listenOnLoopback(server: Server): Promise<string> {
  server.listen(0, '127.0.0.1')
  await once(server, 'listening')
  const address = server.address()
  if (!address || typeof address === 'string') {
    throw new Error('Loopback test server did not expose an IPv4 address')
  }
  return `http://127.0.0.1:${(address as AddressInfo).port}`
}

/**
 * Stops a loopback test server and force-closes any deliberately stalled test
 * connections so failures cannot retain Vitest handles.
 *
 * @param server Started synthetic server owned by the current test.
 */
async function closeLoopbackServer(server: Server): Promise<void> {
  const closed = once(server, 'close')
  server.close()
  server.closeAllConnections()
  await closed
}

describe('APIClient wire authentication', () => {
  /**
   * Verifies the actual Node HTTP adapter sends persisted SESSION and Bearer state
   * on the first business request and applies both refreshed credentials to the sole retry.
   * Synthetic values and an ephemeral loopback server keep the regression free of
   * real accounts, tokens, cookies, and remote side effects.
   */
  it('sends persisted Bearer initially and refreshed Bearer after HTTP 401', async () => {
    const scenario: AuthenticationWireScenario = {
      receivedHeaders: [],
      successfulRequestNumber: 2,
    }
    const server = createServer(handleAuthenticationRequest.bind(undefined, scenario))
    const baseUrl = await listenOnLoopback(server)
    const refreshAuthentication = vi.fn(async () => ({
      cookie: 'SESSION=refreshed-session',
      accessToken: 'synthetic-memory-access-token',
    }))

    try {
      const client = new APIClient(
        baseUrl,
        'SESSION=initial-session',
        refreshAuthentication,
        'synthetic-disk-access-token',
      )

      await expect(client.get('/business')).resolves.toEqual({
        code: 200,
        data: { authenticated: true },
        msg: 'ok',
      })

      expect(refreshAuthentication).toHaveBeenCalledTimes(1)
      expect(scenario.receivedHeaders).toHaveLength(2)
      expect(scenario.receivedHeaders[0]).toMatchObject({
        authorization: 'Bearer synthetic-disk-access-token',
        cookie: 'SESSION=initial-session',
        'client-type': 'cli',
      })
      expect(scenario.receivedHeaders[1]).toMatchObject({
        authorization: 'Bearer synthetic-memory-access-token',
        cookie: 'SESSION=refreshed-session',
        'client-type': 'cli',
      })
    } finally {
      await closeLoopbackServer(server)
    }
  })

  /**
   * Verifies persistent HTTP 401 responses trigger exactly one exchange and one
   * retry, preventing an authentication outage from creating an unbounded loop.
   */
  it('stops after exactly two requests and one refresh when HTTP 401 persists', async () => {
    const scenario: AuthenticationWireScenario = {
      receivedHeaders: [],
      successfulRequestNumber: null,
    }
    const server = createServer(handleAuthenticationRequest.bind(undefined, scenario))
    const baseUrl = await listenOnLoopback(server)
    const refreshAuthentication = vi.fn(async () => ({
      cookie: 'SESSION=refreshed-session',
      accessToken: 'synthetic-memory-access-token',
    }))

    try {
      const client = new APIClient(
        baseUrl,
        'SESSION=initial-session',
        refreshAuthentication,
      )

      await expect(client.get('/business')).rejects.toBeInstanceOf(NotAuthenticatedError)

      expect(refreshAuthentication).toHaveBeenCalledTimes(1)
      expect(scenario.receivedHeaders).toHaveLength(2)
      expect(scenario.receivedHeaders[0]?.cookie).toBe('SESSION=initial-session')
      expect(scenario.receivedHeaders[0]?.authorization).toBeUndefined()
      expect(scenario.receivedHeaders[1]).toMatchObject({
        authorization: 'Bearer synthetic-memory-access-token',
        cookie: 'SESSION=refreshed-session',
      })
    } finally {
      await closeLoopbackServer(server)
    }
  })
})

describe('fetchCurrentUser wire deadline', () => {
  /**
   * Verifies caller cancellation reaches Axios' real Node adapter and closes a
   * slow-drip response that would remain alive beyond the transport idle timeout.
   */
  it('aborts an active slow-drip response at the caller absolute deadline', async () => {
    const scenario: SlowDripScenario = {
      closeEvents: new EventEmitter(),
      completed: false,
      closedBeforeCompletion: false,
    }
    const server = createServer(handleSlowDripCurrentUserRequest.bind(undefined, scenario))
    const baseUrl = await listenOnLoopback(server)
    const controller = new AbortController()
    const abortTimer = setTimeout(controller.abort.bind(controller), 50)
    const responseClosed = once(scenario.closeEvents, 'response-close')

    try {
      await expect(fetchCurrentUser(
        baseUrl,
        'SESSION=slow-session',
        200,
        controller.signal,
      )).rejects.toMatchObject({
        type: 'api',
        message: 'Authentication service request failed',
      })
      await responseClosed

      expect(controller.signal.aborted).toBe(true)
      expect(scenario.receivedCookie).toBe('SESSION=slow-session')
      expect(scenario.completed).toBe(false)
      expect(scenario.closedBeforeCompletion).toBe(true)
    } finally {
      clearTimeout(abortTimer)
      await closeLoopbackServer(server)
    }
  })

  /**
   * Verifies the same slow-drip fixture eventually forms valid auth-center JSON
   * and outlives Axios' idle timeout while chunks continue to arrive.
   */
  it('completes as valid current-user JSON when no absolute cancellation is supplied', async () => {
    const scenario: SlowDripScenario = {
      closeEvents: new EventEmitter(),
      completed: false,
      closedBeforeCompletion: false,
    }
    const server = createServer(handleSlowDripCurrentUserRequest.bind(undefined, scenario))
    const baseUrl = await listenOnLoopback(server)

    try {
      await expect(fetchCurrentUser(
        baseUrl,
        'SESSION=slow-session',
        200,
      )).resolves.toEqual({
        id: 'wire-user',
        loginName: 'wire-user',
        userName: 'Wire Test User',
        companyId: 7,
        companyName: 'Test Company',
        departmentName: 'Operations',
        positionName: 'Analyst',
        groupCompanyId: 7,
        groupCompanyName: 'Test Company',
      })

      expect(scenario.completed).toBe(true)
      expect(scenario.closedBeforeCompletion).toBe(false)
    } finally {
      await closeLoopbackServer(server)
    }
  })
})
