// packages/cli/src/commands/whoami.ts
import { Command } from '@oclif/core'
import { getKey, readCookie, readUserInfo, readCacheTimestamp } from '@mbs/shared'

export default class Whoami extends Command {
  static description = 'Show current authentication status'

  static examples = ['mbs whoami']

  async run(): Promise<void> {
    await this.parse(Whoami)
    const key = await getKey()
    const cookie = readCookie()
    const userInfo = readUserInfo()

    if (!key) {
      this.log(
        JSON.stringify({
          ok: false,
          error: {
            type: 'auth',
            message: 'Not logged in',
            hint: 'Run mbs login to authenticate',
          },
        }),
      )
      return
    }

    this.log(
      JSON.stringify({
        ok: true,
        data: {
          keyPreview: `${key.slice(0, 8)}...`,
          sessionActive: cookie !== null,
          user: userInfo,
          updatedAt: (() => {
          const ts = readCacheTimestamp()
          return ts ? new Date(ts).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }) : null
        })(),
        },
      }),
    )
  }
}
