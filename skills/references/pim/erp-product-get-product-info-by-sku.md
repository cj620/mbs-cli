# mbs pim erp-product-get-product-info-by-sku

根据SKU查询库存分仓信息：SPU详情页中点击某SKU的库存单元格时，按SKU查询该SKU在各仓库的库存明细（仓库/仓库类型/仓位/近7·30·60·90天销量/成本价/采购价/库存数/待发货/缺货订单/在途/下单），前端按仓库类型(STORAGETYPE)升序排序后渲染为悬浮气泡表格(InventoryPopover)。

## 用法

```bash
mbs pim erp-product-get-product-info-by-sku --sku <string>
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/productDetails/getProductInfoBySku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | SKU编号（查询键），来源SPU详情页SKU库存单元格点击事件传入的sid |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(平台统一外壳字段,本接口前端未直接使用) | - |
| `desc` | string | 响应提示信息(平台统一外壳字段,本接口前端未直接使用) | - |
| `obj[]` | array | 库存明细列表,按仓库维度逐条返回;前端按STORAGETYPE升序排序后遍历渲染 | - |
| `obj[][0]` | string | 仓库(仓库名称) | - |
| `obj[][1]` | number | 仓库类型(编码,用于前端obj.sort升序排序,不直接展示) | - |
| `obj[][2]` | string | 仓库类型名称(展示用,表头"仓库类型") | - |
| `obj[][3]` | string | 仓位 | - |
| `obj[][4]` | number | 近7天销量 | - |
| `obj[][5]` | number | 近30天销量 | - |
| `obj[][6]` | number | 近60天销量 | - |
| `obj[][7]` | number | 近90天销量 | - |
| `obj[][8]` | number | 成本价(单位:元,待人工确认币种) | - |
| `obj[][9]` | number | 采购价(单位:元,待人工确认币种) | - |
| `obj[][10]` | number | 库存数(仓库现存库存数量) | - |
| `obj[][11]` | number | 待发货(待发货订单数量) | - |
| `obj[][12]` | number | 缺货订单(缺货订单数量) | - |
| `obj[][13]` | number | 在途(在途库存数量) | - |
| `obj[][14]` | number | 下单(采购下单数量) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
