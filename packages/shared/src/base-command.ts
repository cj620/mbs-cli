/*
 * @Author: Henry
 * @Date: 2026-04-07 19:23:07
 */
// packages/skill-shared/src/base-command.ts
import { Command } from "@oclif/core";
import { getAuthContext, forceRefreshAuthContext } from "./auth/index.js";
import { getConfig } from "./config.js";
import { APIClient } from "./http.js";
import { NotAuthenticatedError, MBSError, PermissionError } from "./errors.js";
import { normalizeSessionCookie } from "./auth/session-cookie.js";

// Gateway entry every CLI request passes through; the gateway routes to the
// matching business microservice. Was "/gateway"; now "/gateway/cli".
const API_GATEWAY_PREFIX = "/gateway/cli";

/**
 * Serializes a backend response body for one-line CLI stdout without adding an envelope.
 *
 * <p>Text responses remain text. JSON-compatible values are serialized once. An absent body becomes an
 * empty line, matching an upstream response with no content. Serialization errors propagate to the command
 * error seam instead of being replaced with a false success.</p>
 *
 * @param body Parsed backend response body.
 * @returns Text written to CLI stdout.
 */
function serializeBackendBody(body: unknown): string {
  if (typeof body === "string") return body;
  return JSON.stringify(body) ?? "";
}

/** Shared oclif command module for authenticated MBS queries and consistent process-level failure semantics. */
export abstract class MBSCommand extends Command {
  protected client!: APIClient;

  /**
   * Initializes the command's HTTP client before command parsing and execution.
   *
   * <p>The client always uses the saved CLI authentication context, refresh
   * callback, and standard `/gateway/cli` base URL.</p>
   *
   * @returns A promise that resolves after the command client is ready.
   * @throws Error when the saved authentication context cannot be loaded.
   */
  async init(): Promise<void> {
    await super.init();
    const { cookie: authenticationCookie } = await getAuthContext();
    const cookie = normalizeSessionCookie(authenticationCookie);
    if (!cookie) throw new NotAuthenticatedError();
    const { apiUrl } = getConfig();

    const refreshAuth = async (): Promise<{ cookie: string; accessToken: string }> => {
      const { cookie: refreshedAuthenticationCookie, accessToken } = await forceRefreshAuthContext();
      const refreshedCookie = normalizeSessionCookie(refreshedAuthenticationCookie);
      if (!refreshedCookie) throw new NotAuthenticatedError();
      return { cookie: refreshedCookie, accessToken };
    };

    // Global gateway prefix: every request goes through /gateway/cli, which
    // forwards to the right business microservice. Command paths stay bare
    // (service-relative); the prefix is applied here in one place.
    const baseUrl = `${apiUrl.replace(/\/+$/, "")}${API_GATEWAY_PREFIX}`;
    this.client = new APIClient(baseUrl, cookie, refreshAuth);
  }

  /**
   * Writes the backend response body directly to stdout.
   *
   * @param data Parsed response body returned by the shared authenticated client.
   * @throws TypeError when a non-text value cannot be serialized as JSON.
   */
  protected output(data: unknown): void {
    this.log(serializeBackendBody(data));
  }

  /**
   * Emits either the retained backend error body or a safe CLI-owned fallback and exits non-zero.
   *
   * <p>Backend responses are authoritative and bypass the legacy CLI error envelope. Errors created locally
   * have no upstream body, so they keep the stable structured fallback. Authentication failures exit 2;
   * permission, validation, API, transport, and unknown failures exit 1.</p>
   *
   * @param err Failure propagated from command execution or the shared HTTP client.
   * @returns A promise that resolves only in test harnesses where {@code exit} does not terminate execution.
   */
  async catch(err: Error & { exitCode?: number }): Promise<void> {
    if (
      (err instanceof NotAuthenticatedError || err instanceof PermissionError || err instanceof MBSError) &&
      err.backendResponse
    ) {
      this.log(serializeBackendBody(err.backendResponse.body));
      this.exit(err instanceof NotAuthenticatedError ? 2 : 1);
      return;
    }

    if (err instanceof NotAuthenticatedError) {
      this.log(
        JSON.stringify({
          ok: false,
          error: { type: err.type, message: err.message, hint: err.hint },
        }),
      );
      this.exit(2);
      return;
    }
    if (err instanceof PermissionError) {
      this.log(
        JSON.stringify({
          ok: false,
          error: { type: err.type, message: err.message, hint: err.hint },
        }),
      );
      this.exit(1);
      return;
    }
    if (err instanceof MBSError) {
      this.log(
        JSON.stringify({
          ok: false,
          error: { type: err.type, message: err.message, hint: err.hint },
        }),
      );
      this.exit(1);
      return;
    }
    this.log(
      JSON.stringify({
        ok: false,
        error: { type: "api", message: err.message, hint: "" },
      }),
    );
    this.exit(1);
  }
}
