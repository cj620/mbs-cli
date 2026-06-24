import { Readable } from 'node:stream'

export const MAX_SQL_LENGTH = 10_000
export const DORIS_API_PREFIX = '/cli-service/cli/doris'

export function validateSql(sql: string): string {
  const trimmed = sql.trim()
  if (!trimmed) throw new Error('SQL is required')
  if (trimmed.length > MAX_SQL_LENGTH) {
    throw new Error(`SQL must be ${MAX_SQL_LENGTH} characters or fewer`)
  }
  return trimmed
}

export async function readStdin(input: NodeJS.ReadableStream = process.stdin): Promise<string> {
  const chunks: Buffer[] = []
  for await (const chunk of input) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(String(chunk)))
  }
  return Buffer.concat(chunks).toString('utf8')
}

export async function resolveSql(sqlFlag?: string, input?: NodeJS.ReadableStream): Promise<string> {
  if (sqlFlag !== undefined) return validateSql(sqlFlag)
  if (input === undefined && process.stdin.isTTY) return validateSql('')
  return validateSql(await readStdin(input))
}

export async function writeNdjsonStream(
  stream: NodeJS.ReadableStream,
  write: (chunk: string) => void = (chunk) => {
    process.stdout.write(chunk)
  },
): Promise<{ hasError: boolean }> {
  let buffer = ''
  let hasError = false

  const inspectLine = (line: string): void => {
    const text = line.trim()
    if (!text) return
    try {
      const parsed = JSON.parse(text) as { type?: unknown }
      if (parsed.type === 'error') hasError = true
    } catch {
      // Preserve malformed server lines for the caller; do not reinterpret the stream.
    }
  }

  for await (const chunk of stream as Readable) {
    const text = Buffer.isBuffer(chunk) ? chunk.toString('utf8') : String(chunk)
    write(text)
    buffer += text

    const lines = buffer.split('\n')
    buffer = lines.pop() ?? ''
    for (const line of lines) inspectLine(line)
  }

  inspectLine(buffer)
  return { hasError }
}
