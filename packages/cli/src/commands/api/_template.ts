// packages/cli/src/commands/api/_template.ts
//
// ═══════════════════════════════════════════════════════════════
// L2 COMMAND TEMPLATE — AI REFERENCE ONLY, DO NOT IMPORT
// ═══════════════════════════════════════════════════════════════
//
// When generating a new L2 command:
// 1. Copy this template to commands/api/<namespace>/<action>.ts
// 2. Replace ApiXxxYyy, description, flags, args, path
// 3. Run: pnpm build
// 4. Verify: ./bin/run.js api:<namespace>:<action>
//
// Naming: class ApiOrdersList → file: commands/api/orders/list.ts → command: api:orders:list

import { Args, Flags } from '@oclif/core'
import { MBSCommand } from '@mbs/skill-shared'

export default class ApiXxxYyy extends MBSCommand {
  static description = 'TODO: describe what this API endpoint does'

  // Remove flags/args that do not apply
  static flags = {
    // String parameter example (query param)
    status: Flags.string({ description: 'Filter by status' }),
    // Integer parameter with default
    limit: Flags.integer({ description: 'Max results to return', default: 20 }),
    // Date range example
    from: Flags.string({ description: 'Start date YYYY-MM-DD' }),
    to: Flags.string({ description: 'End date YYYY-MM-DD' }),
  }

  static args = {
    // Positional argument example (e.g. resource ID in path)
    // Remove if endpoint has no positional args
    id: Args.string({ required: true, description: 'Resource ID' }),
  }

  async run(): Promise<void> {
    const { flags, args } = await this.parse(ApiXxxYyy)

    // GET with path param and query flags:
    const data = await this.client.get(`/v1/xxx/${args.id}`, { params: flags })

    // POST with body:
    // const data = await this.client.post('/v1/xxx', { ...flags })

    this.output(data)
  }
}
