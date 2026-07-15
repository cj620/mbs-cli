<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-apply-for-stock-up-rule

判断是否显示申请备货按钮（getApplyForStockUpRule）：SKU 详情页初始化时调用：后端根据当前登录用户身份/权限及备货申请规则，返回是否允许发起备货申请。前端据返回的 success 布尔值决定显示或隐藏页面上的「申请备货」按钮(#applyBtn2)。请求不携带业务参数，用户身份由会话识别。

## 用法

```bash
mbs pim erp-product-get-apply-for-stock-up-rule
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getApplyForStockUpRule`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 是否允许发起备货申请。true=满足备货申请规则，前端显示「申请备货」按钮(#applyBtn2)；false/缺省=隐藏按钮 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
