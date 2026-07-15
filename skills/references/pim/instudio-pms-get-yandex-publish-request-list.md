<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-yandex-publish-request-list

获取yandex刊登任务列表：获取yandex刊登任务列表

## 用法

```bash
mbs pim instudio-pms-get-yandex-publish-request-list [--spu <string>] [--shopId <string>] [--shopName <string>] [--categoryId <integer>] [--page <integer>] [--pageSize <integer>] [--startIndex <integer>] [--shopManagerList <array<string>>] [--spuList <array<string>>] [--publishStatus <integer>] [--createBy <string>] [--startDate <string>] [--endDate <string>] [--shopNameList <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/yandexPublish/getYandexPublishRequestList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 否 | - | spu |
| `shopId` | shopId | body | string | 否 | - | 店铺 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称 |
| `categoryId` | categoryId | body | integer | 否 | - | 类目ID |
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `shopManagerList` | shopManagerList | body | array<string> | 否 | - | 店铺管理列表（字段名推断,语义待核实） |
| `spuList` | spuList | body | array<string> | 否 | - | SPU列表（字段名推断,语义待核实） |
| `publishStatus` | publishStatus | body | integer | 否 | - | 刊登状态 |
| `createBy` | createBy | body | string | 否 | - | 创建人 |
| `startDate` | startDate | body | string | 否 | - | 创建时间查询的开始时间 |
| `endDate` | endDate | body | string | 否 | - | 创建时间查询的结束时间 |
| `shopNameList` | shopNameList | body | array<string> | 否 | - | 店铺名称列表（字段名推断,语义待核实） |

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
