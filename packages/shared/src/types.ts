// packages/skill-shared/src/types.ts
export interface MBSConfig {
  apiUrl: string
}

export interface ApiSuccessResponse<T = unknown> {
  ok: true
  data: T
  meta?: Record<string, unknown>
}

export interface ApiErrorResponse {
  ok: false
  error: {
    type: 'auth' | 'validation' | 'api'
    message: string
    hint: string
  }
}

export type MBSResponse<T = unknown> = ApiSuccessResponse<T> | ApiErrorResponse

/** 服务端 HTTP body 原始格式 */
export interface RawApiResponse<T = unknown> {
  code: number
  data: T
  msg?: string
}
