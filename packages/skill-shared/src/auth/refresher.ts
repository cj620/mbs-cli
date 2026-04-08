// packages/skill-shared/src/auth/refresher.ts
import axios from 'axios'
import { NotAuthenticatedError } from '../errors.js'
import { ERPLOGIN_PATH } from './constants.js'
import type { UserInfo } from './context.js'

interface ErpLoginResponse {
  code: number
  success: boolean
  obj: UserInfo
}

export async function refreshCookieAndUserInfo(apiUrl: string, key: string | null): Promise<{ cookie: string; userInfo: UserInfo }> {
  if (!key) throw new NotAuthenticatedError()

  const response = await axios.post<ErpLoginResponse>(
    `${apiUrl}${ERPLOGIN_PATH}`,
    null,
    { params: { key } },
  )

  const setCookieHeader = response.headers['set-cookie']
  if (!setCookieHeader || setCookieHeader.length === 0) {
    throw new NotAuthenticatedError()
  }

  if (!response.data.success || !response.data.obj) {
    throw new NotAuthenticatedError()
  }

  // Return the full first Set-Cookie value (e.g. "SESSION=abc; Path=/")
  return {
    cookie: setCookieHeader[0],
    userInfo: response.data.obj,
  }
}
