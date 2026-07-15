# mbs pim instudio-pms-get-walmart-publish-confirm-list-auto

获取walmart刊登任务列表：获取walmart刊登任务列表

## 用法

```bash
mbs pim instudio-pms-get-walmart-publish-confirm-list-auto [--teamManagerList <array<string>>] [--site <string>] [--shopName <string>] [--shopId <string>] [--spu <string>] [--categoryName <string>] [--page <integer>] [--pageSize <integer>] [--startIndex <integer>] [--shopManagerList <array<string>>] [--spuList <array<string>>] [--status <integer>] [--createBy <string>] [--startDate <string>] [--endDate <string>] [--submitDateStart <string>] [--submitDateEnd <string>] [--finishDateStart <string>] [--finishDateEnd <string>] [--publishType <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/walmart/auto/getWalmartPublishConfirmList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `teamManagerList` | teamManagerList | body | array<string> | 否 | - | 团队管理列表（字段名推断,语义待核实） |
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `shopName` | shopName | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `shopId` | shopId | body | string | 否 | - | 店铺ID（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `categoryName` | categoryName | body | string | 否 | - | 类目名称（字段名推断,语义待核实） |
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `shopManagerList` | shopManagerList | body | array<string> | 否 | - | 店铺管理列表（字段名推断,语义待核实） |
| `spuList` | spuList | body | array<string> | 否 | - | SPU列表（字段名推断,语义待核实） |
| `status` | status | body | integer | 否 | - | 刊登状态 |
| `createBy` | createBy | body | string | 否 | - | 创建人 |
| `startDate` | startDate | body | string | 否 | - | 创建时间查询的开始时间 |
| `endDate` | endDate | body | string | 否 | - | 创建时间查询的结束时间 |
| `submitDateStart` | submitDateStart | body | string | 否 | - | 提交日期开始（字段名推断,语义待核实） |
| `submitDateEnd` | submitDateEnd | body | string | 否 | - | 提交日期结束（字段名推断,语义待核实） |
| `finishDateStart` | finishDateStart | body | string | 否 | - | 完成日期开始（字段名推断,语义待核实） |
| `finishDateEnd` | finishDateEnd | body | string | 否 | - | 完成日期结束（字段名推断,语义待核实） |
| `publishType` | publishType | body | integer | 否 | - | 刊登状态 |

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
