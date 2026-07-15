<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-category-by-search-lazada-singlepublish-info-controller

根据分类名字模糊搜索分类：根据分类名字模糊搜索分类

## 用法

```bash
mbs pim instudio-pms-find-category-by-search-lazada-singlepublish-info-controller [--name <string>] [--site <string>] [--siteList <array<string>>] [--vtype <string>] [--spu <string>] [--categoryid <string>] [--id <integer>] [--idList <array<integer>>] [--attributeName <string>] [--searchParam <string>] [--title <string>] [--shopname <string>] [--shopList <array<string>>] [--empName <string>] [--itemId <string>] [--oper <string>] [--isRefresh <integer>] [--createby <string>] [--erpSpu <string>] [--listId <integer>] [--ids <array<integer>>] [--isCompulsory <integer>] [--keywords <array<string>>] [--total <integer>] [--calcPriceFlag <integer>] [--isTranslate <integer>] [--copyId <integer>] [--timeOccur <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/lazadaSinglepublishInfoController/findCategoryBySearch`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `name` | name | body | string | 否 | - | 名称（字段名推断,语义待核实） |
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `siteList` | siteList | body | array<string> | 否 | - | 站点列表（字段名推断,语义待核实） |
| `vtype` | vtype | body | string | 否 | - | Vtype（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `categoryid` | categoryid | body | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `idList` | idList | body | array<integer> | 否 | - | ID列表（字段名推断,语义待核实） |
| `attributeName` | attributeName | body | string | 否 | - | 属性名称（字段名推断,语义待核实） |
| `searchParam` | searchParam | body | string | 否 | - | 搜索参数（字段名推断,语义待核实） |
| `title` | title | body | string | 否 | - | 标题（字段名推断,语义待核实） |
| `shopname` | shopname | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `shopList` | shopList | body | array<string> | 否 | - | 店铺列表（字段名推断,语义待核实） |
| `empName` | empName | body | string | 否 | - | EMP名称（字段名推断,语义待核实） |
| `itemId` | itemId | body | string | 否 | - | 条目ID（字段名推断,语义待核实） |
| `oper` | oper | body | string | 否 | - | 操作（字段名推断,语义待核实） |
| `isRefresh` | isRefresh | body | integer | 否 | - | 是否刷新（字段名推断,语义待核实） |
| `createby` | createby | body | string | 否 | - | Createby（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | ERPSPU（字段名推断,语义待核实） |
| `listId` | listId | body | integer | 否 | - | 列表ID（字段名推断,语义待核实） |
| `ids` | ids | body | array<integer> | 否 | - | ID列表（字段名推断,语义待核实） |
| `isCompulsory` | isCompulsory | body | integer | 否 | - | 是否Compulsory（字段名推断,语义待核实） |
| `keywords` | keywords | body | array<string> | 否 | - | Keywords（字段名推断,语义待核实） |
| `total` | total | body | integer | 否 | - | 总数（字段名推断,语义待核实） |
| `calcPriceFlag` | calcPriceFlag | body | integer | 否 | - | 是否系统算价 0否 1是 |
| `isTranslate` | isTranslate | body | integer | 否 | - | 是否翻译（字段名推断,语义待核实） |
| `copyId` | copyId | body | integer | 否 | - | 复制ID（字段名推断,语义待核实） |
| `timeOccur` | timeOccur | body | string | 否 | - | 时间Occur（字段名推断,语义待核实） |

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
