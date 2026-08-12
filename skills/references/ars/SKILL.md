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
- 后端详情确认完整字段后，仅在候选或详情包含 `command` 时使用 `command --help` 核对 CLI 参数；缺少 `command` 时报告不可直接执行，禁止按展示名称猜测命令。
- 后端不可用时明确报告失败，不使用本地词法结果降级。
