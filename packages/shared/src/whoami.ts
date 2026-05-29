import { readCacheTimestamp, readCookie, readUserInfo } from './auth/cookie-cache.js'
import { getKey } from './auth/key-store.js'

export type WhoamiStatus =
  | {
      ok: true
      data: {
        keyPreview: string
        sessionActive: boolean
        user: ReturnType<typeof readUserInfo>
        updatedAt: string | null
      }
    }
  | {
      ok: false
      error: {
        type: 'auth'
        message: string
        hint: string
      }
    }

export async function getWhoamiStatus(): Promise<WhoamiStatus> {
  const key = await getKey()
  const cookie = readCookie()
  const userInfo = readUserInfo()

  if (!key) {
    return {
      ok: false,
      error: {
        type: 'auth',
        message: 'Not logged in',
        hint: 'Run mbs login to authenticate',
      },
    }
  }

  const ts = readCacheTimestamp()
  return {
    ok: true,
    data: {
      keyPreview: `${key.slice(0, 8)}...`,
      sessionActive: cookie !== null,
      user: userInfo,
      updatedAt: ts ? new Date(ts).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }) : null,
    },
  }
}
