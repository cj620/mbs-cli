<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-fba-inventory-kx

FBA库息（库存信息）查询：FBA产品状态报表中，点击某行 SKU 的“库息”按钮时，按 bindId/skuValue + 店铺名称分页查询该 SKU 的库息（库存周转）历史明细，返回时间、店铺、SKU、成本价、库存数、日均销量(DMS)、库息天数、创建/操作时间等列，并据 count/countPage 渲染分页。

## 用法

```bash
mbs pim erp-product-fba-inventory-kx [--bindId <string>] [--skuValue <string>] [--shopName <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/fbaProduct/fbaInventoryKx`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `bindId` | bindId | body | string | 否 | - | 绑定ID。num==1 分支传入，值取被点击元素 data-sku；与 skuValue 互斥 |
| `skuValue` | skuValue | body | string | 否 | - | SKU值。num!=1 分支传入，值取被点击元素 data-sku；与 bindId 互斥 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称，取被点击元素 data-shopname |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定传 15 |
| `page` | page | body | number | 是 | - | 当前页码。首次查询固定传 1，翻页时取分页器 api.getCurrent() |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（成功才弹窗并渲染） | - |
| `desc` | string | 响应提示信息（失败时 alert(data.desc)） | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的库息记录总数（填充 #total2） | - |
| `obj.countPage` | number | 总页数（初始化分页器 paging） | - |
| `obj.result[]` | array | 库息明细列表 | - |
| `obj.result[][0]` | string | 统计时间（日期/期次） | - |
| `obj.result[][1]` | string | 店铺名称 | - |
| `obj.result[][2]` | string | SKU编号（链接到 SKU 详情页 /product/SKUdetails.html?SKU=） | - |
| `obj.result[][3]` | number | 成本价 | - |
| `obj.result[][4]` | number | 库存数量 | - |
| `obj.result[][5]` | number | 日均销量（DMS，Daily Mean Sales） | - |
| `obj.result[][6]` | number | 库息（库存周转天数/库存消化天数） | - |
| `obj.result[][7]` | string | 创建时间 | - |
| `obj.result[][8]` | string | 操作（更新）时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
