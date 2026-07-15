<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-sku-refundrate-return-package

SKU平台退款率/退包率查询：在SPU管理列表中，鼠标悬浮某行的退款/退包入口时，按SKU查询该SKU在各销售平台上的退款率、质差退款率、退包率，前端渲染成平台/退款率/质差退款率/退包率的悬浮表格。

## 用法

```bash
mbs pim erp-product-sku-refundrate-return-package --sku <string>
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/skuRefundrateReturnPackage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | SKU编号（按SKU查询其各平台退款率/退包率），来源为列表行元素的 data-sid，拼接到 URL ?sku= 后 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 该SKU各平台退款/退包数据列表 | - |
| `obj[][0]` | string | 平台(表头“平台”) | - |
| `obj[][1]` | string | 退款率(表头“退款率”,前端直接展示的字符串值) | - |
| `obj[][2]` | string | 质差退款率(表头“质差退款率”) | - |
| `obj[][3]` | string | 退包率(表头“退包率”) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
