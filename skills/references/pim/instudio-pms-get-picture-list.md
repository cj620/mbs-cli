# mbs pim instudio-pms-get-picture-list

美客多-获取图片：美客多-获取图片

## 用法

```bash
mbs pim instudio-pms-get-picture-list [--requestId <integer>] [--categoryName <string>] [--shopId <string>] [--shopName <string>] [--groupCode <string>] [--mercadolibreCategoryId <string>] [--spu <string>] [--sku <string>] [--platformSku <string>] [--sites <string>] [--platformSkuList <array<string>>] [--logisticsType <string>] [--spuSingleFlag <boolean>] [--categoryQueryParam <string>] [--parentCategoryId <string>] [--categoryLevel <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/mercadolibre/getPictureList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `requestId` | requestId | body | integer | 否 | - | 请求记录编号 |
| `categoryName` | categoryName | body | string | 否 | - | 类目中文 |
| `shopId` | shopId | body | string | 否 | - | 店铺编号 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称 |
| `groupCode` | groupCode | body | string | 否 | - | 店铺分组编码 |
| `mercadolibreCategoryId` | mercadolibreCategoryId | body | string | 否 | - | 美客多类目编号 |
| `spu` | spu | body | string | 否 | - | spu编号 |
| `sku` | sku | body | string | 否 | - | sku编号 |
| `platformSku` | platformSku | body | string | 否 | - | sku编号 |
| `sites` | sites | body | string | 否 | - | site, 多个,分割， |
| `platformSkuList` | platformSkuList | body | array<string> | 否 | - | platformSku编号 |
| `logisticsType` | logisticsType | body | string | 否 | - | 物流类型 |
| `spuSingleFlag` | spuSingleFlag | body | boolean | 否 | - | 单/多变体 true:单变体/false:多变体 |
| `categoryQueryParam` | categoryQueryParam | body | string | 否 | - | 美客多类目查询条件 |
| `parentCategoryId` | parentCategoryId | body | string | 否 | - | 美客多类目查询条件 |
| `categoryLevel` | categoryLevel | body | integer | 否 | - | 美客多类目查询条件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 状态码。前端使用：待核实 | - |
| `success` | boolean | 是否成功。前端使用：待核实 | - |
| `data` | object | 承载数据。前端使用：待核实 | - |
| `message` | string | 返回消息。前端使用：待核实 | - |
| `obj[].pictureUrl` | string | 图片链接。前端使用：待核实 | - |
| `obj[].pictureType` | string | 图片类型。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
