---
name: mbs-commerce-insights
description: Use for cross-border e-commerce data analysis, visualization, one-off insight pages, dashboards, and data screens built from MBS CLI data. Covers multi-platform, site, shop portfolio, shop, SPU, SKU, and listing analysis; delegates deterministic computation to local Python; and uses the bundled commerce dashboard template when a page is requested.
---

# MBS 跨境电商数据分析与看板

面向多平台、店群铺货业务完成取数、分析、洞察和页面呈现。始终通过 `mbs` 命令或本机 `mbs serve` 获取 MBS 数据，不直接请求上游 API，不读取 CLI 凭证，不执行写操作。

所有分析结果和页面仅用于公司内部。默认在本机或受控内网交付；若用户要求公开部署，必须先停止并要求完成数据脱敏、安全和第三方授权审查。

## 第一步：确认交付范围

用户已明确交付形态时直接进入对应流程。意图不明确时，只问一次：

> 这次希望交付哪种结果：数据分析结果、一次性专题分析页，还是长期固定看板？

| 模式 | 交付物 | 页面 | 刷新方式 |
|---|---|---|---|
| 数据分析结果 | 指标、图表、结论与口径 | 否 | 单次 |
| 一次性专题分析页 | 围绕当前问题的独立页面 | 是 | 当前快照或手动刷新 |
| 长期固定看板 | 可持续使用的业务看板 | 是 | 稳定接口或定时刷新 |

不要在范围确认前大量取数或创建页面文件。之后一次只追问一个无法推断的关键条件：业务问题、时间范围、分析维度、指标口径、主要使用者。

## 工作流

1. 阅读 [domain.md](domain.md)，使用跨境电商铺货领域术语描述问题。
2. 定位正式业务命令；跨域聚合或数据库分析时阅读 `../database/SKILL.md`，先执行 `my-tables`，再确认表和字段。
3. 写下指标、维度、粒度、时间范围和过滤条件。禁止猜测字段、枚举、ID 或指标口径。
4. 数据量大、需要聚合或需要反复试算时，按 [python-service.md](python-service.md) 将计算交给本地 Python，只把压缩结果交回 Agent。
5. 按 [analysis.md](analysis.md) 校验数据质量、总分一致性、异常值和结论证据。
6. 仅页面模式阅读 [visualization.md](visualization.md)，复制 `assets/commerce-dashboard/` 到用户指定的输出目录，再按业务修改副本。禁止原地修改内置模板。
7. 页面使用 `data.js` 中的稳定数据契约。长期看板可实现 `window.loadMbsDashboardData(filters)` 异步加载，复用本机 `mbs serve`。
8. 交付前核对页面数字与 Python 输出一致，并检查加载、空数据、错误、键盘操作和常见视口。

## 页面底座

内置模板以本地 BigDataView 第 011 套源码为设计参考，重新实现深蓝三栏大屏、中央核心指标和 ECharts 图表结构，未打包来源项目中授权不明的图片、自动跳转、jQuery、公众号素材和硬编码业务数据。

模板入口：`assets/commerce-dashboard/index.html`

复制后至少修改：

- `data.js`：标题、范围、指标、序列、排名、异常和明细；
- 页面标题及业务说明；
- 与分析问题不匹配的图表或模块；
- 长期看板的数据加载函数、筛选项和刷新策略。

不要为了填满布局制造指标。没有业务意义的模块应删除或合并。

## 强制验证

- 每个指标都能追溯到命令、SQL、字段和过滤条件；
- 汇总值与分组值在解释范围内一致；
- 图表标题包含指标和粒度，时间序列标明周期；
- 排名默认按值降序，比例明确分母；
- 异常同时使用颜色、形状或文字，不只依赖颜色；
- 页面包含数据更新时间、范围、加载状态、空状态和可恢复错误；
- 不向页面输出 Cookie、token、SQL 中的敏感值或完整原始数据。
