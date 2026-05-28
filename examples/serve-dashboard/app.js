const state = {
  routes: [],
  accountItems: [],
}

const els = {
  gatewayUrl: document.querySelector('#gateway-url'),
  currentPage: document.querySelector('#current-page'),
  pageSize: document.querySelector('#page-size'),
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

function numericInput(element, fallback) {
  const value = Number.parseInt(element.value, 10)
  return Number.isFinite(value) && value > 0 ? value : fallback
}

async function readJson(response) {
  const text = await response.text()
  if (!text) return null
  try {
    return JSON.parse(text)
  } catch {
    throw new Error(`响应不是有效 JSON: ${text.slice(0, 120)}`)
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
    const err = new Error(error?.message || `${label} 返回失败`)
    err.type = error?.type || 'api'
    err.hint = error?.hint || ''
    throw err
  }
  return payload.data
}

function normalizeAccountPage(raw) {
  const page = raw?.data && typeof raw.data === 'object' ? raw.data : raw
  const items = Array.isArray(page?.items) ? page.items : Array.isArray(raw?.items) ? raw.items : []
  return {
    total: numberOrDash(page?.total ?? raw?.total),
    totalPage: numberOrDash(page?.totalPage ?? raw?.totalPage),
    currentPage: numberOrDash(page?.currentPage ?? raw?.currentPage),
    pageSize: numberOrDash(page?.pageSize ?? raw?.pageSize),
    items,
  }
}

function numberOrDash(value) {
  return typeof value === 'number' && Number.isFinite(value) ? value : '-'
}

function labelFor(value, fallback = '未填写') {
  if (value === true) return '是'
  if (value === false) return '否'
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
    element.textContent = '暂无数据'
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
    els.accountRows.innerHTML = '<tr><td colspan="7" class="empty-cell">暂无数据</td></tr>'
    return
  }

  els.accountRows.innerHTML = items
    .map((item) => `
      <tr>
        <td>${escapeHtml(labelFor(item.code))}</td>
        <td>${escapeHtml(labelFor(item.account))}</td>
        <td>${escapeHtml(labelFor(item.platform))}</td>
        <td>${escapeHtml(labelFor(item.statusStr ?? item.status))}</td>
        <td>${renderBoolean(item.enabled)}</td>
        <td>${renderBoolean(item.hasExpired)}</td>
        <td>${escapeHtml(labelFor(item.updateTime))}</td>
      </tr>
    `)
    .join('')
}

function renderBoolean(value) {
  if (value === true) return '<span class="pill yes">是</span>'
  if (value === false) return '<span class="pill no">否</span>'
  return '<span class="pill">未知</span>'
}

function renderAccountPage(page) {
  state.accountItems = page.items
  els.totalCount.textContent = page.total
  els.totalPages.textContent = page.totalPage
  els.pageCurrent.textContent = page.currentPage
  els.pageItems.textContent = page.items.length
  renderBreakdown(els.platformList, groupBy(page.items, (item) => item.platform))
  renderBreakdown(els.statusList, groupBy(page.items, (item) => item.statusStr ?? item.status))
  renderBreakdown(els.enabledList, groupBy(page.items, (item) => item.enabled))
  renderBreakdown(els.expiredList, groupBy(page.items, (item) => item.hasExpired))
  renderTable(page.items)
  els.lastUpdated.textContent = `最后刷新: ${new Date().toLocaleString()}`
}

function resetData() {
  renderAccountPage({ total: '-', totalPage: '-', currentPage: '-', pageSize: '-', items: [] })
  els.lastUpdated.textContent = '尚未刷新'
}

async function checkRoutes(baseUrl) {
  setBadge(els.routesStatus, '检测中', 'loading')
  els.routesDetail.textContent = '正在读取 /__routes'
  const payload = await fetchJson(`${baseUrl}/__routes`)
  const routes = assertGatewayPayload(payload, '路由发现')
  if (!Array.isArray(routes)) throw new Error('/__routes 响应结构异常')

  state.routes = routes
  const hasAccountPage = routes.some((route) => (
    route.method === 'POST' && route.url === '/api/account/page'
  ))
  els.routesDetail.textContent = `发现 ${routes.length} 个路由，account/page ${hasAccountPage ? '可用' : '未找到'}`
  setBadge(els.routesStatus, hasAccountPage ? '连接成功' : '响应异常', hasAccountPage ? 'ok' : 'error')
  if (!hasAccountPage) throw new Error('manifest 未生成 POST /api/account/page')
}

async function checkAccount(baseUrl) {
  setBadge(els.accountStatus, '检测中', 'loading')
  els.accountDetail.textContent = '正在请求 /api/account/page'
  const body = {
    currentPage: numericInput(els.currentPage, 1),
    pageSize: numericInput(els.pageSize, 20),
  }
  const payload = await fetchJson(`${baseUrl}/api/account/page`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })
  const raw = assertGatewayPayload(payload, '账号接口')
  const page = normalizeAccountPage(raw)
  renderAccountPage(page)
  els.accountDetail.textContent = `请求成功，本页返回 ${page.items.length} 条`
  setBadge(els.accountStatus, '连接成功', 'ok')
}

async function refresh() {
  clearError()
  resetData()
  const baseUrl = gatewayBaseUrl()
  if (!baseUrl) {
    setBadge(els.overallStatus, '响应异常', 'error')
    showError('网关地址为空', '请输入 mbs serve 的本地地址。')
    return
  }

  els.refreshButton.disabled = true
  setBadge(els.overallStatus, '检测中', 'loading')
  setBadge(els.routesStatus, '检测中', 'loading')
  setBadge(els.accountStatus, '检测中', 'loading')

  try {
    await checkRoutes(baseUrl)
    await checkAccount(baseUrl)
    setBadge(els.overallStatus, '连接成功', 'ok')
  } catch (err) {
    const type = err?.type || 'api'
    const title = type === 'auth' ? '认证失败' : type === 'http' ? '未连接' : '接口错误'
    const message = err instanceof Error ? err.message : String(err)
    const hint = err?.hint || (type === 'auth' ? '请先运行 mbs login，然后重新启动或刷新 mbs serve。' : '')
    setBadge(els.overallStatus, title, 'error')
    if (els.routesStatus.textContent === '检测中') setBadge(els.routesStatus, title, 'error')
    if (els.accountStatus.textContent === '检测中') setBadge(els.accountStatus, title, 'error')
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
