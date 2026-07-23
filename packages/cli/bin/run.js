#!/usr/bin/env node

import { execute } from '@oclif/core'
import { registerCliProcess } from '@mb-it-org/shared'

if (!registerCliProcess()) {
  process.stdout.write(`${JSON.stringify({
    ok: false,
    error: {
      type: 'validation',
      message: 'Cannot start mbs while a CLI update is in progress',
      hint: 'Wait for the update to finish, then retry the command',
    },
  })}\n`)
  process.exitCode = 1
} else {
  await execute({ dir: import.meta.url })
}
