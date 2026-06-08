import { Command } from '@oclif/core'
import { fetchLatestNpmVersion } from '@mb-it-org/shared'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

async function fetchLatestVersion(): Promise<string | null> {
  try {
    return await fetchLatestNpmVersion()
  } catch {
    return null
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

    const latest = await fetchLatestVersion()

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
            hint: `新版本可用: v${latest}，运行 mbs update 升级`,
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
