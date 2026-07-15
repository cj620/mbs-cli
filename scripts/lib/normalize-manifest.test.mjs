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

test('disambiguates action names that share a service and final path segment', () => {
  const manifest = manifestWithMethod('POST')
  manifest.modules[0].actions = [
    {
      name: 'Find eBay shops',
      description: 'Find eBay shops',
      serviceName: 'erpmonitor',
      method: 'POST',
      path: '/erpmonitor/ebayRevisepriceConfirm/findShops',
    },
    {
      name: 'Find TikTok shops',
      description: 'Find TikTok shops',
      serviceName: 'erpmonitor',
      method: 'POST',
      path: '/erpmonitor/tiktokRevisepriceConfirm/findShops',
    },
    {
      name: 'List shops',
      description: 'List shops',
      serviceName: 'erpmonitor',
      method: 'POST',
      path: '/erpmonitor/listShops',
    },
  ]

  const normalized = normalizeServerManifest(manifest)
  const names = normalized.modules[0].actions.map((action) => action.name)

  assert.deepEqual(names, [
    'erpmonitor-find-shops-ebay-reviseprice-confirm',
    'erpmonitor-find-shops-tiktok-reviseprice-confirm',
    'erpmonitor-list-shops',
  ])
  assert.doesNotThrow(() => parseAuditManifest(normalized))
})

test('drops server path fields that are not present in the action URL', () => {
  const manifest = manifestWithMethod('GET')
  manifest.modules[0].actions[0].path = '/orders/{id}'
  manifest.modules[0].actions[0].request = {
    path: {
      type: 'object',
      properties: {
        id: { type: 'integer', required: true },
        employeeType: { type: 'string', required: true },
      },
    },
  }

  const normalized = normalizeServerManifest(manifest)

  assert.deepEqual(Object.keys(normalized.modules[0].actions[0].request.path.properties), ['id'])
  assert.deepEqual(normalized.modules[0].actions[0].request.path.required, ['id'])
  assert.doesNotThrow(() => parseAuditManifest(normalized))
})

test('deduplicates the same endpoint when the server path only differs by repeated slashes', () => {
  const manifest = manifestWithMethod('POST')
  manifest.modules[0].actions = [
    {
      name: 'Get SKU images',
      description: 'Get SKU images',
      serviceName: 'erpProduct',
      method: 'POST',
      path: '/erpProduct/productDetails/getSkuImages',
    },
    {
      name: 'Get SKU images duplicate',
      description: 'Get SKU images duplicate',
      serviceName: 'erpProduct',
      method: 'POST',
      path: '/erpProduct//productDetails/getSkuImages',
    },
  ]

  const normalized = normalizeServerManifest(manifest)

  assert.equal(normalized.modules[0].actions.length, 1)
  assert.equal(normalized.modules[0].actions[0].path, '/erpProduct/productDetails/getSkuImages')
  assert.doesNotThrow(() => parseAuditManifest(normalized))
})

test('assigns a safe CLI name when an API request field has no ASCII identifier characters', () => {
  const manifest = manifestWithMethod('POST')
  manifest.modules[0].actions[0].request = {
    body: {
      type: 'object',
      properties: {
        '（请求体根数组）': { type: 'array', required: true },
      },
    },
  }

  const normalized = normalizeServerManifest(manifest)
  const field = normalized.modules[0].actions[0].request.body.properties['（请求体根数组）']

  assert.match(field['x-cli-name'], /^[A-Za-z][A-Za-z0-9_]*$/)
  assert.doesNotThrow(() => parseAuditManifest(normalized))
})

test('renames request fields that conflict with oclif built-in flags', () => {
  const manifest = manifestWithMethod('POST')
  manifest.modules[0].actions[0].request = {
    body: {
      type: 'object',
      properties: {
        json: { type: 'string', required: true },
      },
    },
  }

  const normalized = normalizeServerManifest(manifest)
  const field = normalized.modules[0].actions[0].request.body.properties.json

  assert.equal(field['x-cli-name'], 'jsonValue')
  assert.doesNotThrow(() => parseAuditManifest(normalized))
})
