import { Command, Flags } from '@oclif/core'
import {
  MBSError,
  detectInstalledUpdateSource,
  fetchLatestReleaseInfo,
  findExtractedBundleRoot,
  replaceDirectoryWithRollback,
  resolveReleaseTarget,
  selectReleaseAsset,
  validateCliBundle,
} from '@mbs/shared'
import { createWriteStream, mkdtempSync, mkdirSync, readFileSync, rmSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { pipeline } from 'node:stream/promises'
import { Readable } from 'node:stream'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const require = createRequire(import.meta.url)
const execFileAsync = promisify(execFile)

type UpdateSource = 'auto' | 'npm' | 'release'
type EffectiveUpdateSource = Exclude<UpdateSource, 'auto'>

function getCurrentVersion(): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pkg = require('../../package.json') as { version?: string }
  return pkg.version ?? 'unknown'
}

function getCurrentInstallDir(): string {
  return resolve(dirname(fileURLToPath(import.meta.url)), '../..')
}

function readVersionFromInstallDir(installDir: string): string {
  const pkg = JSON.parse(readFileSync(join(installDir, 'package.json'), 'utf8')) as { version?: string }
  return pkg.version ?? 'unknown'
}

function getNpmExecutable(): string {
  return process.platform === 'win32' ? 'npm.cmd' : 'npm'
}

function resolveUpdateSource(source: UpdateSource, installDir: string): EffectiveUpdateSource {
  return source === 'auto' ? detectInstalledUpdateSource(installDir) : source
}

async function downloadFile(url: string, destination: string): Promise<void> {
  const headers: Record<string, string> = { 'User-Agent': 'mbs-cli' }
  if (process.env.GITHUB_TOKEN) headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`

  const response = await fetch(url, { headers })

  if (!response.ok || !response.body) {
    throw new MBSError(
      'Failed to download the latest CLI bundle',
      'api',
      `GitHub asset download returned status ${response.status}`,
    )
  }

  await pipeline(Readable.fromWeb(response.body), createWriteStream(destination))
}

async function extractArchive(archivePath: string, destination: string): Promise<void> {
  try {
    await execFileAsync('tar', ['-xzf', archivePath, '-C', destination])
  } catch {
    throw new MBSError(
      'Failed to extract the latest CLI bundle',
      'api',
      'The downloaded release asset could not be extracted with tar',
    )
  }
}

async function fetchLatestNpmVersion(): Promise<string> {
  try {
    const { stdout } = await execFileAsync(getNpmExecutable(), ['view', '@mbs/cli', 'version', '--json'])
    const parsed = JSON.parse(stdout.trim()) as string
    if (!parsed) {
      throw new Error('missing version')
    }

    return parsed
  } catch {
    throw new MBSError(
      'Failed to check latest CLI version from npm',
      'api',
      'Unable to read @mbs/cli latest version from npm registry',
    )
  }
}

async function updateViaNpm(installDir: string): Promise<string> {
  try {
    await execFileAsync(getNpmExecutable(), ['install', '-g', '@mbs/cli@latest'])
    return readVersionFromInstallDir(installDir)
  } catch (error) {
    const code = typeof error === 'object' && error !== null && 'code' in error ? String(error.code) : ''
    const hint =
      code === 'EPERM' || code === 'EACCES' ?
        'Run the command with permission to modify the global npm installation'
      : 'npm install -g @mbs/cli@latest failed'

    throw new MBSError('Failed to update CLI via npm', 'api', hint)
  }
}

async function updateViaRelease(installDir: string): Promise<string> {
  const release = await fetchLatestReleaseInfo()
  const target = resolveReleaseTarget()
  const asset = selectReleaseAsset(release, target)
  const installParentDir = dirname(installDir)
  const stagingDir = mkdtempSync(join(installParentDir, '.mbs-update-'))
  const archivePath = join(stagingDir, 'release.tar.gz')
  const extractDir = join(stagingDir, 'extract')

  try {
    mkdirSync(extractDir, { recursive: true })
    await downloadFile(asset.browserDownloadUrl, archivePath)
    await extractArchive(archivePath, extractDir)

    const preparedDir = findExtractedBundleRoot(extractDir)
    validateCliBundle(preparedDir)
    replaceDirectoryWithRollback(installDir, preparedDir)
    return release.version
  } finally {
    rmSync(stagingDir, { recursive: true, force: true })
  }
}

export default class Update extends Command {
  static description = 'Update the CLI via npm or GitHub release bundles'

  static examples = ['mbs update', 'mbs update --source npm', 'mbs update --source release']

  static flags = {
    source: Flags.string({
      description: 'Update source: auto chooses npm for global npm installs, otherwise release',
      options: ['auto', 'npm', 'release'],
      default: 'auto',
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Update)
    const currentVersion = getCurrentVersion()
    const installDir = getCurrentInstallDir()
    const source = resolveUpdateSource(flags.source as UpdateSource, installDir)

    try {
      const latestVersion =
        source === 'npm' ? await fetchLatestNpmVersion() : (await fetchLatestReleaseInfo()).version

      if (latestVersion === currentVersion) {
        this.log(
          JSON.stringify({
            ok: true,
            data: {
              previousVersion: currentVersion,
              currentVersion,
              updated: false,
              source,
            },
          }),
        )
        return
      }

      const nextVersion = source === 'npm' ? await updateViaNpm(installDir) : await updateViaRelease(installDir)

      this.log(
        JSON.stringify({
          ok: true,
          data: {
            previousVersion: currentVersion,
            currentVersion: nextVersion,
            updated: true,
            source,
          },
        }),
      )
    } catch (error) {
      if (error instanceof MBSError) {
        this.log(
          JSON.stringify({
            ok: false,
            error: {
              type: error.type,
              message: error.message,
              hint: error.hint,
            },
          }),
        )
        this.exit(1)
        return
      }

      throw error
    }
  }
}
