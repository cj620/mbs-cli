<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-shop-by-pt-spu-ozon-singlepublish-info-controller

查询当前登陆人店铺信息：查询当前登陆人店铺信息

## 用法

```bash
mbs pim instudio-pms-find-shop-by-pt-spu-ozon-singlepublish-info-controller [--id <integer>] [--erpSpu <string>] [--publishSpu <string>] [--mainPic <string>] [--title <string>] [--vType <integer>] [--vNum <integer>] [--shopname <string>] [--site <string>] [--siteList <array<string>>] [--priceArea <string>] [--profitRate <string>] [--pricedLogistics <string>] [--deliveryPlace <string>] [--stockingTime <integer>] [--publishStatus <integer>] [--publishItemid <string>] [--publishResponse <string>] [--createBy <string>] [--createById <string>] [--createTime <string>] [--publishBy <string>] [--publishTime <string>] [--updateTime <string>] [--startIndex <integer>] [--pageSize <integer>] [--currentPage <integer>] [--starttime <string>] [--endtime <string>] [--shopsSplice <string>] [--shopmanager <string>] [--categoryname <string>] [--checkSku <string>] [--jumpUrl <string>] [--isCompulsory <integer>] [--timeOccur <string>] [--pt <string>] [--location <string>] [--vatPercent <string>] [--englishKeywords <string>] [--srcId <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/ozonSinglepublishInfoController/findShopByPtSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | 马帮spu |
| `publishSpu` | publishSpu | body | string | 否 | - | 刊登spu |
| `mainPic` | mainPic | body | string | 否 | - | 主图 |
| `title` | title | body | string | 否 | - | 标题 |
| `vType` | vType | body | integer | 否 | - | 类型（字段名推断,语义待核实） |
| `vNum` | vNum | body | integer | 否 | - | 数量（字段名推断,语义待核实） |
| `shopname` | shopname | body | string | 否 | - | 店铺 |
| `site` | site | body | string | 否 | - | 站点 |
| `siteList` | siteList | body | array<string> | 否 | - | 站点列表（字段名推断,语义待核实） |
| `priceArea` | priceArea | body | string | 否 | - | 价格 |
| `profitRate` | profitRate | body | string | 否 | - | 毛利率 |
| `pricedLogistics` | pricedLogistics | body | string | 否 | - | 算价物流 |
| `deliveryPlace` | deliveryPlace | body | string | 否 | - | 发货地 |
| `stockingTime` | stockingTime | body | integer | 否 | - | 备货时长 |
| `publishStatus` | publishStatus | body | integer | 否 | - | 刊登状态 1:等待刊登 2:刊登中 3：刊登成功 4:刊登失败 |
| `publishItemid` | publishItemid | body | string | 否 | - | 刊登商品项ID（字段名推断,语义待核实） |
| `publishResponse` | publishResponse | body | string | 否 | - | 刊登响应（字段名推断,语义待核实） |
| `createBy` | createBy | body | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `createById` | createById | body | string | 否 | - | 创建人ID（字段名推断,语义待核实） |
| `createTime` | createTime | body | string | 否 | - | 创建时间（字段名推断,语义待核实） |
| `publishBy` | publishBy | body | string | 否 | - | 刊登人（字段名推断,语义待核实） |
| `publishTime` | publishTime | body | string | 否 | - | 刊登时间（字段名推断,语义待核实） |
| `updateTime` | updateTime | body | string | 否 | - | 更新时间（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `starttime` | starttime | body | string | 否 | - | Starttime（字段名推断,语义待核实） |
| `endtime` | endtime | body | string | 否 | - | Endtime（字段名推断,语义待核实） |
| `shopsSplice` | shopsSplice | body | string | 否 | - | 店铺列表Splice（字段名推断,语义待核实） |
| `shopmanager` | shopmanager | body | string | 否 | - | Shopmanager（字段名推断,语义待核实） |
| `categoryname` | categoryname | body | string | 否 | - | Categoryname（字段名推断,语义待核实） |
| `checkSku` | checkSku | body | string | 否 | - | 校验SKU（字段名推断,语义待核实） |
| `jumpUrl` | jumpUrl | body | string | 否 | - | JUMPURL（字段名推断,语义待核实） |
| `isCompulsory` | isCompulsory | body | integer | 否 | - | 是否Compulsory（字段名推断,语义待核实） |
| `timeOccur` | timeOccur | body | string | 否 | - | 时间Occur（字段名推断,语义待核实） |
| `pt` | pt | body | string | 否 | - | PT（字段名推断,语义待核实） |
| `location` | location | body | string | 否 | - | 库位（字段名推断,语义待核实） |
| `vatPercent` | vatPercent | body | string | 否 | - | VAT百分比（字段名推断,语义待核实） |
| `englishKeywords` | englishKeywords | body | string | 否 | - | EnglishKeywords（字段名推断,语义待核实） |
| `srcId` | srcId | body | integer | 否 | - | SRCID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj.title` | string | 标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.description` | string | 描述（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.videoUrl` | string | 视频URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.imagePathList` | string | 图片路径列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.label` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.skuPicList` | string | SKU图片列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopname` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productCategory` | string | 商品类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.englishKeywords` | string | EnglishKeywords（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishSpu` | string | 刊登SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.descriptionStr` | string | 描述字符串（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.weight` | string | 重量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.depth` | string | Depth（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.width` | string | 宽度（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.height` | string | 高度（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.success` | string | 成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
