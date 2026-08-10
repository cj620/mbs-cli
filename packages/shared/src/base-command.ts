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

// Gateway entry every CLI request passes through; the gateway routes to the
// matching business microservice. Was "/gateway"; now "/gateway/cli".
const API_GATEWAY_PREFIX = "/gateway/cli";

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
    const { cookie } = await getAuthContext();
    const { apiUrl } = getConfig();

    const refreshAuth = async (): Promise<string> => {
      const { cookie: newCookie } = await forceRefreshAuthContext();
      return newCookie;
    };

    // Global gateway prefix: every request goes through /gateway/cli, which
    // forwards to the right business microservice. Command paths stay bare
    // (service-relative); the prefix is applied here in one place.
    const baseUrl = `${apiUrl.replace(/\/+$/, "")}${API_GATEWAY_PREFIX}`;
    this.client = new APIClient(baseUrl, cookie, refreshAuth);
  }

  protected output(data: unknown, meta?: Record<string, unknown>): void {
    this.log(
      JSON.stringify({
        ok: true,
        data,
        ...(meta !== undefined ? { meta } : {}),
      }),
    );
  }

  async catch(err: Error & { exitCode?: number }): Promise<void> {
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
