# doris - Doris 数据库查询

`mbs doris` 用于两类任务：

1. **日销报表查询** —— 按日聚合的销售额 / 订单量 / 退款 / 利润等指标。
2. **数据探索** —— 自由 SELECT，先发现库表，再按需取数。

底层是只读 SELECT 通道，服务端做 SQL 安全检查、权限改写和行数限制。

---

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 查看 Doris 数据库和表列表 | `mbs doris schemas` | - |
| 查看表 DDL 建表语句 | `mbs doris show-create-table --tableName <数据库.表名>` | `tableName` |
| 流式执行 SELECT 查询 | `mbs doris query --sql <select>` | `sql` 或 stdin |

## API 路径

- `mbs doris schemas` -> `GET /gateway/cli-service/cli/doris/schemas`
- `mbs doris show-create-table` -> `GET /gateway/cli-service/cli/doris/show-create-table?tableName=<数据库.表名>`
- `mbs doris query` -> `POST /gateway/cli-service/cli/doris/query`

---

## 任务 A：日销报表查询

**触发关键词**：日销 / 日报 / 每日销售 / 销售报表 / daily sales / GMV by day / 每天的销售额。

### 标准流程

1. **定位日销表**：先 `mbs doris schemas`，从库表清单中匹配名称含 `sales`、`order`、`daily`、`dws`、`report`、`日销` 等关键字的候选表。**不要猜表名**。
2. **看 DDL**：`mbs doris show-create-table --tableName <候选>`，确认：
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

1. `mbs doris schemas` 找候选库表
2. `mbs doris show-create-table` 看字段含义与分区
3. 起始查询保守：少量列 + 强 WHERE + `LIMIT 20`
4. 根据返回结果，再迭代收窄或聚合

样本探查：
```sql
SELECT col1, col2, col3
FROM   <db>.<table>
WHERE  <partition_col> = '2026-05-28'
LIMIT  20;
```

---

## 查询规则（两类任务通用）

- 不猜数据库名、表名、字段名、ID、状态枚举、业务含义 —— 先 `schemas` + `show-create-table`
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

### 退出码

- `0` —— 查询完整结束
- `1` —— 流中出现 `error` 行或 HTTP / 鉴权失败

---

## 限制

- 单条 SQL ≤ 10,000 字符（`MAX_SQL_LENGTH`）
- SQL 必须非空；空白会被拒
- `--sql` 与 stdin 二选一；都没有时 TTY 下会报错
