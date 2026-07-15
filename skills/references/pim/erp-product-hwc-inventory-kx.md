<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-hwc-inventory-kx

海外仓产品库息(明细)查询：海外仓产品报表(notFbareport)中，点击某商品的“昨日库息”数值时弹出“库息明细”弹窗，按 SKU(或捆绑商品 bindId)+海外仓分页查询该商品逐条库息记录(时间、单个成本、库存、日均销量、库息、创建/操作时间)。

## 用法

```bash
mbs pim erp-product-hwc-inventory-kx [--bindId <string>] [--skuValue <string>] --pageSize <number> --page <number> --shopName <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/hwcProduct/HwcInventoryKx`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `bindId` | bindId | body | string | 否 | - | 捆绑商品ID(num==1 即捆绑商品时传入，取自 data-sku)。与 skuValue 互斥 |
| `skuValue` | skuValue | body | string | 否 | - | SKU编码(num==2 即普通商品时传入，取自 data-sku)。与 bindId 互斥 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定传 15) |
| `page` | page | body | number | 是 | - | 当前页码(首次查询固定 1；翻页取分页器 api.getCurrent()) |
| `shopName` | shopName | body | string | 是 | - | 海外仓名称(店铺名，取自被点击元素 data-shopname) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端据此弹窗/提示) | - |
| `desc` | string | 响应提示信息(失败时 alert(data.desc)) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的库息记录总数(渲染到 #total2，每页15条) | - |
| `obj.countPage` | number | 总页数(传入 paging() 初始化分页器) | - |
| `obj.result[]` | array | 库息明细列表 | - |
| `obj.result[][0]` | string | 时间(库息统计时间) | - |
| `obj.result[][1]` | string | SKU编码(模板内跳转 SKU 详情) | - |
| `obj.result[][2]` | number | 商品单个成本 | - |
| `obj.result[][3]` | number | 库存(库存数量) | - |
| `obj.result[][4]` | number | 日均销量(Daily Mean Sales) | - |
| `obj.result[][5]` | number | 库息(库存利息金额) | - |
| `obj.result[][6]` | string | SKU创建时间 | - |
| `obj.result[][7]` | string | 操作时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
