// packages/skill-shared/src/auth/refresher.ts
import axios from 'axios'
import { NotAuthenticatedError } from '../errors.js'
import { ERPLOGIN_PATH } from './constants.js'

export async function refreshCookie(apiUrl: string, key: string | null): Promise<string> {
  if (!key) throw new NotAuthenticatedError()

  const response = await axios.post<null>(
    `${apiUrl}${ERPLOGIN_PATH}`,
    null,
    { params: { key } },
  )

  const setCookieHeader = response.headers['set-cookie']
  if (!setCookieHeader || setCookieHeader.length === 0) {
    throw new NotAuthenticatedError()
  }

  // Return the full first Set-Cookie value (e.g. "SESSION=abc; Path=/")
  return setCookieHeader[0]
}
