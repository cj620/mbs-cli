import { Command } from '@oclif/core'
import { MBSError, fetchLatestNpmVersion } from '@mb-it-org/shared'
import { readFileSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { createRequire } from 'node:module'
import { fileURLToPath } from 'node:url'
import { execFile } from 'node:child_process'
import { promisify } from 'node:util'

const require = createRequire(import.meta.url)
const execFileAsync = promisify(execFile)

function getCurrentVersion(): string {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const pkg = require('../../package.json') as { version?: string }
  return pkg.version ?? 'unknown'
}

function getCurrentInstallDir(): string {
  return resolve(dirname(fileURLToPath(import.meta.url)), '../..')
}

function readVersionFromInstallDir(installDir: string): string {
  const pkg = JSON.parse(readFileSync(join(installDir, 'package.json'), 'utf8')) as { version?: string }
  return pkg.version ?? 'unknown'
}

function getNpmExecutable(): string {
  return process.platform === 'win32' ? 'npm.cmd' : 'npm'
}

async function updateViaNpm(installDir: string): Promise<string> {
  try {
    await execFileAsync(getNpmExecutable(), ['install', '-g', '@mb-it-org/cli@latest'])
    return readVersionFromInstallDir(installDir)
  } catch (error) {
    const code = typeof error === 'object' && error !== null && 'code' in error ? String(error.code) : ''
    const hint =
      code === 'EPERM' || code === 'EACCES' ?
        'Run the command with permission to modify the global npm installation'
      : 'npm install -g @mb-it-org/cli@latest failed'

    throw new MBSError('Failed to update CLI via npm', 'api', hint)
  }
}

export default class Update extends Command {
  static description = 'Update the CLI via npm (npm install -g @mb-it-org/cli@latest)'

  static examples = ['mbs update']

  async run(): Promise<void> {
    await this.parse(Update)
    const currentVersion = getCurrentVersion()
    const installDir = getCurrentInstallDir()

    try {
      const latestVersion = await fetchLatestNpmVersion()

      if (latestVersion === currentVersion) {
        this.log(
          JSON.stringify({
            ok: true,
            data: {
              previousVersion: currentVersion,
              currentVersion,
              updated: false,
              source: 'npm',
            },
          }),
        )
        return
      }

      const nextVersion = await updateViaNpm(installDir)

      this.log(
        JSON.stringify({
          ok: true,
          data: {
            previousVersion: currentVersion,
            currentVersion: nextVersion,
            updated: true,
            source: 'npm',
          },
        }),
      )
    } catch (error) {
      if (error instanceof MBSError) {
        this.log(
          JSON.stringify({
            ok: false,
            error: {
              type: error.type,
              message: error.message,
              hint: error.hint,
            },
          }),
        )
        this.exit(1)
        return
      }

      throw error
    }
  }
}
