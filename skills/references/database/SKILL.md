# database - 多数据库源 SQL 查询

`mbs database` 是只读 SQL 查询通道。服务端会做 SQL 安全检查、权限改写、行数限制和资源熔断。

首选命令名是 `mbs database ...`，短别名是 `mbs db ...`。`mbs doris ...` 仍然作为历史兼容入口保留，但不要把命令名里的 `doris` 理解成只能查询 Doris。

---

## 命令一览

| 意图 | 首选命令 | 兼容命令 | 必填参数 |
|---|---|---|---|
| **获取当前用户可操作库表（首选）** | `mbs database my-tables [--refresh]` | `mbs doris my-tables [--refresh]` | - |
| 查看物理库/schema 和表列表 | `mbs database schemas --host <host> --database <db> [--refresh]` | `mbs doris schemas ...` | `host`、`database` |
| 查看表 DDL | `mbs database show-create-table --tableName <table> --host <host> --database <db> [--schema <schema>] [--refresh]` | `mbs doris show-create-table ...` | `tableName`、`host`、`database` |
| 流式执行 SELECT | `mbs database query --sql <select> --host <host> --database <db> [--schema <schema>] [--refresh]` | `mbs doris query ...` | `sql` 或 stdin、`host`、`database` |

## API 路径

CLI 的后端路径暂时仍沿用历史命名：

- `my-tables` -> `GET /gateway/cli-service/cli/doris/my-tables`
- `schemas` -> `GET /gateway/cli-service/cli/doris/schemas`
- `show-create-table` -> `GET /gateway/cli-service/cli/doris/show-create-table`
- `query` -> `POST /gateway/cli-service/cli/doris/query`

---

## 强制 Step 0：先查可操作库表

每次查询前，先用 `my-tables` 从权限配置视角获取当前用户可操作的库表清单：

```bash
mbs database my-tables
```

返回项里重点看：

| 字段 | 用途 |
|---|---|
| `databaseName` | 后续 `--database` 或表名前缀依据 |
| `host` | 数据源标识；空串表示默认 Doris |
| `tableName` | 真实表名 |
| `tableNike` | 表别名，优先用于理解业务含义 |
| `tableDescription` | 表用途说明 |
| `rules` | 当前用户在该表上的过滤规则，服务端查询时会自动注入 |

标准决策：

```text
my-tables
  -> 根据 tableNike/tableDescription/tableName 匹配候选表
  -> 记录该表的 host + databaseName + tableName
  -> 必要时查 schemas / show-create-table
  -> query 时带同一组 host/database/schema
```

不要跳过 `my-tables` 直接猜库、表、host 或 schema。

---

## 数据源参数规则

除 `my-tables` 外，所有数据库命令都必须提供 `--host` 与 `--database`，且两者必须成对出现：

```bash
mbs database schemas --host pg-main --database order_db
mbs database show-create-table --tableName orders --host pg-main --database order_db --schema public
mbs database query --sql "SELECT order_id FROM orders LIMIT 20" --host pg-main --database order_db --schema public
```

规则：

- `my-tables` 不需要 `--host` 或 `--database`
- `schemas`、`show-create-table`、`query` 缺少任一参数时，CLI 在请求前直接报错
- `--host` + `--database` 都传：查询对应数据源
- `--schema` 仅在同名表映射到多个 schema、或服务端要求消歧时传
- `schemas`、`query`、`show-create-table` 必须沿用从 `my-tables` 选出的同一组数据源参数

---

## 结构发现流程

`my-tables` 是权限配置视角，适合快速找“我能查什么”。需要物理结构时再查：

1. `mbs database schemas --host ... --database ...`
   - 给库/schema 与表列表
   - 用于确认物理表是否存在、PG 源有哪些 schema
2. `mbs database show-create-table --tableName ... --host ... --database ... [--schema ...]`
   - 给字段名、类型、分区或伪 DDL
   - 用于写 SQL 前确认列名、日期列、金额列、维度列

如果服务端提示同名表在多个 schema 下存在歧义，补 `--schema` 后重试。

---

## 默认 Doris 的语义辅助

`eshop.DB_DATA_DICTIONARY` 只作为默认 Doris 的语义层辅助，不是所有数据源的第一步。

当 `my-tables` 选中的表属于默认 Doris，且需要字段口径、枚举值、业务说明时，可以查：

```sql
SELECT table_schema, table_name, table_comment
FROM   eshop.DB_DATA_DICTIONARY
WHERE  table_comment LIKE '%日销%' OR table_name LIKE '%daily_sales%'
LIMIT  50
```

```sql
SELECT column_name, column_comment, data_type, enum_values
FROM   eshop.DB_DATA_DICTIONARY
WHERE  table_schema = 'eshop' AND table_name = '<候选表>'
ORDER  BY ordinal_position
```

如果目标表来自外部数据源，优先使用 `my-tables.tableDescription`、`show-create-table` 和用户确认，不要假设 `DB_DATA_DICTIONARY` 覆盖该源。

---

## 元数据缓存

CLI 会缓存元数据，默认缓存 30 分钟，减少反复查同一份地图：

- `database my-tables`：缓存当前用户可操作库表
- `database schemas`：按 `host + database` 缓存库/schema 与表清单
- `database show-create-table`：按 `host + database + schema + tableName` 缓存 DDL
- `database query`：仅当 SQL 查询 `DB_DATA_DICTIONARY` 时缓存返回流

**不会缓存普通业务查询结果**。销售额、订单量、库存、退款等实时数据仍然每次查询。

用户明确要求最新权限、最新表结构、刚改过授权或刚建表时，加 `--refresh`：

```bash
mbs database my-tables --refresh
mbs database schemas --host pg-main --database order_db --refresh
mbs database show-create-table --tableName orders --host pg-main --database order_db --schema public --refresh
```

---

## 查询规则

- 只允许 `SELECT`；`INSERT/UPDATE/DELETE/DROP/ALTER` 服务端会拒
- 不猜库名、表名、字段名、host、database、schema、ID、状态枚举、业务含义
- 先从 `my-tables` 确认可操作表，再写 SQL
- 明确列名，禁止裸 `SELECT *`
- 必须加 `LIMIT`，除非用户明确要求“全量聚合”且结果行数可控
- 优先命中分区键 / 日期列，避免全表扫描
- 日期 / 时间用字符串字面量 `'YYYY-MM-DD'`

---

## 日销 / 报表类流程

触发关键词：日销 / 日报 / 每日销售 / 销售报表 / daily sales / GMV by day / 每天的销售额。

1. `mbs database my-tables`，按 `tableNike` / `tableDescription` / `tableName` 找候选表
2. 如候选表是默认 Doris，可按需查 `DB_DATA_DICTIONARY` 补字段口径
3. `show-create-table` 确认日期列、金额列、维度列、分区键
4. 执行前确认时间窗口、统计维度、公司或组织范围
5. 写聚合 SQL 并执行 `mbs database query`

示例：

```sql
SELECT stat_date,
       SUM(sales_amount) AS gmv,
       SUM(order_cnt)    AS orders
FROM   <table>
WHERE  stat_date BETWEEN '2026-05-22' AND '2026-05-28'
GROUP  BY stat_date
ORDER  BY stat_date
LIMIT  1000;
```

---

## 数据探索流程

触发关键词：表里有什么 / 查一下 / 看看 / 数据长什么样 / explore / sample。

1. `mbs database my-tables` 找当前用户可操作表
2. 必要时 `schemas` / `show-create-table` 看物理结构
3. 起始查询保守：少量列 + 强 WHERE + `LIMIT 20`
4. 根据返回结果，再迭代收窄或聚合

样本探查：

```sql
SELECT col1, col2, col3
FROM   <table>
WHERE  <partition_or_date_col> = '2026-05-28'
LIMIT  20;
```

---

## 输出格式

`my-tables`、`schemas` 和 `show-create-table` 返回标准 MBS JSON：

```json
{ "ok": true, "data": "<业务数据>" }
```

`query` 透传服务端 NDJSON 流，每行一个 JSON 对象：

```json
{"type":"header","columns":["stat_date","gmv","orders"]}
{"type":"data","row":{"stat_date":"2026-05-28","gmv":12345.67,"orders":89}}
{"type":"end","totalRows":1}
```

如果流中出现 `{"type":"error"}`，视为查询失败，读取 `message` 反馈用户，不要假装成功。

### 权限失败处理（强制）

错误信息含 `permission` / `denied` / `unauthorized` / `无权限` / `禁止访问` / HTTP `403` 时，**立即停止**，原文回报给用户：

- 把 `error.message` 原文贴给用户
- 明确告知：当前账号对该表/字段无权限，无法直接查询
- **禁止**：自动换表、改字段、拆 SQL、绕道其它 domain 命令、用 `mbs raw` 探路等任何替代探索
- 询问用户是否继续尝试替代路径，并显式警告：替代查询的口径/字段定义可能与目标表不一致，数据可能不准确
- 用户明确同意后方可继续探索；用户未表态前保持等待

---

## 限制

- 单条 SQL <= 10,000 字符（`MAX_SQL_LENGTH`）
- `host` / `database` / `schema` 单项 <= 200 字符
- SQL 必须非空；空白会被拒
- `--sql` 与 stdin 二选一；都没有时 TTY 下会报错
