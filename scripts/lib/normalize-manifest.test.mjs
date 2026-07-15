import assert from 'node:assert/strict'
import test from 'node:test'
import { parseAuditManifest } from './manifest-schema.mjs'
import { normalizeServerManifest } from './normalize-manifest.mjs'

function manifestWithMethod(method) {
  return {
    schemaVersion: '1',
    manifestVersion: '2026-05-20T00:00:00+08:00',
    modules: [
      {
        domain: 'orders',
        description: 'Orders',
        keywords: ['orders'],
        scenarios: 'Order queries',
        actions: [
          {
            name: 'list-orders',
            description: 'List orders',
            method,
            path: '/orders',
          },
        ],
      },
    ],
  }
}

test('normalizes action HTTP methods before schema validation', () => {
  const normalized = normalizeServerManifest(manifestWithMethod(' get '))

  assert.equal(normalized.modules[0].actions[0].method, 'GET')
  assert.doesNotThrow(() => parseAuditManifest(normalized))
})

test('normalizes mixed-case POST and rejects unsupported methods', () => {
  const normalized = normalizeServerManifest(manifestWithMethod('pOsT'))
  assert.equal(normalized.modules[0].actions[0].method, 'POST')
  assert.doesNotThrow(() => parseAuditManifest(normalized))

  const unsupported = normalizeServerManifest(manifestWithMethod('delete'))
  assert.equal(unsupported.modules[0].actions[0].method, 'DELETE')
  assert.throws(() => parseAuditManifest(unsupported))
})
