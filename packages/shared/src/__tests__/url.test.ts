import { describe, expect, it } from 'vitest'
import { withCliPathPrefix } from '../url.js'

describe('withCliPathPrefix', () => {
  it('adds /cli between apiUrl and path', () => {
    expect(withCliPathPrefix('http://api.example.com', '/v1/orders')).toBe(
      'http://api.example.com/cli/v1/orders',
    )
  })

  it('handles trailing slashes and avoids duplicating /cli', () => {
    expect(withCliPathPrefix('http://api.example.com/', 'v1/orders')).toBe(
      'http://api.example.com/cli/v1/orders',
    )
    expect(withCliPathPrefix('http://api.example.com/cli', '/v1/orders')).toBe(
      'http://api.example.com/cli/v1/orders',
    )
  })
})
