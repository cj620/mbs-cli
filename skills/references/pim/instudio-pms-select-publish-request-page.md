<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-select-publish-request-page

美客多单品刊登列表查询：美客多单品刊登列表查询

## 用法

```bash
mbs pim instudio-pms-select-publish-request-page [--page <integer>] [--pageSize <integer>] [--spuList <array<string>>] [--status <integer>] [--createUser <string>] [--groupCode <string>] [--siteCode <string>] [--groupCodeList <array<string>>] [--shopManagerList <array<string>>] [--startDate <string>] [--endDate <string>] [--addOrCopyType <integer>] [--clipTaskStatus <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/mercadolibre/selectPublishRequestPage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `spuList` | spuList | body | array<string> | 否 | - | spu |
| `status` | status | body | integer | 否 | - | 刊登状态 |
| `createUser` | createUser | body | string | 否 | - | 创建人 |
| `groupCode` | groupCode | body | string | 否 | - | 店铺分组编码 |
| `siteCode` | siteCode | body | string | 否 | - | 站点 |
| `groupCodeList` | groupCodeList | body | array<string> | 否 | - | 店铺 |
| `shopManagerList` | shopManagerList | body | array<string> | 否 | - | 店铺负责人 |
| `startDate` | startDate | body | string | 否 | - | 创建时间查询的开始时间 |
| `endDate` | endDate | body | string | 否 | - | 创建时间查询的结束时间 |
| `addOrCopyType` | addOrCopyType | body | integer | 否 | - | 0-新增，1-复制 |
| `clipTaskStatus` | clipTaskStatus | body | integer | 否 | - | 视频上传任务状态：0-待上传，1-成功，2-失败，3-部分成功，4-取消。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 状态码。前端使用：待核实 | - |
| `success` | boolean | 是否成功。前端使用：待核实 | - |
| `data` | object | 承载数据。前端使用：待核实 | - |
| `message` | string | 返回消息。前端使用：待核实 | - |
| `obj.total` | integer | 总数（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.totalPages` | integer | 总数Pages（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.rows[]` | array | 行数据（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.success` | boolean | 成功（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.desc` | string | 描述（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.code` | integer | 编码（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.footer[]` | array | Footer（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.sort` | string | 排序（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.order` | string | 订单（字段名推断,语义待核实）。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
