# doris - Doris 数据库查询

当 agent 需要探索 Doris 数据库表结构、查看建表语句，并执行只读 SELECT 分析查询时，使用 `mbs doris`。

## 使用流程

1. 先运行 `mbs doris schemas`，查看当前用户可访问的数据库和表。
2. 找到候选表后，运行 `mbs doris show-create-table --tableName <数据库.表名>`，查看字段、注释、主键和分布信息。
3. 根据表结构编写保守的 SELECT SQL，优先明确列名，并加上 `LIMIT`。
4. 运行 `mbs doris query --sql "<SELECT ... LIMIT ...>"`；多行 SQL 可以通过 stdin 管道传入。

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

## 查询规则

- 不要猜数据库名、表名、字段名、ID、状态值或业务含义。
- 必须先查看库表列表，再按需查看 DDL，最后再写 SQL。
- 只生成 SELECT 查询。服务端也会做 SQL 安全检查、权限改写和行数限制。
- 优先写明确字段列表，避免直接 `SELECT *`。
- 除非用户明确要求纯聚合结果，否则查询应带合理的 `LIMIT`。

## 输出格式

`schemas` 和 `show-create-table` 返回普通 MBS JSON：

```json
{ "ok": true, "data": "<业务数据>" }
```

`query` 会直接透传服务端 NDJSON 流，每行是一个 JSON 对象：

```json
{"type":"header","columns":["order_id","status"]}
{"type":"data","row":{"order_id":"ORD001","status":"done"}}
{"type":"end","totalRows":1}
```

如果流中出现 `{"type":"error"}`，应视为查询失败，并读取其中的 `message`。
