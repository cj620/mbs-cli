<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-product-picture-by-list

获取产品图片任务池所有产品信息：获取产品图片任务池所有产品信息

## 用法

```bash
mbs pim instudio-pms-find-product-picture-by-list [--creater <string>] [--createrTime <string>] [--spu <string>] [--index <string>] [--projectId <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/productImage/findProductPictureByList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `creater` | creater | query | string | 否 | - | Creater（字段名推断,语义待核实） |
| `createrTime` | createrTime | query | string | 否 | - | Creater时间（字段名推断,语义待核实） |
| `spu` | spu | query | string | 否 | - | SPU（字段名推断,语义待核实） |
| `index` | index | query | string | 否 | - | 索引（字段名推断,语义待核实） |
| `projectId` | projectId | query | string | 否 | - | 项目ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | string | 编码。前端使用：待核实 | - |
| `searchList[]` | array | 搜索列表。前端使用：待核实 | - |
| `searchList[]` | string | - | - |
| `list[]` | array | 列表。前端使用：待核实 | - |
| `executorList[]` | array | 执行器列表。前端使用：待核实 | - |
| `saleProjectByPool[]` | array | 销售项目人池。前端使用：待核实 | - |
| `totalCount` | string | 总数量。前端使用：待核实 | - |
| `resultCount` | string | 结果数量。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
