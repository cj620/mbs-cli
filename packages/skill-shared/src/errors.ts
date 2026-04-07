// packages/skill-shared/src/errors.ts
export class NotAuthenticatedError extends Error {
  readonly type = 'auth' as const
  readonly hint = 'Run mbs login to authenticate'

  constructor() {
    super('Not authenticated')
    this.name = 'NotAuthenticatedError'
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
