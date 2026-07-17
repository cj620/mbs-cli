(() => {
  'use strict'

  const charts = new Map()
  const filters = { platform: '', site: '', portfolio: '' }
  const colors = ['#25d0f2', '#3b82f6', '#38d9a9', '#ffc247', '#ff6b6b', '#9b8afb']
  const axisColor = '#a9c6e8'
  const gridColor = 'rgba(169, 198, 232, 0.14)'
  const numberFormatter = new Intl.NumberFormat('zh-CN', { maximumFractionDigits: 2 })

  const byId = (id) => document.getElementById(id)
  const setText = (id, value = '') => { byId(id).textContent = String(value) }
  const formatNumber = (value) => typeof value === 'number' ? numberFormatter.format(value) : String(value ?? '--')

  function updateClock() {
    const now = new Date()
    byId('clock').dateTime = now.toISOString()
    setText('clock', new Intl.DateTimeFormat('zh-CN', {
      year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
    }).format(now))
  }

  function setLoading(active) {
    byId('loading').classList.toggle('hidden', !active)
    byId('dashboard').setAttribute('aria-busy', String(active))
    byId('refresh-button').disabled = active
  }

  function showError(error) {
    setText('error-message', error instanceof Error ? error.message : String(error))
    byId('error-panel').classList.remove('hidden')
  }

  function clearError() {
    byId('error-panel').classList.add('hidden')
    setText('error-message', '')
  }

  function hasDisplayData(data) {
    return Boolean(data?.kpis?.primary && (data.performance?.categories?.length || data.ranking?.items?.length))
  }

  async function loadData() {
    if (typeof window.loadMbsDashboardData === 'function') {
      return window.loadMbsDashboardData({ ...filters })
    }
    return window.MBS_DASHBOARD_DATA
  }

  function populateFilters(options = {}) {
    for (const key of Object.keys(filters)) {
      const select = byId(`${key}-filter`)
      const values = Array.isArray(options[key]) && options[key].length ? options[key] : [`全部${key === 'platform' ? '平台' : key === 'site' ? '站点' : '店群'}`]
      const previous = filters[key]
      select.replaceChildren(...values.map((value) => {
        const option = document.createElement('option')
        option.value = value.startsWith('全部') ? '' : value
        option.textContent = value
        return option
      }))
      select.value = values.includes(previous) ? previous : ''
      filters[key] = select.value
    }
  }

  function renderMeta(data) {
    setText('dashboard-title', data.meta?.title || 'MBS 跨境电商数据洞察')
    setText('subtitle', data.meta?.subtitle || '多平台 · 店群 · 铺货业务')
    setText('scope-label', data.meta?.scope || '全部业务范围')
    setText('updated-at', `数据更新时间 ${data.meta?.updatedAt || '--'}`)
    document.title = data.meta?.title || 'MBS 跨境电商数据洞察'

    const active = Object.values(filters).filter(Boolean)
    setText('filter-summary', `当前范围：${active.length ? active.join(' / ') : data.meta?.scope || '全部数据'}`)
  }

  function renderKpis(kpis) {
    const primary = kpis.primary
    setText('primary-label', primary.label)
    setText('primary-value', formatNumber(primary.value))
    setText('primary-unit', primary.unit || '')
    const delta = Number(primary.delta)
    const deltaText = Number.isFinite(delta) ? `${primary.deltaLabel || '较上期'} ${delta >= 0 ? '+' : ''}${delta}%` : primary.deltaLabel || '--'
    setText('primary-delta', deltaText)
    byId('primary-delta').classList.toggle('negative', Number.isFinite(delta) && delta < 0)

    byId('secondary-kpis').replaceChildren(...(kpis.secondary || []).slice(0, 3).map((item) => {
      const card = document.createElement('div')
      card.className = 'secondary-kpi'
      const label = document.createElement('span')
      label.textContent = item.label
      const value = document.createElement('strong')
      value.textContent = `${formatNumber(item.value)}${item.unit || ''}`
      const note = document.createElement('small')
      note.textContent = item.note || ''
      card.append(label, value, note)
      return card
    }))
  }

  function renderRanking(ranking) {
    setText('ranking-title', ranking.title)
    const max = Math.max(...ranking.items.map((item) => Number(item.value) || 0), 1)
    byId('ranking-list').replaceChildren(...ranking.items.slice(0, 10).map((item) => {
      const row = document.createElement('div')
      row.className = 'ranking-row'
      const label = document.createElement('span')
      label.className = 'ranking-label'
      label.title = item.label
      label.textContent = item.label
      const track = document.createElement('div')
      track.className = 'ranking-track'
      const fill = document.createElement('div')
      fill.className = 'ranking-fill'
      fill.style.width = `${Math.max(2, (Number(item.value) / max) * 100)}%`
      track.append(fill)
      const value = document.createElement('span')
      value.className = 'ranking-value'
      value.textContent = `${formatNumber(item.value)} ${ranking.unit || ''}`
      row.append(label, track, value)
      return row
    }))
  }

  function chart(id) {
    const element = byId(id)
    let instance = charts.get(id)
    if (!instance) {
      instance = window.echarts.init(element, null, { renderer: 'canvas' })
      charts.set(id, instance)
    }
    return instance
  }

  const baseAxis = (type = 'value') => ({
    type,
    axisLine: { lineStyle: { color: axisColor } },
    axisLabel: { color: axisColor, hideOverlap: true },
    axisTick: { show: false },
    splitLine: { lineStyle: { color: gridColor } },
  })

  const tooltip = { trigger: 'axis', backgroundColor: 'rgba(2, 16, 55, 0.95)', borderColor: '#49bcf7', textStyle: { color: '#f7fbff' } }
  const legend = { top: 4, textStyle: { color: axisColor }, type: 'scroll' }

  function renderComboChart(id, model) {
    const barSeries = (model.bars || []).map((item, index) => ({
      name: item.name, type: 'bar', data: item.values, barMaxWidth: 30,
      itemStyle: { color: colors[index % colors.length], borderRadius: [6, 6, 0, 0] },
    }))
    const lineSeries = (model.lines || []).map((item, index) => ({
      name: item.name, type: 'line', data: item.values, yAxisIndex: 1, smooth: true, symbolSize: 7,
      lineStyle: { width: 3, type: index % 2 ? 'dashed' : 'solid' }, itemStyle: { color: colors[(index + barSeries.length) % colors.length] },
    }))
    chart(id).setOption({
      color: colors, tooltip, legend, grid: { left: 48, right: 50, top: 48, bottom: 34 },
      xAxis: baseAxis('category'), yAxis: [baseAxis(), { ...baseAxis(), axisLabel: { color: axisColor, formatter: `{value}${model.lines?.[0]?.unit || '%'}` } }],
      dataset: undefined, series: [...barSeries, ...lineSeries],
    }, true)
    chart(id).setOption({ xAxis: { data: model.categories } })
  }

  function renderTrend(model) {
    const anomalyBySeries = new Map()
    for (const anomaly of model.anomalies || []) {
      const points = anomalyBySeries.get(anomaly.series) || []
      points.push({ coord: [model.categories[anomaly.index], model.series.find((item) => item.name === anomaly.series)?.values[anomaly.index]], name: anomaly.label })
      anomalyBySeries.set(anomaly.series, points)
    }
    chart('trend-chart').setOption({
      color: colors, tooltip, legend, grid: { left: 48, right: 50, top: 48, bottom: 34 },
      xAxis: { ...baseAxis('category'), data: model.categories },
      yAxis: [baseAxis(), { ...baseAxis(), axisLabel: { color: axisColor, formatter: '{value}%' } }],
      series: model.series.map((item, index) => ({
        name: item.name, type: 'line', data: item.values, yAxisIndex: item.unit === '%' ? 1 : 0, smooth: true,
        symbol: index % 2 ? 'diamond' : 'circle', lineStyle: { width: 3, type: index % 2 ? 'dashed' : 'solid' },
        markPoint: anomalyBySeries.has(item.name) ? { symbol: 'pin', symbolSize: 44, label: { show: false }, itemStyle: { color: '#ff6b6b' }, data: anomalyBySeries.get(item.name) } : undefined,
      })),
    }, true)
  }

  function renderContribution(model) {
    chart('contribution-chart').setOption({
      color: colors, tooltip, legend, grid: { left: 48, right: 20, top: 48, bottom: 50 },
      xAxis: { ...baseAxis('category'), data: model.categories, axisLabel: { color: axisColor, rotate: model.categories.length > 5 ? 25 : 0 } },
      yAxis: baseAxis(),
      series: model.series.map((item) => ({ name: item.name, type: 'bar', stack: 'total', data: item.values, barMaxWidth: 44 })),
    }, true)
  }

  function renderDistribution(model) {
    chart('distribution-chart').setOption({
      color: colors, tooltip: { ...tooltip, trigger: 'item' }, legend: { ...legend, orient: 'vertical', left: 12, top: 'center' },
      series: [{
        name: model.title, type: 'pie', radius: ['48%', '72%'], center: ['65%', '54%'], avoidLabelOverlap: true,
        label: { color: '#f7fbff', formatter: '{b}\n{d}%' }, labelLine: { lineStyle: { color: axisColor } }, data: model.items,
      }],
    }, true)
  }

  function renderTable(detail) {
    setText('table-title', detail.title)
    setText('table-summary', detail.summary || '')
    const headRow = document.createElement('tr')
    for (const column of detail.columns || []) {
      const th = document.createElement('th')
      th.scope = 'col'
      th.textContent = column.label
      headRow.append(th)
    }
    byId('detail-head').replaceChildren(headRow)
    byId('detail-body').replaceChildren(...(detail.rows || []).map((row) => {
      const tr = document.createElement('tr')
      for (const column of detail.columns || []) {
        const td = document.createElement('td')
        td.textContent = row[column.key] ?? '--'
        if (column.key === 'value' && row.level) td.className = `status-${row.level}`
        tr.append(td)
      }
      return tr
    }))
  }

  function render(data) {
    if (!hasDisplayData(data)) {
      byId('dashboard').classList.add('hidden')
      byId('empty-state').classList.remove('hidden')
      return
    }
    byId('dashboard').classList.remove('hidden')
    byId('empty-state').classList.add('hidden')
    renderMeta(data)
    renderKpis(data.kpis)
    renderRanking(data.ranking)

    setText('performance-title', data.performance.title)
    setText('performance-summary', data.performance.summary || '')
    setText('trend-title', data.trend.title)
    setText('trend-summary', data.trend.summary || '')
    setText('comparison-title', data.comparison.title)
    setText('comparison-summary', data.comparison.summary || '')
    setText('contribution-title', data.contribution.title)
    setText('contribution-summary', data.contribution.summary || '')
    setText('distribution-title', data.distribution.title)
    setText('distribution-summary', data.distribution.summary || '')

    renderComboChart('performance-chart', data.performance)
    renderTrend(data.trend)
    renderComboChart('comparison-chart', data.comparison)
    renderContribution(data.contribution)
    renderDistribution(data.distribution)
    renderTable(data.detail)
  }

  async function refresh({ initializeFilters = false } = {}) {
    clearError()
    setLoading(true)
    try {
      if (!window.echarts) throw new Error('ECharts 未加载，请确认 vendor/echarts.min.js 存在')
      const data = await loadData()
      if (initializeFilters) populateFilters(data?.filters)
      render(data)
    } catch (error) {
      showError(error)
    } finally {
      setLoading(false)
    }
  }

  for (const select of document.querySelectorAll('[data-filter]')) {
    select.addEventListener('change', () => {
      filters[select.dataset.filter] = select.value
      refresh()
    })
  }
  byId('refresh-button').addEventListener('click', () => refresh())
  byId('retry-button').addEventListener('click', () => refresh())

  let resizeTimer
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer)
    resizeTimer = setTimeout(() => charts.forEach((instance) => instance.resize()), 120)
  })

  updateClock()
  setInterval(updateClock, 1000)
  refresh({ initializeFilters: true })
})()
