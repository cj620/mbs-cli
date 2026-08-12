---
name: mbs
description: "Use when working with MBS / 马帮 CLI for authentication, CLI updates, business data queries, data analysis, visualization, one-off insight pages, dashboards, or data screens for cross-border e-commerce operations."
metadata:
  requires:
    bins: ["mbs"]
---

# MBS CLI

通过 `mbs` 命令查询马帮平台数据，或处理 CLI 自身的版本与更新。

## 严格禁止 (NEVER DO)

- 不使用 `mbs` 以外的方式访问 MBS 数据，例如 `curl` 或手写 HTTP
- 不编造 ID，必须从命令返回结果中提取
- 不猜测参数值，执行前先查询确认
- **不在意图不明确时静默执行** —— 先消歧，再行动

---

<!-- AUTO-GENERATED FIND-FIRST PROTOCOL START -->
## 统一语义发现流程

1. 将用户原始需求原样交给后端，首次执行 `mbs find "<query>"`；不要求用户预先选择 domain、workflow、api 或 table。
2. 首次召回不得根据模块路由表或关键词预判并添加 `--domain`，domain、候选类型、排序和权限均由后端统一判断。
3. 只有用户明确限定业务域，或首次响应的 `hint.suggestedDomains` 建议收窄时，后续召回才允许使用 `--domain`。
4. 检查候选分数和 hint；低置信、无结果或歧义时先按后端提示补充业务域、对象或时间范围，不直接执行候选。
5. 命中 `workflow` 时读取其 `steps`，逐步用每个 `intentQuery` 再次执行 `mbs find --target-type api`。
6. 确认一个 `api` 候选后，执行其 `detailCommand`（`mbs describe <apiId>`）从后端读取完整接口定义。
7. 确认一个 `table` 候选后，只按结构化 `nextAction` 的字段调用 `mbs database show-create-table --host <host> --database <database> [--schema <schema>] --tableName <tableName>`；候选不是权限凭据，详情仍会二次鉴权。
8. API 详情确认 `operationType=QUERY` 且 method 为 GET/POST 后，将已确认字段按 path、query 和 body 作用域组装，使用 `mbs request <method> <path> [--params <json>] [--body <json>]` 执行；path 参数必须先替换。可选 `command` 只是已封装接口的便利入口，不是动态接口执行前提。table 仅在用户确认查询目标并检查表结构后，才构造 SELECT 并执行 `mbs database query`。

禁止执行后端命令字符串，也禁止通过 Glob、目录遍历、本地 manifest 或本地表索引发现目标；具体候选和权限过滤必须来自后端。
<!-- AUTO-GENERATED FIND-FIRST PROTOCOL END -->

## 模块路由表

模块表用于了解业务域边界；业务接口仍须按上方流程先执行 `mbs find`。

| 用户意图关键词（中 / EN） | 模块 | 详细文档 |
|---|---|---|
| 组织 / 平台 / 站点 / 总监 / 经理 / 主管 / 店长 / 员工 / org / platform / site / leader / manager | `org` | [references/org/SKILL.md](references/org/SKILL.md) |
| 数据库 / 多数据源 / SQL / Doris / 可操作库表 / 权限库表 / 表结构 / 数据查询 / 日销 / 日报 / 销售报表 / daily sales / agent query | `database` | [references/database/SKILL.md](references/database/SKILL.md) |
| 数据分析 / 数据分析展示 / 可视化 / 专题分析页 / 创建看板 / 看板 / 大屏 / dashboard / visualization / insight | `dashboard` | [references/dashboard/SKILL.md](references/dashboard/SKILL.md) |
| 导出 / 导出 Excel / 导出报表 / 下载数据 / xlsx / export / download report | `export` | [references/export/SKILL.md](references/export/SKILL.md) |
| test / whoami / auth status / authentication | `test` | [references/test/SKILL.md](references/test/SKILL.md) |
| 更新 / 升级 / 版本 / 有新版本 / update / upgrade / version / check update | `update` | [references/update/SKILL.md](references/update/SKILL.md) |
| <!-- AUTO-GENERATED API MODULES START --> |  |  |
| 数据、分析、报表 | `ars` | [references/ars/SKILL.md](references/ars/SKILL.md) |
| 财务 | `fars` | [references/fars/SKILL.md](references/fars/SKILL.md) |
| 订单 | `oms` | [references/oms/SKILL.md](references/oms/SKILL.md) |
| 商品 | `pim` | [references/pim/SKILL.md](references/pim/SKILL.md) |
| open-ai / oss / translation | `pms` | [references/pms/SKILL.md](references/pms/SKILL.md) |
| 刊登、publish | `prm` | [references/prm/SKILL.md](references/prm/SKILL.md) |
| 供应链 | `scm` | [references/scm/SKILL.md](references/scm/SKILL.md) |
| <!-- AUTO-GENERATED API MODULES END --> |  |  |





> 后续模块按需追加到本表，Agent 只需读本文件即可完成一级路由，无需扫描全部文档。

> `doris` 是数据库查询网关的历史命令名。新的 agent 路由应归到 `database`，旧的 `mbs doris ...` 命令仅作为兼容入口。

> 只查询或导出原始数据时路由到 `database`；需要指标解读、图表、专题分析页或长期看板时路由到 `dashboard`，并由 dashboard 再调用相应数据模块取数。

---

## 统一召回后的消歧协议

只要用户表达了 MBS 业务查询意图，就先将原话直接交给 `mbs find`。不得先按路由表关键词判断 domain，也不得在首次召回前要求用户选择 workflow、api 或 table。

### 情况 A — 后端无结果或低置信

首次召回返回无结果、低置信或需要补充信息时，按响应中的 `hint`、`suggestedQueries` 或 `suggestedDomains` 向用户补充询问，不自行编造候选。

只有用户明确确认某个业务域后，后续调用才添加 `--domain`；否则保留原始查询继续由后端统一判断。

### 情况 B — 后端返回歧义候选

展示后端返回的候选、分数和用途，让用户确认具体目标。候选类型、排序及权限判断以本次后端响应为准，不使用本地关键词重新排序或过滤。

如果后端通过 `hint.suggestedDomains` 建议收窄范围，应先结合用户原话确认业务域，再执行带 `--domain` 的后续召回。

### 情况 C — 候选已确认，但必填参数缺失

已确认目标候选和命令，但执行所需的必填参数未提供。

**处理方式**：先执行候选的 `detailCommand` 获取后端完整定义，找到缺失的必填参数，**一次只追问一个**。

参数确认后再执行命令，不要提前假设默认值。

#### 公司编号 (groupCompanyId) 特例

- 个人信息中存在 `groupCompanyId` 时，**默认直接使用该值**，不要询问，不要在多次调用间切换公司
- `groupCompanyId` 为空时，仅当目标接口将公司编号列为必填参数才询问；接口不要求则不要追问：
  ```
  查店铺需要知道公司：
  - 1 = 胤元
  - 33 = 启元

  请问是哪个公司？
  ```

### 情况 D — 完全没有业务上下文

用户意图极其模糊，无法判断是否与 MBS 数据相关（例如"帮我看看情况"）。

**处理方式**：先确认用户是否需要查询 MBS / 马帮数据；确认后将用户补充的原话直接交给 `mbs find`。

```
你是否想查询马帮平台的数据？如果是，请告诉我大概想看什么方向。
```

---

## 全局参考

认证配置 / 版本更新 / 输出格式 / 退出码 / `serve` 本地 HTTP 网关 → [references/global.md](references/global.md)

---

## 意图路由规则

1. **业务数据查询**：将用户原话直接交给 `mbs find`；首次召回不预判 domain、workflow、api 或 table。
2. **domain 收窄**：仅在用户明确限定业务域，或首次响应的 `hint.suggestedDomains` 建议收窄后，经用户语义确认的后续调用中使用 `--domain`。
3. **workflow 候选**：按 steps 的子意图继续 find API，由当前数据决定是否执行可选步骤。
4. **api 候选**：确认后执行 `mbs describe <apiId>` 读取后端完整定义；确认 QUERY、GET/POST 和字段作用域后使用 `mbs request` 动态查询，不要求预生成业务命令。
5. **table 候选**：确认后按结构化身份调用 `database show-create-table`；候选、DDL 和 SQL 每一步都沿用后端鉴权，不执行后端命令字符串。
6. **认证 / serve / 版本更新**：使用模块路由表中的专用文档。
7. **远程发现不可用**：明确报告依赖失败，不读取本地接口卡片、表索引或端点文档。


## 组织架构参数规则（重要）

组织层级表示上下级关系，不代表业务查询必须逐层下钻。

- 业务命令里的组织字段是独立筛选条件。已知总监 ID 时，直接传入该命令的总监参数即可，不要为了查询总监范围再获取所有经理、主管、店长或员工 ID。
- 已知哪个层级的 ID，就直接使用哪个层级的参数；只有用户明确要求下属名单/编号，或接口明确要求下级参数时，才继续下钻。
- `company`、`platform` 等接口明确要求的参数仍需提供；不要为了补齐组织层级而额外发起查询。
