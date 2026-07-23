#!/usr/bin/env node

import { execute } from '@oclif/core'
import { registerCliProcess } from '@mb-it-org/shared'

const commandParts = []
for (const argument of process.argv.slice(2)) {
  if (argument.startsWith('-') || commandParts.length === 2) break
  commandParts.push(argument)
}
registerCliProcess(commandParts.join(' '))
await execute({ dir: import.meta.url })
