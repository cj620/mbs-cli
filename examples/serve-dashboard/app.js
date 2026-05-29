const state = {
  routes: [],
}

const els = {
  gatewayUrl: document.querySelector('#gateway-url'),
  refreshButton: document.querySelector('#refresh-button'),
  overallStatus: document.querySelector('#overall-status'),
  routesStatus: document.querySelector('#routes-status'),
  routesDetail: document.querySelector('#routes-detail'),
  testStatus: document.querySelector('#test-status'),
  testDetail: document.querySelector('#test-detail'),
  errorPanel: document.querySelector('#error-panel'),
  whoamiResult: document.querySelector('#whoami-result'),
  sessionActive: document.querySelector('#session-active'),
  keyPreview: document.querySelector('#key-preview'),
  cacheUpdated: document.querySelector('#cache-updated'),
  routeList: document.querySelector('#route-list'),
  payloadList: document.querySelector('#payload-list'),
  userList: document.querySelector('#user-list'),
  modeList: document.querySelector('#mode-list'),
  whoamiJson: document.querySelector('#whoami-json'),
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

function renderBreakdown(element, rows) {
  if (rows.length === 0) {
    element.className = 'breakdown-list empty'
    element.textContent = 'No data'
    return
  }
  element.className = 'breakdown-list'
  element.innerHTML = rows
    .map(([label, value]) => `
      <div class="breakdown-row">
        <span title="${escapeAttr(label)}">${escapeHtml(label)}</span>
        <span title="${escapeAttr(value)}">${escapeHtml(value)}</span>
      </div>
    `)
    .join('')
}

function labelFor(value, fallback = '-') {
  if (value === true) return 'Yes'
  if (value === false) return 'No'
  if (value === null || value === undefined || value === '') return fallback
  return String(value)
}

function renderWhoami(payload) {
  const data = payload.ok ? payload.data : null
  const user = data?.user
  els.whoamiResult.textContent = payload.ok ? 'ok:true' : 'ok:false'
  els.sessionActive.textContent = data ? labelFor(data.sessionActive) : '-'
  els.keyPreview.textContent = data?.keyPreview ?? '-'
  els.cacheUpdated.textContent = data?.updatedAt ?? '-'

  renderBreakdown(els.payloadList, payload.ok
    ? [
        ['keyPreview', data.keyPreview],
        ['sessionActive', labelFor(data.sessionActive)],
        ['updatedAt', data.updatedAt ?? '-'],
      ]
    : [
        ['type', payload.error?.type ?? '-'],
        ['message', payload.error?.message ?? '-'],
        ['hint', payload.error?.hint ?? '-'],
      ])

  renderBreakdown(els.userList, user
    ? [
        ['userName', user.userName ?? '-'],
        ['loginName', user.loginName ?? '-'],
        ['departmentName', user.departmentName ?? '-'],
        ['positionName', user.positionName ?? '-'],
      ]
    : [['user', 'No cached user']])

  renderBreakdown(els.modeList, [
    ['module', 'test'],
    ['command', 'mbs test whoami'],
    ['serve route', 'GET /api/test/whoami'],
    ['upstream API', 'not used'],
  ])

  els.whoamiJson.textContent = JSON.stringify(payload, null, 2)
  els.lastUpdated.textContent = `Last refreshed: ${new Date().toLocaleString()}`
}

function resetData() {
  els.whoamiResult.textContent = '-'
  els.sessionActive.textContent = '-'
  els.keyPreview.textContent = '-'
  els.cacheUpdated.textContent = '-'
  renderBreakdown(els.routeList, [])
  renderBreakdown(els.payloadList, [])
  renderBreakdown(els.userList, [])
  renderBreakdown(els.modeList, [])
  els.whoamiJson.textContent = 'No data'
  els.lastUpdated.textContent = 'Not refreshed'
}

async function checkRoutes(baseUrl) {
  setBadge(els.routesStatus, 'Checking', 'loading')
  els.routesDetail.textContent = 'Reading /__routes'
  const payload = await fetchJson(`${baseUrl}/__routes`)
  const routes = assertGatewayPayload(payload, 'Route discovery')
  if (!Array.isArray(routes)) throw new Error('/__routes returned an unexpected shape')

  state.routes = routes
  const testRoute = routes.find((route) => route.method === 'GET' && route.url === '/api/test/whoami')
  renderBreakdown(els.routeList, [
    ['route count', routes.length],
    ['test route', testRoute ? 'available' : 'missing'],
    ['method', testRoute?.method ?? '-'],
    ['url', testRoute?.url ?? '-'],
  ])
  els.routesDetail.textContent = `Found ${routes.length} routes; test/whoami ${testRoute ? 'available' : 'missing'}`
  setBadge(els.routesStatus, testRoute ? 'Connected' : 'Unexpected', testRoute ? 'ok' : 'error')
  if (!testRoute) throw new Error('Project APIs did not expose GET /api/test/whoami')
}

async function checkWhoami(baseUrl) {
  setBadge(els.testStatus, 'Checking', 'loading')
  els.testDetail.textContent = 'Requesting /api/test/whoami'
  const payload = await fetchJson(`${baseUrl}/api/test/whoami`)
  renderWhoami(payload)

  if (payload.ok) {
    els.testDetail.textContent = 'Shared whoami status returned ok:true'
    setBadge(els.testStatus, 'Authenticated', 'ok')
    return
  }

  els.testDetail.textContent = payload.error?.message || 'Shared whoami status returned ok:false'
  setBadge(els.testStatus, payload.error?.type === 'auth' ? 'Not logged in' : 'Returned error', 'error')
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
  setBadge(els.testStatus, 'Checking', 'loading')

  try {
    await checkRoutes(baseUrl)
    await checkWhoami(baseUrl)
    setBadge(els.overallStatus, 'Connected', 'ok')
  } catch (err) {
    const type = err?.type || 'api'
    const title = type === 'http' ? 'Gateway unavailable' : 'API error'
    const message = err instanceof Error ? err.message : String(err)
    const hint = err?.hint || 'Start mbs serve with --project-apis or --proxy-all.'
    setBadge(els.overallStatus, title, 'error')
    if (els.routesStatus.textContent === 'Checking') setBadge(els.routesStatus, title, 'error')
    if (els.testStatus.textContent === 'Checking') setBadge(els.testStatus, title, 'error')
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
