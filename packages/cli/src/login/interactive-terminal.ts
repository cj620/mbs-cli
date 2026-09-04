import { spawn } from 'node:child_process'
import { resolve } from 'node:path'

import { MBSError } from '@mb-it-org/shared'

/** Login modes whose secrets must be collected only inside an interactive terminal. */
export type SecretLoginMethod = 'managed-token' | 'password'

const CHILD_ENTRY_ENV = 'MBS_LOGIN_CHILD_ENTRY_PATH'
const CHILD_MODE_ENV = 'MBS_LOGIN_CHILD_MODE_FLAG'
const CHILD_NODE_ENV = 'MBS_LOGIN_CHILD_NODE_PATH'
const CHILD_WORKDIR_ENV = 'MBS_LOGIN_CHILD_WORKING_DIRECTORY'
const INTERACTIVE_TERMINAL_HINT = 'Run the selected login command in a local interactive terminal'

const WINDOWS_TERMINAL_SCRIPT = `
$ErrorActionPreference = 'Stop'
$nodePath = $env:${CHILD_NODE_ENV}
$entryPath = $env:${CHILD_ENTRY_ENV}
$workingDirectory = $env:${CHILD_WORKDIR_ENV}
$modeFlag = $env:${CHILD_MODE_ENV}
$entryArgument = '"' + $entryPath + '"'
$childArguments = @($entryArgument, 'login', $modeFlag, '--interactive-child')
$childProcess = Start-Process -FilePath $nodePath -ArgumentList $childArguments -WorkingDirectory $workingDirectory -WindowStyle Normal -Wait -PassThru
exit $childProcess.ExitCode
`.trim()

/**
 * Reports whether the current process owns a terminal suitable for hidden secret prompts.
 *
 * @returns `true` only when both input and output are attached to a TTY; redirected Agent
 * execution returns `false` so secrets are never read from a pipe or chat-controlled stream.
 */
export function hasInteractiveTerminal(): boolean {
  return process.stdin.isTTY === true && process.stdout.isTTY === true
}

/**
 * Encodes the fixed PowerShell launcher without interpolating paths or user input into code.
 *
 * @param source Trusted static PowerShell source owned by this module.
 * @returns UTF-16LE Base64 accepted by PowerShell's `-EncodedCommand` option.
 */
function encodePowerShellCommand(source: string): string {
  return Buffer.from(source, 'utf16le').toString('base64')
}

/**
 * Converts a secret login mode into the public CLI flag passed to the isolated child process.
 *
 * @param method Password or management-issued LongToken login mode selected in the Agent chat.
 * @returns A fixed, non-secret flag; no credential value is accepted or returned.
 */
function loginModeFlag(method: SecretLoginMethod): '--managed-token' | '--password' {
  return method === 'password' ? '--password' : '--managed-token'
}

/**
 * Waits for the hidden PowerShell launcher that owns the visible child terminal.
 *
 * @param childProcess Spawned PowerShell process; this function owns its event listeners but
 * does not kill it because user-driven authentication and cancellation control its lifetime.
 * @returns Child login exit code, normalized to `1` when Windows reports no numeric code.
 * @throws MBSError when PowerShell cannot start, without exposing its environment or arguments.
 */
function waitForTerminalExit(
  childProcess: ReturnType<typeof spawn>,
): Promise<number> {
  return new Promise<number>((resolveExit, rejectExit) => {
    childProcess.once('error', () => {
      rejectExit(new MBSError(
        'Unable to open an interactive login window',
        'validation',
        INTERACTIVE_TERMINAL_HINT,
      ))
    })
    childProcess.once('close', exitCode => {
      resolveExit(typeof exitCode === 'number' ? exitCode : 1)
    })
  })
}

/**
 * Opens a new visible Windows terminal and runs one secret-collecting login mode inside it.
 *
 * <p>The launcher adds only trusted executable paths, working directory, and a fixed mode flag
 * to the inherited child environment. This interface accepts no account, password, LongToken,
 * cookie, or authentication response, so none can be serialized by the launcher.</p>
 *
 * <p>The hidden PowerShell wrapper waits for the visible Node console, allowing the Agent-facing
 * parent command to propagate success, cancellation, or failure. The child receives the hidden
 * recursion marker and must independently verify that its stdin/stdout are real TTY handles.</p>
 *
 * @param method Password or management-issued LongToken mode selected by the user.
 * @returns Exit code from the isolated `mbs login` child process.
 * @throws MBSError when the platform is unsupported, the CLI entry path is unavailable, or the
 * Windows launcher cannot start. No existing authentication state is restored on failure.
 */
export async function launchInteractiveLoginInNewTerminal(
  method: SecretLoginMethod,
): Promise<number> {
  if (process.platform !== 'win32') {
    throw new MBSError(
      'Automatic interactive login windows are currently supported only on Windows',
      'validation',
      INTERACTIVE_TERMINAL_HINT,
    )
  }

  const entryArgument = process.argv[1]
  if (!entryArgument) {
    throw new MBSError(
      'Unable to locate the MBS CLI entry point',
      'validation',
      INTERACTIVE_TERMINAL_HINT,
    )
  }

  const childEnvironment: NodeJS.ProcessEnv = {
    ...process.env,
    [CHILD_ENTRY_ENV]: resolve(entryArgument),
    [CHILD_MODE_ENV]: loginModeFlag(method),
    [CHILD_NODE_ENV]: process.execPath,
    [CHILD_WORKDIR_ENV]: process.cwd(),
  }
  const encodedCommand = encodePowerShellCommand(WINDOWS_TERMINAL_SCRIPT)
  const powerShellProcess = spawn(
    'powershell.exe',
    ['-NoLogo', '-NoProfile', '-NonInteractive', '-EncodedCommand', encodedCommand],
    {
      env: childEnvironment,
      stdio: 'ignore',
      windowsHide: true,
    },
  )

  return waitForTerminalExit(powerShellProcess)
}
