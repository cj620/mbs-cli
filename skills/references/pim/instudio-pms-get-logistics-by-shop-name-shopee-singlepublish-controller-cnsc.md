<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-logistics-by-shop-name-shopee-singlepublish-controller-cnsc

根据店铺获取物流模板：根据店铺获取物流模板

## 用法

```bash
mbs pim instudio-pms-get-logistics-by-shop-name-shopee-singlepublish-controller-cnsc [--parentCategoryId <string>] [--categoryLevel <integer>] [--categoryId <string>] [--shopname <string>] [--merchantid <string>] [--site <string>] [--erpSpu <string>] [--oper <string>] [--operId <string>] [--listId <string>] [--startIndex <integer>] [--pageSize <integer>] [--currentPage <integer>] [--starttime <string>] [--endtime <string>] [--shopsSplice <string>] [--publishstatus <integer>] [--createBy <string>] [--pt <string>] [--shopeeUrl <string>] [--listIdList <array<string>>] [--shopCopys <array<string>>] [--listCopys <array<string>>] [--itemId <string>] [--id <integer>] [--isRefresh <integer>] [--title <string>] [--videoStatusStr <string>] [--picStyle <string>] [--price5 <integer>] [--groupCompanyId <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/shopeeSinglepublishControllerCNSC/getLogisticsByShopName`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `parentCategoryId` | parentCategoryId | body | string | 否 | - | 父级类目ID（字段名推断,语义待核实） |
| `categoryLevel` | categoryLevel | body | integer | 否 | - | 类目级别（字段名推断,语义待核实） |
| `categoryId` | categoryId | body | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `shopname` | shopname | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `merchantid` | merchantid | body | string | 否 | - | Merchantid（字段名推断,语义待核实） |
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | ERPSPU（字段名推断,语义待核实） |
| `oper` | oper | body | string | 否 | - | 操作（字段名推断,语义待核实） |
| `operId` | operId | body | string | 否 | - | 操作ID（字段名推断,语义待核实） |
| `listId` | listId | body | string | 否 | - | 列表ID（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `starttime` | starttime | body | string | 否 | - | Starttime（字段名推断,语义待核实） |
| `endtime` | endtime | body | string | 否 | - | Endtime（字段名推断,语义待核实） |
| `shopsSplice` | shopsSplice | body | string | 否 | - | 店铺列表Splice（字段名推断,语义待核实） |
| `publishstatus` | publishstatus | body | integer | 否 | - | Publishstatus（字段名推断,语义待核实） |
| `createBy` | createBy | body | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `pt` | pt | body | string | 否 | - | PT（字段名推断,语义待核实） |
| `shopeeUrl` | shopeeUrl | body | string | 否 | - | ShopeeURL（字段名推断,语义待核实） |
| `listIdList` | listIdList | body | array<string> | 否 | - | 列表ID列表（字段名推断,语义待核实） |
| `shopCopys` | shopCopys | body | array<string> | 否 | - | 复制成功目标店铺 |
| `listCopys` | listCopys | body | array<string> | 否 | - | 复制成功源list |
| `itemId` | itemId | body | string | 否 | - | 条目ID（字段名推断,语义待核实） |
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `isRefresh` | isRefresh | body | integer | 否 | - | 是否刷新（字段名推断,语义待核实） |
| `title` | title | body | string | 否 | - | 标题（字段名推断,语义待核实） |
| `videoStatusStr` | videoStatusStr | body | string | 否 | - | 视频状态字符串（字段名推断,语义待核实） |
| `picStyle` | picStyle | body | string | 否 | - | 图片样式（字段名推断,语义待核实） |
| `price5` | price5 | body | integer | 否 | - | 价格5（字段名推断,语义待核实） |
| `groupCompanyId` | groupCompanyId | body | integer | 否 | - | 分组公司ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].logisticId` | string | 物流ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].logisticName` | string | 物流名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].itemMinWeight` | number | 条目最小重量（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].itemMaxWeight` | number | 条目最大重量（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].shipingFee` | number | 运费。前端使用：待核实 | - |
| `obj.obj[].enabled` | integer | 是否启用。前端使用：待核实 | - |
| `obj.obj[].isFree` | integer | 是否免邮。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
