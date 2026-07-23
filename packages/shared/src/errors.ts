// packages/skill-shared/src/errors.ts
export class NotAuthenticatedError extends Error {
  readonly type = 'auth' as const
  readonly hint = 'Run mbs login to authenticate'

  constructor() {
    super('Not authenticated')
    this.name = 'NotAuthenticatedError'
  }
}

export class ReauthenticationRequiredError extends NotAuthenticatedError {
  readonly reason: 'idle_timeout' | 'absolute_timeout' | 'revoked'

  constructor(reason: 'idle_timeout' | 'absolute_timeout' | 'revoked') {
    super()
    this.reason = reason
    this.message = reason === 'idle_timeout'
      ? 'Authentication expired after inactivity'
      : reason === 'absolute_timeout'
        ? 'Authentication expired after 24 hours'
        : 'Authentication was revoked'
    this.name = 'ReauthenticationRequiredError'
  }
}

export class MBSError extends Error {
  constructor(
    message: string,
    readonly type: 'validation' | 'api' = 'api',
    readonly hint = '',
  ) {
    super(message)
    this.name = 'MBSError'
  }
}

export class PermissionError extends Error {
  readonly type = 'permission' as const
  readonly hint = 'You do not have permission to perform this action'

  constructor() {
    super('Permission denied')
    this.name = 'PermissionError'
  }
}
