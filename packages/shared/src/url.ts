const CLI_PATH_PREFIX = '/cli'

export function withCliPathPrefix(apiUrl: string, path = ''): string {
  const baseUrl = apiUrl.replace(/\/+$/, '')
  const prefixedBaseUrl = baseUrl.endsWith(CLI_PATH_PREFIX)
    ? baseUrl
    : `${baseUrl}${CLI_PATH_PREFIX}`
  const normalizedPath = path.startsWith('/') ? path : `/${path}`

  return path ? `${prefixedBaseUrl}${normalizedPath}` : prefixedBaseUrl
}
