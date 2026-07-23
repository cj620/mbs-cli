import { readAuthSession, readCacheTimestamp, readCookie, readUserInfo } from './auth/cookie-cache.js'
import { getKey } from './auth/key-store.js'
import { evaluateSession } from './auth/session-policy.js'

export type WhoamiStatus =
  | {
      ok: true
      data: {
        keyPreview: string
        sessionActive: boolean
        user: ReturnType<typeof readUserInfo>
        updatedAt: string | null
        verifiedAt: string | null
        idleExpiresAt: string | null
        absoluteExpiresAt: string | null
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
  const session = readAuthSession()

  if (session?.expirationReason) {
    return {
      ok: false,
      error: {
        type: 'auth',
        message: session.expirationReason === 'idle_timeout'
          ? 'Authentication expired after inactivity'
          : 'Authentication expired after 24 hours',
        hint: 'Run mbs login to authenticate',
      },
    }
  }

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
  const evaluation = session ? evaluateSession(session) : null
  if (evaluation && !evaluation.active) {
    return {
      ok: false,
      error: {
        type: 'auth',
        message: evaluation.reason === 'idle_timeout'
          ? 'Authentication expired after inactivity'
          : 'Authentication expired after 24 hours',
        hint: 'Run mbs login to authenticate',
      },
    }
  }

  return {
    ok: true,
    data: {
      keyPreview: `${key.slice(0, 8)}...`,
      sessionActive: cookie !== null && evaluation?.active === true,
      user: userInfo,
      updatedAt: ts ? new Date(ts).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }) : null,
      verifiedAt: session ? new Date(session.verifiedAt).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' }) : null,
      idleExpiresAt: evaluation?.active
        ? new Date(evaluation.idleExpiresAt).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
        : null,
      absoluteExpiresAt: evaluation?.active
        ? new Date(evaluation.absoluteExpiresAt).toLocaleString('zh-CN', { timeZone: 'Asia/Shanghai' })
        : null,
    },
  }
}
