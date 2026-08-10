import { createHash } from 'node:crypto'

import { describe, expect, it } from 'vitest'

import {
  CrmCrmWebServiceGetAmazonAccHealthInfo,
  PimInstudioPmsGetShopManagerRankingList,
  PimInstudioPmsList,
  ProductErpMonitorHotProductAllListing,
  ProductErpProductProduct,
} from '../index.js'
import { LEGACY_CLI_0_1_58_CONTRACT } from './legacy-0.1.58-contract.js'

type LegacyCommandClass = {
  description: string
  flags: Record<string, unknown>
  prototype: { run(): Promise<void> }
}

type LegacyCommandId = keyof typeof LEGACY_CLI_0_1_58_CONTRACT

type LegacyFlagKind = 'boolean' | 'integer' | 'string'

interface CapturedRequest {
  method: 'get' | 'post'
  path: string
  payload: unknown
}

interface CommandExecution {
  output: unknown
  request: CapturedRequest
}

const LEGACY_COMMANDS: Record<LegacyCommandId, LegacyCommandClass> = {
  'crm crm-web-service-get-amazon-acc-health-info': CrmCrmWebServiceGetAmazonAccHealthInfo,
  'product erp-monitor-hot-product-all-listing': ProductErpMonitorHotProductAllListing,
  'product erp-product-product': ProductErpProductProduct,
  'pim instudio-pms-get-shop-manager-ranking-list': PimInstudioPmsGetShopManagerRankingList,
  'pim instudio-pms-list': PimInstudioPmsList,
}

const LEGACY_RESPONSE = { source: 'legacy-contract-test' }

/**
 * Records the one read-only HTTP operation performed by a compatibility command.
 *
 * The recorder intentionally exposes only the GET and POST methods used by the published
 * commands. It performs no network or file I/O and returns a fixed artificial response.
 */
class RequestRecorder {
  request: CapturedRequest | undefined

  /**
   * Captures a historical GET request without executing it.
   *
   * @param path Service-relative path passed to the shared client.
   * @param options Query options supplied by the command.
   * @returns The fixed artificial response used to verify output forwarding.
   */
  async get(path: string, options: unknown): Promise<unknown> {
    this.request = { method: 'get', path, payload: options }
    return LEGACY_RESPONSE
  }

  /**
   * Captures a historical query-only POST request without executing it.
   *
   * @param path Service-relative path passed to the shared client.
   * @param body Request body produced from parsed CLI flags.
   * @returns The fixed artificial response used to verify output forwarding.
   */
  async post(path: string, body: unknown): Promise<unknown> {
    this.request = { method: 'post', path, payload: body }
    return LEGACY_RESPONSE
  }
}

/**
 * Reads one runtime flag property without weakening the command boundary to `any`.
 *
 * @param flag Oclif flag object under inspection.
 * @param property Property name required for the frozen public-contract projection.
 * @returns The property value, or undefined when the flag is not an object.
 */
function readFlagProperty(flag: unknown, property: string): unknown {
  if (typeof flag !== 'object' || flag === null) return undefined
  return Reflect.get(flag, property)
}

/**
 * Resolves the externally visible parser kind of one oclif flag.
 *
 * Option flags are parsed with an artificial numeric token so integer and string parsers
 * can be distinguished without depending on internal function names. Boolean flags are
 * identified from their stable oclif type and are never executed.
 *
 * @param flag Oclif flag definition from a compatibility command.
 * @returns The normalized public parser kind.
 * @throws Error when the flag does not expose the parser required by an option flag.
 */
async function resolveFlagKind(flag: unknown): Promise<LegacyFlagKind> {
  if (readFlagProperty(flag, 'type') === 'boolean') return 'boolean'

  const parse = readFlagProperty(flag, 'parse')
  if (typeof parse !== 'function') throw new Error('Legacy option flag is missing its parser')
  const parsed = await Reflect.apply(parse, undefined, ['7', {}, flag])
  return typeof parsed === 'number' ? 'integer' : 'string'
}

/**
 * Computes the frozen help-text fingerprint used by the published 0.1.58 baseline.
 *
 * @param command Compatibility command class whose description and flag help are inspected.
 * @returns SHA-256 of the deterministic command/flag help projection.
 */
function computeHelpHash(command: LegacyCommandClass): string {
  const helpShape = {
    description: command.description,
    flags: Object.entries(command.flags).map(([name, flag]) => [
      name,
      typeof readFlagProperty(flag, 'description') === 'string'
        ? readFlagProperty(flag, 'description')
        : '',
    ]),
  }
  return createHash('sha256').update(JSON.stringify(helpShape)).digest('hex')
}

/**
 * Projects one command's current flags into the stable compatibility-test representation.
 *
 * @param command Compatibility command class to inspect.
 * @returns Ordered flag metadata matching the frozen 0.1.58 baseline shape.
 */
async function projectFlags(command: LegacyCommandClass): Promise<Array<{
  allowNo: boolean
  kind: LegacyFlagKind
  name: string
  required: boolean
}>> {
  const projected = []
  for (const [name, flag] of Object.entries(command.flags)) {
    projected.push({
      name,
      kind: await resolveFlagKind(flag),
      required: readFlagProperty(flag, 'required') === true,
      allowNo: readFlagProperty(flag, 'allowNo') === true,
    })
  }
  return projected
}

/**
 * Runs a compatibility command against an in-memory parser and HTTP recorder.
 *
 * The command constructor and authentication lifecycle are intentionally bypassed because
 * this test targets only the published flag-to-request contract. No credentials, config,
 * network, stdout, or production data are accessed.
 *
 * @param command Command class whose public request behavior is under test.
 * @param flags Artificial parsed flags supplied to the command.
 * @returns The captured request and the value forwarded to the shared output method.
 * @throws Error when the command does not perform a request.
 */
async function executeWithFlags(
  command: LegacyCommandClass,
  flags: Record<string, unknown>,
): Promise<CommandExecution> {
  const instance = Object.create(command.prototype) as { run(): Promise<void> }
  const recorder = new RequestRecorder()
  let output: unknown

  /** Returns the artificial parsed flags without invoking oclif argument processing. */
  async function parseFlags(): Promise<{ flags: Record<string, unknown> }> {
    return { flags }
  }

  /** Captures the command's structured output input without writing to stdout. */
  function captureOutput(value: unknown): void {
    output = value
  }

  Reflect.defineProperty(instance, 'parse', { value: parseFlags })
  Reflect.defineProperty(instance, 'client', { value: recorder })
  Reflect.defineProperty(instance, 'output', { value: captureOutput })

  await instance.run()
  if (recorder.request === undefined) throw new Error('Legacy command did not issue a request')
  return { output, request: recorder.request }
}

/**
 * Narrows a captured request payload to the object body produced by a POST command.
 *
 * @param value Captured request payload.
 * @returns The payload as a string-keyed object.
 * @throws Error when the compatibility command produced a non-object body.
 */
function requireRequestBody(value: unknown): Record<string, unknown> {
  if (typeof value !== 'object' || value === null || Array.isArray(value)) {
    throw new Error('Legacy POST body must be an object')
  }
  return value as Record<string, unknown>
}

describe('published CLI 0.1.58 command metadata', () => {
  for (const commandId of Object.keys(LEGACY_CLI_0_1_58_CONTRACT) as LegacyCommandId[]) {
    /** Verifies one command's ordered flag parser and help contract against the published baseline. */
    it(`preserves ${commandId}`, async () => {
      const command = LEGACY_COMMANDS[commandId]
      const expected = LEGACY_CLI_0_1_58_CONTRACT[commandId]

      expect(await projectFlags(command)).toEqual(expected.flags)
      expect(computeHelpHash(command)).toBe(expected.helpHash)
    })
  }
})

describe('published CLI 0.1.58 request behavior', () => {
  /** Verifies the CRM compatibility command keeps the original empty-query GET request. */
  it('preserves the Amazon account health GET request', async () => {
    const execution = await executeWithFlags(CrmCrmWebServiceGetAmazonAccHealthInfo, {})

    expect(execution.request).toEqual({
      method: 'get',
      path: '/crm-web-service/rpa/getAmazonAccHealthInfo',
      payload: { params: {} },
    })
    expect(execution.output).toBe(LEGACY_RESPONSE)
  })

  /** Verifies hot-product scalar, boolean, string-array, and integer-array mappings. */
  it('preserves the hot product listing POST request', async () => {
    const execution = await executeWithFlags(ProductErpMonitorHotProductAllListing, {
      platformId: 2,
      shopId: '1, 2, ,3',
      orderFiled: 'spuSevenOrdernum',
      outOfStock: true,
    })
    const body = requireRequestBody(execution.request.payload)

    expect(execution.request.method).toBe('post')
    expect(execution.request.path).toBe('/erpmonitor/erpmonitor/hotProductMonitor/hotProductAllListing')
    expect(Object.keys(body)).toEqual(Object.keys(ProductErpMonitorHotProductAllListing.flags))
    expect(body.platformId).toBe(2)
    expect(body.shopId).toEqual([1, 2, 3])
    expect(body.orderFiled).toBe('spuSevenOrdernum')
    expect(body.outOfStock).toBe(true)
    expect(execution.output).toBe(LEGACY_RESPONSE)
  })

  /** Verifies the product-list command keeps its historical string pagination fields. */
  it('preserves the product list POST request', async () => {
    const execution = await executeWithFlags(ProductErpProductProduct, {
      sku: 'SKU-EXAMPLE',
      page: '1',
      pageSize: '50',
    })
    const body = requireRequestBody(execution.request.payload)

    expect(execution.request.method).toBe('post')
    expect(execution.request.path).toBe('/erpProduct/erpProduct/product/product')
    expect(Object.keys(body)).toEqual(Object.keys(ProductErpProductProduct.flags))
    expect(body).toMatchObject({ sku: 'SKU-EXAMPLE', page: '1', pageSize: '50' })
    expect(execution.output).toBe(LEGACY_RESPONSE)
  })

  /** Verifies ranking arrays and allow-no booleans retain their old request representation. */
  it('preserves the shop manager ranking POST request', async () => {
    const execution = await executeWithFlags(PimInstudioPmsGetShopManagerRankingList, {
      times: '2026-07',
      grades: '1, 2',
      directors: 'employee-a, employee-b',
      submitStrategy: true,
    })
    const body = requireRequestBody(execution.request.payload)

    expect(execution.request.method).toBe('post')
    expect(execution.request.path).toBe('/yypms/pms/middlePanel/getShopManagerRankingList')
    expect(Object.keys(body)).toEqual(Object.keys(PimInstudioPmsGetShopManagerRankingList.flags))
    expect(body.grades).toEqual([1, 2])
    expect(body.directors).toEqual(['employee-a', 'employee-b'])
    expect(body.submitStrategy).toBe(true)
    expect(execution.output).toBe(LEGACY_RESPONSE)
  })

  /** Verifies the renamed SKU-manager endpoint remains available through its old command ID. */
  it('preserves the development dashboard list POST request', async () => {
    const execution = await executeWithFlags(PimInstudioPmsList, {
      skuOperList: 'employee-a, employee-b',
      companyId: 1,
    })
    const body = requireRequestBody(execution.request.payload)

    expect(execution.request.method).toBe('post')
    expect(execution.request.path).toBe('/yypms/pms/skuManager/list')
    expect(Object.keys(body)).toEqual(Object.keys(PimInstudioPmsList.flags))
    expect(body.skuOperList).toEqual(['employee-a', 'employee-b'])
    expect(body.companyId).toBe(1)
    expect(execution.output).toBe(LEGACY_RESPONSE)
  })
})
