# mbs pim instudio-pms-get-shopee-category-recommend-shopee-singlepublish-controller-cnsc

根据标题推荐分类：根据标题推荐分类

## 用法

```bash
mbs pim instudio-pms-get-shopee-category-recommend-shopee-singlepublish-controller-cnsc [--parentCategoryId <string>] [--categoryLevel <integer>] [--categoryId <string>] [--shopname <string>] [--merchantid <string>] [--site <string>] [--erpSpu <string>] [--oper <string>] [--operId <string>] [--listId <string>] [--startIndex <integer>] [--pageSize <integer>] [--currentPage <integer>] [--starttime <string>] [--endtime <string>] [--shopsSplice <string>] [--publishstatus <integer>] [--createBy <string>] [--pt <string>] [--shopeeUrl <string>] [--listIdList <array<string>>] [--shopCopys <array<string>>] [--listCopys <array<string>>] [--itemId <string>] [--id <integer>] [--isRefresh <integer>] [--title <string>] [--videoStatusStr <string>] [--picStyle <string>] [--price5 <integer>] [--groupCompanyId <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/shopeeSinglepublishControllerCNSC/getShopeeCategoryRecommend`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

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
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].categoryId` | string | 类目ID（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].originalCategoryName` | string | 原始类目名称（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].displayCategoryName` | string | 展示类目名称（字段名推断,语义待核实）。前端使用：是（列表行字段,条件判断，行号待核实） | - |
| `obj.obj[].parentCategoryId` | string | 父级类目ID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].categoryLevel` | integer | 类目级别（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].leafCategory` | integer | LEAF类目（字段名推断,语义待核实）。前端使用：是（列表行字段,条件判断，行号待核实） | - |
| `obj.obj[].createby` | string | Createby（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].createtime` | string | 创建时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].calltime` | string | Calltime（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].originalCategoryNameDescr` | string | 原始类目名称描述（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].displayCategoryNameDescr` | string | 展示类目名称描述（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].hasChildren` | boolean | 是否有Children（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].descr` | string | 描述（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].supportSizeChart` | boolean | Support大小图表（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.label` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryPath` | string | 类目路径（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.site` | string | 站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopId` | string | 店铺ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
