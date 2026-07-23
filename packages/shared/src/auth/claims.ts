import { getConfigDir } from '../config.js'
import { acquireFileClaim } from '../file-claim.js'

export function acquireLoginClaim(): (() => void) | null {
  return acquireFileClaim({
    directory: getConfigDir(),
    prefix: 'auth-login',
  })
}
