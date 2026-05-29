const DEFAULT_MANIFEST = {
  schemaVersion: '1',
  manifestVersion: '2026-05-28T00:00:00+08:00',
  modules: [
    {
      domain: 'shops',
      service: 'crm-web-service',
      description: 'Shop operations data',
      keywords: ['shops', 'shop health', 'account health', 'amazon health'],
      scenarios: 'Query Amazon shop account health information.',
      generate: false,
      actions: [
        {
          name: 'health',
          description: 'Get Amazon shop account health info',
          method: 'GET',
          path: '/gateway/crm-web-service/rpa/getAmazonAccHealthInfo',
        },
      ],
    },
    {
      domain: 'doris',
      service: 'cli-service',
      description: 'Doris schema and read-only query APIs',
      keywords: ['doris', 'sql', 'schema', 'table', 'query'],
      scenarios: 'Explore Doris schemas, inspect table DDL, and run server-validated SELECT queries.',
      generate: false,
      pathPrefix: '/gateway/cli-service/cli/doris',
      actions: [
        {
          name: 'schemas',
          description: 'List Doris databases and tables',
          method: 'GET',
          path: '/schemas',
        },
        {
          name: 'show-create-table',
          description: 'Show Doris CREATE TABLE DDL',
          method: 'GET',
          path: '/show-create-table',
          request: {
            query: {
              type: 'object',
              required: ['tableName'],
              properties: {
                tableName: {
                  type: 'string',
                  description: 'Fully qualified table name',
                },
              },
            },
          },
        },
        {
          name: 'query',
          description: 'Execute Doris SELECT query',
          method: 'POST',
          path: '/query',
          responseMode: 'ndjson',
          request: {
            body: {
              type: 'object',
              required: ['sql'],
              properties: {
                sql: {
                  type: 'string',
                  description: 'SELECT SQL',
                },
              },
            },
          },
        },
      ],
    },
    {
      domain: 'org',
      service: 'erpOrder',
      description: 'Organization hierarchy APIs',
      keywords: ['org', 'platform', 'site', 'leader', 'manager', 'shop-manager', 'employee', 'shop'],
      scenarios: 'Query organization dropdown data for platforms, sites, leaders, managers, shops, and employees.',
      generate: false,
      pathPrefix: '/erpOrder/erpOrder',
      actions: [
        { name: 'platforms', description: 'List all platforms', method: 'GET', path: '/saleReport/getPlatformList' },
        {
          name: 'sites',
          description: 'List sites by platform',
          method: 'GET',
          path: '/saleReport/getSiteList',
          request: {
            query: {
              type: 'object',
              properties: {
                platformids: {
                  type: 'string',
                  description: 'Platform IDs, comma-separated',
                },
              },
            },
          },
        },
        { name: 'leaders', description: 'List leaders', method: 'POST', path: '/teamDropDown/leaderDropDown' },
        { name: 'managers', description: 'List managers', method: 'POST', path: '/teamDropDown/managerDropDown' },
        { name: 'little-leaders', description: 'List little leaders', method: 'POST', path: '/teamDropDown/littleManagerDropDown' },
        { name: 'shop-managers', description: 'List shop managers', method: 'POST', path: '/teamDropDown/shopManagerDropDown' },
        { name: 'employees', description: 'List employees', method: 'POST', path: '/teamDropDown/teamNumberDropDown' },
        { name: 'shops', description: 'List shops', method: 'POST', path: '/teamDropDown/shopDropDown' },
      ],
    },
  ],
}

const state = {
  manifest: DEFAULT_MANIFEST,
  selectedDomain: DEFAULT_MANIFEST.modules[0]?.domain ?? '',
  selectedActionKey: '',
}

const els = {
  version: document.querySelector('#manifest-version'),
  search: document.querySelector('#search-input'),
  method: document.querySelector('#method-filter'),
  loadFileButton: document.querySelector('#load-file-button'),
  fileInput: document.querySelector('#file-input'),
  errorPanel: document.querySelector('#error-panel'),
  moduleCount: document.querySelector('#module-count'),
  actionCount: document.querySelector('#action-count'),
  serviceCount: document.querySelector('#service-count'),
  generatedCount: document.querySelector('#generated-count'),
  moduleListCount: document.querySelector('#module-list-count'),
  moduleList: document.querySelector('#module-list'),
  relationshipSummary: document.querySelector('#relationship-summary'),
  relationshipMap: document.querySelector('#relationship-map'),
  actionSummary: document.querySelector('#action-summary'),
  actionRows: document.querySelector('#action-rows'),
  detailTitle: document.querySelector('#detail-title'),
  detailContent: document.querySelector('#detail-content'),
}

function joinPaths(prefix, path) {
  if (!prefix) return path
  if (!path) return prefix
  return `${prefix.replace(/\/+$/, '')}/${path.replace(/^\/+/, '')}`
}

function actionsFor(module) {
  return Array.isArray(module.actions) ? module.actions : []
}

function actionKey(module, action) {
  return `${module.domain}:${action.name}`
}

function fullPath(module, action) {
  return joinPaths(action.pathPrefix || module.pathPrefix, action.path)
}

function methodClass(method) {
  return String(method).toLowerCase()
}

function flattenParams(schema, location, required = new Set(), path = []) {
  if (!schema) return []
  if (schema.type === 'object') {
    const ownRequired = new Set(schema.required ?? [])
    return Object.entries(schema.properties ?? {}).flatMap(([name, child]) =>
      flattenParams(child, location, ownRequired, [...path, name]),
    )
  }
  const name = path.join('.')
  return name
    ? [{
        name,
        location,
        type: schema.type ?? 'unknown',
        required: required.has(path.at(-1)),
        description: schema.description ?? '',
      }]
    : []
}

function paramsFor(action) {
  return [
    ...flattenParams(action.request?.path, 'path'),
    ...flattenParams(action.request?.query, 'query'),
    ...flattenParams(action.request?.body, 'body'),
  ]
}

function allActionRecords() {
  return state.manifest.modules.flatMap((module) =>
    actionsFor(module).map((action) => ({ module, action, key: actionKey(module, action) })),
  )
}

function filteredRecords() {
  const query = els.search.value.trim().toLowerCase()
  const method = els.method.value
  return allActionRecords().filter(({ module, action }) => {
    if (method !== 'all' && action.method !== method) return false
    if (!query) return true
    const haystack = [
      module.domain,
      module.service,
      module.description,
      module.scenarios,
      ...(module.keywords ?? []),
      action.name,
      action.description,
      action.method,
      fullPath(module, action),
    ].filter(Boolean).join(' ').toLowerCase()
    return haystack.includes(query)
  })
}

function selectedModule() {
  return state.manifest.modules.find((module) => module.domain === state.selectedDomain) ?? state.manifest.modules[0]
}

function selectedActionRecord() {
  return allActionRecords().find((record) => record.key === state.selectedActionKey)
}

function showError(message) {
  els.errorPanel.classList.remove('hidden')
  els.errorPanel.textContent = message
}

function clearError() {
  els.errorPanel.classList.add('hidden')
  els.errorPanel.textContent = ''
}

function renderMetrics() {
  const modules = state.manifest.modules
  const records = allActionRecords()
  els.version.textContent = `v${state.manifest.schemaVersion} / ${state.manifest.manifestVersion}`
  els.moduleCount.textContent = modules.length
  els.actionCount.textContent = records.length
  els.serviceCount.textContent = new Set(modules.map((module) => module.service || '-')).size
  els.generatedCount.textContent = modules.filter((module) => module.generate !== false).length
}

function renderModuleList() {
  const modules = state.manifest.modules
  els.moduleListCount.textContent = modules.length
  if (!modules.length) {
    els.moduleList.innerHTML = '<div class="empty-cell">暂无模块</div>'
    return
  }

  els.moduleList.innerHTML = modules.map((module) => `
    <button class="module-button ${module.domain === state.selectedDomain ? 'active' : ''}" type="button" data-domain="${escapeAttr(module.domain)}">
      <strong>${escapeHtml(module.domain)}</strong>
      <span>${escapeHtml(module.service || '未声明 service')} · ${actionsFor(module).length} 个接口</span>
      <span>${escapeHtml(module.description || '-')}</span>
    </button>
  `).join('')

  for (const button of els.moduleList.querySelectorAll('.module-button')) {
    button.addEventListener('click', () => {
      state.selectedDomain = button.dataset.domain
      state.selectedActionKey = ''
      render()
    })
  }
}

function renderRelationship() {
  const module = selectedModule()
  if (!module) {
    els.relationshipSummary.textContent = '暂无模块'
    els.relationshipMap.innerHTML = ''
    return
  }

  const actions = actionsFor(module)
  els.relationshipSummary.textContent = `${module.domain} -> ${module.service || '-'} -> ${actions.length} 个接口`
  els.relationshipMap.innerHTML = `
    <div class="relation-row">
      <div class="relation-node">${escapeHtml(module.domain)}</div>
      <div class="relation-node service">${escapeHtml(module.service || '未声明 service')}</div>
      <div class="relation-actions">
        ${actions.map((action) => `
          <button class="action-chip ${state.selectedActionKey === actionKey(module, action) ? 'active' : ''}" type="button" data-key="${escapeAttr(actionKey(module, action))}">
            ${escapeHtml(action.name)}
          </button>
        `).join('')}
      </div>
    </div>
  `

  for (const chip of els.relationshipMap.querySelectorAll('.action-chip')) {
    chip.addEventListener('click', () => {
      state.selectedActionKey = chip.dataset.key
      render()
    })
  }
}

function renderActionRows() {
  const records = filteredRecords()
  els.actionSummary.textContent = `当前筛选 ${records.length} 个接口`
  if (!records.length) {
    els.actionRows.innerHTML = '<tr><td colspan="5" class="empty-cell">没有匹配的接口</td></tr>'
    return
  }

  els.actionRows.innerHTML = records.map(({ module, action, key }) => {
    const params = paramsFor(action)
    return `
      <tr class="action-row" data-key="${escapeAttr(key)}">
        <td><strong>${escapeHtml(module.domain)}</strong><br><span class="muted">${escapeHtml(module.service || '-')}</span></td>
        <td><strong>${escapeHtml(action.name)}</strong><br><span class="muted">${escapeHtml(action.description || '-')}</span></td>
        <td><span class="method-badge ${methodClass(action.method)}">${escapeHtml(action.method)}</span></td>
        <td class="path-cell">${escapeHtml(fullPath(module, action))}</td>
        <td><span class="flag-badge">${params.length} 个参数</span></td>
      </tr>
    `
  }).join('')

  for (const row of els.actionRows.querySelectorAll('.action-row')) {
    row.addEventListener('click', () => {
      state.selectedActionKey = row.dataset.key
      state.selectedDomain = row.dataset.key.split(':')[0]
      render()
    })
  }
}

function renderDetail() {
  const records = filteredRecords()
  const record = records.find((item) => item.key === state.selectedActionKey) ?? records[0]
  if (!record) {
    els.detailTitle.textContent = '点击接口查看详情'
    els.detailContent.className = 'detail-content empty'
    els.detailContent.textContent = '暂无接口选中'
    return
  }

  const { module, action } = record
  const params = paramsFor(action)
  els.detailTitle.textContent = `${module.domain} / ${action.name}`
  els.detailContent.className = 'detail-content'
  els.detailContent.innerHTML = `
    <div class="detail-grid">
      <div class="detail-card">
        <span>CLI 命令</span>
        <code>mbs ${escapeHtml(module.domain)} ${escapeHtml(action.name)}</code>
      </div>
      <div class="detail-card">
        <span>请求方法</span>
        <strong>${escapeHtml(action.method)}</strong>
      </div>
      <div class="detail-card">
        <span>响应模式</span>
        <strong>${escapeHtml(action.responseMode || 'json')}</strong>
      </div>
      <div class="detail-card">
        <span>模块说明</span>
        <strong>${escapeHtml(module.description || '-')}</strong>
      </div>
      <div class="detail-card">
        <span>场景</span>
        <strong>${escapeHtml(module.scenarios || '-')}</strong>
      </div>
      <div class="detail-card">
        <span>完整路径</span>
        <code>${escapeHtml(fullPath(module, action))}</code>
      </div>
    </div>
    <div>
      <h2>参数</h2>
      <div class="param-list">
        ${params.length ? params.map((param) => `
          <div class="param-row">
            <code>${escapeHtml(param.name)}</code>
            <span>${escapeHtml(param.location)}</span>
            <span>${escapeHtml(param.type)}</span>
            <span>${param.required ? '必填' : '可选'} · ${escapeHtml(param.description || '-')}</span>
          </div>
        `).join('') : '<div class="empty-cell">无参数</div>'}
      </div>
    </div>
  `
}

function render() {
  clearError()
  renderMetrics()
  renderModuleList()
  renderRelationship()
  renderActionRows()
  renderDetail()
}

async function loadDefaultManifest() {
  try {
    const response = await fetch('../../manifests/mbs-api-manifest.json', { cache: 'no-store' })
    if (!response.ok) throw new Error(`HTTP ${response.status}`)
    state.manifest = await response.json()
    state.selectedDomain = state.manifest.modules[0]?.domain ?? ''
  } catch {
    state.manifest = DEFAULT_MANIFEST
    state.selectedDomain = DEFAULT_MANIFEST.modules[0]?.domain ?? ''
  }
  render()
}

function loadManifestFromFile(file) {
  const reader = new FileReader()
  reader.addEventListener('load', () => {
    try {
      const manifest = JSON.parse(String(reader.result))
      if (!Array.isArray(manifest.modules)) throw new Error('manifest.modules must be an array')
      state.manifest = manifest
      state.selectedDomain = manifest.modules[0]?.domain ?? ''
      state.selectedActionKey = ''
      render()
    } catch (err) {
      showError(err instanceof Error ? err.message : String(err))
    }
  })
  reader.readAsText(file)
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

els.search.addEventListener('input', render)
els.method.addEventListener('change', render)
els.loadFileButton.addEventListener('click', () => els.fileInput.click())
els.fileInput.addEventListener('change', () => {
  const file = els.fileInput.files?.[0]
  if (file) loadManifestFromFile(file)
})

loadDefaultManifest()
