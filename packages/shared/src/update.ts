import { existsSync, renameSync, rmSync } from 'node:fs'
import { join } from 'node:path'
import { MBSError } from './errors.js'

export interface GitHubReleaseAsset {
  name: string
  browserDownloadUrl: string
}

export interface LatestReleaseInfo {
  version: string
  tagName: string
  releaseUrl: string
  assets: GitHubReleaseAsset[]
}

export type InstalledUpdateSource = 'npm' | 'release'

interface GitHubReleaseResponse {
  tag_name?: string
  html_url?: string
  assets?: Array<{
    name?: string
    browser_download_url?: string
  }>
}

interface DirectoryOps {
  existsSync(path: string): boolean
  renameSync(oldPath: string, newPath: string): void
  rmSync(path: string, options: { force?: boolean; recursive?: boolean }): void
}

export type ReleaseTarget = 'win32-x64' | 'darwin-x64' | 'darwin-arm64'

export function detectInstalledUpdateSource(installDir: string): InstalledUpdateSource {
  const normalized = installDir.replace(/\\/g, '/').toLowerCase()
  return normalized.includes('/node_modules/@mbs/cli') ? 'npm' : 'release'
}

export function resolveReleaseTarget(
  platform: NodeJS.Platform = process.platform,
  arch: string = process.arch,
): ReleaseTarget {
  if (platform === 'win32' && arch === 'x64') return 'win32-x64'
  if (platform === 'darwin' && arch === 'x64') return 'darwin-x64'
  if (platform === 'darwin' && arch === 'arm64') return 'darwin-arm64'

  throw new MBSError(
    `Unsupported platform: ${platform}-${arch}`,
    'validation',
    'CLI auto-update currently supports win32-x64, darwin-x64, and darwin-arm64 only',
  )
}

export async function fetchLatestReleaseInfo({
  fetchImpl = fetch,
  repo = 'cj620/mbs-cli',
  timeoutMs = 3000,
}: {
  fetchImpl?: typeof fetch
  repo?: string
  timeoutMs?: number
} = {}): Promise<LatestReleaseInfo> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), timeoutMs)
  const headers: Record<string, string> = { 'User-Agent': 'mbs-cli' }
  if (process.env.GITHUB_TOKEN) {
    headers.Authorization = `Bearer ${process.env.GITHUB_TOKEN}`
  }

  try {
    const response = await fetchImpl(`https://api.github.com/repos/${repo}/releases/latest`, {
      signal: controller.signal,
      headers,
    })

    if (!response.ok) {
      throw new MBSError(
        'Failed to check latest CLI release',
        'api',
        `GitHub API returned status ${response.status}`,
      )
    }

    const data = (await response.json()) as GitHubReleaseResponse
    if (!data.tag_name || !data.html_url) {
      throw new MBSError(
        'Latest CLI release data is invalid',
        'api',
        'GitHub release metadata is missing tag_name or html_url',
      )
    }

    return {
      version: data.tag_name.replace(/^v/, ''),
      tagName: data.tag_name,
      releaseUrl: data.html_url,
      assets: (data.assets ?? [])
        .filter((asset): asset is { name: string; browser_download_url: string } =>
          Boolean(asset.name && asset.browser_download_url),
        )
        .map((asset) => ({
          name: asset.name,
          browserDownloadUrl: asset.browser_download_url,
        })),
    }
  } catch (error) {
    if (error instanceof MBSError) throw error
    throw new MBSError(
      'Failed to check latest CLI release',
      'api',
      'Unable to reach GitHub Releases API',
    )
  } finally {
    clearTimeout(timeout)
  }
}

export function selectReleaseAsset(
  release: LatestReleaseInfo,
  target: ReleaseTarget,
): GitHubReleaseAsset {
  const asset = release.assets.find((candidate) => candidate.name.endsWith(`-${target}.tar.gz`))
  if (!asset) {
    throw new MBSError(
      `No release asset available for ${target}`,
      'validation',
      `Release ${release.tagName} does not include a ${target} installer`,
    )
  }

  return asset
}

export function findExtractedBundleRoot(extractDir: string): string {
  const bundleRoot = join(extractDir, 'mbs')
  if (!existsSync(bundleRoot)) {
    throw new MBSError(
      'Downloaded CLI bundle is invalid',
      'api',
      'Expected the archive to contain a top-level mbs directory',
    )
  }

  return bundleRoot
}

export function validateCliBundle(bundleRoot: string): void {
  const requiredPaths = ['package.json', 'bin/run.js', 'dist']
  for (const relativePath of requiredPaths) {
    if (!existsSync(join(bundleRoot, relativePath))) {
      throw new MBSError(
        'Downloaded CLI bundle is incomplete',
        'api',
        `Missing required file: ${relativePath}`,
      )
    }
  }
}

export function replaceDirectoryWithRollback(
  targetDir: string,
  preparedDir: string,
  ops: DirectoryOps = { existsSync, renameSync, rmSync },
): void {
  const backupDir = `${targetDir}.backup-${Date.now()}`
  ops.renameSync(targetDir, backupDir)

  try {
    ops.renameSync(preparedDir, targetDir)
    ops.rmSync(backupDir, { recursive: true, force: true })
  } catch (error) {
    if (!ops.existsSync(targetDir) && ops.existsSync(backupDir)) {
      ops.renameSync(backupDir, targetDir)
    }

    const code = typeof error === 'object' && error !== null && 'code' in error ? String(error.code) : ''
    const hint =
      code === 'EPERM' || code === 'EACCES' ?
        'Run the command with permission to modify the global CLI installation directory'
      : 'The previous CLI version was restored after the failed update'

    throw new MBSError('Failed to replace the installed CLI bundle', 'api', hint)
  }
}
