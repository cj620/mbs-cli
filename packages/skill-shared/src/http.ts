// packages/skill-shared/src/http.ts
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

export interface GetOptions {
  pathPrefix?: string
  params?: AxiosRequestConfig['params']
}

export interface PostOptions {
  pathPrefix?: string
}

export class APIClient {
  private readonly instance: AxiosInstance

  constructor(baseURL: string, cookie: string) {
    this.instance = axios.create({
      baseURL,
      headers: { Cookie: cookie },
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
