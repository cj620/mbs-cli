# doris - Doris 数据库查询

`mbs doris` 用于两类任务：

1. **日销报表查询** —— 按日聚合的销售额 / 订单量 / 退款 / 利润等指标。
2. **数据探索** —— 自由 SELECT，先发现库表，再按需取数。

底层是只读 SELECT 通道，服务端做 SQL 安全检查、权限改写和行数限制。

---

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| **查数据字典（首选）** | `mbs doris query --sql "SELECT ... FROM eshop.DB_DATA_DICTIONARY WHERE ..."` | `sql` |
| 查看 Doris 数据库和表列表 | `mbs doris schemas` | - |
| 查看表 DDL 建表语句 | `mbs doris show-create-table --tableName <数据库.表名>` | `tableName` |
| 流式执行 SELECT 查询 | `mbs doris query --sql <select>` | `sql` 或 stdin |

## API 路径

- `mbs doris schemas` -> `GET /gateway/cli-service/cli/doris/schemas`
- `mbs doris show-create-table` -> `GET /gateway/cli-service/cli/doris/show-create-table?tableName=<数据库.表名>`
- `mbs doris query` -> `POST /gateway/cli-service/cli/doris/query`

---

## 数据字典优先（强制 Step 0）

`eshop.DB_DATA_DICTIONARY` 是 `doris schemas` 的语义补充：集中存储所有库 / 表 / 字段的**业务含义、字段说明、枚举值、口径、关联关系、维护人**等元信息。**任何 doris 业务任务，先查数据字典，再决定走哪张表**。

### 为什么先查字典而不是 schemas

| 入口 | 给什么 | 不足 |
|---|---|---|
| `doris schemas` | 库 / 表清单 + 表注释 | 字段、枚举值、口径、关联关系全无 |
| `show-create-table` | 字段名 + 类型 + 分区 | 业务含义、口径、枚举值常常空 |
| **`DB_DATA_DICTIONARY`** | **表/字段业务含义 + 口径 + 枚举 + 关联** | 是上面两者的语义层补充，避免猜口径 |

跳过字典直接 schemas → 极易选错表（如 `mv_sell_*` vs `mv_order_*` vs `DB_DAILY_SALES_REPORT_SELLER`），口径与用户预期不一致，结果不可用。

### 标准用法

1. **按业务关键词搜表**：
   ```sql
   SELECT table_schema, table_name, table_comment
   FROM   eshop.DB_DATA_DICTIONARY
   WHERE  table_comment LIKE '%日销%' OR table_name LIKE '%daily_sales%'
   LIMIT  50
   ```
2. **按字段语义搜字段**：
   ```sql
   SELECT table_name, column_name, column_comment, data_type
   FROM   eshop.DB_DATA_DICTIONARY
   WHERE  column_comment LIKE '%毛利%' OR column_name LIKE '%profit%'
   LIMIT  100
   ```
3. **看候选表所有字段及口径**：
   ```sql
   SELECT column_name, column_comment, data_type, enum_values
   FROM   eshop.DB_DATA_DICTIONARY
   WHERE  table_schema = 'eshop' AND table_name = '<候选表>'
   ORDER  BY ordinal_position
   ```

> 字段名以实际 `show-create-table eshop.DB_DATA_DICTIONARY` 为准（常见列：`table_schema` / `table_name` / `table_comment` / `column_name` / `column_comment` / `data_type` / `enum_values` / `is_partition_key` / `owner` 等）。**第一次使用必须先看一遍 DDL**。

### 触发时机

- 用户提需求含业务名词（日销、订单、退款、广告、库存、补货 …）→ 先查字典
- 用户给出未在记忆中的表名 → 先查字典确认表用途、字段口径
- 准备写 `WHERE 状态 = ?` / `WHERE 平台 = ?` 这类枚举过滤 → 先查 `enum_values` 列

### 找不到怎么办

字典里查不到 → 才回退到 `doris schemas` + `show-create-table` 探索，并在最终答复中**显式声明字段口径来源**（DDL 推断 vs 字典权威）。

---

## 任务 A：日销报表查询

**触发关键词**：日销 / 日报 / 每日销售 / 销售报表 / daily sales / GMV by day / 每天的销售额。

### 标准流程

1. **数据字典定位**（首选）：先查 `eshop.DB_DATA_DICTIONARY`，按 `table_comment LIKE '%日销%'` 或字段语义匹配候选表。字典缺失再回退 `mbs doris schemas` 关键字匹配。**不要猜表名**。
2. **看 DDL + 字典字段**：`mbs doris show-create-table --tableName <候选>` 拿物理 schema，再查 `DB_DATA_DICTIONARY.column_comment` / `enum_values` 拿业务口径，确认：
   - 日期列（常见 `stat_date` / `dt` / `order_date` / `pay_date`，以 DDL 为准）
   - 金额 / 数量列（`gmv` / `sales_amount` / `order_cnt` / `refund_amount` 等）
   - 维度列（站点 / 店铺 / 平台 / SKU / 公司编号）
   - 分区键（`PARTITION BY`，写 WHERE 时优先命中分区，避免全表扫描）
3. **消歧**：执行前与用户确认：
   - 时间窗口（默认最近 7 天还是指定区间？）
   - 维度（按日 + 全公司？还是按日 × 店铺 / 平台 / 站点？）
   - 公司 (`groupCompanyId`) —— 个人信息有则默认带，没有再问
4. **写 SQL**：
   - 明确列名，禁止 `SELECT *`
   - WHERE 命中分区键 / 日期列
   - `GROUP BY` 日期（+ 维度），`ORDER BY` 日期
   - 加 `LIMIT`（聚合结果也加，例如 `LIMIT 1000`，防爆量）
5. **执行**：`mbs doris query --sql "..."`，或多行 SQL 走 stdin。

### 范式 SQL（仅示例骨架，列名 / 表名以 DDL 为准）

按日合计：
```sql
SELECT stat_date,
       SUM(sales_amount) AS gmv,
       SUM(order_cnt)    AS orders
FROM   <db>.<daily_sales_table>
WHERE  stat_date BETWEEN '2026-05-22' AND '2026-05-28'
  AND  group_company_id = <id>
GROUP  BY stat_date
ORDER  BY stat_date
LIMIT  1000;
```

按日 × 平台：
```sql
SELECT stat_date, platform,
       SUM(sales_amount) AS gmv
FROM   <db>.<daily_sales_table>
WHERE  stat_date BETWEEN '2026-05-22' AND '2026-05-28'
  AND  group_company_id = <id>
GROUP  BY stat_date, platform
ORDER  BY stat_date, platform
LIMIT  1000;
```

---

## 任务 B：数据探索

**触发关键词**：表里有什么 / 查一下 / 看看 / 数据长什么样 / explore / sample。

### 标准流程

1. **先查 `eshop.DB_DATA_DICTIONARY`** 找候选库表（按 `table_comment` / `column_comment` 模糊匹配业务关键词）
2. 字典查不到再用 `mbs doris schemas` 兜底
3. `mbs doris show-create-table` 看字段类型与分区，同时回字典看字段口径 / 枚举值
4. 起始查询保守：少量列 + 强 WHERE + `LIMIT 20`
5. 根据返回结果，再迭代收窄或聚合

样本探查：
```sql
SELECT col1, col2, col3
FROM   <db>.<table>
WHERE  <partition_col> = '2026-05-28'
LIMIT  20;
```

---

## 查询规则（两类任务通用）

- 不猜数据库名、表名、字段名、ID、状态枚举、业务含义 —— 先 `DB_DATA_DICTIONARY`，再 `schemas` + `show-create-table`
- 只允许 `SELECT`；`INSERT/UPDATE/DELETE/DROP/ALTER` 服务端会拒
- 明确列名，禁止裸 `SELECT *`
- 必须加 `LIMIT`，除非用户明确要求"全量聚合"且结果行数可控
- 优先命中分区键 / 日期列，避免全表扫描
- 日期 / 时间用字符串字面量 `'YYYY-MM-DD'`，跨年报表注意时区

---

## 输出格式

`schemas` 和 `show-create-table` 返回标准 MBS JSON：

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
- 询问用户是否继续尝试替代路径，并**显式警告**：替代查询的口径/字段定义可能与目标表不一致，**数据可能不准确**，需用户自行确认风险
- 用户明确同意后方可继续探索；用户未表态前保持等待

格式示例：

```
Doris 查询权限不足：
  error.message: "<原文>"
当前账号对该表/字段无访问权限，无法直接拿到目标数据。
可尝试的替代路径：<列出 1-2 条>，但口径可能与目标表不一致，结果可能不准确。
是否继续尝试？请确认后我再继续。
```

### 退出码

- `0` —— 查询完整结束
- `1` —— 流中出现 `error` 行或 HTTP / 鉴权失败

---

## 限制

- 单条 SQL ≤ 10,000 字符（`MAX_SQL_LENGTH`）
- SQL 必须非空；空白会被拒
- `--sql` 与 stdin 二选一；都没有时 TTY 下会报错
