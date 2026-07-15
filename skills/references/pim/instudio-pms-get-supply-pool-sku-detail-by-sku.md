<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-supply-pool-sku-detail-by-sku

根据supplySku查询SupplyPoolSku的相关信息：根据supplySku查询SupplyPoolSku的相关信息

## 用法

```bash
mbs pim instudio-pms-get-supply-pool-sku-detail-by-sku --supplySku <string>
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/SupplyPoolController/getSupplyPoolSkuDetailBySku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `supplySku` | supplySku | query | string | 是 | - | 供应SKU（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].skuPicture` | string | 图片。前端使用：待核实 | - |
| `obj.obj[].supplySpu` | string | 商家货品编码。前端使用：待核实 | - |
| `obj.obj[].supplySku` | string | SKU商家编号。前端使用：待核实 | - |
| `obj.obj[].productNameCh` | string | 产品中文名称。前端使用：待核实 | - |
| `obj.obj[].productNameEn` | string | 产品英文名称。前端使用：待核实 | - |
| `obj.obj[].color` | string | color（注：英文）。前端使用：待核实 | - |
| `obj.obj[].size` | string | size（注：英文）。前端使用：待核实 | - |
| `obj.obj[].supplyPrice` | number | 供货价。前端使用：待核实 | - |
| `obj.obj[].inventory` | integer | 当前库存量。前端使用：待核实 | - |
| `obj.obj[].weight` | integer | 重量。前端使用：待核实 | - |
| `obj.obj[].length` | integer | 长。前端使用：待核实 | - |
| `obj.obj[].width` | integer | 宽。前端使用：待核实 | - |
| `obj.obj[].height` | integer | 高。前端使用：待核实 | - |
| `obj.obj[].createBy` | string | 创建人。前端使用：待核实 | - |
| `obj.obj[].createTime` | string | 创建时间。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
