import { Command } from '@oclif/core'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

interface GitHubRelease {
  tag_name: string
  html_url: string
}

interface VersionCheckResult {
  latest: string | null
  releaseUrl?: string
}

async function fetchLatestRelease(): Promise<VersionCheckResult> {
  const controller = new AbortController()
  const timeout = setTimeout(() => controller.abort(), 3000)
  try {
    const res = await fetch('https://api.github.com/repos/cj620/mbs-cli/releases/latest', {
      signal: controller.signal,
      headers: { 'User-Agent': 'mbs-cli' },
    })
    clearTimeout(timeout)
    if (!res.ok) return { latest: null }
    const data = (await res.json()) as GitHubRelease
    if (!data.tag_name) return { latest: null }
    return {
      latest: data.tag_name.replace(/^v/, ''),
      releaseUrl: data.html_url,
    }
  } catch {
    clearTimeout(timeout)
    return { latest: null }
  }
}

export default class Version extends Command {
  static description = 'Show CLI version and check for updates'

  static examples = ['mbs version']

  async run(): Promise<void> {
    await this.parse(Version)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pkg = require('../../package.json') as { version?: string }
    const current = pkg.version ?? 'unknown'

    const { latest, releaseUrl } = await fetchLatestRelease()

    if (latest === null) {
      this.log(
        JSON.stringify({
          ok: true,
          data: {
            current,
            latest: null,
            updateAvailable: null,
          },
        }),
      )
      return
    }

    const updateAvailable = latest !== current

    if (updateAvailable) {
      this.log(
        JSON.stringify({
          ok: true,
          data: {
            current,
            latest,
            updateAvailable: true,
            releaseUrl,
            hint: `新版本可用: v${latest}，访问 releaseUrl 下载更新`,
          },
        }),
      )
    } else {
      this.log(
        JSON.stringify({
          ok: true,
          data: {
            current,
            latest,
            updateAvailable: false,
          },
        }),
      )
    }
  }
}
