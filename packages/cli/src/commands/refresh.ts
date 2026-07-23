// packages/cli/src/commands/refresh.ts
import { Command } from '@oclif/core'
import { forceRefreshAuthContext, NotAuthenticatedError } from '@mb-it-org/shared'

export default class Refresh extends Command {
  static description = 'Refresh the authentication cookie using the stored key'

  static examples = ['mbs refresh']

  async run(): Promise<void> {
    await this.parse(Refresh)

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
              message: err.message,
              hint: err.hint,
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
