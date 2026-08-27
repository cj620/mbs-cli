// packages/skill-shared/src/__tests__/base-command.test.ts
import { describe, expect, it, vi } from 'vitest'

import { MBSCommand } from '../base-command.js'
import { MBSError, NotAuthenticatedError } from '../errors.js'

/** Test-only view of the protected/public command seam exercised without constructing oclif runtime state. */
interface CommandMethods {
  /** Invokes the protected backend-body output method against a minimal logger harness. */
  output(this: { log: (message: string) => void }, body: unknown): void
  /** Invokes the command failure seam against a harness that records stdout and process exit intent. */
  catch(
    this: { log: (message: string) => void; exit: (code: number) => void },
    err: Error & { exitCode?: number },
  ): Promise<void>
}

const commandMethods = MBSCommand.prototype as unknown as CommandMethods

/** Creates the smallest observable command seam needed to verify stdout and exit codes. */
function createCommandHarness(): {
  log: ReturnType<typeof vi.fn<[string], void>>
  exit: ReturnType<typeof vi.fn<[number], void>>
} {
  return {
    log: vi.fn<[string], void>(),
    exit: vi.fn<[number], void>(),
  }
}

describe('MBSCommand backend response output', () => {
  /** Verifies JSON backend bodies are serialized directly without the legacy CLI envelope. */
  it('writes a JSON backend body without wrapping it', () => {
    const command = createCommandHarness()
    const body = { code: 200, data: { id: 1 }, msg: 'ok' }

    commandMethods.output.call(command, body)

    expect(command.log).toHaveBeenCalledOnce()
    expect(command.log).toHaveBeenCalledWith(JSON.stringify(body))
  })

  /** Verifies text endpoints remain text instead of becoming a JSON string literal. */
  it('writes a text backend body verbatim', () => {
    const command = createCommandHarness()

    commandMethods.output.call(command, '<p>backend response</p>')

    expect(command.log).toHaveBeenCalledWith('<p>backend response</p>')
  })

  /** Verifies scalar and null JSON bodies are emitted as their direct JSON representations. */
  it.each([
    [null, 'null'],
    [false, 'false'],
    [42, '42'],
  ])('writes scalar backend body %j directly', (body, expected) => {
    const command = createCommandHarness()

    commandMethods.output.call(command, body)

    expect(command.log).toHaveBeenCalledWith(expected)
  })

  /** Verifies backend business errors preserve their full response body and non-zero exit status. */
  it('writes the backend body carried by an API error', async () => {
    const command = createCommandHarness()
    const body = { code: 1001, data: { field: 'status' }, msg: 'invalid request' }
    const error = new MBSError('invalid request', 'api', '', { body, statusCode: 200 })

    await commandMethods.catch.call(command, error)

    expect(command.log).toHaveBeenCalledWith(JSON.stringify(body))
    expect(command.exit).toHaveBeenCalledWith(1)
  })

  /** Verifies final authentication failures preserve the backend body and authentication exit code. */
  it('writes the backend body carried by an authentication error', async () => {
    const command = createCommandHarness()
    const body = { code: 601, data: null, msg: 'login expired' }
    const error = new NotAuthenticatedError({ body, statusCode: 200 })

    await commandMethods.catch.call(command, error)

    expect(command.log).toHaveBeenCalledWith(JSON.stringify(body))
    expect(command.exit).toHaveBeenCalledWith(2)
  })

  /** Verifies local failures with no backend body retain a safe CLI-owned error payload. */
  it('keeps the local error payload when no backend response exists', async () => {
    const command = createCommandHarness()
    const error = new MBSError('body must be valid JSON', 'validation', 'Check command input')

    await commandMethods.catch.call(command, error)

    expect(command.log).toHaveBeenCalledWith(JSON.stringify({
      ok: false,
      error: {
        type: 'validation',
        message: 'body must be valid JSON',
        hint: 'Check command input',
      },
    }))
    expect(command.exit).toHaveBeenCalledWith(1)
  })
})
