// Replace this sample snapshot, or implement window.loadMbsDashboardData(filters).
window.MBS_DASHBOARD_DATA = {
  meta: {
    title: 'MBS 跨境电商经营洞察',
    subtitle: '示例数据 · 多平台 · 店群 · 铺货业务',
    scope: '全部平台 · 全部店群',
    updatedAt: '2026-07-17 10:30:00',
  },
  filters: {
    platform: ['全部平台', 'Amazon', 'eBay', 'Shopee', 'TikTok Shop'],
    site: ['全部站点', '美国', '英国', '德国', '东南亚'],
    portfolio: ['全部店群', '北美店群', '欧洲店群', '东南亚店群'],
  },
  kpis: {
    primary: { label: '近 30 天 GMV', value: 30500, unit: '万元', delta: 12.8, deltaLabel: '较上期' },
    secondary: [
      { label: '在线 Listing', value: 128640, unit: '个', note: '在线率 81%' },
      { label: '铺货成功率', value: 94.6, unit: '%', note: '较上期 +2.1pp' },
      { label: '活跃店铺', value: 386, unit: '家', note: '覆盖 4 个平台' },
    ],
  },
  ranking: {
    title: '店群 GMV 排名',
    summary: '近 30 天',
    unit: '万元',
    items: [
      { label: '北美一组', value: 8390 },
      { label: '欧洲精品组', value: 6640 },
      { label: '东南亚店群', value: 5900 },
      { label: '北美二组', value: 4560 },
      { label: '新店孵化组', value: 3010 },
      { label: '长尾维护组', value: 2000 },
    ],
  },
  performance: {
    title: 'GMV、订单与铺货成功率',
    summary: '按周 · 金额/订单/比例',
    categories: ['第 1 周', '第 2 周', '第 3 周', '第 4 周'],
    bars: [
      { name: 'GMV（万元）', values: [6820, 7310, 7890, 8480] },
      { name: '订单（百单）', values: [128, 139, 151, 166] },
    ],
    lines: [{ name: '铺货成功率', values: [91.5, 92.8, 93.7, 94.6], unit: '%' }],
  },
  trend: {
    title: '在线 Listing 与异常趋势',
    summary: '异常点已标记',
    categories: ['07-11', '07-12', '07-13', '07-14', '07-15', '07-16', '07-17'],
    series: [
      { name: '在线 Listing（千）', values: [119, 120, 121, 123, 124, 126, 128.6] },
      { name: '失败率', values: [4.1, 3.8, 4.3, 7.9, 5.2, 4.8, 4.4], unit: '%' },
    ],
    anomalies: [{ series: '失败率', index: 3, label: 'Amazon DE 类目映射失败增加' }],
  },
  comparison: {
    title: '平台 GMV 与增长率',
    summary: '近 30 天',
    categories: ['Amazon', 'eBay', 'Shopee', 'TikTok Shop'],
    bars: [{ name: 'GMV（万元）', values: [12800, 7600, 6100, 4000] }],
    lines: [{ name: '增长率', values: [18.2, 8.4, 24.7, 31.5], unit: '%' }],
  },
  contribution: {
    title: '平台店群贡献结构',
    summary: '按平台堆叠',
    categories: ['北美一组', '欧洲精品组', '东南亚店群', '新店孵化组'],
    series: [
      { name: 'Amazon', values: [5200, 2700, 800, 1100] },
      { name: 'eBay', values: [2100, 2900, 500, 700] },
      { name: 'Shopee', values: [300, 500, 4200, 600] },
      { name: 'TikTok Shop', values: [790, 540, 400, 610] },
    ],
  },
  distribution: {
    title: 'Listing 状态构成',
    summary: '总计 158,210',
    items: [
      { name: '在线', value: 128640 },
      { name: '审核中', value: 12580 },
      { name: '下架', value: 9940 },
      { name: '失败', value: 7050 },
    ],
  },
  detail: {
    title: '需要关注的店铺 / Listing',
    summary: '按影响程度排序',
    columns: [
      { key: 'object', label: '对象' },
      { key: 'platform', label: '平台' },
      { key: 'metric', label: '异常指标' },
      { key: 'value', label: '当前值' },
    ],
    rows: [
      { object: 'DE-Home-03', platform: 'Amazon', metric: '铺货失败率', value: '12.8%', level: 'danger' },
      { object: 'US-Fashion-08', platform: 'eBay', metric: '在线率', value: '72.4%', level: 'warning' },
      { object: 'SEA-New-12', platform: 'Shopee', metric: '30 天零销量', value: '386', level: 'warning' },
      { object: 'UK-Life-02', platform: 'TikTok Shop', metric: '库存覆盖天数', value: '9 天', level: 'danger' },
    ],
  },
}
