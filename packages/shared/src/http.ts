/*
 * @Author: Henry
 * @Date: 2026-04-09 16:12:52
 */
// packages/skill-shared/src/http.ts
import axios, { type AxiosInstance, type AxiosRequestConfig } from "axios";
import type { Readable } from "node:stream";
import { NotAuthenticatedError, PermissionError, MBSError } from "./errors.js";
import type { RawApiResponse } from "./types.js";

export interface GetOptions {
  pathPrefix?: string;
  params?: AxiosRequestConfig["params"];
}

export interface PostOptions {
  pathPrefix?: string;
  params?: AxiosRequestConfig["params"];
  signal?: AxiosRequestConfig["signal"];
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
  401: () => new NotAuthenticatedError(),
  500: () => new NotAuthenticatedError(),
};

export class APIClient {
  private readonly instance: AxiosInstance;
  private readonly refreshAuth: () => Promise<string>;

  /**
   * Creates an authenticated API transport with stable CLI headers.
   *
   * <p>The saved CLI Cookie and stable client type are attached to every
   * request. Authentication retries are delegated to the supplied callback.</p>
   *
   * @param baseURL Base URL used for relative API request paths.
   * @param cookie Cookie header value obtained from the CLI authentication context.
   * @param refreshAuth Callback that returns a replacement Cookie after authentication failure.
   */
  constructor(
    baseURL: string,
    cookie: string,
    refreshAuth: () => Promise<string>,
  ) {
    this.refreshAuth = refreshAuth;
    this.instance = axios.create({
      baseURL,
      headers: {
        Cookie: cookie,
        "client-type": "cli",
      },
    });

    this.instance.interceptors.response.use((response) => {
      const raw = response.data as RawApiResponse;
      if (typeof raw?.code !== "number") return response; // 非标准端点，直接放行
      if (raw.code === 0 || raw.code === 200) return response; // 成功，放行

      const handler = API_CODE_HANDLERS[raw.code];
      if (handler) throw handler();

      throw new MBSError(raw.msg ?? `API error (code: ${raw.code})`);
    });
  }

  private updateCookie(cookie: string): void {
    this.instance.defaults.headers["Cookie"] = cookie;
  }

  private async withRetry<T>(request: () => Promise<T>): Promise<T> {
    try {
      return await request();
    } catch (err) {
      if (err instanceof NotAuthenticatedError) {
        const newCookie = await this.refreshAuth();
        this.updateCookie(newCookie);
        return await request();
      }
      throw err;
    }
  }

  async get<T = unknown>(path: string, options?: GetOptions): Promise<T> {
    const { pathPrefix, ...config } = options ?? {};
    const url = pathPrefix ? pathPrefix + path : path;
    return await this.withRetry(() => this.instance.get<T>(url, config).then((r) => r.data));
  }

  /**
   * Sends a JSON POST request through the authenticated API client.
   *
   * @param path Relative endpoint path.
   * @param body Optional JSON-compatible request body.
   * @param options Optional path prefix, query parameters, and abort signal.
   * @returns The response payload after authentication retry and envelope validation.
   * @throws Error when transport, cancellation, authentication, permission, or API validation fails.
   */
  async post<T = unknown>(
    path: string,
    body?: unknown,
    options?: PostOptions,
  ): Promise<T> {
    const url = options?.pathPrefix ? options.pathPrefix + path : path;
    return await this.withRetry(() => {
      const config: AxiosRequestConfig = {
        ...(options?.params ? { params: options.params } : {}),
        ...(options?.signal ? { signal: options.signal } : {}),
      };
      const request = Object.keys(config).length > 0
        ? this.instance.post<T>(url, body, config)
        : this.instance.post<T>(url, body);
      return request.then((r) => r.data);
    });
  }

  async postStream(
    path: string,
    body?: unknown,
    options?: PostOptions,
  ): Promise<Readable> {
    const url = options?.pathPrefix ? options.pathPrefix + path : path;
    return await this.withRetry(() =>
      this.instance
        .post<Readable>(url, body, {
          responseType: "stream",
          headers: { Accept: "application/x-ndjson" },
          ...(options?.params ? { params: options.params } : {}),
        })
        .then((r) => r.data),
    );
  }

  async request<T = unknown>(
    method: string,
    path: string,
    options?: { params?: Record<string, unknown>; body?: unknown },
  ): Promise<T> {
    return await this.withRetry(() =>
      this.instance.request<T>({ method, url: path, params: options?.params, data: options?.body }).then((r) => r.data),
    );
  }
}
