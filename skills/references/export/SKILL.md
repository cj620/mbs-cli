# export - 数据导出 Excel

`mbs export` 将查询结果导出为 `.xlsx` 文件。两类数据源：

1. **database** —— 多数据库源自由 SELECT，大数据量（`doris` 仍作为历史兼容 source 值）
2. **api** —— 业务接口，支持分页（page / cursor / none）

**强制两阶段流程**：`plan` 预览 → 用户确认 → `run` 执行。**禁止跳过 plan 直接 run。**

预计需要多批请求、运行时间较长或结果量未知时，必须同时遵守[长时间批量任务执行协议](../bulk-task.md)。

---

## 命令一览

| 意图 | 命令 | 必填 |
|---|---|---|
| 预览导出（生成 planId） | `mbs export plan --source database\|api ...` | `--source` |
| 执行导出 | `mbs export run --plan <id>` | `--plan` |
| 从断点继续 | `mbs export run --plan <id> --task <taskId> --resume` | `--plan`、`--task`、`--resume` |
| 保留旧证据并重新全量执行 | `mbs export run --plan <id> --task <taskId> --restart` | `--plan`、`--task`、`--restart` |
| 列已生成的 plan | `mbs export list` | - |

Plan 落盘 `~/.config/mbs/plans/<id>.json`，默认 TTL 1h。过期需重新 `plan`。

---

## 强制流程（agent 必读）

### Step 1 — 调 `plan` 预览

#### Database 源
```bash
mbs export plan --source database \
  --sql "SELECT date,sku,qty,amount FROM ods.daily_sales WHERE date BETWEEN '2026-06-01' AND '2026-06-07'" \
  --sample 5
```

外部数据源：
```bash
mbs export plan --source database \
  --host pg-main \
  --database order_db \
  --schema public \
  --sql "SELECT order_id,status,create_time FROM orders WHERE create_time >= '2026-06-01' LIMIT 10000" \
  --sample 5
```

大批量数据库导出使用显式键集游标。游标列必须稳定且能够唯一排序；外部数据源必须声明方言：

```bash
mbs export plan --source database \
  --host pg-main \
  --database order_db \
  --schema public \
  --sql "SELECT order_id,created_at,status FROM orders WHERE created_at < '2026-09-19'" \
  --cursor-columns created_at,order_id \
  --cursor-dialect postgresql \
  --batch-size 1000 \
  --sample 5
```

#### API 源（分页）
```bash
mbs export plan --source api \
  --method GET \
  --path /v1/report/daily-sales \
  --params '{"startDate":"2026-06-01","endDate":"2026-06-07"}' \
  --pagination '{"type":"page","pageParam":"page","sizeParam":"pageSize","pageSize":200,"dataPath":"data.list","totalPath":"data.total"}' \
  --sample 5
```

返回：
```json
{"ok":true,"data":{
  "planId":"plan_a1b2c3",
  "expiresAt":"2026-06-08T13:00:00Z",
  "source":{...摘要...},
  "columns":[{"name":"date"},...],
  "estimatedRows":1247,
  "sampleRows":[{...},...],
  "nextStep":"mbs export run --plan plan_a1b2c3 --out <file.xlsx>"
}}
```

### Step 2 — 展示给用户确认

agent 必须在 chat 把 `columns`、`estimatedRows`、`sampleRows` 渲染成表格给用户看，**等用户明确确认（"OK" / "确认" / "执行"）后再 run**。

模板：
```
准备导出：
- 数据源：<source 摘要>
- 预计行数：<estimatedRows>
- 列（N 个）：col1 / col2 / ...
- 样本：
  | col1 | col2 | ... |
  | ...  | ...  | ... |

确认执行？
```

### Step 3 — 调 `run` 执行

```bash
mbs export run --plan plan_a1b2c3 --out ./daily-sales-202606.xlsx
```

`run` 在第一次远端请求前先向 stderr 输出 `taskId`、日志、断点、中间文件和输出文件路径。Agent 必须先把这些位置及默认重试策略告知用户，再持续关注关键进度和错误。

返回：
```json
{"ok":true,"data":{
  "planId":"plan_a1b2c3",
  "taskId":"export_0123456789abcdef",
  "file":"E:/.../daily-sales-202606.xlsx",
  "rows":1247,
  "columns":5,
  "logFile":".../task.ndjson",
  "checkpointFile":".../checkpoint.json",
  "durationMs":3421
}}
```

agent 汇报：「导出完成：`<file>`，N 行」。**禁止把 sampleRows 之外的原始行数据再展示给用户**（数据已落盘）。

---

## 参数详解

### `mbs export plan`

| flag | 说明 |
|---|---|
| `--source database\|api` | **必填**。数据源类型；旧值 `doris` 仍兼容 |
| `--sql <SELECT>` | source=database 必填。SELECT 语句 |
| `--host <host>` | source=database 可选。目标数据源主机标识，必须与 `--database` 成对提供 |
| `--database <db>` | source=database 可选。目标数据库名，必须与 `--host` 成对提供 |
| `--schema <schema>` | source=database 可选。同名表跨 schema 歧义时使用 |
| `--cursor-columns <a,b>` | source=database 可选。稳定唯一的键集游标列；大量导出必须提供 |
| `--cursor-dialect doris\|mysql\|postgresql` | source=database 游标分页方言；外部数据源必填 |
| `--batch-size N` | source=database 游标分页批次，默认 1000，最大 10000 |
| `--method GET\|POST` | source=api 必填 |
| `--path /v1/xxx` | source=api 必填。API 路径 |
| `--params '{...}'` | source=api 可选。Query 参数 JSON |
| `--body '{...}'` | source=api POST 可选。请求体 JSON |
| `--pagination '{...}'` | source=api 可选。分页配置 JSON（见下） |
| `--sample N` | 样本行数，默认 5，范围 1–100 |
| `--ttl N` | Plan TTL 秒数，默认 3600 |

#### 分页配置 JSON

**无分页**：
```json
{"type":"none"}
```

**页码分页**（最常见）：
```json
{
  "type":"page",
  "pageParam":"page",
  "sizeParam":"pageSize",
  "pageSize":200,
  "startPage":1,
  "dataPath":"data.list",
  "totalPath":"data.total",
  "hasMorePath":"data.hasMore"
}
```
- `dataPath`：响应中行数组的路径（点分隔）
- `totalPath`：可选，估算总数
- `hasMorePath`：可选，无则按「行数<pageSize」判停
- `startPage`：默认 1

**游标分页**：
```json
{
  "type":"cursor",
  "cursorRequestPath":"cursor",
  "cursorResponsePath":"data.nextCursor",
  "dataPath":"data.list",
  "sizeParam":"limit",
  "pageSize":500
}
```
- `cursorRequestPath`：请求参数名
- `cursorResponsePath`：响应中下一页游标路径
- 游标为 null / 空字符串 / 与上次相同时停

### `mbs export run`

| flag | 说明 |
|---|---|
| `--plan <id>` | **必填**。`plan` 返回的 planId |
| `--out <path>` | 可选。输出 xlsx 路径，默认 `os.tmpdir()/mbs-export-<id>-<ts>.xlsx` |
| `--sheet <name>` | 可选。Sheet 名，默认 `Sheet1` |
| `--task <taskId>` | 与 `--resume` 或 `--restart` 一起指定已有任务 |
| `--resume` | 从已有任务最后一个成功断点继续 |
| `--restart` | 保留旧任务日志和中间结果，创建新任务重新全量查询 |
| `--max-retries N` | 暂时性错误的额外重试次数，默认 3，最大 10 |
| `--retry-base-ms N` | 指数退避初始等待，默认 1000ms |

注意：`run` 不能修改 source、SQL 或分页配置。新任务必须使用未过期 plan；已经在有效期内启动的任务可以在 plan 过期后按原断点继续。

### 中断与恢复

任务会将成功批次先写入任务私有 NDJSON 中间文件，刷新成功后才原子推进断点。Excel 从中间文件流式生成到临时文件，正常关闭并核对行数后才替换最终路径。

发现同一 plan 存在未完成任务时，CLI 不会静默继续或重新全量查询，而是停止并返回两个明确选择。Agent 必须向用户报告已完成行数和相关文件路径，再让用户决定：

```bash
# 继续成功断点
mbs export run --plan <planId> --task <taskId> --resume

# 保留旧任务证据，重新全量查询
mbs export run --plan <planId> --task <taskId> --restart
```

未配置数据库键集游标的历史 database plan 不具备安全的中途恢复位置；已有部分结果时不得伪装成可继续任务，应重新创建带 `--cursor-columns` 的 plan，或经用户确认后重新全量执行。

### `mbs export list`

无参数，列未过期 plan。本地命令免认证。

---

## 严格禁止 (NEVER DO)

- **不跳过 plan 直接 run**：用户必须先看预览
- **不绕过用户确认**：plan 返回后立即 run 是 PUA agent，不是高效 agent
- **不把行数据回吐到 chat**：数据在文件里，agent 只说文件路径 + 行数
- **不在 SQL 里写 INSERT / UPDATE / DELETE**：服务端会拒，浪费 round-trip
- **不猜 dataPath / totalPath**：从接口文档或先 `mbs raw GET <path>` 探一次
- **禁止无限重试**：所有请求、分页、写入和恢复循环都必须有明确上限；不得重置计数变相继续
- **不静默恢复或重跑**：中断后必须向用户展示断点状态并取得继续/重启选择
- **不把完整 SQL、响应或行数据写入日志**：日志只保存任务元数据、计数和安全错误分类

---

## 决策树：用户说「我要导出 XXX」

```
1. XXX 有对应业务 API？
   是 → source=api，查接口文档拿 path + 分页结构
   否 → source=database，先 mbs database my-tables 找当前用户可操作表，再 show-create-table 看 DDL
2. 调 mbs export plan
3. 展示 columns + samples + estimatedRows 给用户
4. 等用户确认
5. 调 mbs export run，返回文件路径
6. 任务中断时展示日志/断点/累计行数，等待用户选择 resume 或 restart
```

---

## 与 database 模块的关系

- `mbs database query` 适合**小量数据 + agent 自己处理**（流式 NDJSON 回 stdout）
- `mbs export` 适合**任意量数据 + 给用户文件**（落盘 xlsx，stdout 只回元信息）

行数预期 > 100 行 → 优先用 export。

---

## 输出契约

| 命令 | stdout | stderr | exit |
|---|---|---|---|
| plan 成功 | `{ok:true,data:{planId,...}}` | - | 0 |
| plan 失败 | `{ok:false,error:{...}}` | - | 1 / 2 |
| run 成功 | `{ok:true,data:{taskId,file,rows,logFile,checkpointFile,...}}` | 初始化、批次、重试与写入事件 | 0 |
| run 失败 | `{ok:false,error:{...}}` | 日志/断点位置、已完成行数和安全错误事件 | 1 / 2 |
| list | `{ok:true,data:[...]}` | - | 0 |
