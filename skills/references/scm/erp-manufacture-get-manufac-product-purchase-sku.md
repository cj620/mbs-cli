# mbs scm erp-manufacture-get-manufac-product-purchase-sku

供应商-合作中产品SKU明细查询：在供应商详情页「合作中产品」(SPU列表)中点击某行展开时，按供应商ID(manufactureId)与该SPU产品ID(sid)查询其下所有SKU的采购明细，返回SKU编号、图片、标题、销量等级、状态、侵权/淘汰标记、累计采购笔数/量/金额、当前库存、开发员/采购员、首末采购日期等，渲染到二级子表格 twoContentTemplate。

## 用法

```bash
mbs scm erp-manufacture-get-manufac-product-purchase-sku --manufactureId <string> --sid <string>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/manufactureExtendController/getManufacProductPurchaseSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `manufactureId` | manufactureId | query | string | 是 | - | 供应商ID。来源于页面URL查询串 sequenceid，即当前供应商详情页主键 |
| `sid` | sid | query | string | 是 | - | SPU产品ID。来源于合作中产品SPU列表被点击行的 data-id，用于查询该SPU下的SKU明细 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | SKU采购明细列表（data.obj 直接为数组，无分页包裹） | - |
| `obj[][0]` | string | SKU编号（列展示并作为 /product/SKUdetails.html?SKU= 跳转参数） | - |
| `obj[][1]` | string | SKU图片URL（加载失败回退 /2018ui/assets/images/timg.jpg） | - |
| `obj[][2]` | string | SKU标题/商品名称 | - |
| `obj[][3]` | number | 最后采购价（元，前端展示「最后采购价：{值}元」） | - |
| `obj[][4]` | string | 销量等级枚举：超爆/超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品（前端按值套不同颜色标签，空则不展示） | - |
| `obj[][5]` | string | 产品状态（如 清仓 / 停产 等；前端据此显示警告/成功标签） | - |
| `obj[][6]` | string | 侵权标记。'1'=侵权（前端显示红色「侵权」标签） | - |
| `obj[][7]` | string | 淘汰标记。'-1'=已淘汰（前端显示「已淘汰」标签） | - |
| `obj[][8]` | number | 累计采购笔数 | - |
| `obj[][9]` | number | 累计采购量 | - |
| `obj[][10]` | number | 累计采购金额 | - |
| `obj[][11]` | number | 当前库存 | - |
| `obj[][12]` | string | 当前开发员 | - |
| `obj[][13]` | string | 开始采购日（首次采购日期） | - |
| `obj[][14]` | string | 最后采购日（最近采购日期） | - |
| `obj[][15]` | string | 当前采购员 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
