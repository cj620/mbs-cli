<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# scm - 供应链

## 业务域

- 适用场景：供应链
- 关键词：供应链
- Service：`-`

## 接口发现

```bash
mbs find "<用户原始需求>" --domain scm
```

确认 API 候选后执行返回的 `detailCommand`：

```bash
mbs describe <apiId>
```

- 本地不保存或扫描该业务域的接口卡片和单接口文档。
- 命中 workflow 时按 steps 的 `intentQuery` 继续检索 API。
- 低置信、无结果或歧义时先补充条件。
- 后端详情确认完整字段后，仅在候选或详情包含 `command` 时使用 `command --help` 核对 CLI 参数；缺少 `command` 时报告不可直接执行，禁止按展示名称猜测命令。
- 后端不可用时明确报告失败，不使用本地词法结果降级。
