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

  let url = `${apiUrl}${ERPLOGIN_PATH}`
  const allCookies: string[] = []

  for (let hop = 0; hop <= 10; hop++) {
    const res = await axios.post<ErpLoginResponse>(url, null, {
      params: hop === 0 ? { key } : undefined,
      maxRedirects: 0,
      validateStatus: s => s < 400 || (s >= 300 && s < 400),
      headers: allCookies.length ? { Cookie: allCookies.join('; ') } : {},
    })

    // Accumulate cookies from every hop
    const setCookieHeader: string[] = res.headers['set-cookie'] ?? []
    for (const c of setCookieHeader) {
      allCookies.push(c.split(';')[0].trim())
    }

    if (res.status >= 300 && res.status < 400) {
      const location = res.headers['location'] as string | undefined
      if (!location) throw new NotAuthenticatedError()
      url = location.startsWith('http') ? location : `${apiUrl}${location}`
      continue
    }

    // Final response
    if (!res.data?.success || !res.data?.obj) throw new NotAuthenticatedError()
    if (allCookies.length === 0) throw new NotAuthenticatedError()

    return {
      cookie: allCookies.join('; '),
      userInfo: res.data.obj,
    }
  }

  throw new NotAuthenticatedError()
}
