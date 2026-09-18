/*
 * @Author: Henry
 * @Date: 2026-04-09 16:12:52
 */
// packages/skill-shared/src/http.ts
import axios, { type AxiosInstance, type AxiosRequestConfig, type AxiosResponse } from "axios";
import { Readable } from "node:stream";
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

/** Authentication material returned by the one-time refresh callback. */
export interface RefreshedRequestAuthentication {
  /** Updated compatible SESSION header used by business services and future exchanges. */
  cookie: string;
  /** Short Bearer credential installed in this APIClient instance. */
  accessToken: string;
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
};

/** Maximum buffered size for a non-success streaming response body. */
export const MAX_STREAM_ERROR_BODY_BYTES = 1_000_000;

/**
 * Throws the stable classified error for one HTTP response after its body is safe to retain.
 *
 * <p>The body remains unchanged after parsing and is used only for final response passthrough. HTTP status
 * controls authentication and permission behavior without adding a CLI response envelope.</p>
 *
 * @param message Axios transport message used only by the local API error fallback.
 * @param statusCode Upstream HTTP status used for authentication and permission classification.
 * @param body Parsed JSON or text body retained for the command output boundary.
 * @throws NotAuthenticatedError for HTTP 401 responses.
 * @throws PermissionError for HTTP 403 responses.
 * @throws MBSError for every other non-success HTTP response.
 */
function throwClassifiedHttpError(
  message: string,
  statusCode: number,
  body: unknown,
): never {
  const backendResponse: BackendResponseSnapshot = { body, statusCode };
  if (statusCode === 401) throw new NotAuthenticatedError(backendResponse);
  if (statusCode === 403) throw new PermissionError(backendResponse);
  throw new MBSError(message, "api", "", backendResponse);
}

/**
 * Reads a failed streaming response into bounded memory so network objects never cross the HTTP seam.
 *
 * <p>The caller owns the response stream. Normal completion consumes it fully; an oversized body is destroyed
 * immediately. Successful database NDJSON responses do not use this function and remain streaming.</p>
 *
 * @param stream Non-success Axios response stream from the Node HTTP adapter.
 * @returns UTF-8 response text, including an empty string for an empty body.
 * @throws MBSError when the response exceeds {@link MAX_STREAM_ERROR_BODY_BYTES}.
 * @throws Error when the underlying response stream fails while being read.
 */
async function readStreamErrorBody(stream: Readable): Promise<string> {
  const chunks: Buffer[] = [];
  let totalBytes = 0;

  for await (const chunk of stream) {
    const buffer = Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk));
    totalBytes += buffer.length;
    if (totalBytes > MAX_STREAM_ERROR_BODY_BYTES) {
      stream.destroy();
      throw new MBSError(
        "Backend error response is too large",
        "api",
        `The response exceeded ${MAX_STREAM_ERROR_BODY_BYTES} bytes`,
      );
    }
    chunks.push(buffer);
  }

  return Buffer.concat(chunks).toString("utf8");
}

/**
 * Restores the same JSON-or-text body shape used by ordinary Axios responses.
 *
 * @param text Fully consumed UTF-8 response text.
 * @param contentType Upstream Content-Type header; JSON media types opt into parsing.
 * @returns Parsed JSON when valid, otherwise the exact response text.
 */
function parseStreamErrorBody(text: string, contentType: string): unknown {
  if (!contentType.toLowerCase().includes("json")) return text;
  try {
    const parsed: unknown = JSON.parse(text);
    return parsed;
  } catch {
    return text;
  }
}

/**
 * Consumes and classifies a non-success streaming response before it reaches command output.
 *
 * @param message Axios transport message used by the generic API classification.
 * @param statusCode Upstream HTTP status.
 * @param stream Node response stream owned by this failure path.
 * @param contentType Upstream media type used only to distinguish JSON from text.
 * @returns A promise that always rejects through a classified error.
 * @throws Error when reading fails, the body is oversized, or classification emits the final error.
 */
async function rejectStreamedHttpResponse(
  message: string,
  statusCode: number,
  stream: Readable,
  contentType: string,
): Promise<never> {
  const text = await readStreamErrorBody(stream);
  const body = parseStreamErrorBody(text, contentType);
  return throwClassifiedHttpError(message, statusCode, body);
}

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
 * <p>Axios exposes non-success bodies as Node streams when a caller requested {@code responseType=stream}.
 * Those bodies are consumed and normalized before classification so Socket graphs never reach JSON output.</p>
 *
 * @returns Either throws synchronously for ordinary responses or returns a promise that rejects after a streamed
 * response body has been consumed.
 * @throws NotAuthenticatedError for HTTP 401 so the existing one-time refresh path remains active.
 * @throws PermissionError for HTTP 403.
 * @throws MBSError for other HTTP responses.
 * @throws unknown The original rejection when Axios did not receive an HTTP response.
 */
function rejectApiResponse(error: unknown): never | Promise<never> {
  if (!axios.isAxiosError<unknown>(error) || !error.response) throw error;

  if (error.response.data instanceof Readable) {
    const contentType = String(error.response.headers["content-type"] ?? "");
    return rejectStreamedHttpResponse(
      error.message,
      error.response.status,
      error.response.data,
      contentType,
    );
  }

  return throwClassifiedHttpError(error.message, error.response.status, error.response.data);
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
  private readonly refreshAuth: () => Promise<string | RefreshedRequestAuthentication>;

  /**
   * Creates an authenticated API transport with stable CLI headers.
   *
   * <p>The saved CLI Cookie and stable client type are attached to every
   * request. Authentication retries are delegated to the supplied callback.</p>
   *
   * @param baseURL Base URL used for relative API request paths.
   * @param cookie Cookie header value obtained from the CLI authentication context.
   * @param refreshAuth Callback returning a legacy Cookie string or upgraded Cookie plus
   * Access Token after authentication failure.
   * @param accessToken Optional already-validated, unexpired Access Token loaded from the protected cache.
   */
  constructor(
    baseURL: string,
    cookie: string,
    refreshAuth: () => Promise<string | RefreshedRequestAuthentication>,
    accessToken?: string,
  ) {
    this.refreshAuth = refreshAuth;
    this.instance = axios.create({
      baseURL,
      headers: {
        Cookie: cookie,
        "client-type": "cli",
        ...(accessToken ? { Authorization: `Bearer ${accessToken}` } : {}),
      },
    });

    this.instance.interceptors.response.use(validateApiResponse, rejectApiResponse);
  }

  /**
   * Replaces the Cookie and, when available, installs the refreshed Bearer credential.
   *
   * @param authentication Fresh authentication returned by the authentication module.
   */
  private updateAuthentication(authentication: string | RefreshedRequestAuthentication): void {
    const cookie = typeof authentication === "string" ? authentication : authentication.cookie;
    this.instance.defaults.headers["Cookie"] = cookie;
    if (typeof authentication !== "string") {
      this.instance.defaults.headers["Authorization"] = `Bearer ${authentication.accessToken}`;
    }
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
        let authentication: string | RefreshedRequestAuthentication;
        try {
          authentication = await this.refreshAuth();
        } catch {
          throw err;
        }
        this.updateAuthentication(authentication);
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
