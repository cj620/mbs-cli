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

export class PermissionError extends Error {
  readonly type = 'permission' as const
  readonly hint = 'You do not have permission to perform this action'

  constructor() {
    super('Permission denied')
    this.name = 'PermissionError'
  }
}
