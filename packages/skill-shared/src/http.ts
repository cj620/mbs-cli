// packages/skill-shared/src/http.ts
import axios, { type AxiosInstance, type AxiosRequestConfig } from 'axios'

export class APIClient {
  private readonly instance: AxiosInstance

  constructor(baseURL: string, cookie: string) {
    this.instance = axios.create({
      baseURL,
      headers: { Cookie: cookie },
    })
  }

  async get<T = unknown>(path: string, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.get<T>(path, config)
    return response.data
  }

  async post<T = unknown>(path: string, body?: unknown, config?: AxiosRequestConfig): Promise<T> {
    const response = await this.instance.post<T>(path, body, config)
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
