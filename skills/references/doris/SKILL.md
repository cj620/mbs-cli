# doris - 历史兼容入口

`mbs doris` 是数据库查询网关的历史命令名。现在它不只查询默认 Doris，也可以通过 `--host` + `--database` 查询外部数据源。

新任务请优先阅读并遵守 [database/SKILL.md](../database/SKILL.md)，并优先使用：

```bash
mbs database my-tables
mbs database schemas
mbs database show-create-table --tableName <table>
mbs database query --sql "<SELECT ...>"
```

兼容命令仍然可用：

```bash
mbs doris my-tables
mbs doris schemas
mbs doris show-create-table --tableName <table>
mbs doris query --sql "<SELECT ...>"
```

注意：

- 不要因为命令名是 `doris` 就假设目标源一定是 Doris。
- 执行查询前仍必须先用 `my-tables` 确认可操作库表。
- 默认 Doris 的 `eshop.DB_DATA_DICTIONARY` 只用于默认 Doris 语义辅助，不覆盖外部数据源。
