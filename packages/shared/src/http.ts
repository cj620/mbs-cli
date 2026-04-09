// packages/skill-shared/src/http.ts
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'
import { NotAuthenticatedError, PermissionError, MBSError } from './errors.js'
import type { RawApiResponse } from './types.js'

export interface GetOptions {
  pathPrefix?: string
  params?: AxiosRequestConfig['params']
}

export interface PostOptions {
  pathPrefix?: string
}

/**
 * 错误码映射表。新增错误码在此追加一行即可。
 * key: 服务端 code 值
 * value: 工厂函数，返回对应的 Error 实例
 */
const API_CODE_HANDLERS: Record<number, () => Error> = {
  601: () => new NotAuthenticatedError(),
  109: () => new PermissionError(),
  403: () => new PermissionError(),
}

export class APIClient {
  private readonly instance: AxiosInstance

  constructor(baseURL: string, cookie: string) {
    this.instance = axios.create({
      baseURL,
      headers: { Cookie: cookie },
    })

    this.instance.interceptors.response.use((response) => {
      const raw = response.data as RawApiResponse
      if (typeof raw?.code !== 'number') return response // 非标准端点，直接放行
      if (raw.code === 0) return response // 成功，放行

      const handler = API_CODE_HANDLERS[raw.code]
      if (handler) throw handler()

      throw new MBSError(raw.msg ?? `API error (code: ${raw.code})`)
    })
  }

  async get<T = unknown>(path: string, options?: GetOptions): Promise<T> {
    const { pathPrefix, ...config } = options ?? {}
    const url = pathPrefix ? pathPrefix + path : path
    const response = await this.instance.get<T>(url, config)
    return response.data
  }

  async post<T = unknown>(path: string, body?: unknown, options?: PostOptions): Promise<T> {
    const url = options?.pathPrefix ? options.pathPrefix + path : path
    const response = await this.instance.post<T>(url, body)
    return response.data
  }

  async request<T = unknown>(method: string, path: string, options?: { params?: Record<string, unknown>; body?: unknown }): Promise<T> {
    const response = await this.instance.request<T>({
      method,
      url: path,
      params: options?.params,
      data: options?.body,
    })
    return response.data
  }
}
