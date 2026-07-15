<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-amazon-shop

获取名下的店铺列表：获取名下的店铺列表

## 用法

```bash
mbs pim instudio-pms-get-amazon-shop [--spu <string>]
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/amazon/getAmazonShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 否 | - | SPU（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopId` | string | 店铺ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopName` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.site` | string | 站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopInfo` | string | 店铺信息（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shop` | string | 店铺（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productType` | string | 商品类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopType` | string | 店铺类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.last` | string | 最近（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.from` | string | 来源（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productTypeList` | string | 商品类型列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.queryLoading` | string | 查询Loading（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.displayName` | string | 展示名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.requestId` | string | 请求ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.response` | string | 响应（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.successList` | string | 成功列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
