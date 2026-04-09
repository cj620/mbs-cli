/*
 * @Author: Henry
 * @Date: 2026-04-07 19:23:07
 */
// packages/skill-shared/src/base-command.ts
import { Command } from "@oclif/core";
import { getAuthContext } from "./auth/index.js";
import { getConfig } from "./config.js";
import { APIClient } from "./http.js";
import { NotAuthenticatedError, MBSError } from "./errors.js";

export abstract class MBSCommand extends Command {
  protected client!: APIClient;

  async init(): Promise<void> {
    await super.init();
    const { cookie } = await getAuthContext();
    const { apiUrl } = getConfig();

    this.client = new APIClient(apiUrl, cookie);
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
