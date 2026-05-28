const DORIS_PREFIX = '/proxy/gateway/cli-service/cli/doris'

const els = {
  gatewayUrl: document.querySelector('#gateway-url'),
  overallStatus: document.querySelector('#overall-status'),
  checkButton: document.querySelector('#check-button'),
  schemasButton: document.querySelector('#schemas-button'),
  ddlButton: document.querySelector('#ddl-button'),
  queryButton: document.querySelector('#query-button'),
  clearButton: document.querySelector('#clear-button'),
  errorPanel: document.querySelector('#error-panel'),
  routesCount: document.querySelector('#routes-count'),
  routesDetail: document.querySelector('#routes-detail'),
  schemasCount: document.querySelector('#schemas-count'),
  schemasDetail: document.querySelector('#schemas-detail'),
  rowsCount: document.querySelector('#rows-count'),
  queryDetail: document.querySelector('#query-detail'),
  schemaList: document.querySelector('#schema-list'),
  tableName: document.querySelector('#table-name'),
  ddlOutput: document.querySelector('#ddl-output'),
  sqlInput: document.querySelector('#sql-input'),
  queryOutput: document.querySelector('#query-output'),
  queryTableWrap: document.querySelector('#query-table-wrap'),
  queryHead: document.querySelector('#query-head'),
  queryBody: document.querySelector('#query-body'),
  tabs: [...document.querySelectorAll('.tab')],
  views: [...document.querySelectorAll('.tab-view')],
}

function baseUrl() {
  return els.gatewayUrl.value.trim().replace(/\/+$/, '')
}

function setStatus(label, tone = 'idle') {
  els.overallStatus.textContent = label
  els.overallStatus.className = `status-badge ${tone}`
}

function showError(title, detail, hint = '') {
  els.errorPanel.classList.remove('hidden')
  els.errorPanel.innerHTML = `
    <strong>${escapeHtml(title)}</strong>
    <div>${escapeHtml(detail)}</div>
    ${hint ? `<div>${escapeHtml(hint)}</div>` : ''}
  `
}

function clearError() {
  els.errorPanel.classList.add('hidden')
  els.errorPanel.textContent = ''
}

function setBusy(button, busy) {
  button.disabled = busy
}

async function readJson(response) {
  const text = await response.text()
  if (!text) return null
  try {
    return JSON.parse(text)
  } catch {
    return { ok: response.ok, data: text }
  }
}

async function gatewayFetch(path, options) {
  const root = baseUrl()
  if (!root) throw new Error('Gateway is empty')

  const response = await fetch(`${root}${path}`, options)
  const payload = await readJson(response)
  if (!response.ok) {
    const error = payload?.error
    const err = new Error(error?.message || `HTTP ${response.status}`)
    err.type = error?.type || 'http'
    err.hint = error?.hint || ''
    throw err
  }
  if (payload?.ok !== true) {
    const error = payload?.error
    const err = new Error(error?.message || 'Gateway returned an unexpected payload')
    err.type = error?.type || 'api'
    err.hint = error?.hint || ''
    throw err
  }
  return payload.data
}

function handleError(err) {
  const type = err?.type || 'api'
  const title = type === 'auth' ? 'Auth failed' : type === 'http' ? 'Gateway unavailable' : 'Request failed'
  const message = err instanceof Error ? err.message : String(err)
  const hint = err?.hint || (type === 'auth' ? 'Run mbs login, then restart mbs serve.' : '')
  setStatus(title, 'error')
  showError(title, message, hint)
}

async function checkGateway() {
  clearError()
  setBusy(els.checkButton, true)
  setStatus('Checking', 'loading')
  try {
    const routes = await gatewayFetch('/__routes')
    const items = Array.isArray(routes) ? routes : []
    const hasProxy = items.some((route) => route.url === '/proxy/*')
    els.routesCount.textContent = String(items.length)
    els.routesDetail.textContent = hasProxy ? 'Proxy route available' : 'Proxy route missing'
    setStatus(hasProxy ? 'Connected' : 'Check --proxy-all', hasProxy ? 'ok' : 'error')
  } catch (err) {
    handleError(err)
  } finally {
    setBusy(els.checkButton, false)
  }
}

async function loadSchemas() {
  clearError()
  setBusy(els.schemasButton, true)
  setStatus('Loading', 'loading')
  try {
    const data = await gatewayFetch(`${DORIS_PREFIX}/schemas`)
    renderSchemas(data)
    setStatus('Schemas loaded', 'ok')
  } catch (err) {
    handleError(err)
  } finally {
    setBusy(els.schemasButton, false)
  }
}

async function showDdl() {
  clearError()
  const tableName = els.tableName.value.trim()
  if (!tableName) {
    showError('Table is required', 'Enter a fully qualified table name.')
    return
  }

  setBusy(els.ddlButton, true)
  setStatus('Loading', 'loading')
  try {
    const path = `${DORIS_PREFIX}/show-create-table?tableName=${encodeURIComponent(tableName)}`
    const data = await gatewayFetch(path)
    els.ddlOutput.textContent = formatValue(data)
    setStatus('DDL loaded', 'ok')
  } catch (err) {
    handleError(err)
  } finally {
    setBusy(els.ddlButton, false)
  }
}

async function runQuery() {
  clearError()
  const sql = els.sqlInput.value.trim()
  if (!sql) {
    showError('SQL is required', 'Enter a SELECT statement.')
    return
  }

  setBusy(els.queryButton, true)
  setStatus('Running', 'loading')
  try {
    const data = await gatewayFetch(`${DORIS_PREFIX}/query`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ sql }),
    })
    const rows = normalizeRows(data)
    renderRows(rows)
    els.queryOutput.textContent = formatValue(data)
    els.rowsCount.textContent = String(rows.length)
    els.queryDetail.textContent = rows.length > 0 ? 'Result rendered' : 'Raw result only'
    setStatus('Query complete', 'ok')
  } catch (err) {
    handleError(err)
  } finally {
    setBusy(els.queryButton, false)
  }
}

function renderSchemas(data) {
  const groups = normalizeSchemas(data)
  const tableCount = groups.reduce((sum, group) => sum + group.tables.length, 0)
  els.schemasCount.textContent = String(tableCount || groups.length)
  els.schemasDetail.textContent = groups.length > 0 ? `${groups.length} databases` : 'No schemas'

  if (groups.length === 0) {
    els.schemaList.className = 'schema-list empty'
    els.schemaList.textContent = 'No data'
    return
  }

  els.schemaList.className = 'schema-list'
  els.schemaList.innerHTML = groups
    .map((group) => `
      <div class="schema-group">
        <div class="schema-name">${escapeHtml(group.name)}</div>
        ${group.tables
          .map((table) => `
            <button class="table-name" type="button" data-table="${escapeAttr(table.fullName)}">
              ${escapeHtml(table.label)}
            </button>
          `)
          .join('')}
      </div>
    `)
    .join('')

  els.schemaList.querySelectorAll('.table-name').forEach((button) => {
    button.addEventListener('click', () => {
      els.tableName.value = button.dataset.table || button.textContent.trim()
      activateTab('ddl')
    })
  })
}

function normalizeSchemas(data) {
  const value = data?.data ?? data
  if (Array.isArray(value)) {
    return value.map((item, index) => schemaGroupFromValue(item, `schema_${index + 1}`))
  }
  if (value && typeof value === 'object') {
    return Object.entries(value).map(([name, tables]) => schemaGroupFromValue({ name, tables }, name))
  }
  return []
}

function schemaGroupFromValue(item, fallbackName) {
  const name = String(item?.database || item?.schema || item?.name || fallbackName)
  const rawTables = item?.tables || item?.children || item?.tableNames || []
  const tables = Array.isArray(rawTables)
    ? rawTables.map((table) => {
        const label = String(table?.table || table?.name || table)
        return {
          label,
          fullName: label.includes('.') ? label : `${name}.${label}`,
        }
      })
    : []
  return { name, tables }
}

function normalizeRows(data) {
  const value = data?.data ?? data
  if (Array.isArray(value)) return value.filter((row) => row && typeof row === 'object')
  if (typeof value === 'string') {
    return value
      .split(/\r?\n/)
      .map((line) => line.trim())
      .filter(Boolean)
      .map((line) => {
        try {
          return JSON.parse(line)
        } catch {
          return { line }
        }
      })
      .filter((row) => row.type !== 'error')
  }
  if (value && typeof value === 'object') return [value]
  return []
}

function renderRows(rows) {
  if (rows.length === 0) {
    els.queryTableWrap.classList.add('hidden')
    els.queryHead.innerHTML = ''
    els.queryBody.innerHTML = ''
    return
  }

  const columns = [...rows.reduce((set, row) => {
    Object.keys(row).forEach((key) => set.add(key))
    return set
  }, new Set())]

  els.queryTableWrap.classList.remove('hidden')
  els.queryHead.innerHTML = `<tr>${columns.map((col) => `<th>${escapeHtml(col)}</th>`).join('')}</tr>`
  els.queryBody.innerHTML = rows
    .slice(0, 200)
    .map((row) => `<tr>${columns.map((col) => `<td>${escapeHtml(formatCell(row[col]))}</td>`).join('')}</tr>`)
    .join('')
}

function activateTab(name) {
  els.tabs.forEach((tab) => tab.classList.toggle('active', tab.dataset.tab === name))
  els.views.forEach((view) => view.classList.toggle('active', view.id === `view-${name}`))
}

function clearQuery() {
  els.queryOutput.textContent = 'No query result'
  els.queryTableWrap.classList.add('hidden')
  els.queryHead.innerHTML = ''
  els.queryBody.innerHTML = ''
  els.rowsCount.textContent = '-'
  els.queryDetail.textContent = 'No query yet'
}

function formatValue(value) {
  if (typeof value === 'string') return value
  return JSON.stringify(value, null, 2)
}

function formatCell(value) {
  if (value === null || value === undefined) return ''
  if (typeof value === 'object') return JSON.stringify(value)
  return String(value)
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function escapeAttr(value) {
  return escapeHtml(value)
}

els.checkButton.addEventListener('click', checkGateway)
els.schemasButton.addEventListener('click', loadSchemas)
els.ddlButton.addEventListener('click', showDdl)
els.queryButton.addEventListener('click', runQuery)
els.clearButton.addEventListener('click', clearQuery)
els.tabs.forEach((tab) => tab.addEventListener('click', () => activateTab(tab.dataset.tab)))
window.addEventListener('DOMContentLoaded', checkGateway)
