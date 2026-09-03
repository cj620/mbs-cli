// packages/skill-shared/src/index.ts
export type { MBSConfig, ApiSuccessResponse, ApiErrorResponse, MBSResponse } from './types.js'
export { NotAuthenticatedError, MBSError } from './errors.js'
export type { BackendResponseSnapshot } from './errors.js'
export { getConfig, setConfig, getConfigDir } from './config.js'
export { APIClient } from './http.js'
export { encodeRequestBody, requestBodyFieldsFromSchema } from './request-body.js'
export type {
  EncodedRequestBody,
  EncodeRequestBodyOptions,
  FormSerializationStyle,
  MultipartFilenamePolicy,
  RequestBodyDefinition,
  RequestBodyFieldDefinition,
  RequestBodyMode,
  RequestBodyValueKind,
  RequestContentHeaders,
} from './request-body.js'
export { withCliPathPrefix } from './url.js'
export { getWhoamiStatus } from './whoami.js'
export type { WhoamiStatus } from './whoami.js'
export { MBSCommand } from './base-command.js'
export {
  detectInstalledUpdateSource,
  fetchLatestNpmVersion,
  fetchLatestReleaseInfo,
  findExtractedBundleRoot,
  replaceDirectoryWithRollback,
  resolveReleaseTarget,
  selectReleaseAsset,
  validateCliBundle,
} from './update.js'
export { forceRefreshAuthContext, getAuthContext, saveAuthContext } from './auth/index.js'
export { deleteKey } from './auth/key-store.js'
export {
  clearCookie,
  readCacheTimestamp,
  readCookie,
  readManagedLongToken,
  readRefreshExpiresAt,
  readUserInfo,
} from './auth/cookie-cache.js'
export type { AuthContext, RefreshedAuthContext, UserInfo } from './auth/context.js'
export {
  COMPAT_SESSION_EXCHANGE_PATH,
  exchangeCompatibilitySession,
  fetchCurrentUser,
  loginWithManagedLongToken,
  loginWithPassword,
  validateManagedTokenLoginApiUrl,
  validatePasswordLoginApiUrl,
} from './auth/session-login.js'
export type { PasswordLoginCredentials } from './auth/session-login.js'
export {
  AUTH_REFRESH_COOKIE_NAME,
  createBrowserAuthCookies,
  createSessionCookie,
  extractManagedSessionCookie,
  normalizeSessionCookie,
  SESSION_COOKIE_NAME,
} from './auth/session-cookie.js'
export {
  createManagedLongTokenAuthorization,
  MANAGED_LONG_TOKEN_SCHEME,
  normalizeManagedLongToken,
} from './auth/managed-token.js'
export {
  LOGIN_PATH,
  LOGIN_TIMEOUT_MS,
  KEYTAR_SERVICE,
  KEYTAR_ACCOUNT,
  COOKIE_TTL_MS,
} from './auth/constants.js'
