const state = {
  routes: [],
  platformItems: [],
}

const els = {
  gatewayUrl: document.querySelector('#gateway-url'),
  refreshButton: document.querySelector('#refresh-button'),
  overallStatus: document.querySelector('#overall-status'),
  routesStatus: document.querySelector('#routes-status'),
  routesDetail: document.querySelector('#routes-detail'),
  accountStatus: document.querySelector('#account-status'),
  accountDetail: document.querySelector('#account-detail'),
  errorPanel: document.querySelector('#error-panel'),
  totalCount: document.querySelector('#total-count'),
  totalPages: document.querySelector('#total-pages'),
  pageCurrent: document.querySelector('#page-current'),
  pageItems: document.querySelector('#page-items'),
  platformList: document.querySelector('#platform-list'),
  statusList: document.querySelector('#status-list'),
  enabledList: document.querySelector('#enabled-list'),
  expiredList: document.querySelector('#expired-list'),
  accountRows: document.querySelector('#account-rows'),
  lastUpdated: document.querySelector('#last-updated'),
}

function setBadge(element, label, tone) {
  element.textContent = label
  element.className = `status-badge ${tone}`
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

function gatewayBaseUrl() {
  return els.gatewayUrl.value.trim().replace(/\/+$/, '')
}

async function readJson(response) {
  const text = await response.text()
  if (!text) return null
  try {
    return JSON.parse(text)
  } catch {
    throw new Error(`Response is not valid JSON: ${text.slice(0, 160)}`)
  }
}

async function fetchJson(url, options) {
  const response = await fetch(url, options)
  const payload = await readJson(response)
  if (!response.ok) {
    const error = payload?.error
    const message = error?.message || `HTTP ${response.status}`
    const err = new Error(message)
    err.type = error?.type || 'http'
    err.hint = error?.hint || ''
    throw err
  }
  return payload
}

function assertGatewayPayload(payload, label) {
  if (!payload || payload.ok !== true) {
    const error = payload?.error
    const err = new Error(error?.message || `${label} returned an error`)
    err.type = error?.type || 'api'
    err.hint = error?.hint || ''
    throw err
  }
  return payload.data
}

function normalizePlatformResponse(raw) {
  const payload = raw?.data && typeof raw.data === 'object' ? raw.data : raw
  const rows = Array.isArray(payload?.obj)
    ? payload.obj
    : Array.isArray(payload?.data)
      ? payload.data
      : Array.isArray(payload)
        ? payload
        : []

  return {
    status: payload?.code ?? payload?.success ?? '-',
    sourceShape: Array.isArray(payload?.obj) ? 'obj[]' : Array.isArray(payload?.data) ? 'data[]' : Array.isArray(payload) ? 'array' : 'unknown',
    items: rows.map((row) => ({
      id: row.PLATFORMID ?? row.platformId ?? row.id ?? '',
      name: row.PLATFORMNAME ?? row.platformName ?? row.name ?? '',
      rawId: row.PLATFORMID ?? row.platformId ?? row.id ?? '',
      rawName: row.PLATFORMNAME ?? row.platformName ?? row.name ?? '',
    })),
  }
}

function labelFor(value, fallback = 'Empty') {
  if (value === true) return 'Yes'
  if (value === false) return 'No'
  if (value === null || value === undefined || value === '') return fallback
  return String(value)
}

function groupBy(items, pick) {
  const counts = new Map()
  for (const item of items) {
    const key = labelFor(pick(item))
    counts.set(key, (counts.get(key) || 0) + 1)
  }
  return [...counts.entries()].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
}

function renderBreakdown(element, rows) {
  if (rows.length === 0) {
    element.className = 'breakdown-list empty'
    element.textContent = 'No data'
    return
  }
  element.className = 'breakdown-list'
  element.innerHTML = rows
    .map(([label, count]) => `
      <div class="breakdown-row">
        <span title="${escapeAttr(label)}">${escapeHtml(label)}</span>
        <span>${count}</span>
      </div>
    `)
    .join('')
}

function renderTable(items) {
  if (items.length === 0) {
    els.accountRows.innerHTML = '<tr><td colspan="4" class="empty-cell">No data</td></tr>'
    return
  }

  els.accountRows.innerHTML = items
    .map((item) => `
      <tr>
        <td>${escapeHtml(labelFor(item.id))}</td>
        <td>${escapeHtml(labelFor(item.name))}</td>
        <td>${escapeHtml(labelFor(item.rawId))}</td>
        <td>${escapeHtml(labelFor(item.rawName))}</td>
      </tr>
    `)
    .join('')
}

function idBucket(value) {
  const id = Number.parseInt(value, 10)
  if (!Number.isFinite(id)) return 'Unknown'
  if (id < 50) return '1-49'
  if (id < 100) return '50-99'
  if (id < 150) return '100-149'
  return '150+'
}

function initial(value) {
  const text = labelFor(value, '').trim()
  return text ? text.charAt(0).toUpperCase() : 'Empty'
}

function renderPlatforms(result) {
  state.platformItems = result.items
  els.totalCount.textContent = result.items.length
  els.totalPages.textContent = labelFor(result.items[0]?.name, '-')
  els.pageCurrent.textContent = labelFor(result.status)
  els.pageItems.textContent = result.items.length
  renderBreakdown(els.platformList, groupBy(result.items, (item) => idBucket(item.id)))
  renderBreakdown(els.statusList, groupBy(result.items, (item) => initial(item.name)))
  renderBreakdown(els.enabledList, [[result.sourceShape, result.items.length]])
  renderBreakdown(els.expiredList, [['json', result.items.length]])
  renderTable(result.items)
  els.lastUpdated.textContent = `Last refreshed: ${new Date().toLocaleString()}`
}

function resetData() {
  renderPlatforms({ status: '-', sourceShape: '-', items: [] })
  els.lastUpdated.textContent = 'Not refreshed'
}

async function checkRoutes(baseUrl) {
  setBadge(els.routesStatus, 'Checking', 'loading')
  els.routesDetail.textContent = 'Reading /__routes'
  const payload = await fetchJson(`${baseUrl}/__routes`)
  const routes = assertGatewayPayload(payload, 'Route discovery')
  if (!Array.isArray(routes)) throw new Error('/__routes returned an unexpected shape')

  state.routes = routes
  const hasPlatforms = routes.some((route) => (
    route.method === 'GET' && route.url === '/api/org/platforms'
  ))
  els.routesDetail.textContent = `Found ${routes.length} routes; org/platforms ${hasPlatforms ? 'available' : 'missing'}`
  setBadge(els.routesStatus, hasPlatforms ? 'Connected' : 'Unexpected', hasPlatforms ? 'ok' : 'error')
  if (!hasPlatforms) throw new Error('Project manifest did not expose GET /api/org/platforms')
}

async function checkPlatforms(baseUrl) {
  setBadge(els.accountStatus, 'Checking', 'loading')
  els.accountDetail.textContent = 'Requesting /api/org/platforms'
  const payload = await fetchJson(`${baseUrl}/api/org/platforms`)
  const raw = assertGatewayPayload(payload, 'Platform API')
  const result = normalizePlatformResponse(raw)
  renderPlatforms(result)
  els.accountDetail.textContent = `Request succeeded; ${result.items.length} platforms returned`
  setBadge(els.accountStatus, 'Connected', 'ok')
}

async function refresh() {
  clearError()
  resetData()
  const baseUrl = gatewayBaseUrl()
  if (!baseUrl) {
    setBadge(els.overallStatus, 'Invalid gateway', 'error')
    showError('Gateway URL is empty', 'Enter the local address printed by mbs serve.')
    return
  }

  els.refreshButton.disabled = true
  setBadge(els.overallStatus, 'Checking', 'loading')
  setBadge(els.routesStatus, 'Checking', 'loading')
  setBadge(els.accountStatus, 'Checking', 'loading')

  try {
    await checkRoutes(baseUrl)
    await checkPlatforms(baseUrl)
    setBadge(els.overallStatus, 'Connected', 'ok')
  } catch (err) {
    const type = err?.type || 'api'
    const title = type === 'auth' ? 'Auth failed' : type === 'http' ? 'Gateway unavailable' : 'API error'
    const message = err instanceof Error ? err.message : String(err)
    const hint = err?.hint || (type === 'auth' ? 'Run mbs login, then restart or refresh mbs serve.' : '')
    setBadge(els.overallStatus, title, 'error')
    if (els.routesStatus.textContent === 'Checking') setBadge(els.routesStatus, title, 'error')
    if (els.accountStatus.textContent === 'Checking') setBadge(els.accountStatus, title, 'error')
    showError(title, message, hint)
  } finally {
    els.refreshButton.disabled = false
  }
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

els.refreshButton.addEventListener('click', refresh)
window.addEventListener('DOMContentLoaded', refresh)
