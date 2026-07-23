import { Command, Flags } from '@oclif/core'
import { checkLatestNpmVersion, isVersionNewer } from '@mb-it-org/shared'
import { createRequire } from 'node:module'

const require = createRequire(import.meta.url)

export default class Version extends Command {
  static description = 'Show CLI version and check for updates'

  static examples = ['mbs version', 'mbs version --if-due']

  static flags = {
    'if-due': Flags.boolean({
      description: 'Check npm at most once every two hours and signal when user confirmation is needed',
      default: false,
    }),
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Version)

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const pkg = require('../../package.json') as { version?: string }
    const current = pkg.version ?? 'unknown'

    const { latest, checkPerformed } = await checkLatestNpmVersion({
      ifDue: flags['if-due'],
    })
    const checkMetadata = flags['if-due']
      ? {
          checkPerformed,
          notificationDue: false,
        }
      : {}

    if (latest === null) {
      this.log(
        JSON.stringify({
          ok: true,
          data: {
            current,
            latest: null,
            updateAvailable: null,
            ...checkMetadata,
          },
        }),
      )
      return
    }

    const updateAvailable = isVersionNewer(latest, current)

    if (updateAvailable) {
      this.log(
        JSON.stringify({
          ok: true,
          data: {
            current,
            latest,
            updateAvailable: true,
            ...(flags['if-due']
              ? {
                  checkPerformed,
                  notificationDue: checkPerformed,
                  hint: `检测到新版本 v${latest}，运行 mbs update 前必须先征得用户确认`,
                }
              : {
                  hint: `新版本可用: v${latest}，运行 mbs update 升级`,
                }),
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
            ...checkMetadata,
          },
        }),
      )
    }
  }
}
