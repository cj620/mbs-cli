<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-category-list-mercadolibre

美客多-产品类目下拉选择：美客多-产品类目下拉选择

## 用法

```bash
mbs pim instudio-pms-get-category-list-mercadolibre [--requestId <integer>] [--categoryName <string>] [--shopId <string>] [--shopName <string>] [--groupCode <string>] [--mercadolibreCategoryId <string>] [--spu <string>] [--sku <string>] [--platformSku <string>] [--sites <string>] [--platformSkuList <array<string>>] [--logisticsType <string>] [--spuSingleFlag <boolean>] [--categoryQueryParam <string>] [--parentCategoryId <string>] [--categoryLevel <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/mercadolibre/getCategoryList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

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
| `obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].shopId` | integer | 店铺ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].shopName` | string | 店铺名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].siteId` | string | 站点ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].categoryId` | string | 类目ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].categoryName` | string | 类目名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].parentCategoryId` | string | 父级类目ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].picture` | string | 图片（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].permalink` | string | Permalink（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].categoryIdPath` | string | 类目ID路径（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].categoryNamePath` | string | 类目名称路径（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].categoryNameZh` | string | 类目名称ZH（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].categoryNamePathZh` | string | 类目名称路径ZH（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].categoryLevel` | integer | 类目级别（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].attributeTypes` | string | 属性Types（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].settings` | string | 设置（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].channelsSettings` | string | Channels设置（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].metaCategId` | string | METACategID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].attributable` | string | Attributable（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].dateCreated` | string | 日期创建（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].createTime` | string | 创建时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].updateTime` | string | 更新时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelid1` | string | Levelid1（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelid2` | string | Levelid2（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelid3` | string | Levelid3（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelid4` | string | Levelid4（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelid5` | string | Levelid5（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelid6` | string | Levelid6（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelid7` | string | Levelid7（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelname1` | string | Levelname1（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelname2` | string | Levelname2（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelname3` | string | Levelname3（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelname4` | string | Levelname4（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelname5` | string | Levelname5（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelname6` | string | Levelname6（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelname7` | string | Levelname7（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelnameZh1` | string | LevelnameZH1（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelnameZh2` | string | LevelnameZH2（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelnameZh3` | string | LevelnameZH3（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelnameZh4` | string | LevelnameZH4（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelnameZh5` | string | LevelnameZH5（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelnameZh6` | string | LevelnameZH6（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj[].levelnameZh7` | string | LevelnameZH7（字段名推断,语义待核实）。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
