import { EventEmitter, once } from 'node:events'
import {
  createServer,
  type IncomingMessage,
  type Server,
  type ServerResponse,
} from 'node:http'
import type { AddressInfo } from 'node:net'
import { describe, expect, it, vi } from 'vitest'
import { serializeBackendBody } from '../base-command.js'
import { MBSError, NotAuthenticatedError } from '../errors.js'
import { APIClient, MAX_STREAM_ERROR_BODY_BYTES } from '../http.js'
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

/** Request count recorded while a streamed authentication failure is retried. */
interface StreamAuthenticationScenario {
  /** Number of HTTP requests received by the synthetic endpoint. */
  requestCount: number
}

const syntheticAuthUser = {
  userId: 'wire-user',
  displayName: 'Wire Test User',
  companyId: 7,
  companyName: 'Test Company',
  department: 'Operations',
  position: 'Analyst',
}

const syntheticStreamErrorBody = {
  code: 422,
  data: null,
  msg: 'synthetic query rejection',
}

/**
 * Returns one deterministic JSON failure for a streaming POST without exposing
 * any real endpoint, query, credential, or business response.
 *
 * @param _request Incoming loopback request; its content is intentionally ignored.
 * @param response Outgoing synthetic HTTP error response owned by this handler.
 */
function handleStreamErrorRequest(
  _request: IncomingMessage,
  response: ServerResponse,
): void {
  response.writeHead(422, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify(syntheticStreamErrorBody))
}

/**
 * Returns a deterministic plain-text gateway failure for streamed error passthrough testing.
 *
 * @param _request Incoming loopback request; its content is intentionally ignored.
 * @param response Outgoing synthetic HTTP error response owned by this handler.
 */
function handleStreamTextErrorRequest(
  _request: IncomingMessage,
  response: ServerResponse,
): void {
  response.writeHead(502, { 'Content-Type': 'text/plain; charset=utf-8' })
  response.end('synthetic upstream unavailable')
}

/**
 * Returns an HTTP 401 JSON body and records each request so the one-retry invariant is observable.
 *
 * @param scenario Mutable request counter owned by the current test.
 * @param _request Incoming loopback request; its content is intentionally ignored.
 * @param response Outgoing synthetic authentication rejection.
 */
function handleStreamAuthenticationErrorRequest(
  scenario: StreamAuthenticationScenario,
  _request: IncomingMessage,
  response: ServerResponse,
): void {
  scenario.requestCount += 1
  response.writeHead(401, { 'Content-Type': 'application/json' })
  response.end(JSON.stringify({ code: 401, data: null, msg: 'synthetic authentication required' }))
}

/**
 * Returns a body one byte beyond the shared buffering limit to verify bounded failure and stream disposal.
 *
 * @param _request Incoming loopback request; its content is intentionally ignored.
 * @param response Outgoing oversized synthetic response.
 */
function handleOversizedStreamErrorRequest(
  _request: IncomingMessage,
  response: ServerResponse,
): void {
  response.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' })
  response.end('x'.repeat(MAX_STREAM_ERROR_BODY_BYTES + 1))
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

describe('APIClient wire streaming errors', () => {
  /**
   * Reproduces the database-query failure with Axios' real Node adapter and
   * requires the retained backend body to be JSON-serializable rather than an
   * IncomingMessage containing a circular Socket graph.
   */
  it('materializes a non-2xx streaming JSON response before retaining it', async () => {
    const server = createServer(handleStreamErrorRequest)
    const baseUrl = await listenOnLoopback(server)
    const client = new APIClient(baseUrl, 'SESSION=synthetic-session', vi.fn())

    try {
      const error: unknown = await client
        .postStream('/query', { sql: 'SELECT synthetic_column FROM synthetic_table LIMIT 1' })
        .catch((cause: unknown) => cause)

      expect(error).toBeInstanceOf(MBSError)
      if (!(error instanceof MBSError)) throw new Error('Expected a classified API failure')

      expect(() => serializeBackendBody(error.backendResponse?.body)).not.toThrow()
      expect(error.backendResponse).toEqual({
        body: syntheticStreamErrorBody,
        statusCode: 422,
      })
    } finally {
      await closeLoopbackServer(server)
    }
  })

  /** Verifies non-JSON streamed failures retain their exact text instead of a transport object. */
  it('retains a non-2xx streaming text response as text', async () => {
    const server = createServer(handleStreamTextErrorRequest)
    const baseUrl = await listenOnLoopback(server)
    const client = new APIClient(baseUrl, 'SESSION=synthetic-session', vi.fn())

    try {
      const error: unknown = await client
        .postStream('/query', { sql: 'SELECT synthetic_column FROM synthetic_table LIMIT 1' })
        .catch((cause: unknown) => cause)

      expect(error).toBeInstanceOf(MBSError)
      if (!(error instanceof MBSError)) throw new Error('Expected a classified API failure')
      expect(error.backendResponse).toEqual({
        body: 'synthetic upstream unavailable',
        statusCode: 502,
      })
    } finally {
      await closeLoopbackServer(server)
    }
  })

  /**
   * Verifies streamed HTTP 401 responses are materialized before control flow and still trigger exactly one
   * credential refresh and one retry before the final backend body is retained.
   */
  it('refreshes once and retains the final streaming HTTP 401 body', async () => {
    const scenario: StreamAuthenticationScenario = { requestCount: 0 }
    const server = createServer(handleStreamAuthenticationErrorRequest.bind(undefined, scenario))
    const baseUrl = await listenOnLoopback(server)
    const refreshAuthentication = vi.fn(async () => ({
      cookie: 'SESSION=synthetic-refreshed-session',
      accessToken: 'synthetic-refreshed-access-token',
    }))
    const client = new APIClient(baseUrl, 'SESSION=synthetic-session', refreshAuthentication)

    try {
      const error: unknown = await client
        .postStream('/query', { sql: 'SELECT synthetic_column FROM synthetic_table LIMIT 1' })
        .catch((cause: unknown) => cause)

      expect(error).toBeInstanceOf(NotAuthenticatedError)
      if (!(error instanceof NotAuthenticatedError)) throw new Error('Expected an authentication failure')
      expect(error.backendResponse).toEqual({
        body: { code: 401, data: null, msg: 'synthetic authentication required' },
        statusCode: 401,
      })
      expect(refreshAuthentication).toHaveBeenCalledTimes(1)
      expect(scenario.requestCount).toBe(2)
    } finally {
      await closeLoopbackServer(server)
    }
  })

  /** Verifies an oversized streamed error is destroyed and replaced with a safe local failure. */
  it('rejects a streaming error body that exceeds the buffering limit', async () => {
    const server = createServer(handleOversizedStreamErrorRequest)
    const baseUrl = await listenOnLoopback(server)
    const client = new APIClient(baseUrl, 'SESSION=synthetic-session', vi.fn())

    try {
      const error: unknown = await client
        .postStream('/query', { sql: 'SELECT synthetic_column FROM synthetic_table LIMIT 1' })
        .catch((cause: unknown) => cause)

      expect(error).toBeInstanceOf(MBSError)
      expect(error).toMatchObject({
        message: 'Backend error response is too large',
        backendResponse: undefined,
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
