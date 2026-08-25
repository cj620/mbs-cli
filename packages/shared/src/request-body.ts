import { randomBytes } from 'node:crypto'
import { open } from 'node:fs/promises'
import { basename } from 'node:path'

import { MBSError } from './errors.js'

/** Supported interface-level request body encodings. */
export type RequestBodyMode =
  | 'NONE'
  | 'JSON'
  | 'FORM_URLENCODED'
  | 'MULTIPART'
  | 'TEXT'
  | 'XML'
  | 'BINARY'

/** Runtime interpretation of one body field value. */
export type RequestBodyValueKind = 'VALUE' | 'FILE' | 'BINARY'

/** Key serialization strategy for one composite form field. */
export type FormSerializationStyle = 'FLAT' | 'DOT' | 'BRACKET' | 'JSON_STRING'

/** Content-Disposition filename behavior for a multipart part. */
export type MultipartFilenamePolicy = 'SOURCE_BASENAME' | 'FIXED' | 'OMIT'

/**
 * One sanitized body field definition returned by describe or manifest metadata.
 *
 * <p>`children` contains only schema nodes and never runtime values. File paths and body bytes are
 * supplied separately for one invocation, while the remaining optional properties describe how
 * that value is serialized.</p>
 */
export interface RequestBodyFieldDefinition {
  /** API field or multipart part name. */
  name: string
  /** Optional schema type used to recognize composite object and array fields. */
  type?: string
  /** Whether omission of this field must fail before transport. */
  required?: boolean
  /** Runtime input interpretation; defaults to an ordinary value. */
  valueKind?: RequestBodyValueKind
  /** Key strategy used only for composite urlencoded or multipart values. */
  serializationStyle?: FormSerializationStyle
  /** Whether a composite value expands to child entries; false encodes objects as JSON and scalar arrays as comma-joined text. */
  explode?: boolean
  /** Optional Content-Type emitted for this multipart part only. */
  partContentType?: string
  /** Optional Content-Disposition filename behavior for file or Base64 parts. */
  filenamePolicy?: MultipartFilenamePolicy
  /** Safe protocol filename required only by the FIXED policy. */
  partFilename?: string
  /** Ordered nested schema fields. */
  children: RequestBodyFieldDefinition[]
}

/** Complete authoritative contract needed to turn one runtime value into HTTP bytes. */
export interface RequestBodyDefinition {
  /** Interface-level wire encoding. */
  mode: RequestBodyMode
  /** Main Content-Type without charset or multipart boundary. */
  mediaType?: string
  /** Optional text charset; the current encoder accepts only UTF-8. */
  charset?: string
  /** Ordered body field tree, empty only for NONE or an explicit empty JSON model. */
  fields: RequestBodyFieldDefinition[]
}

/** Explicit per-invocation options; neither value is persisted or logged by the encoder. */
export interface EncodeRequestBodyOptions {
  /** Local file used as the whole TEXT, XML, or BINARY request body. */
  bodyFile?: string
  /** Security boundary used by local serve routes to prohibit filesystem reads. */
  allowFileReads?: boolean
}

/** Only the Content-Type header may be supplied by the request body encoder. */
export interface RequestContentHeaders {
  'Content-Type': string
}

/** Encoded transport payload and its allowlisted content header. */
export interface EncodedRequestBody {
  body?: unknown
  headers?: RequestContentHeaders
}

/** One ordered logical form entry before urlencoded or multipart byte serialization. */
interface FormEntry {
  /** Final wire key after nested serialization is applied. */
  name: string
  /** Runtime value; file and Base64 interpretation is deferred to multipart encoding. */
  value: unknown
  /** Sanitized schema metadata that governs this entry. */
  field: RequestBodyFieldDefinition
}

/** Bounded local file bytes and the basename allowed for protocol filename generation. */
interface FileContent {
  /** File bytes read after type and size checks. */
  data: Buffer
  /** Source basename only; the runtime path is intentionally discarded. */
  sourceBasename: string
}

const MAX_BODY_TEXT_LENGTH = 1_000_000
const MAX_FILE_BYTES = 50 * 1024 * 1024
const MAX_MULTIPART_BYTES = 100 * 1024 * 1024
const TOKEN_MEDIA_TYPE = /^[A-Za-z0-9!#$&^_.+\-]+\/[A-Za-z0-9!#$&^_.+\-]+$/u
const BASE64 = /^(?:[A-Za-z0-9+/]{4})*(?:[A-Za-z0-9+/]{2}==|[A-Za-z0-9+/]{3}=)?$/u

const DEFAULT_MEDIA_TYPES: Record<Exclude<RequestBodyMode, 'NONE'>, string> = {
  JSON: 'application/json',
  FORM_URLENCODED: 'application/x-www-form-urlencoded',
  MULTIPART: 'multipart/form-data',
  TEXT: 'text/plain',
  XML: 'application/xml',
  BINARY: 'application/octet-stream',
}

/**
 * Encodes runtime input according to authoritative interface metadata.
 *
 * <p>The function accepts no arbitrary headers, never logs values or paths, bounds every
 * string/file allocation, and generates multipart boundaries locally. JSON/form/multipart
 * inputs are object-shaped values; TEXT/XML accept raw text; BINARY accepts strict Base64.
 * `bodyFile` is an explicit alternative only for raw text, XML, or binary bodies.</p>
 *
 * @param definition Validated interface-level mode and body field tree.
 * @param input Runtime body value collected from CLI flags or a local serve request.
 * @param options Optional explicit raw-file source and caller-specific filesystem permission.
 * @returns Transport bytes/value plus an encoder-owned Content-Type header.
 * @throws MBSError when metadata, runtime shape, encoding, or bounded file input is invalid.
 */
export async function encodeRequestBody(
  definition: RequestBodyDefinition,
  input: unknown,
  options: EncodeRequestBodyOptions = {},
): Promise<EncodedRequestBody> {
  const mode = normalizeMode(definition.mode)
  const mediaType = normalizeMediaType(mode, definition.mediaType)
  const charset = normalizeCharset(mode, definition.charset)
  const fields = normalizeFields(definition.fields)
  validateFieldContract(mode, fields)

  if (mode === 'NONE') {
    if (input !== undefined || options.bodyFile !== undefined) {
      throw validationError('NONE request body mode does not accept body input')
    }
    return {}
  }
  if (mode === 'JSON') {
    rejectBodyFile(options)
    const value = input === undefined ? {} : input
    validateRequiredFields(fields, value)
    return { body: value, headers: contentTypeHeader(mediaType, charset) }
  }
  if (mode === 'FORM_URLENCODED') {
    rejectBodyFile(options)
    const record = requireRecordInput(input ?? {}, mode)
    validateRequiredFields(fields, record)
    const entries = collectFormEntries(fields, record)
    const encoded = new URLSearchParams()
    for (const entry of entries) encoded.append(entry.name, scalarText(entry.value))
    return { body: encoded.toString(), headers: contentTypeHeader(mediaType, charset) }
  }
  if (mode === 'MULTIPART') {
    rejectBodyFile(options)
    const record = requireRecordInput(input ?? {}, mode)
    validateRequiredFields(fields, record)
    return encodeMultipart(mediaType, fields, record, options.allowFileReads !== false)
  }
  if (mode === 'TEXT' || mode === 'XML') {
    const value = await resolveRawText(fields, input, options.bodyFile, options.allowFileReads !== false)
    return { body: value, headers: contentTypeHeader(mediaType, charset) }
  }

  const value = await resolveRawBinary(fields, input, options.bodyFile, options.allowFileReads !== false)
  return { body: value, headers: contentTypeHeader(mediaType) }
}

/**
 * Converts a manifest JSON-schema body node into the field-tree shape consumed by the encoder.
 *
 * <p>The server emits top-level body fields as object properties. Unknown extensions are ignored;
 * only the explicit encoding properties are copied. The encoder performs a second validation pass
 * before any bytes are created.</p>
 *
 * @param schema Untrusted manifest body schema.
 * @returns Body fields in stable manifest property order.
 */
export function requestBodyFieldsFromSchema(schema: unknown): RequestBodyFieldDefinition[] {
  const root = asRecord(schema)
  if (root.type === 'object') {
    return fieldsFromProperties(root.properties, stringSet(root.required))
  }
  if (typeof root.name === 'string' && root.name.trim()) {
    return [fieldFromSchema(root.name, root, false)]
  }
  return []
}

/**
 * Normalizes and validates the interface-level mode code.
 *
 * @param value Candidate mode from backend metadata.
 * @returns Stable uppercase request body mode.
 * @throws MBSError when the mode is absent or unsupported.
 */
function normalizeMode(value: unknown): RequestBodyMode {
  const normalized = typeof value === 'string' ? value.trim().toUpperCase() : ''
  const supported: RequestBodyMode[] = [
    'NONE', 'JSON', 'FORM_URLENCODED', 'MULTIPART', 'TEXT', 'XML', 'BINARY',
  ]
  if (!supported.includes(normalized as RequestBodyMode)) {
    throw validationError('request body mode is invalid')
  }
  return normalized as RequestBodyMode
}

/**
 * Validates the main media type and checks it against the selected body mode.
 *
 * @param mode Normalized request body mode.
 * @param value Optional main media type without parameters.
 * @returns Lowercase compatible media type, or an empty string for NONE.
 * @throws MBSError for malformed, parameterized, or mode-incompatible values.
 */
function normalizeMediaType(mode: RequestBodyMode, value: unknown): string {
  if (mode === 'NONE') {
    if (value !== undefined && value !== null && String(value).trim()) {
      throw validationError('NONE request body mode cannot define a media type')
    }
    return ''
  }
  const mediaType = (typeof value === 'string' && value.trim()
    ? value.trim()
    : DEFAULT_MEDIA_TYPES[mode]).toLowerCase()
  if (mediaType.length > 255 || mediaType.includes(';') || hasControlCharacter(mediaType)
    || !TOKEN_MEDIA_TYPE.test(mediaType) || !modeSupportsMediaType(mode, mediaType)) {
    throw validationError('request body media type is invalid for its mode')
  }
  return mediaType
}

/**
 * Checks whether a normalized main media type belongs to one request body mode.
 *
 * @param mode Normalized request body mode.
 * @param mediaType Lowercase main media type without parameters.
 * @returns Whether the pair is supported by the public contract.
 */
function modeSupportsMediaType(mode: RequestBodyMode, mediaType: string): boolean {
  if (mode === 'JSON') return mediaType === 'application/json' || mediaType.endsWith('+json')
  if (mode === 'XML') {
    return mediaType === 'application/xml' || mediaType === 'text/xml' || mediaType.endsWith('+xml')
  }
  return mode !== 'NONE' && DEFAULT_MEDIA_TYPES[mode] === mediaType
}

/**
 * Restricts explicit text encodings to UTF-8 and rejects charset use for byte-oriented modes.
 *
 * @param mode Normalized body mode.
 * @param value Optional backend charset value.
 * @returns Canonical UTF-8 or undefined.
 * @throws MBSError when the charset cannot be encoded safely by this CLI version.
 */
function normalizeCharset(mode: RequestBodyMode, value: unknown): 'UTF-8' | undefined {
  if (value === undefined || value === null || String(value).trim() === '') return undefined
  if (mode === 'NONE' || mode === 'MULTIPART' || mode === 'BINARY') {
    throw validationError('request body charset is not supported for its mode')
  }
  const compact = String(value).trim().replace(/[-_]/gu, '').toLowerCase()
  if (compact !== 'utf8') {
    throw validationError('this CLI supports only UTF-8 request body text')
  }
  return 'UTF-8'
}

/**
 * Validates and defensively copies the field tree with bounded depth and breadth.
 *
 * @param fields Candidate body field collection.
 * @param depth Current recursion depth.
 * @returns Safe field collection preserving original order.
 * @throws MBSError when the field contract is malformed or unreasonably large.
 */
function normalizeFields(fields: unknown, depth = 0): RequestBodyFieldDefinition[] {
  if (!Array.isArray(fields) || depth > 32 || fields.length > 5_000) {
    throw validationError('request body field metadata is invalid')
  }
  return fields.map((candidate) => {
    const field = asRecord(candidate)
    const name = typeof field.name === 'string' ? field.name.trim() : ''
    if (!name || name.length > 255 || hasControlCharacter(name)) {
      throw validationError('request body field metadata is invalid')
    }
    const valueKind = optionalEnum<RequestBodyValueKind>(field.valueKind, ['VALUE', 'FILE', 'BINARY']) ?? 'VALUE'
    const serializationStyle = optionalEnum<FormSerializationStyle>(
      field.serializationStyle,
      ['FLAT', 'DOT', 'BRACKET', 'JSON_STRING'],
    )
    const filenamePolicy = optionalEnum<MultipartFilenamePolicy>(
      field.filenamePolicy,
      ['SOURCE_BASENAME', 'FIXED', 'OMIT'],
    )
    const partContentType = optionalSafeContentType(field.partContentType)
    const partFilename = optionalSafeFilename(field.partFilename)
    if (filenamePolicy === 'FIXED' && !partFilename) {
      throw validationError('fixed multipart filename metadata is incomplete')
    }
    return {
      name,
      ...(typeof field.type === 'string' ? { type: field.type } : {}),
      ...(typeof field.required === 'boolean' ? { required: field.required } : {}),
      valueKind,
      ...(serializationStyle ? { serializationStyle } : {}),
      ...(typeof field.explode === 'boolean' ? { explode: field.explode } : {}),
      ...(partContentType ? { partContentType } : {}),
      ...(filenamePolicy ? { filenamePolicy } : {}),
      ...(partFilename ? { partFilename } : {}),
      children: normalizeFields(field.children ?? [], depth + 1),
    }
  })
}

/**
 * Revalidates mode-specific field combinations at the final byte-encoding boundary.
 *
 * <p>This duplicates the server's persistence rules deliberately: describe and manifest data are
 * remote inputs, so a compromised or stale definition cannot reinterpret file paths, Base64, part
 * headers, or nested serialization under a different mode.</p>
 *
 * @param mode Validated interface request body mode.
 * @param fields Sanitized body field tree.
 * @throws MBSError when value kinds or field extensions conflict with the selected mode.
 */
function validateFieldContract(mode: RequestBodyMode, fields: RequestBodyFieldDefinition[]): void {
  if (mode === 'NONE') {
    if (fields.length > 0) throw validationError('NONE request body metadata cannot contain fields')
    return
  }
  if (mode !== 'JSON' && fields.length === 0) {
    throw validationError('request body field metadata is incomplete')
  }
  if (mode === 'TEXT' || mode === 'XML' || mode === 'BINARY') {
    const field = fields[0]
    if (fields.length !== 1 || field.children.length > 0 || field.type === 'object' || field.type === 'array') {
      throw validationError('raw request body metadata must contain one scalar field')
    }
  }
  for (const field of flattenFields(fields)) {
    const composite = field.children.length > 0 || field.type === 'object' || field.type === 'array'
    const kind = field.valueKind ?? 'VALUE'
    const formMode = mode === 'FORM_URLENCODED' || mode === 'MULTIPART'
    if (!formMode && (field.serializationStyle !== undefined || field.explode !== undefined)) {
      throw validationError('request body field metadata conflicts with its mode')
    }
    if (formMode && !composite
      && (field.serializationStyle !== undefined || field.explode !== undefined)) {
      throw validationError('scalar form fields cannot define composite serialization')
    }
    if (mode !== 'MULTIPART'
      && (field.partContentType || field.filenamePolicy || field.partFilename)) {
      throw validationError('multipart field metadata conflicts with its mode')
    }
    if ((mode === 'JSON' || mode === 'FORM_URLENCODED') && kind !== 'VALUE') {
      throw validationError('structured request body field value kind is invalid')
    }
    if ((mode === 'TEXT' || mode === 'XML') && kind !== 'VALUE' && kind !== 'FILE') {
      throw validationError('raw text request body field value kind is invalid')
    }
    if (mode === 'BINARY' && kind !== 'FILE' && kind !== 'BINARY') {
      throw validationError('binary request body field value kind is invalid')
    }
    if (mode === 'MULTIPART') validateMultipartFieldContract(field, kind, composite)
  }
}

/**
 * Validates filename and leaf constraints for one multipart field.
 *
 * @param field Sanitized multipart field.
 * @param kind Runtime value interpretation.
 * @param composite Whether the field contains or represents nested values.
 * @throws MBSError when file/binary metadata could be interpreted ambiguously.
 */
function validateMultipartFieldContract(
  field: RequestBodyFieldDefinition,
  kind: RequestBodyValueKind,
  composite: boolean,
): void {
  if (kind === 'VALUE') {
    if (field.filenamePolicy || field.partFilename) {
      throw validationError('ordinary multipart fields cannot define a filename')
    }
    return
  }
  if (composite) throw validationError('multipart file and binary fields must be leaves')
  const policy = field.filenamePolicy ?? (kind === 'FILE' ? 'SOURCE_BASENAME' : 'OMIT')
  if (kind === 'BINARY' && policy === 'SOURCE_BASENAME') {
    throw validationError('Base64 multipart fields cannot use a source filename')
  }
  if (policy === 'FIXED' && !field.partFilename) {
    throw validationError('fixed multipart filename metadata is incomplete')
  }
  if (policy !== 'FIXED' && field.partFilename) {
    throw validationError('multipart filename metadata conflicts with its policy')
  }
}

/**
 * Flattens a bounded sanitized field tree for mode-combination checks.
 *
 * @param fields Current field collection.
 * @returns Preorder list containing every field once.
 */
function flattenFields(fields: RequestBodyFieldDefinition[]): RequestBodyFieldDefinition[] {
  return fields.flatMap((field) => [field, ...flattenFields(field.children)])
}

/**
 * Copies one optional uppercase enum value only when it belongs to an allowlist.
 *
 * @param value Candidate primitive value.
 * @param allowed Stable allowed enum codes.
 * @returns Normalized code or undefined for an absent value.
 * @throws MBSError when a present value is unsupported.
 */
function optionalEnum<T extends string>(value: unknown, allowed: readonly T[]): T | undefined {
  if (value === undefined || value === null || String(value).trim() === '') return undefined
  const normalized = String(value).trim().toUpperCase() as T
  if (!allowed.includes(normalized)) throw validationError('request body field metadata is invalid')
  return normalized
}

/**
 * Validates an optional multipart part Content-Type without accepting header injection.
 *
 * @param value Candidate field metadata.
 * @returns Trimmed Content-Type or undefined.
 * @throws MBSError when the value is malformed, too long, or contains controls.
 */
function optionalSafeContentType(value: unknown): string | undefined {
  if (value === undefined || value === null || String(value).trim() === '') return undefined
  const normalized = String(value).trim()
  const mainType = normalized.split(';', 1)[0].trim()
  if (normalized.length > 255 || hasControlCharacter(normalized) || !TOKEN_MEDIA_TYPE.test(mainType)) {
    throw validationError('multipart part Content-Type metadata is invalid')
  }
  return normalized
}

/**
 * Validates a protocol filename while refusing paths and header controls.
 *
 * @param value Candidate fixed filename.
 * @returns Safe filename or undefined.
 * @throws MBSError when a path, dot-directory, oversized value, or control is present.
 */
function optionalSafeFilename(value: unknown): string | undefined {
  if (value === undefined || value === null || String(value).trim() === '') return undefined
  const normalized = String(value).trim()
  if (normalized.length > 255 || normalized === '.' || normalized === '..'
    || normalized.includes('/') || normalized.includes('\\') || hasControlCharacter(normalized)) {
    throw validationError('multipart filename metadata is invalid')
  }
  return normalized
}

/**
 * Ensures a body mode receives a JSON object rather than arrays or scalars.
 *
 * @param input Runtime value.
 * @param mode Mode used only in a stable validation message.
 * @returns Runtime object.
 * @throws MBSError when the shape is not an object.
 */
function requireRecordInput(input: unknown, mode: RequestBodyMode): Record<string, unknown> {
  if (!isRecord(input)) throw validationError(`${mode} request body input must be a JSON object`)
  return input
}

/**
 * Rejects `bodyFile` for structured modes before filesystem access occurs.
 *
 * @param options Runtime encoder options.
 * @throws MBSError when a structured body tries to use a raw file.
 */
function rejectBodyFile(options: EncodeRequestBodyOptions): void {
  if (options.bodyFile !== undefined) {
    throw validationError('--body-file is supported only for TEXT, XML, or BINARY request bodies')
  }
}

/**
 * Validates required field presence recursively without logging field values.
 *
 * @param fields Sanitized field definitions.
 * @param value Runtime value at the current field level.
 * @throws MBSError when any required value is missing.
 */
function validateRequiredFields(fields: RequestBodyFieldDefinition[], value: unknown): void {
  if (!isRecord(value)) {
    if (fields.some((field) => field.required)) throw validationError('required request body fields are missing')
    return
  }
  for (const field of fields) {
    const childValue = value[field.name]
    if (field.required && (childValue === undefined || childValue === null)) {
      throw validationError('required request body fields are missing')
    }
    if (childValue !== undefined && childValue !== null && field.children.length > 0) {
      if (Array.isArray(childValue)) {
        for (const item of childValue) validateRequiredFields(field.children, item)
      } else {
        validateRequiredFields(field.children, childValue)
      }
    }
  }
}

/**
 * Flattens structured form input according to each composite field's key strategy.
 *
 * @param fields Sanitized top-level body fields.
 * @param input Runtime body object.
 * @returns Ordered scalar/file entries for urlencoded or multipart encoding.
 */
function collectFormEntries(
  fields: RequestBodyFieldDefinition[],
  input: Record<string, unknown>,
): FormEntry[] {
  const entries: FormEntry[] = []
  for (const field of fields) {
    appendFormField(entries, field, input[field.name], field.name)
  }
  return entries
}

/**
 * Recursively appends one form field using BRACKET as the safe composite default.
 *
 * @param entries Mutable ordered output collection.
 * @param field Current sanitized field definition.
 * @param value Runtime value for the current field.
 * @param key Current serialized key path.
 * @remarks With `explode=false`, objects and arrays with child definitions become one JSON value;
 * scalar arrays become one comma-joined value. The default expands them into repeated or child entries.
 */
function appendFormField(
  entries: FormEntry[],
  field: RequestBodyFieldDefinition,
  value: unknown,
  key: string,
): void {
  if (value === undefined || value === null) return
  const composite = field.children.length > 0 || isRecord(value) || Array.isArray(value)
  const style = field.serializationStyle ?? 'BRACKET'
  if (composite && style === 'JSON_STRING') {
    entries.push({ name: key, value: boundedJson(value), field })
    return
  }
  if (field.explode === false && (isRecord(value) || (Array.isArray(value) && field.children.length > 0))) {
    entries.push({ name: key, value: boundedJson(value), field })
    return
  }
  if (Array.isArray(value)) {
    if (field.children.length === 0) {
      if (field.explode === false) entries.push({ name: key, value: value.map(scalarText).join(','), field })
      else for (const item of value) entries.push({ name: key, value: item, field })
      return
    }
    value.forEach((item, index) => {
      for (const child of field.children) {
        appendFormField(entries, child, isRecord(item) ? item[child.name] : undefined,
          childKey(key, child.name, style, index))
      }
    })
    return
  }
  if (isRecord(value)) {
    const children = field.children.length > 0
      ? field.children
      : Object.keys(value).map((name) => ({ name, children: [] } satisfies RequestBodyFieldDefinition))
    for (const child of children) {
      appendFormField(entries, child, value[child.name], childKey(key, child.name, style))
    }
    return
  }
  entries.push({ name: key, value, field })
}

/**
 * Builds one nested form key for object or array children.
 *
 * @param parent Serialized parent key.
 * @param child Child field name.
 * @param style Composite serialization strategy.
 * @param index Optional array element index.
 * @returns Serialized child key.
 */
function childKey(
  parent: string,
  child: string,
  style: FormSerializationStyle,
  index?: number,
): string {
  if (style === 'FLAT') return child
  if (style === 'DOT') return `${parent}${index === undefined ? '' : `.${index}`}.${child}`
  return `${parent}${index === undefined ? '' : `[${index}]`}[${child}]`
}

/**
 * Converts a form scalar to stable text without accepting objects implicitly.
 *
 * @param value Runtime scalar value.
 * @returns String representation used on the wire.
 * @throws MBSError for object values that lack an explicit composite strategy.
 */
function scalarText(value: unknown): string {
  if (value === null) return ''
  if (typeof value === 'string') {
    if (value.length > MAX_BODY_TEXT_LENGTH) throw validationError('request body value is too large')
    return value
  }
  if (typeof value === 'number' || typeof value === 'boolean' || typeof value === 'bigint') return String(value)
  throw validationError('request body field value is not serializable')
}

/**
 * JSON-stringifies a composite form value while enforcing the public text bound.
 *
 * @param value Runtime object or array.
 * @returns Bounded JSON text.
 * @throws MBSError when serialization fails or exceeds the configured limit.
 */
function boundedJson(value: unknown): string {
  try {
    const text = JSON.stringify(value)
    if (text === undefined || text.length > MAX_BODY_TEXT_LENGTH) throw new Error('invalid')
    return text
  } catch {
    throw validationError('request body composite value is not serializable')
  }
}

/**
 * Builds multipart bytes with a cryptographically random boundary and per-part metadata.
 *
 * @param mediaType Validated multipart main media type.
 * @param fields Sanitized body fields.
 * @param input Runtime object containing scalar, file-path, or Base64 values.
 * @param allowFileReads Whether this trusted caller permits runtime filesystem input.
 * @returns Complete multipart body and Content-Type header.
 * @throws MBSError when file/Base64 data or the final payload exceeds safety limits.
 */
async function encodeMultipart(
  mediaType: string,
  fields: RequestBodyFieldDefinition[],
  input: Record<string, unknown>,
  allowFileReads: boolean,
): Promise<EncodedRequestBody> {
  const boundary = `mbs-${randomBytes(18).toString('hex')}`
  const entries = collectFormEntries(fields, input)
  const chunks: Buffer[] = []
  let total = 0
  for (const entry of entries) {
    const part = await encodeMultipartPart(boundary, entry, allowFileReads)
    total += part.length
    if (total > MAX_MULTIPART_BYTES) throw validationError('multipart request body is too large')
    chunks.push(part)
  }
  const closing = Buffer.from(`--${boundary}--\r\n`, 'utf8')
  total += closing.length
  if (total > MAX_MULTIPART_BYTES) throw validationError('multipart request body is too large')
  chunks.push(closing)
  return {
    body: Buffer.concat(chunks, total),
    headers: { 'Content-Type': `${mediaType}; boundary=${boundary}` },
  }
}

/**
 * Encodes one multipart part, including safe Content-Disposition filename behavior.
 *
 * @param boundary Current request boundary.
 * @param entry Flattened field entry.
 * @param allowFileReads Whether this trusted caller permits runtime filesystem input.
 * @returns Complete part bytes ending in CRLF.
 */
async function encodeMultipartPart(
  boundary: string,
  entry: FormEntry,
  allowFileReads: boolean,
): Promise<Buffer> {
  const kind = entry.field.valueKind ?? 'VALUE'
  let data: Buffer
  let sourceBasename: string | undefined
  if (kind === 'FILE') {
    if (!allowFileReads) throw validationError('local gateway requests cannot read body files')
    if (typeof entry.value !== 'string' || !entry.value) throw validationError('multipart file input is invalid')
    const file = await readBoundedFile(entry.value)
    data = file.data
    sourceBasename = file.sourceBasename
  } else if (kind === 'BINARY') {
    if (typeof entry.value !== 'string') throw validationError('multipart binary input must be Base64')
    data = decodeStrictBase64(entry.value)
  } else {
    data = Buffer.from(scalarText(entry.value), 'utf8')
  }

  const filename = resolvePartFilename(entry.field, sourceBasename)
  let disposition = `Content-Disposition: form-data; name="${quoteHeaderValue(entry.name)}"`
  if (filename !== undefined) disposition += `; filename="${quoteHeaderValue(filename)}"`
  const contentType = entry.field.partContentType
    ?? (kind === 'FILE' || kind === 'BINARY' ? 'application/octet-stream' : undefined)
  const headers = [disposition, ...(contentType ? [`Content-Type: ${contentType}`] : [])]
  return Buffer.concat([
    Buffer.from(`--${boundary}\r\n${headers.join('\r\n')}\r\n\r\n`, 'utf8'),
    data,
    Buffer.from('\r\n', 'utf8'),
  ])
}

/**
 * Applies the configured multipart filename policy to one file or binary part.
 *
 * @param field Sanitized body field metadata.
 * @param sourceBasename Basename obtained from a FILE runtime path.
 * @returns Filename to emit, or undefined when filename must be omitted.
 * @throws MBSError when the selected policy lacks its required source.
 */
function resolvePartFilename(
  field: RequestBodyFieldDefinition,
  sourceBasename?: string,
): string | undefined {
  const defaultPolicy: MultipartFilenamePolicy = field.valueKind === 'FILE' ? 'SOURCE_BASENAME' : 'OMIT'
  const policy = field.filenamePolicy ?? defaultPolicy
  if (policy === 'OMIT') return undefined
  if (policy === 'FIXED') {
    if (!field.partFilename) throw validationError('fixed multipart filename metadata is incomplete')
    return field.partFilename
  }
  if (!sourceBasename) throw validationError('multipart source filename is unavailable')
  return optionalSafeFilename(sourceBasename)
}

/**
 * Escapes a validated quoted HTTP header parameter value.
 *
 * @param value Field name or protocol filename.
 * @returns Backslash-escaped quoted-string contents.
 * @throws MBSError if a control character is present.
 */
function quoteHeaderValue(value: string): string {
  if (hasControlCharacter(value)) throw validationError('multipart header metadata is invalid')
  return value.replace(/\\/gu, '\\\\').replace(/"/gu, '\\"')
}

/**
 * Resolves a TEXT/XML body from an explicit file, a raw string, or its sole field value.
 *
 * @param fields Sanitized raw-body field definition.
 * @param input Runtime input.
 * @param bodyFile Optional explicit file path.
 * @param allowFileReads Whether this trusted caller permits runtime filesystem input.
 * @returns UTF-8 text.
 * @throws MBSError for ambiguity, invalid UTF-8, missing input, or excessive size.
 */
async function resolveRawText(
  fields: RequestBodyFieldDefinition[],
  input: unknown,
  bodyFile?: string,
  allowFileReads = true,
): Promise<string> {
  if (bodyFile !== undefined && input !== undefined) {
    throw validationError('use either --body or --body-file, not both')
  }
  if (bodyFile !== undefined) {
    if (!allowFileReads) throw validationError('local gateway requests cannot read body files')
    return decodeUtf8((await readBoundedFile(bodyFile)).data)
  }
  const field = requireSingleRawField(fields)
  const value = rawFieldValue(field, input)
  if (field.valueKind === 'FILE') {
    if (!allowFileReads) throw validationError('local gateway requests cannot read body files')
    if (typeof value !== 'string' || !value) throw validationError('raw text file input is invalid')
    return decodeUtf8((await readBoundedFile(value)).data)
  }
  if (typeof value !== 'string' || value.length > MAX_BODY_TEXT_LENGTH) {
    throw validationError('raw text request body is invalid')
  }
  return value
}

/**
 * Resolves a BINARY body from an explicit file or the sole field's FILE/Base64 value.
 *
 * @param fields Sanitized binary field definition.
 * @param input Runtime input.
 * @param bodyFile Optional explicit file path.
 * @param allowFileReads Whether this trusted caller permits runtime filesystem input.
 * @returns Raw binary bytes.
 * @throws MBSError for ambiguity, invalid Base64/file input, or excessive size.
 */
async function resolveRawBinary(
  fields: RequestBodyFieldDefinition[],
  input: unknown,
  bodyFile?: string,
  allowFileReads = true,
): Promise<Buffer> {
  if (bodyFile !== undefined && input !== undefined) {
    throw validationError('use either --body or --body-file, not both')
  }
  if (bodyFile !== undefined) {
    if (!allowFileReads) throw validationError('local gateway requests cannot read body files')
    return (await readBoundedFile(bodyFile)).data
  }
  const field = requireSingleRawField(fields)
  const value = rawFieldValue(field, input)
  if (field.valueKind === 'FILE') {
    if (!allowFileReads) throw validationError('local gateway requests cannot read body files')
    if (typeof value !== 'string' || !value) throw validationError('binary file input is invalid')
    return (await readBoundedFile(value)).data
  }
  if (typeof value !== 'string') throw validationError('binary request body must be strict Base64')
  return decodeStrictBase64(value)
}

/**
 * Requires the server's raw-body contract to contain exactly one top-level leaf.
 *
 * @param fields Sanitized body fields.
 * @returns Sole raw field.
 * @throws MBSError when metadata is structurally inconsistent.
 */
function requireSingleRawField(fields: RequestBodyFieldDefinition[]): RequestBodyFieldDefinition {
  if (fields.length !== 1 || fields[0].children.length > 0) {
    throw validationError('raw request body metadata must contain one field')
  }
  return fields[0]
}

/**
 * Extracts a raw body's value from direct input or a generated-command object.
 *
 * @param field Sole raw field metadata.
 * @param input Runtime raw value or object keyed by field name.
 * @returns Extracted runtime value.
 */
function rawFieldValue(field: RequestBodyFieldDefinition, input: unknown): unknown {
  return isRecord(input) ? input[field.name] : input
}

/**
 * Reads one regular file into a bounded buffer without disclosing its path in errors.
 *
 * @param path Explicit runtime path supplied by the CLI caller.
 * @returns File bytes and safe platform basename.
 * @throws MBSError when the path is not a bounded regular file or cannot be read completely.
 */
async function readBoundedFile(path: string): Promise<FileContent> {
  let handle
  try {
    handle = await open(path, 'r')
    const stat = await handle.stat()
    if (!stat.isFile() || stat.size > MAX_FILE_BYTES) throw new Error('invalid')
    const data = Buffer.alloc(Number(stat.size))
    let offset = 0
    while (offset < data.length) {
      const result = await handle.read(data, offset, data.length - offset, offset)
      if (result.bytesRead === 0) break
      offset += result.bytesRead
    }
    if (offset !== data.length) throw new Error('invalid')
    const sourceBasename = optionalSafeFilename(basename(path))
    if (!sourceBasename) throw new Error('invalid')
    return { data, sourceBasename }
  } catch {
    throw validationError('request body file is unavailable, invalid, or too large')
  } finally {
    await handle?.close().catch(() => undefined)
  }
}

/**
 * Decodes strict canonical Base64 without accepting whitespace or partial padding.
 *
 * @param value Runtime Base64 text.
 * @returns Raw bytes.
 * @throws MBSError for noncanonical or oversized input.
 */
function decodeStrictBase64(value: string): Buffer {
  if (value.length > Math.ceil(MAX_FILE_BYTES / 3) * 4 || !BASE64.test(value)) {
    throw validationError('binary request body must be strict Base64')
  }
  const data = Buffer.from(value, 'base64')
  if (data.length > MAX_FILE_BYTES || data.toString('base64') !== value) {
    throw validationError('binary request body must be strict Base64')
  }
  return data
}

/**
 * Decodes bytes as strict UTF-8 so text modes never replace malformed input silently.
 *
 * @param data Bounded file bytes.
 * @returns Decoded Unicode text.
 * @throws MBSError when bytes are not valid UTF-8 or exceed the text limit.
 */
function decodeUtf8(data: Buffer): string {
  try {
    const text = new TextDecoder('utf-8', { fatal: true }).decode(data)
    if (text.length > MAX_BODY_TEXT_LENGTH) throw new Error('invalid')
    return text
  } catch {
    throw validationError('raw text request body file must contain bounded UTF-8 text')
  }
}

/**
 * Produces the sole allowlisted request header, adding UTF-8 only when declared.
 *
 * @param mediaType Validated main media type.
 * @param charset Optional canonical UTF-8 charset.
 * @returns Content-Type-only header object.
 */
function contentTypeHeader(mediaType: string, charset?: 'UTF-8'): RequestContentHeaders {
  return { 'Content-Type': charset ? `${mediaType}; charset=${charset}` : mediaType }
}

/**
 * Creates fields from an object schema's properties while retaining declared required names.
 *
 * @param value Candidate properties record.
 * @param required Required property-name set.
 * @returns Ordered field definitions.
 */
function fieldsFromProperties(value: unknown, required: Set<string>): RequestBodyFieldDefinition[] {
  const properties = asRecord(value)
  return Object.entries(properties).map(([name, schema]) => fieldFromSchema(name, asRecord(schema), required.has(name)))
}

/**
 * Converts one JSON-schema node and its encoding extensions into a body field definition.
 *
 * @param name Property name supplied by its schema parent.
 * @param schema Candidate child schema.
 * @param required Whether the parent declared this property required.
 * @returns Recursive encoder field definition.
 */
function fieldFromSchema(
  name: string,
  schema: Record<string, unknown>,
  required: boolean,
): RequestBodyFieldDefinition {
  const childRoot = schema.type === 'array' ? asRecord(schema.items) : schema
  const children = childRoot.type === 'object'
    ? fieldsFromProperties(childRoot.properties, stringSet(childRoot.required))
    : []
  return {
    name,
    ...(typeof schema.type === 'string' ? { type: schema.type } : {}),
    required,
    ...(typeof schema.valueKind === 'string' ? { valueKind: schema.valueKind as RequestBodyValueKind } : {}),
    ...(typeof schema.serializationStyle === 'string'
      ? { serializationStyle: schema.serializationStyle as FormSerializationStyle }
      : {}),
    ...(typeof schema.explode === 'boolean' ? { explode: schema.explode } : {}),
    ...(typeof schema.partContentType === 'string' ? { partContentType: schema.partContentType } : {}),
    ...(typeof schema.filenamePolicy === 'string'
      ? { filenamePolicy: schema.filenamePolicy as MultipartFilenamePolicy }
      : {}),
    ...(typeof schema.partFilename === 'string' ? { partFilename: schema.partFilename } : {}),
    children,
  }
}

/**
 * Converts a possible string array to a set and ignores invalid entries.
 *
 * @param value Candidate required-name array.
 * @returns Set of string members.
 */
function stringSet(value: unknown): Set<string> {
  return new Set(Array.isArray(value) ? value.filter((item): item is string => typeof item === 'string') : [])
}

/**
 * Narrows unknown values to plain object-like records while excluding arrays.
 *
 * @param value Candidate runtime value.
 * @returns Whether the value can be addressed by string keys.
 */
function isRecord(value: unknown): value is Record<string, unknown> {
  return value !== null && typeof value === 'object' && !Array.isArray(value) && !Buffer.isBuffer(value)
}

/**
 * Converts unknown object-like values to records for defensive metadata reads.
 *
 * @param value Candidate metadata value.
 * @returns Record or an empty record.
 */
function asRecord(value: unknown): Record<string, unknown> {
  return isRecord(value) ? value : {}
}

/**
 * Detects ASCII control characters that could alter HTTP framing.
 *
 * @param value Candidate header-related text.
 * @returns Whether any control character is present.
 */
function hasControlCharacter(value: string): boolean {
  return /[\u0000-\u001f\u007f]/u.test(value)
}

/**
 * Creates a stable CLI validation error without embedding runtime values or file paths.
 *
 * @param message Non-sensitive public explanation.
 * @returns Error handled by the normal command boundary with exit code 1.
 */
function validationError(message: string): MBSError {
  return new MBSError(message, 'validation', 'Check `mbs describe <apiId>` and `mbs request --help`')
}
