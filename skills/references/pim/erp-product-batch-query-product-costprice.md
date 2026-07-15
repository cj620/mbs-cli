<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-batch-query-product-costprice

批量查询商品(海外仓SKU)成本价：在“海外仓sku成本”弹窗中，用户在文本域按“sku,成本价”逐行录入后失焦触发，前端把每行解析为 {sku, costprice} 数组放入 list 批量提交后端，后端返回每个SKU的原成本价(oldCostprice)与现成本价(newCostprice)用于表格回显，供用户修改后再调用 batchUpdateProductCostprice 保存。

## 用法

```bash
mbs pim erp-product-batch-query-product-costprice --list <array<unknown>>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/batchQueryProductCostprice`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `list` | list | body | array<unknown> | 是 | - | 待查询成本价的SKU列表(由文本域逐行解析得到) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(非200时前端 ElMessage.danger(desc) 提示) | - |
| `desc` | string | 响应提示信息(失败原因) | - |
| `obj[]` | array | 成本价查询结果列表(赋值给 skuPricelist 渲染表格) | - |
| `obj[][0]` | string | 海外仓SKU编号(表格“sku”列) | - |
| `obj[][1]` | number | 原成本价(表格“原成本价”列，只读展示，单位：货币元) | - |
| `obj[][2]` | number | 现成本价(表格“现成本价”列，el-input 可编辑，输入限制为纯数字；用户修改后用于 batchUpdateProductCostprice 保存，单位：货币元) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
