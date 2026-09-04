import { beforeEach, describe, expect, it, vi } from 'vitest'

const mockInput = vi.fn()
const mockSetConfig = vi.fn()

vi.mock('@inquirer/prompts', () => ({ input: mockInput }))
vi.mock('@mb-it-org/shared', () => ({ setConfig: mockSetConfig }))

describe('config init command', () => {
  beforeEach(() => {
    vi.resetModules()
    vi.resetAllMocks()
  })

  /** Verifies remote HTTP is persisted directly without an approval prompt or field. */
  it('persists remote HTTP by default', async () => {
    mockInput.mockResolvedValue('http://api.example.com:8080/root')
    const { default: ConfigInit } = await import('../commands/config/init.js')
    const log = vi.fn()

    await ConfigInit.prototype.run.call({ parse: vi.fn(), log })

    expect(mockSetConfig).toHaveBeenCalledWith({ apiUrl: 'http://api.example.com:8080/root' })
    expect(log).toHaveBeenLastCalledWith(JSON.stringify({
      ok: true,
      data: {
        apiUrl: 'http://api.example.com:8080/root',
        message: 'Configuration saved',
      },
    }))
  })

  /** Verifies HTTPS continues to use the same minimal API URL configuration shape. */
  it('persists HTTPS without extra transport state', async () => {
    mockInput.mockResolvedValue('https://api.example.com')
    const { default: ConfigInit } = await import('../commands/config/init.js')

    await ConfigInit.prototype.run.call({ parse: vi.fn(), log: vi.fn() })

    expect(mockSetConfig).toHaveBeenCalledWith({ apiUrl: 'https://api.example.com' })
  })

  /** Verifies the interactive validator rejects non-HTTP protocols and embedded credentials. */
  it('rejects unsafe API URL shapes before persistence', async () => {
    mockInput.mockResolvedValue('https://api.example.com')
    const { default: ConfigInit } = await import('../commands/config/init.js')

    await ConfigInit.prototype.run.call({ parse: vi.fn(), log: vi.fn() })

    const options = mockInput.mock.calls[0]?.[0] as { validate: (value: string) => true | string }
    expect(options.validate('ftp://api.example.com')).toBe('Please enter an HTTP or HTTPS URL')
    expect(options.validate('http://user:secret@api.example.com')).toBe(
      'Please enter an API root without credentials, query, or fragment',
    )
    expect(options.validate('http://api.example.com')).toBe(true)
  })
})
