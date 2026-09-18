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

## 明确数据库目标直达流程

当用户已经提供完整只读 SQL，或明确指定物理表名 / 完整表身份时，查询目标不再需要语义发现：跳过 `mbs find`，直接使用本节的 `mbs database` 流程。这里的“直达”只跳过语义召回，不跳过 `my-tables`、后端鉴权、SQL 安检、权限改写、行数限制或资源熔断。

### 完整只读 SQL

只有完整、可执行且最终执行只读查询的 SQL 才进入本路径；SQL 片段、字段清单、错误日志或自然语言中的零散 SQL 关键词不算明确目标。

1. 执行 `mbs database my-tables`。
2. 从 SQL 中识别实际引用的物理表；CTE 名称、别名和子查询名称不作为物理表。
3. 将每个物理表与 `my-tables` 的 `databaseName/schema/tableName` 精确匹配，并记录同一查询所需的 `host/database/schema`。
4. 所有物理表唯一匹配且属于可执行的同一数据源后，检查 SQL 仍符合只读、显式列和结果限制规则，再执行 `mbs database query`。
5. SQL 没有物理表且上下文不能唯一确定 `host/database` 时，向用户询问数据源；不得猜测默认库。

用户提供的 SQL 表达其明确查询意图，不要先将 SQL 发送给语义召回，也不要无理由改写指标、筛选、分组或排序。需要补充 `LIMIT`、替换裸 `SELECT *` 或修正非只读语句时，应先说明安全约束并保持原业务语义。

### 明确物理表

“明确物理表”指精确 `tableName`，或包含 database/schema/table 的完整物理身份；“日销表”“订单明细”“退款数据”等业务别名、用途描述或不唯一名称不属于本路径。

1. 执行 `mbs database my-tables`，按用户提供的物理身份精确匹配。
2. 唯一匹配后，沿用该记录的 `host/database/schema/tableName` 执行 `show-create-table`。
3. 根据 DDL 和用户筛选条件构造只读查询，再执行 `query`。

零匹配或多匹配时立即暂停并最小化消歧，不得调用 `mbs find` 兜底，不得按相似名称自动换表，也不得猜测 host、database 或 schema。用户只给业务别名或用途描述时，返回主 Skill 继续执行 `mbs find`；用户要求列出自己可操作的表时则直接返回 `my-tables` 结果，不需要语义召回。

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

### 中文与特殊标识符

中文、保留字或其他需要引用的表名和字段名必须按当前数据源方言使用标识符引用符号，不得把标识符当成字符串值：

- Doris / MySQL：使用反引号，例如 ``SELECT `订单编号` FROM `订单明细` LIMIT 20``；
- PostgreSQL：使用双引号，例如 `SELECT "订单编号" FROM "订单明细" LIMIT 20`；
- 数据库方言不明确时，先根据 `my-tables` 的数据源信息确认，不得一律使用反引号或自行猜测；
- 引用符只包围真实标识符，不接受把 `DESC`、函数、表达式或 SQL 片段拼进字段名。

### 大批量查询

预计需要多批结果、持续时间较长或用于大量导出/分析时，读取[长时间批量任务执行协议](../bulk-task.md)，先完成可恢复脚本，再开始正式拉取。数据库 SQL 使用键集游标分页，不使用不断增大的 `OFFSET`。

单字段游标示例：

```sql
SELECT order_id, created_at, amount
FROM orders
WHERE order_id > :last_order_id
ORDER BY order_id
LIMIT 1000;
```

时间字段不唯一时使用复合游标：

```sql
SELECT order_id, created_at, amount
FROM orders
WHERE created_at > :last_created_at
   OR (created_at = :last_created_at AND order_id > :last_order_id)
ORDER BY created_at, order_id
LIMIT 1000;
```

游标字段必须稳定、非空且能够唯一排序；下一游标只能取自已经成功写入中间文件的最后一行。游标缺失、不前进或重复时立即停止。任务开始前必须先创建日志和断点并告知用户路径；所有重试必须有界，默认仅对暂时性错误指数退避重试三次。

---

## 日销 / 报表类流程

触发关键词：日销 / 日报 / 每日销售 / 销售报表 / daily sales / GMV by day / 每天的销售额。

本流程只在用户已经明确选择数据库路径、提供精确物理表，或 `mbs find` 已确认 table 候选后执行。只有上述业务关键词但目标表仍未知时，返回主 Skill 继续语义发现，不要仅凭关键词在 `my-tables` 中自行挑表。

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
