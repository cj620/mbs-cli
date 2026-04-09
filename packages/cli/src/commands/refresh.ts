// packages/cli/src/commands/refresh.ts
import { Command } from '@oclif/core'
import { getKey, forceRefreshAuthContext, NotAuthenticatedError } from '@mbs/shared'

export default class Refresh extends Command {
  static description = 'Refresh the authentication cookie using the stored key'

  static examples = ['mbs refresh']

  async run(): Promise<void> {
    await this.parse(Refresh)

    const key = await getKey()
    if (!key) {
      this.log(
        JSON.stringify({
          ok: false,
          error: {
            type: 'auth',
            message: 'No key found',
            hint: 'Run mbs login to authenticate first',
          },
        }),
      )
      this.exit(2)
      return
    }

    try {
      const { userInfo } = await forceRefreshAuthContext()
      this.log(
        JSON.stringify({
          ok: true,
          data: {
            message: 'Cookie refreshed successfully',
            user: userInfo,
          },
        }),
      )
    } catch (err) {
      if (err instanceof NotAuthenticatedError) {
        this.log(
          JSON.stringify({
            ok: false,
            error: {
              type: 'auth',
              message: 'Authentication failed',
              hint: 'Run mbs login to authenticate',
            },
          }),
        )
        this.exit(2)
        return
      }
      throw err
    }
  }
}
