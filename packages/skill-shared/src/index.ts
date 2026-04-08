// packages/skill-shared/src/index.ts
export type { MBSConfig, ApiSuccessResponse, ApiErrorResponse, MBSResponse } from './types.js'
export { NotAuthenticatedError, MBSError } from './errors.js'
export { getConfig, setConfig, getConfigDir } from './config.js'
export { APIClient } from './http.js'
export { MBSCommand } from './base-command.js'
export { getAuthContext } from './auth/index.js'
export { setKey, getKey, deleteKey } from './auth/key-store.js'
export { clearCookie, readCookie, readUserInfo, readCacheTimestamp } from './auth/cookie-cache.js'
export type { AuthContext, UserInfo } from './auth/context.js'
export {
  LOGIN_URL,
  ERPLOGIN_PATH,
  KEY_PARAM,
  LOGIN_TIMEOUT_MS,
  KEYTAR_SERVICE,
  KEYTAR_ACCOUNT,
  COOKIE_TTL_MS,
} from './auth/constants.js'
