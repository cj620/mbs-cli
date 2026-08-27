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
export { getAuthContext, forceRefreshAuthContext } from './auth/index.js'
export { setKey, getKey, deleteKey } from './auth/key-store.js'
export { clearCookie, readCookie, readUserInfo, readCacheTimestamp } from './auth/cookie-cache.js'
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
