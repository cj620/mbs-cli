<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# ars - 数据分析与报表

## 业务域

- 适用场景：数据、分析、报表
- 关键词：数据、分析、报表
- Service：`-`

## 首次统一召回

首次召回不得根据模块关键词预判或添加 `--domain`：

```bash
mbs find "<用户原始需求>"
```

只有用户明确限定 ars，或首次响应的 `hint.suggestedDomains` 建议按 ars 收窄时，才执行后续过滤：

```bash
mbs find "<用户原始需求>" --domain ars
```

确认 API 候选后执行返回的 `detailCommand`：

```bash
mbs describe <apiId>
```

- 本地不保存或扫描该业务域的接口卡片和单接口文档。
- 命中 workflow 时按 steps 的 `intentQuery` 继续检索 API。
- 低置信、无结果或歧义时按后端 hint 补充条件。
- 后端详情确认 `operationType=QUERY`、GET/POST、具体 path 和字段作用域后，使用 `mbs request --api-id <apiId>` 组装查询；接口无需预生成业务命令。
- path 参数必须先替换，query 字段放入 `--params`；结构化 body 使用 JSON，TEXT/XML 使用原始文本或 `--body-file`，BINARY 使用严格 Base64 或 `--body-file`。
- 后端不可用时明确报告失败，不使用本地词法结果降级。
