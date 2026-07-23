import { describe, it, expect, vi } from 'vitest'
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from 'node:fs'
import { tmpdir } from 'node:os'
import { join } from 'node:path'
import { MBSError } from '../errors.js'
import {
  checkLatestNpmVersion,
  detectInstalledUpdateSource,
  fetchLatestNpmVersion,
  fetchLatestReleaseInfo,
  findExtractedBundleRoot,
  replaceDirectoryWithRollback,
  resolveReleaseTarget,
  selectReleaseAsset,
  validateCliBundle,
} from '../update.js'

describe('checkLatestNpmVersion', () => {
  it('reuses the cached npm result for two hours', async () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'mbs-update-check-'))
    const statePath = join(tempDir, 'update-check.json')
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ version: '0.1.59' }),
    })
    const checkedAt = new Date('2026-07-23T08:00:00.000Z')

    try {
      await expect(
        checkLatestNpmVersion({ fetchImpl, ifDue: true, now: checkedAt, statePath }),
      ).resolves.toEqual({
        latest: '0.1.59',
        checkPerformed: true,
      })

      await expect(
        checkLatestNpmVersion({
          fetchImpl,
          ifDue: true,
          now: new Date(checkedAt.getTime() + 2 * 60 * 60 * 1000 - 1),
          statePath,
        }),
      ).resolves.toEqual({
        latest: '0.1.59',
        checkPerformed: false,
      })

      await expect(
        checkLatestNpmVersion({
          fetchImpl,
          ifDue: true,
          now: new Date(checkedAt.getTime() + 2 * 60 * 60 * 1000),
          statePath,
        }),
      ).resolves.toEqual({
        latest: '0.1.59',
        checkPerformed: true,
      })

      expect(fetchImpl).toHaveBeenCalledTimes(2)
    } finally {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })

  it('allows only one npm check when two processes start together', async () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'mbs-update-concurrent-'))
    const statePath = join(tempDir, 'update-check.json')
    let finishFirstCheck: ((value: unknown) => void) | undefined
    const firstResponse = new Promise((resolve) => {
      finishFirstCheck = resolve
    })
    const fetchImpl = vi
      .fn()
      .mockImplementationOnce(async () => firstResponse)
      .mockResolvedValue({
        ok: true,
        status: 200,
        json: async () => ({ version: '0.1.59' }),
      })
    const now = new Date('2026-07-23T08:00:00.000Z')

    try {
      const first = checkLatestNpmVersion({ fetchImpl, ifDue: true, now, statePath })
      await vi.waitFor(() => expect(fetchImpl).toHaveBeenCalledTimes(1))

      await expect(
        checkLatestNpmVersion({ fetchImpl, ifDue: true, now, statePath }),
      ).resolves.toEqual({
        latest: null,
        checkPerformed: false,
      })

      expect(fetchImpl).toHaveBeenCalledTimes(1)
      finishFirstCheck?.({
        ok: true,
        status: 200,
        json: async () => ({ version: '0.1.59' }),
      })
      await expect(first).resolves.toEqual({
        latest: '0.1.59',
        checkPerformed: true,
      })
    } finally {
      finishFirstCheck?.({
        ok: true,
        status: 200,
        json: async () => ({ version: '0.1.59' }),
      })
      rmSync(tempDir, { recursive: true, force: true })
    }
  })

  it('skips the network check when the throttle state cannot be persisted', async () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'mbs-update-readonly-'))
    const blockedDirectory = join(tempDir, 'not-a-directory')
    writeFileSync(blockedDirectory, 'blocked', 'utf8')
    const fetchImpl = vi.fn()

    try {
      await expect(
        checkLatestNpmVersion({
          fetchImpl,
          ifDue: true,
          now: new Date('2026-07-23T08:00:00.000Z'),
          statePath: join(blockedDirectory, 'update-check.json'),
        }),
      ).resolves.toEqual({
        latest: null,
        checkPerformed: false,
      })
      expect(fetchImpl).not.toHaveBeenCalled()
    } finally {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })
})

describe('detectInstalledUpdateSource', () => {
  it('treats node_modules installs as npm-managed', () => {
    expect(
      detectInstalledUpdateSource('C:\\Program Files\\nodejs\\node_global\\node_modules\\@mb-it-org\\cli'),
    ).toBe('npm')
  })

  it('treats standalone bundle installs as release-managed', () => {
    expect(detectInstalledUpdateSource('C:\\Users\\Administrator\\.mbs\\current')).toBe('release')
  })
})

describe('resolveReleaseTarget', () => {
  it('maps win32 x64 to the Windows release asset', () => {
    expect(resolveReleaseTarget('win32', 'x64')).toBe('win32-x64')
  })

  it('maps darwin arm64 to the Apple Silicon release asset', () => {
    expect(resolveReleaseTarget('darwin', 'arm64')).toBe('darwin-arm64')
  })

  it('rejects unsupported targets', () => {
    expect(() => resolveReleaseTarget('linux', 'x64')).toThrow(MBSError)
  })
})

describe('fetchLatestReleaseInfo', () => {
  it('parses the GitHub latest release payload', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        tag_name: 'v0.1.24',
        html_url: 'https://github.com/cj620/mbs-cli/releases/tag/v0.1.24',
        assets: [
          {
            name: 'mbs-v0.1.24-abcdef-win32-x64.tar.gz',
            browser_download_url:
              'https://github.com/cj620/mbs-cli/releases/download/v0.1.24/mbs-v0.1.24-abcdef-win32-x64.tar.gz',
          },
        ],
      }),
      status: 200,
    })

    await expect(fetchLatestReleaseInfo({ fetchImpl })).resolves.toEqual({
      version: '0.1.24',
      tagName: 'v0.1.24',
      releaseUrl: 'https://github.com/cj620/mbs-cli/releases/tag/v0.1.24',
      assets: [
        {
          name: 'mbs-v0.1.24-abcdef-win32-x64.tar.gz',
          browserDownloadUrl:
            'https://github.com/cj620/mbs-cli/releases/download/v0.1.24/mbs-v0.1.24-abcdef-win32-x64.tar.gz',
        },
      ],
    })
  })

  it('adds a bearer token when GITHUB_TOKEN is set', async () => {
    const previous = process.env.GITHUB_TOKEN
    process.env.GITHUB_TOKEN = 'test-token'
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      json: async () => ({
        tag_name: 'v0.1.24',
        html_url: 'https://github.com/cj620/mbs-cli/releases/tag/v0.1.24',
        assets: [],
      }),
      status: 200,
    })

    try {
      await fetchLatestReleaseInfo({ fetchImpl })
      expect(fetchImpl).toHaveBeenCalledWith(
        'https://api.github.com/repos/cj620/mbs-cli/releases/latest',
        expect.objectContaining({
          headers: expect.objectContaining({
            Authorization: 'Bearer test-token',
            'User-Agent': 'mbs-cli',
          }),
        }),
      )
    } finally {
      if (previous === undefined) delete process.env.GITHUB_TOKEN
      else process.env.GITHUB_TOKEN = previous
    }
  })

  it('throws when the GitHub API request fails', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: false,
      status: 500,
      json: async () => ({}),
    })

    await expect(fetchLatestReleaseInfo({ fetchImpl })).rejects.toThrow('Failed to check latest CLI release')
  })
})

describe('fetchLatestNpmVersion', () => {
  it('returns the version from the npm registry response', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({ version: '0.1.47' }),
    })

    await expect(fetchLatestNpmVersion({ fetchImpl })).resolves.toBe('0.1.47')
    expect(fetchImpl).toHaveBeenCalledWith(
      'https://registry.npmjs.org/@mb-it-org/cli/latest',
      expect.objectContaining({
        headers: expect.objectContaining({ 'User-Agent': 'mbs-cli' }),
      }),
    )
  })

  it('throws when the npm registry returns a non-ok status', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: false,
      status: 503,
      json: async () => ({}),
    })

    await expect(fetchLatestNpmVersion({ fetchImpl })).rejects.toThrow(
      'Failed to check latest CLI version from npm',
    )
  })

  it('throws when the response is missing the version field', async () => {
    const fetchImpl = vi.fn().mockResolvedValue({
      ok: true,
      status: 200,
      json: async () => ({}),
    })

    await expect(fetchLatestNpmVersion({ fetchImpl })).rejects.toThrow(
      'Latest CLI version data is invalid',
    )
  })
})

describe('selectReleaseAsset', () => {
  const release = {
    version: '0.1.24',
    tagName: 'v0.1.24',
    releaseUrl: 'https://github.com/cj620/mbs-cli/releases/tag/v0.1.24',
    assets: [
      {
        name: 'mbs-v0.1.24-abcdef-darwin-x64.tar.gz',
        browserDownloadUrl: 'https://example.com/darwin-x64.tar.gz',
      },
      {
        name: 'mbs-v0.1.24-abcdef-win32-x64.tar.gz',
        browserDownloadUrl: 'https://example.com/win32-x64.tar.gz',
      },
    ],
  }

  it('selects the matching platform asset', () => {
    expect(selectReleaseAsset(release, 'win32-x64')).toEqual(release.assets[1])
  })

  it('throws when the release has no matching asset', () => {
    expect(() => selectReleaseAsset(release, 'darwin-arm64')).toThrow(MBSError)
  })
})

describe('bundle preparation', () => {
  it('finds the extracted bundle root', () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'mbs-bundle-'))
    try {
      mkdirSync(join(tempDir, 'mbs'))
      expect(findExtractedBundleRoot(tempDir)).toBe(join(tempDir, 'mbs'))
    } finally {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })

  it('validates a complete CLI bundle', () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'mbs-bundle-'))
    const bundleRoot = join(tempDir, 'mbs')
    try {
      mkdirSync(join(bundleRoot, 'bin'), { recursive: true })
      mkdirSync(join(bundleRoot, 'dist'), { recursive: true })
      writeFileSync(join(bundleRoot, 'package.json'), '{"name":"@mb-it-org/cli"}', 'utf8')
      writeFileSync(join(bundleRoot, 'bin', 'run.js'), '#!/usr/bin/env node', 'utf8')

      expect(() => validateCliBundle(bundleRoot)).not.toThrow()
    } finally {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })
})

describe('replaceDirectoryWithRollback', () => {
  it('swaps the target directory with the prepared bundle', () => {
    const tempDir = mkdtempSync(join(tmpdir(), 'mbs-replace-'))
    const currentDir = join(tempDir, 'current')
    const preparedDir = join(tempDir, 'prepared')

    try {
      mkdirSync(currentDir)
      mkdirSync(preparedDir)
      writeFileSync(join(currentDir, 'version.txt'), 'old', 'utf8')
      writeFileSync(join(preparedDir, 'version.txt'), 'new', 'utf8')

      replaceDirectoryWithRollback(currentDir, preparedDir)

      expect(() => rmSync(preparedDir, { recursive: true })).toThrow()
    } finally {
      rmSync(tempDir, { recursive: true, force: true })
    }
  })

  it('restores the original directory when the swap fails', () => {
    const existing = new Set(['current', 'prepared'])
    const ops = {
      existsSync: (path: string) => existing.has(path),
      renameSync: vi.fn((from: string, to: string) => {
        if (from === 'current' && to.startsWith('current.backup-')) {
          existing.delete('current')
          existing.add(to)
          return
        }

        if (from === 'prepared' && to === 'current') {
          throw Object.assign(new Error('rename failed'), { code: 'EPERM' })
        }

        if (from.startsWith('current.backup-') && to === 'current') {
          existing.delete(from)
          existing.add('current')
          return
        }
      }),
      rmSync: vi.fn((path: string) => {
        existing.delete(path)
      }),
    }

    expect(() => replaceDirectoryWithRollback('current', 'prepared', ops)).toThrow(MBSError)
    expect(ops.renameSync).toHaveBeenCalledTimes(3)
    expect(existing.has('current')).toBe(true)
  })
})
