# mbs scm erp-manufacture-find-refused-issue

拒绝并新增（仅退款）纠纷方案：在“纠纷详情”页中，卖家点击“拒绝并新增仅退款方案”弹窗确定时调用：携带被拒绝的买家方案ID列表、卖家新增方案类型、退款金额、方案说明，提交后端处理；成功后弹出后端提示信息并刷新纠纷详情。

## 用法

```bash
mbs scm erp-manufacture-find-refused-issue --buyerSolutionIdList <array> --addSolutionType <string> [--refundAmount <string>] --solutionContext <string>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/issueInfo/findRefusedIssue`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `buyerSolutionIdList` | buyerSolutionIdList | body | array | 是 | - | 被拒绝的买家方案ID列表（数组，元素为买家方案 schemeid；来源模板 obj.result[0].schemeid 经 data-ids 收集入 refArr） |
| `addSolutionType` | addSolutionType | body | string | 是 | - | 卖家新增方案类型。枚举：refund=仅退款/拒绝退款；return_and_refund=退货退款（退货退款单选项禁用，常态取 refund） |
| `refundAmount` | refundAmount | body | string | 否 | - | 退款金额，单位 USD（拒绝退款填 0；控件 #refundAmount 当前禁用，默认提交 "0"） |
| `solutionContext` | solutionContext | body | string | 是 | - | 卖家方案说明/问题详细描述（来源文本域 #solutionContext，页面标注必填） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（前端据此判断成功/失败分支） | - |
| `desc` | string | 响应提示信息（成功/失败均弹窗展示于 #tishi） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
