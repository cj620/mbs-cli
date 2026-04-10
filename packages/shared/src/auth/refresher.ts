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

  const url = `${apiUrl}${ERPLOGIN_PATH}`
  const res = await axios.post<ErpLoginResponse>(url, null, { params: { key } })

  const setCookieHeader: string[] = res.headers['set-cookie'] ?? []
  if (setCookieHeader.length === 0) throw new NotAuthenticatedError()
  if (!res.data?.success || !res.data?.obj) throw new NotAuthenticatedError()

  return {
    cookie: setCookieHeader.join('; '),
    userInfo: res.data.obj,
  }
}
