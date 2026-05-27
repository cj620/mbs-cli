const allowedOriginPattern = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/

export function isAllowedOrigin(origin: string | undefined): boolean {
  if (!origin) return false
  if (origin === 'null') return true
  return allowedOriginPattern.test(origin)
}
