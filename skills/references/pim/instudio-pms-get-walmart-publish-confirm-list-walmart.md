<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-walmart-publish-confirm-list-walmart

获取walmart刊登任务列表：获取walmart刊登任务列表

## 用法

```bash
mbs pim instudio-pms-get-walmart-publish-confirm-list-walmart [--teamManagerList <array<string>>] [--site <string>] [--shopName <string>] [--shopId <string>] [--spu <string>] [--categoryName <string>] [--displayFieldFlag <integer>] [--variantAttributeNameList <array<string>>] [--page <integer>] [--pageSize <integer>] [--startIndex <integer>] [--shopManagerList <array<string>>] [--spuList <array<string>>] [--status <integer>] [--createBy <string>] [--startDate <string>] [--endDate <string>] [--requestIds <array<string>>] [--firstCategoryName <string>] [--secondCategoryName <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/walmart/getWalmartPublishConfirmList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `teamManagerList` | teamManagerList | body | array<string> | 否 | - | 获取店铺 |
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `shopName` | shopName | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `shopId` | shopId | body | string | 否 | - | 店铺ID（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `categoryName` | categoryName | body | string | 否 | - | 类目名称（字段名推断,语义待核实） |
| `displayFieldFlag` | displayFieldFlag | body | integer | 否 | - | 1 只显示, 0 排除掉这些字段 |
| `variantAttributeNameList` | variantAttributeNameList | body | array<string> | 否 | - | 变体属性名称列表（字段名推断,语义待核实） |
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `shopManagerList` | shopManagerList | body | array<string> | 否 | - | 店铺管理列表（字段名推断,语义待核实） |
| `spuList` | spuList | body | array<string> | 否 | - | SPU列表（字段名推断,语义待核实） |
| `status` | status | body | integer | 否 | - | 刊登状态 |
| `createBy` | createBy | body | string | 否 | - | 创建人 |
| `startDate` | startDate | body | string | 否 | - | 创建时间查询的开始时间 |
| `endDate` | endDate | body | string | 否 | - | 创建时间查询的结束时间 |
| `requestIds` | requestIds | body | array<string> | 否 | - | 请求ID列表（字段名推断,语义待核实） |
| `firstCategoryName` | firstCategoryName | body | string | 否 | - | 首个类目名称（字段名推断,语义待核实） |
| `secondCategoryName` | secondCategoryName | body | string | 否 | - | 秒类目名称（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.shopName` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
