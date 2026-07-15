# mbs pim instudio-pms-get-sku-view

查询SKU查看：查询SKU查看(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-get-sku-view [--searchSku <string>] [--searchFinallyExressStartTime <string>] [--searchFinallyExressEndTime <string>] [--searchSkuList <array<string>>] [--sku <string>] [--projectName <string>] [--nowSchedule <string>] [--page <integer>] [--start <integer>] [--pageSize <integer>] [--orderBy <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/hwcDevelopmentProject/getSkuView`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `searchSku` | searchSku | body | string | 否 | - | 搜索SKU（字段名推断,语义待核实） |
| `searchFinallyExressStartTime` | searchFinallyExressStartTime | body | string | 否 | - | 搜索FinallyExress开始时间（字段名推断,语义待核实） |
| `searchFinallyExressEndTime` | searchFinallyExressEndTime | body | string | 否 | - | 搜索FinallyExress结束时间（字段名推断,语义待核实） |
| `searchSkuList` | searchSkuList | body | array<string> | 否 | - | 搜索SKU列表（字段名推断,语义待核实） |
| `sku` | sku | body | string | 否 | - | SKU（字段名推断,语义待核实） |
| `projectName` | projectName | body | string | 否 | - | 项目名称（字段名推断,语义待核实） |
| `nowSchedule` | nowSchedule | body | string | 否 | - | 当前进度 |
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `start` | start | body | integer | 否 | - | 开始（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `orderBy` | orderBy | body | string | 否 | - | 1 根据sku添加时间排序, 2 根据库存排序, 3 根据累计发货数量排序, 4 根据累计商品成本排序 |

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
