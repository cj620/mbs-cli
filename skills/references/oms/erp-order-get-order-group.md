<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-order-group

待采购汇总(按供应商/货运方式)查询：进入待采购汇总页或勾选/取消「不生成采购单」复选框时调用，依据 sessionStorage 中的订单ID集合查询缺货SKU，按供应商(manufacture)与货运方式(expresstype)两个维度返回缺货SKU件数、缺货订单量等汇总数据，并返回汇总提示文案。

## 用法

```bash
mbs oms erp-order-get-order-group --orderids <string> --flag <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderDeliver/getOrderGroup`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderids` | orderids | body | string | 是 | - | 订单ID集合，取自 sessionStorage.getItem('orderids')，多个订单ID逗号拼接的字符串 |
| `flag` | flag | body | number | 是 | - | 是否「不生成采购单，使用当前的SZ库存」标记；复选框 #alertflag 勾选=1，未勾选=0 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `desc` | string | 汇总提示文案，写入页面 #infos | - |
| `obj` | object | 业务数据对象，存在(非空)时才渲染两张汇总表 | - |
| `obj.manufacture[]` | array | 按供应商汇总列表（含一行 manufacture=="汇总" 的合计行） | - |
| `obj.manufacture[][0]` | string | 供应商名称；值为"汇总"时为合计行，否则渲染为供应商详情链接 | - |
| `obj.manufacture[][1]` | string | 供应商ID(sequenceid)，用于跳转 /purchase/supplierInfo.html?sequenceid={manufactureid}（合计行无此值） | - |
| `obj.manufacture[][2]` | string | SKU编号，渲染为 /product/SKUdetails.html?SKU={sku} 链接 | - |
| `obj.manufacture[][3]` | number | 缺货SKU件数；非汇总行渲染为可编辑输入框(name=skuName, data-sku=sku)，汇总行直接展示 | - |
| `obj.manufacture[][4]` | number | 缺货订单量 | - |
| `obj.expresstype[]` | array | 按货运方式汇总列表 | - |
| `obj.expresstype[][0]` | string | 货运方式名称 | - |
| `obj.expresstype[][1]` | number | 该货运方式下缺货SKU件数 | - |
| `obj.expresstype[][2]` | number | 该货运方式下缺货订单量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
