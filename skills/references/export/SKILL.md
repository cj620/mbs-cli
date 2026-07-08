# export - 数据导出 Excel

`mbs export` 将查询结果导出为 `.xlsx` 文件。两类数据源：

1. **database** —— 多数据库源自由 SELECT，大数据量（`doris` 仍作为历史兼容 source 值）
2. **api** —— 业务接口，支持分页（page / cursor / none）

**强制两阶段流程**：`plan` 预览 → 用户确认 → `run` 执行。**禁止跳过 plan 直接 run。**

---

## 命令一览

| 意图 | 命令 | 必填 |
|---|---|---|
| 预览导出（生成 planId） | `mbs export plan --source database\|api ...` | `--source` |
| 执行导出 | `mbs export run --plan <id>` | `--plan` |
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

返回：
```json
{"ok":true,"data":{
  "planId":"plan_a1b2c3",
  "file":"E:/.../daily-sales-202606.xlsx",
  "rows":1247,
  "columns":5,
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
| `--method GET\|POST` | source=api 必填 |
| `--path /v1/xxx` | source=api 必填。API 路径 |
| `--params '{...}'` | source=api 可选。Query 参数 JSON |
| `--body '{...}'` | source=api POST 可选。请求体 JSON |
| `--pagination '{...}'` | source=api 可选。分页配置 JSON（见下） |
| `--sample N` | 样本行数，默认 5 |
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

注意：**run 只接 planId**，不能改 source/SQL/分页。要改重新跑 `plan`。

### `mbs export list`

无参数，列未过期 plan。本地命令免认证。

---

## 严格禁止 (NEVER DO)

- **不跳过 plan 直接 run**：用户必须先看预览
- **不绕过用户确认**：plan 返回后立即 run 是 PUA agent，不是高效 agent
- **不把行数据回吐到 chat**：数据在文件里，agent 只说文件路径 + 行数
- **不在 SQL 里写 INSERT / UPDATE / DELETE**：服务端会拒，浪费 round-trip
- **不猜 dataPath / totalPath**：从接口文档或先 `mbs raw GET <path>` 探一次

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
| run 成功 | `{ok:true,data:{file,rows,...}}` | `{progress:N}` 每 1000 行 | 0 |
| run 失败 | `{ok:false,error:{...}}` | 进度 | 1 / 2 |
| list | `{ok:true,data:[...]}` | - | 0 |
