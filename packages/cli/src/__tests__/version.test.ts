import { readFileSync } from 'node:fs'
import { join } from 'node:path'

import { beforeEach, describe, expect, it, vi } from 'vitest'

const { mockCheckLatestNpmVersion } = vi.hoisted(() => ({
  mockCheckLatestNpmVersion: vi.fn(),
}))

vi.mock('@mb-it-org/shared', async (importOriginal) => ({
  ...(await importOriginal<typeof import('@mb-it-org/shared')>()),
  checkLatestNpmVersion: mockCheckLatestNpmVersion,
}))

describe('version command', () => {
  beforeEach(() => {
    vi.resetModules()
    mockCheckLatestNpmVersion.mockReset()
  })

  it('signals the agent to notify the user when a due check finds a new version', async () => {
    mockCheckLatestNpmVersion.mockResolvedValue({
      latest: '99.0.0',
      checkPerformed: true,
    })

    const { default: Version } = await import('../commands/version.js')
    const log = vi.fn()
    const current = JSON.parse(
      readFileSync(join(process.cwd(), 'package.json'), 'utf8'),
    ).version as string

    await Version.prototype.run.call({
      parse: vi.fn(async () => ({ flags: { 'if-due': true } })),
      log,
    })

    expect(mockCheckLatestNpmVersion).toHaveBeenCalledWith({ ifDue: true })
    expect(log).toHaveBeenCalledWith(
      JSON.stringify({
        ok: true,
        data: {
          current,
          latest: '99.0.0',
          updateAvailable: true,
          checkPerformed: true,
          notificationDue: true,
          hint: '检测到新版本 v99.0.0，运行 mbs update 前必须先征得用户确认',
        },
      }),
    )
  })

  it('does not notify the user again when the two-hour check is not due', async () => {
    mockCheckLatestNpmVersion.mockResolvedValue({
      latest: '99.0.0',
      checkPerformed: false,
    })

    const { default: Version } = await import('../commands/version.js')
    const log = vi.fn()

    await Version.prototype.run.call({
      parse: vi.fn(async () => ({ flags: { 'if-due': true } })),
      log,
    })

    const output = JSON.parse(log.mock.calls[0][0]) as {
      data: {
        updateAvailable: boolean
        checkPerformed: boolean
        notificationDue: boolean
      }
    }
    expect(output.data).toMatchObject({
      updateAvailable: true,
      checkPerformed: false,
      notificationDue: false,
    })
  })

  it('does not offer to downgrade when the installed version is newer', async () => {
    mockCheckLatestNpmVersion.mockResolvedValue({
      latest: '0.0.1',
      checkPerformed: true,
    })

    const { default: Version } = await import('../commands/version.js')
    const log = vi.fn()

    await Version.prototype.run.call({
      parse: vi.fn(async () => ({ flags: { 'if-due': true } })),
      log,
    })

    const output = JSON.parse(log.mock.calls[0][0]) as {
      data: {
        updateAvailable: boolean
        notificationDue: boolean
      }
    }
    expect(output.data).toMatchObject({
      updateAvailable: false,
      notificationDue: false,
    })
  })

  it('requires agent confirmation before installing a discovered update', () => {
    const skill = readFileSync(join(process.cwd(), '../../skills/SKILL.md'), 'utf8')

    expect(skill).toContain('mbs version --if-due')
    expect(skill).toContain('data.notificationDue === true')
    expect(skill).toContain('只有用户明确确认后才能运行 `mbs update`')
    expect(skill).toContain('更新成功后运行 `mbs skills install`')
    expect(skill).toContain('正在执行命令或运行 `mbs serve` 时不得更新')
  })
})
