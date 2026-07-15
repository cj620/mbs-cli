<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-spu-info

商品池spu展示：商品池spu展示

## 用法

```bash
mbs pim instudio-pms-find-spu-info [--index <string>] [--createdBy <string>] [--createdOn <string>] [--brandId <string>] [--skustatus <integer>] [--warehouseid <integer>] [--positionname <string>] [--companyname <string>] [--spu <string>] [--nameCn <string>] [--tagId <integer>] [--createtimestart <string>] [--createtimeend <string>] [--orderby <integer>] [--marketstates <integer>] [--categoryId <string>] [--levelNum <integer>] [--principal <string>] [--keywordArry <string>] [--userId <string>] [--checkStatus <string>] [--projectSpu <string>] [--developType <integer>] [--developType2 <integer>] [--salesLevel <string>] [--isBoutique <string>] [--missionStatus <integer>] [--checkBy <string>] [--checkTimeStart <string>] [--checkTimeEnd <string>] [--saleNotes <string>] [--teamId <string>] [--applicablePlatform <string>] [--isChoice <integer>] [--applicableSite <string>] [--myRecommend <string>] [--isTwoPicture <string>] [--pictureSupplierSelfie <string>] [--pageSize <string>] [--submitSaleTimeStart <string>] [--submitSaleTimeEnd <string>] [--specialMark <string>] [--productTag <string>] [--tkVideo <string>] [--riskLevel <integer>] [--reexamineCheckBy <string>] [--reexaminebeginTime <string>] [--reexamineEndTime <string>] [--lookAtMe <integer>] [--isHidden <integer>] [--isTort <integer>] [--spotCheck <integer>] [--latelySaleSubmit <string>] [--nameEn <string>] [--gifOrVideo <integer>] [--isActualPicture <integer>] [--recommender <string>] [--companyId <integer>] [--priceRange <string>] [--productTags <array<string>>] [--certification <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/spu/findSpuInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `index` | index | query | string | 否 | - | 索引（字段名推断,语义待核实） |
| `createdBy` | createdBy | query | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `createdOn` | createdOn | query | string | 否 | - | 创建（字段名推断,语义待核实） |
| `brandId` | brand_id | query | string | 否 | - | 品牌ID（字段名推断,语义待核实） |
| `skustatus` | skustatus | query | integer | 否 | - | Skustatus（字段名推断,语义待核实） |
| `warehouseid` | warehouseid | query | integer | 否 | - | Warehouseid（字段名推断,语义待核实） |
| `positionname` | positionname | query | string | 否 | - | Positionname（字段名推断,语义待核实） |
| `companyname` | companyname | query | string | 否 | - | Companyname（字段名推断,语义待核实） |
| `spu` | spu | query | string | 否 | - | SPU（字段名推断,语义待核实） |
| `nameCn` | name_cn | query | string | 否 | - | 名称中文（字段名推断,语义待核实） |
| `tagId` | tag_id | query | integer | 否 | - | 标签ID（字段名推断,语义待核实） |
| `createtimestart` | createtimestart | query | string | 否 | - | Createtimestart（字段名推断,语义待核实） |
| `createtimeend` | createtimeend | query | string | 否 | - | Createtimeend（字段名推断,语义待核实） |
| `orderby` | orderby | query | integer | 否 | - | Orderby（字段名推断,语义待核实） |
| `marketstates` | marketstates | query | integer | 否 | - | Marketstates（字段名推断,语义待核实） |
| `categoryId` | categoryId | query | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `levelNum` | levelNum | query | integer | 否 | - | 级别数量（字段名推断,语义待核实） |
| `principal` | principal | query | string | 否 | - | Principal（字段名推断,语义待核实） |
| `keywordArry` | keywordArry | query | string | 否 | - | 关键词ARRY（字段名推断,语义待核实） |
| `userId` | userId | query | string | 否 | - | 用户ID（字段名推断,语义待核实） |
| `checkStatus` | checkStatus | query | string | 否 | - | 校验状态（字段名推断,语义待核实） |
| `projectSpu` | projectSpu | query | string | 否 | - | 项目SPU（字段名推断,语义待核实） |
| `developType` | developType | query | integer | 否 | - | Develop类型（字段名推断,语义待核实） |
| `developType2` | developType2 | query | integer | 否 | - | Develop类型2（字段名推断,语义待核实） |
| `salesLevel` | salesLevel | query | string | 否 | - | 销售级别（字段名推断,语义待核实） |
| `isBoutique` | isBoutique | query | string | 否 | - | 是否Boutique（字段名推断,语义待核实） |
| `missionStatus` | missionStatus | query | integer | 否 | - | Mission状态（字段名推断,语义待核实） |
| `checkBy` | checkBy | query | string | 否 | - | 校验人（字段名推断,语义待核实） |
| `checkTimeStart` | checkTimeStart | query | string | 否 | - | 校验时间开始（字段名推断,语义待核实） |
| `checkTimeEnd` | checkTimeEnd | query | string | 否 | - | 校验时间结束（字段名推断,语义待核实） |
| `saleNotes` | saleNotes | query | string | 否 | - | 销售Notes（字段名推断,语义待核实） |
| `teamId` | teamId | query | string | 否 | - | 团队ID（字段名推断,语义待核实） |
| `applicablePlatform` | applicablePlatform | query | string | 否 | - | Applicable平台（字段名推断,语义待核实） |
| `isChoice` | isChoice | query | integer | 否 | - | 是否Choice（字段名推断,语义待核实） |
| `applicableSite` | applicableSite | query | string | 否 | - | Applicable站点（字段名推断,语义待核实） |
| `myRecommend` | myRecommend | query | string | 否 | - | Recommend（字段名推断,语义待核实） |
| `isTwoPicture` | isTwoPicture | query | string | 否 | - | 是否两个图片（字段名推断,语义待核实） |
| `pictureSupplierSelfie` | pictureSupplierSelfie | query | string | 否 | - | 图片供应商Selfie（字段名推断,语义待核实） |
| `pageSize` | pageSize | query | string | 否 | - | 每页条数（字段名推断,语义待核实） |
| `submitSaleTimeStart` | submitSaleTimeStart | query | string | 否 | - | 提交销售时间开始（字段名推断,语义待核实） |
| `submitSaleTimeEnd` | submitSaleTimeEnd | query | string | 否 | - | 提交销售时间结束（字段名推断,语义待核实） |
| `specialMark` | specialMark | query | string | 否 | - | 特殊MARK（字段名推断,语义待核实） |
| `productTag` | productTag | query | string | 否 | - | 商品标签（字段名推断,语义待核实） |
| `tkVideo` | tkVideo | query | string | 否 | - | TikTok视频（字段名推断,语义待核实） |
| `riskLevel` | riskLevel | query | integer | 否 | - | 风险级别（字段名推断,语义待核实） |
| `reexamineCheckBy` | reexamineCheckBy | query | string | 否 | - | Reexamine校验人（字段名推断,语义待核实） |
| `reexaminebeginTime` | reexaminebeginTime | query | string | 否 | - | Reexaminebegin时间（字段名推断,语义待核实） |
| `reexamineEndTime` | reexamineEndTime | query | string | 否 | - | Reexamine结束时间（字段名推断,语义待核实） |
| `lookAtMe` | lookAtMe | query | integer | 否 | - | LOOK时间ME（字段名推断,语义待核实） |
| `isHidden` | isHidden | query | integer | 否 | - | 是否Hidden（字段名推断,语义待核实） |
| `isTort` | isTort | query | integer | 否 | - | 是否侵权（字段名推断,语义待核实） |
| `spotCheck` | spotCheck | query | integer | 否 | - | SPOT校验（字段名推断,语义待核实） |
| `latelySaleSubmit` | latelySaleSubmit | query | string | 否 | - | Lately销售提交（字段名推断,语义待核实） |
| `nameEn` | name_en | query | string | 否 | - | 名称英文（字段名推断,语义待核实） |
| `gifOrVideo` | gifOrVideo | query | integer | 否 | - | GIF视频（字段名推断,语义待核实） |
| `isActualPicture` | isActualPicture | query | integer | 否 | - | 是否实际图片（字段名推断,语义待核实） |
| `recommender` | recommender | query | string | 否 | - | Recommender（字段名推断,语义待核实） |
| `companyId` | companyId | query | integer | 否 | - | 公司ID（字段名推断,语义待核实） |
| `priceRange` | priceRange | query | string | 否 | - | 价格范围（字段名推断,语义待核实） |
| `productTags` | productTags | query | array<string> | 否 | - | 商品TAGS（字段名推断,语义待核实） |
| `certification` | certification | query | string | 否 | - | Certification（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
