import { mkdtemp, rm, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { tmpdir } from 'node:os'

import { afterEach, describe, expect, it } from 'vitest'

import { encodeRequestBody, requestBodyFieldsFromSchema } from '../request-body.js'

const temporaryDirectories: string[] = []

afterEach(async () => {
  await Promise.all(temporaryDirectories.splice(0).map((path) => rm(path, { recursive: true, force: true })))
})

describe('request body encoder', () => {
  /** Verifies NONE, empty-model JSON, and XML all use their distinct wire contracts. */
  it('encodes interface-level NONE, JSON, and XML modes', async () => {
    await expect(encodeRequestBody({ mode: 'NONE', fields: [] }, undefined)).resolves.toEqual({})

    const json = await encodeRequestBody({ mode: 'JSON', fields: [] }, { page: 1 })
    expect(json).toEqual({ body: { page: 1 }, headers: { 'Content-Type': 'application/json' } })

    const xml = await encodeRequestBody({
      mode: 'XML',
      fields: [{ name: 'xml', valueKind: 'VALUE', children: [] }],
    }, '<request/>')
    expect(xml).toEqual({ body: '<request/>', headers: { 'Content-Type': 'application/xml' } })
  })

  /** Verifies nested form objects use the configured BRACKET keys and repeated exploded arrays. */
  it('encodes nested urlencoded fields deterministically', async () => {
    const encoded = await encodeRequestBody({
      mode: 'FORM_URLENCODED',
      charset: 'utf-8',
      fields: [{
        name: 'filter',
        type: 'object',
        serializationStyle: 'BRACKET',
        children: [
          { name: 'status', children: [] },
          { name: 'tags', type: 'array', explode: true, children: [] },
        ],
      }],
    }, { filter: { status: 'open', tags: ['a', 'b'] } })

    expect(encoded.body).toBe('filter%5Bstatus%5D=open&filter%5Btags%5D=a&filter%5Btags%5D=b')
    expect(encoded.headers).toEqual({
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
    })
  })

  /** Verifies a non-exploded object remains one bounded form value instead of being silently expanded. */
  it('encodes a non-exploded form object as one JSON value', async () => {
    const encoded = await encodeRequestBody({
      mode: 'FORM_URLENCODED',
      fields: [{
        name: 'filter',
        type: 'object',
        serializationStyle: 'BRACKET',
        explode: false,
        children: [{ name: 'status', children: [] }],
      }],
    }, { filter: { status: 'open' } })

    expect(encoded.body).toBe('filter=%7B%22status%22%3A%22open%22%7D')
  })

  /** Verifies multipart supports ordinary values, bounded files, fixed names, and independent part types. */
  it('encodes multipart files and per-part metadata without exposing the source path', async () => {
    const directory = await mkdtemp(join(tmpdir(), 'mbs-body-'))
    temporaryDirectories.push(directory)
    const source = join(directory, 'source.bin')
    await writeFile(source, Buffer.from('file-content'))

    const encoded = await encodeRequestBody({
      mode: 'MULTIPART',
      fields: [
        { name: 'title', valueKind: 'VALUE', partContentType: 'text/plain; charset=UTF-8', children: [] },
        {
          name: 'attachment',
          valueKind: 'FILE',
          filenamePolicy: 'FIXED',
          partFilename: 'contract.pdf',
          partContentType: 'application/pdf',
          children: [],
        },
        { name: 'digest', valueKind: 'BINARY', filenamePolicy: 'OMIT', children: [] },
      ],
    }, { title: 'hello', attachment: source, digest: Buffer.from('hash').toString('base64') })

    const payload = (encoded.body as Buffer).toString('utf8')
    expect(encoded.headers?.['Content-Type']).toMatch(/^multipart\/form-data; boundary=mbs-/u)
    expect(payload).toContain('name="title"')
    expect(payload).toContain('filename="contract.pdf"')
    expect(payload).toContain('Content-Type: application/pdf')
    expect(payload).toContain('file-content')
    expect(payload).toContain('name="digest"')
    expect(payload).not.toContain(source)
  })

  /** Verifies raw text and binary modes keep text untouched and reject noncanonical Base64. */
  it('encodes raw text and strict binary bodies', async () => {
    const text = await encodeRequestBody({
      mode: 'TEXT',
      fields: [{ name: 'content', valueKind: 'VALUE', children: [] }],
    }, '原始文本')
    expect(text.body).toBe('原始文本')
    expect(text.headers).toEqual({ 'Content-Type': 'text/plain' })

    const binary = await encodeRequestBody({
      mode: 'BINARY',
      fields: [{ name: 'content', valueKind: 'BINARY', children: [] }],
    }, 'AAEC')
    expect(binary.body).toEqual(Buffer.from([0, 1, 2]))
    await expect(encodeRequestBody({
      mode: 'BINARY',
      fields: [{ name: 'content', valueKind: 'BINARY', children: [] }],
    }, 'AAE')).rejects.toThrow('strict Base64')
  })

  /** Verifies manifest extensions survive schema conversion into the common encoder field tree. */
  it('converts manifest field extensions', () => {
    const fields = requestBodyFieldsFromSchema({
      type: 'object',
      required: ['attachment'],
      properties: {
        attachment: {
          type: 'string',
          valueKind: 'FILE',
          partContentType: 'application/pdf',
          filenamePolicy: 'SOURCE_BASENAME',
        },
      },
    })

    expect(fields).toEqual([{
      name: 'attachment',
      type: 'string',
      required: true,
      valueKind: 'FILE',
      partContentType: 'application/pdf',
      filenamePolicy: 'SOURCE_BASENAME',
      children: [],
    }])
  })

  /** Verifies unsupported charsets and file failures remain fail-closed and do not echo paths. */
  it('rejects unsupported charset and sanitizes file errors', async () => {
    await expect(encodeRequestBody({
      mode: 'XML',
      charset: 'GBK',
      fields: [{ name: 'xml', valueKind: 'VALUE', children: [] }],
    }, '<root/>')).rejects.toThrow('only UTF-8')

    const privatePath = join(tmpdir(), 'private-request-body-does-not-exist.bin')
    let message = ''
    try {
      await encodeRequestBody({
        mode: 'BINARY',
        fields: [{ name: 'payload', valueKind: 'FILE', children: [] }],
      }, privatePath)
    } catch (error) {
      message = (error as Error).message
    }
    expect(message).toContain('file is unavailable')
    expect(message).not.toContain(privatePath)
  })
})
