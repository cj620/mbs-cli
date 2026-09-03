import { Command } from '@oclif/core'
import { forceRefreshAuthContext, MBSError, NotAuthenticatedError } from '@mb-it-org/shared'

export default class Refresh extends Command {
  static description = 'Refresh Access Token and compatible SESSION using the cached long credential'

  static examples = ['mbs refresh']

  /**
   * Renews short Access/SESSION state using the cached long credential.
   *
   * <p>Login Refresh Cookie authentication rotates and persists its replacement;
   * management LongToken authentication retains the same credential. No
   * credential is printed. The returned Access Token remains in process memory
   * until this command exits, while compatible SESSION state is persisted.</p>
   */
  async run(): Promise<void> {
    await this.parse(Refresh)

    try {
      await forceRefreshAuthContext()
      this.log(JSON.stringify({
        ok: true,
        data: { message: 'Authentication refreshed successfully' },
      }))
    } catch (error) {
      if (error instanceof NotAuthenticatedError) {
        this.log(JSON.stringify({
          ok: false,
          error: {
            type: 'auth',
            message: 'Authentication refresh failed',
            hint: 'Run mbs login to authenticate again',
          },
        }))
        this.exit(2)
        return
      }
      if (error instanceof MBSError) {
        this.log(JSON.stringify({
          ok: false,
          error: { type: error.type, message: error.message, hint: error.hint },
        }))
        this.exit(1)
        return
      }
      throw error
    }
  }
}
