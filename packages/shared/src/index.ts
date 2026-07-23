// packages/skill-shared/src/index.ts
export type { MBSConfig, ApiSuccessResponse, ApiErrorResponse, MBSResponse } from './types.js'
export { NotAuthenticatedError, MBSError, ReauthenticationRequiredError } from './errors.js'
export { getConfig, setConfig, getConfigDir } from './config.js'
export { APIClient } from './http.js'
export { withCliPathPrefix } from './url.js'
export { getWhoamiStatus } from './whoami.js'
export type { WhoamiStatus } from './whoami.js'
export { MBSCommand } from './base-command.js'
export {
  beginCliUpdate,
  findOtherActiveCliProcesses,
  registerCliProcess,
} from './cli-process.js'
export type { ActiveCliProcess } from './cli-process.js'
export {
  checkLatestNpmVersion,
  detectInstalledUpdateSource,
  fetchLatestNpmVersion,
  fetchLatestReleaseInfo,
  findExtractedBundleRoot,
  isVersionNewer,
  replaceDirectoryWithRollback,
  resolveReleaseTarget,
  selectReleaseAsset,
  validateCliBundle,
} from './update.js'
export type { LatestVersionCheckResult } from './update.js'
export {
  establishAuthSession,
  forceRefreshAuthContext,
  getAuthContext,
  getRequestAuthContext,
  logoutAuthSession,
} from './auth/index.js'
export { setKey, getKey, deleteKey } from './auth/key-store.js'
export { acquireLoginClaim } from './auth/claims.js'
export {
  clearCookie,
  readAuthSession,
  readCacheTimestamp,
  readCookie,
  readUserInfo,
} from './auth/cookie-cache.js'
export type { AuthContext, UserInfo } from './auth/context.js'
export {
  LOGIN_PATH,
  LOGIN_PATH_PASSWORD,
  ERPLOGIN_PATH,
  KEY_PARAM,
  LOGIN_TIMEOUT_MS,
  KEYTAR_SERVICE,
  KEYTAR_ACCOUNT,
  COOKIE_TTL_MS,
} from './auth/constants.js'
export {
  ABSOLUTE_SESSION_TIMEOUT_MS,
  IDLE_SESSION_TIMEOUT_MS,
} from './auth/session-policy.js'
export type { SessionExpirationReason } from './auth/session-policy.js'
