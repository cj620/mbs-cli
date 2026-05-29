#!/usr/bin/env node
import { execFile, spawn } from 'node:child_process'
import { promisify } from 'node:util'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'

const execFileAsync = promisify(execFile)
const repoRoot = join(dirname(fileURLToPath(import.meta.url)), '..')
const args = parseArgs(process.argv.slice(2))
const port = String(args.port ?? 7878)
const host = String(args.host ?? '127.0.0.1')
const serveArgs = [
  join(repoRoot, 'packages', 'cli', 'bin', 'run.js'),
  'serve',
  '--project-apis',
  '--proxy-all',
  '--port',
  port,
  '--host',
  host,
]

await stopListeners(port)
const child = spawn(process.execPath, serveArgs, {
  cwd: repoRoot,
  detached: true,
  stdio: 'ignore',
  windowsHide: true,
})
child.unref()

console.log(JSON.stringify({
  ok: true,
  data: {
    pid: child.pid,
    address: `http://${host}:${port}`,
    command: `node packages/cli/bin/run.js serve --project-apis --proxy-all --port ${port} --host ${host}`,
  },
}))

function parseArgs(argv) {
  const parsed = {}
  for (let index = 0; index < argv.length; index += 1) {
    const arg = argv[index]
    if (arg === '--port') {
      parsed.port = argv[index + 1]
      index += 1
    } else if (arg === '--host') {
      parsed.host = argv[index + 1]
      index += 1
    } else {
      throw new Error(`Unknown argument: ${arg}`)
    }
  }
  return parsed
}

async function stopListeners(localPort) {
  const pids = process.platform === 'win32'
    ? await windowsListenerPids(localPort)
    : await unixListenerPids(localPort)

  for (const pid of pids) {
    if (pid && pid !== process.pid) {
      try {
        process.kill(pid, 'SIGTERM')
      } catch {
        // The listener may have already exited.
      }
    }
  }
}

async function windowsListenerPids(localPort) {
  const { stdout } = await exec('netstat.exe', ['-ano', '-p', 'tcp'])
  const portSuffix = `:${Number(localPort)}`
  return [...new Set(stdout
    .split(/\r?\n/)
    .map((line) => line.trim().split(/\s+/))
    .filter((parts) => parts.length >= 5 && parts[1]?.endsWith(portSuffix) && parts[3] === 'LISTENING')
    .map((parts) => Number.parseInt(parts[4], 10))
    .filter(Number.isFinite))]
}

async function unixListenerPids(localPort) {
  const { stdout } = await exec('sh', ['-c', `command -v lsof >/dev/null 2>&1 && lsof -tiTCP:${Number(localPort)} -sTCP:LISTEN || true`])
  return parsePids(stdout)
}

async function exec(file, execArgs) {
  return execFileAsync(file, execArgs, { cwd: repoRoot, windowsHide: true })
}

function parsePids(text) {
  return [...new Set(String(text).split(/\s+/).map((item) => Number.parseInt(item, 10)).filter(Number.isFinite))]
}
