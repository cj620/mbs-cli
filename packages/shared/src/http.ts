/*
 * @Author: Henry
 * @Date: 2026-04-09 16:12:52
 */
// packages/skill-shared/src/http.ts
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios";
import type { Readable } from "node:stream";
import { NotAuthenticatedError, PermissionError, MBSError } from "./errors.js";
import type { BackendResponseSnapshot } from "./errors.js";
import type { RequestContentHeaders } from "./request-body.js";

export interface GetOptions {
  pathPrefix?: string;
  params?: AxiosRequestConfig["params"];
}

/** Options accepted by POST transports after request-body encoding and header allowlisting. */
export interface PostOptions {
  /** Optional service prefix prepended without changing the configured origin. */
  pathPrefix?: string;
  /** Query parameters serialized by Axios. */
  params?: AxiosRequestConfig["params"];
  /** Optional cancellation signal. */
  signal?: AxiosRequestConfig["signal"];
  /** Encoder-owned Content-Type; arbitrary caller headers are intentionally excluded. */
  headers?: RequestContentHeaders;
}

/** Dynamic read-only request options restricted to query data, encoded body, and Content-Type. */
export interface RequestOptions {
  /** Query parameters serialized by Axios. */
  params?: Record<string, unknown>;
  /** Already encoded JSON value, string, or Buffer. */
  body?: unknown;
  /** Encoder-owned Content-Type; Cookie and identity headers remain transport-owned. */
  headers?: RequestContentHeaders;
}

/**
 * 错误码映射表。新增错误码在此追加一行即可。
 * key: 服务端 code 值
 * value: 工厂函数，返回对应的 Error 实例
 */
const API_CODE_HANDLERS: Record<number, (response: BackendResponseSnapshot) => Error> = {
  601: (response) => new NotAuthenticatedError(response),
  109: (response) => new PermissionError(response),
  403: (response) => new PermissionError(response),
  401: (response) => new NotAuthenticatedError(response),
  500: (response) => new NotAuthenticatedError(response),
};

/**
 * Validates successful HTTP responses while retaining the complete body for business failures.
 *
 * <p>Endpoints without a numeric {@code code} field pass through unchanged. Numeric codes 0 and 200
 * are successful. Other codes preserve the body in a classified error so authentication refresh and
 * process exit semantics remain available without replacing the backend response shown to callers.</p>
 *
 * @param response Axios response received through the authenticated client.
 * @returns The same response when the endpoint reports success or has no standard business code.
 * @throws NotAuthenticatedError for configured authentication codes.
 * @throws PermissionError for configured permission codes.
 * @throws MBSError for other backend business errors.
 */
function validateApiResponse(response: AxiosResponse<unknown>): AxiosResponse<unknown> {
  if (typeof response.data !== "object" || response.data === null) return response;

  const body = response.data as Record<string, unknown>;
  const code = body.code;
  if (typeof code !== "number") return response;
  if (code === 0 || code === 200) return response;

  const backendResponse: BackendResponseSnapshot = {
    body: response.data,
    statusCode: response.status ?? 200,
  };
  const handler = API_CODE_HANDLERS[code];
  if (handler) throw handler(backendResponse);

  const message = typeof body.msg === "string" ? body.msg : `API error (code: ${code})`;
  throw new MBSError(message, "api", "", backendResponse);
}

/**
 * Converts an Axios HTTP rejection into a classified error that retains the authoritative response body.
 *
 * @param error Unknown rejection received by the response interceptor.
 * @returns This function never returns; the return type documents interceptor control flow.
 * @throws NotAuthenticatedError for HTTP 401 so the existing one-time refresh path remains active.
 * @throws PermissionError for HTTP 403.
 * @throws MBSError for other HTTP responses.
 * @throws unknown The original rejection when Axios did not receive an HTTP response.
 */
function rejectApiResponse(error: unknown): never {
  if (!axios.isAxiosError<unknown>(error) || !error.response) throw error;

  const backendResponse: BackendResponseSnapshot = {
    body: error.response.data,
    statusCode: error.response.status,
  };
  if (error.response.status === 401) throw new NotAuthenticatedError(backendResponse);
  if (error.response.status === 403) throw new PermissionError(backendResponse);

  throw new MBSError(error.message, "api", "", backendResponse);
}

/**
 * Authenticated read-only Axios adapter for MBS gateway requests.
 *
 * <p>The module centralizes stable CLI headers, one-time authentication refresh, backend business-code
 * classification, and preservation of upstream response bodies. Callers receive successful bodies directly;
 * failures cross the seam as classified errors that retain the authoritative backend body.</p>
 */
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

    this.instance.interceptors.response.use(validateApiResponse, rejectApiResponse);
  }

  /**
   * Replaces the Cookie attached by the shared Axios adapter after authentication refresh.
   *
   * @param cookie Fresh Cookie returned by the authentication module.
   */
  private updateCookie(cookie: string): void {
    this.instance.defaults.headers["Cookie"] = cookie;
  }

  /**
   * Runs one authenticated request and retries it once after a classified authentication failure.
   *
   * @param request Deferred request so the same transport operation can be repeated after Cookie refresh.
   * @returns The first successful request value or the successful retry value.
   * @throws Error A non-authentication failure or final retry failure. If local refresh fails before a retry,
   * the original backend authentication error is retained so its response body remains observable.
   */
  private async withRetry<T>(request: () => Promise<T>): Promise<T> {
    try {
      return await request();
    } catch (err) {
      if (err instanceof NotAuthenticatedError) {
        let newCookie: string;
        try {
          newCookie = await this.refreshAuth();
        } catch {
          throw err;
        }
        this.updateCookie(newCookie);
        return await request();
      }
      throw err;
    }
  }

  /**
   * Sends a GET request and returns the parsed upstream HTTP response body unchanged.
   *
   * @param path Relative endpoint path.
   * @param options Optional path prefix and Axios query parameters.
   * @returns Parsed response body after business-code validation and optional authentication retry.
   * @throws Error Transport, authentication, permission, or backend business failure.
   */
  async get<T = unknown>(path: string, options?: GetOptions): Promise<T> {
    const { pathPrefix, ...config } = options ?? {};
    const url = pathPrefix ? pathPrefix + path : path;
    return await this.withRetry(() => this.instance.get<T>(url, config).then((r) => r.data));
  }

  /**
   * Sends a POST request through the authenticated API client.
   *
   * @param path Relative endpoint path.
   * @param body Optional JSON value or request-body encoder output.
   * @param options Optional path prefix, query parameters, abort signal, and encoder-owned Content-Type.
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
        ...(options?.headers ? { headers: options.headers as AxiosRequestConfig["headers"] } : {}),
      };
      const request = Object.keys(config).length > 0
        ? this.instance.post<T>(url, body, config)
        : this.instance.post<T>(url, body);
      return request.then((r) => r.data);
    });
  }

  /**
   * Sends a POST request and returns the NDJSON response stream without buffering it.
   *
   * @param path Relative endpoint path.
   * @param body Encoded request body.
   * @param options Optional query parameters and encoder-owned Content-Type.
   * @returns Readable response stream after authentication retry.
   */
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
          headers: { Accept: "application/x-ndjson", ...(options?.headers ?? {}) },
          ...(options?.params ? { params: options.params } : {}),
        })
        .then((r) => r.data),
    );
  }

  /**
   * Sends one already validated dynamic read-only request.
   *
   * <p>Callers cannot supply arbitrary HTTP headers: only the request-body encoder's
   * Content-Type is accepted, so Cookie and client identity remain transport-owned.</p>
   *
   * @param method Validated GET or query-only POST method.
   * @param path Validated origin-relative interface path.
   * @param options Optional query values, encoded body, and Content-Type.
   * @returns Response payload after normal authentication retry and envelope checks.
   */
  async request<T = unknown>(
    method: string,
    path: string,
    options?: RequestOptions,
  ): Promise<T> {
    return await this.withRetry<T>(() =>
      this.instance.request<T>({
        method,
        url: path,
        params: options?.params,
        data: options?.body,
        ...(options?.headers ? { headers: options.headers as AxiosRequestConfig["headers"] } : {}),
      }).then((r) => r.data),
    );
  }
}
