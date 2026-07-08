---
name: mbs
description: "Use when working with MBS / 马帮 CLI for authentication, CLI version checks, CLI updates, raw API access, or business data queries (org hierarchy, orders, procurement, products, operations, finance)."
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

## 模块路由表

**第一步**：根据用户意图关键词定位模块。**第二步**：读对应 SKILL.md 获取命令详情。

| 用户意图关键词（中 / EN） | 模块 | 详细文档 |
|---|---|---|
| 组织 / 平台 / 站点 / 总监 / 经理 / 主管 / 店长 / 员工 / org / platform / site / leader / manager | `org` | [references/org/SKILL.md](references/org/SKILL.md) |
| 数据库 / 多数据源 / SQL / Doris / 可操作库表 / 权限库表 / 表结构 / 数据分析 / 日销 / 日报 / 销售报表 / daily sales / agent query | `database` | [references/database/SKILL.md](references/database/SKILL.md) |
| 导出 / 导出 Excel / 导出报表 / 下载数据 / xlsx / export / download report | `export` | [references/export/SKILL.md](references/export/SKILL.md) |
| test / whoami / auth status / authentication | `test` | [references/test/SKILL.md](references/test/SKILL.md) |
| 更新 / 升级 / 版本 / 有新版本 / update / upgrade / version / check update | `update` | [references/update/SKILL.md](references/update/SKILL.md) |
| <!-- AUTO-GENERATED API MODULES START --> |  |  |
| 在线listing / 商品 / product | `product` | [references/product/SKILL.md](references/product/SKILL.md) |
| 店铺健康 / 账号健康 / 亚马逊 / amazon / shops / 合规 | `crm` | [references/crm/SKILL.md](references/crm/SKILL.md) |
| <!-- AUTO-GENERATED API MODULES END --> |  |  |



> 后续模块按需追加到本表，Agent 只需读本文件即可完成一级路由，无需扫描全部文档。

> `doris` 是数据库查询网关的历史命令名。新的 agent 路由应归到 `database`，旧的 `mbs doris ...` 命令仅作为兼容入口。

---

## 模糊意图消歧协议

当用户意图不够明确时，按以下决策树处理，**禁止猜测后直接执行**。

### 情况 A — 关键词命中 0 个模块

用户说的内容与路由表中任何模块的关键词均不匹配。

**处理方式**：从上方路由表中列出所有已注册模块，让用户选择。

```
我不确定你想查哪个业务模块，目前支持：
- org（组织架构：平台 / 站点 / 人员层级）
- crm（店铺运营监控：Amazon 账号健康 / 违规 / 合规评分）
（其他模块开发中）

请问你想查哪个方向的数据？
```

> 注意：上方示例仅为格式参考。实际回复时**必须以本文件路由表中当前列出的模块为准**，不要照抄示例。

### 情况 B — 关键词命中 ≥ 2 个模块

用户说的内容同时匹配多个模块的关键词（例如"报表"在多个模块中都有）。

**处理方式**：列出命中的候选模块，逐一描述用途，让用户确认。

```
"报表"可能对应以下模块，请确认：
- orders（订单报表：销售额、发货量）
- finance（财务报表：结算、回款）
- procurement（采购报表：采购额、供应商）

你想查哪个？
```

### 情况 C — 模块已定位，但必填参数缺失

已确定目标模块和命令，但执行所需的必填参数未提供。

**处理方式**：读该模块 SKILL.md 中的命令说明，找到缺失的必填参数，**一次只追问一个**。

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

**处理方式**：先确认用户是否需要查询 MBS / 马帮 数据，再进入情况 A 的流程。

```
你是否想查询马帮平台的数据？如果是，请告诉我大概想看什么方向。
```

---

## 全局参考

认证配置 / 版本更新 / 输出格式 / 退出码 / `raw` 直通命令 / `serve` 本地 HTTP 网关 → [references/global.md](references/global.md)

---

## 意图路由规则

1. **业务数据查询**：查模块路由表 → 命中 1 个模块则读其 SKILL.md → 执行命令
2. **命中 0 或 ≥ 2 个模块**：触发消歧协议（见上方）
3. **认证 / raw / serve**：直接看 [references/global.md](references/global.md)。**版本 / 更新**：查路由表 `update` 模块 → [references/update/SKILL.md](references/update/SKILL.md)
4. **找不到对应模块**：告知用户该模块尚未封装，可用 `mbs raw GET <endpoint>` 探索原始接口
