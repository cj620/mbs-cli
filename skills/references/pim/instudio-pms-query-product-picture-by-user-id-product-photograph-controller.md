<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-query-product-picture-by-user-id-product-photograph-controller

获取当前账号的拍照任务：获取当前账号的拍照任务

## 用法

```bash
mbs pim instudio-pms-query-product-picture-by-user-id-product-photograph-controller --id <string> [--spu <string>] [--creater <string>] [--index <string>] [--createrTime <string>] [--projectId <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/ProductPhotographController/queryProductPictureByUserId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | query | string | 是 | - | ID（字段名推断,语义待核实） |
| `spu` | spu | query | string | 否 | - | SPU（字段名推断,语义待核实） |
| `creater` | creater | query | string | 否 | - | Creater（字段名推断,语义待核实） |
| `index` | index | query | string | 否 | - | 索引（字段名推断,语义待核实） |
| `createrTime` | createrTime | query | string | 否 | - | Creater时间（字段名推断,语义待核实） |
| `projectId` | projectId | query | string | 否 | - | 项目ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `list[]` | array | 列表。前端使用：待核实 | - |
| `totalCount` | integer | 总数量。前端使用：待核实 | - |
| `resultCount` | integer | 结果数量。前端使用：待核实 | - |
| `searchList[]` | array | 搜索列表。前端使用：待核实 | - |
| `searchList[]` | string | - | - |
| `saleProjectByExecutor[]` | array | 销售项目人执行器。前端使用：待核实 | - |
| `obj.spu` | string | 产品spu。前端使用：待核实 | - |
| `obj.productName` | string | 产品名称。前端使用：待核实 | - |
| `obj.createBy` | string | 创建人。前端使用：待核实 | - |
| `obj.createOn` | string | 创建时间。前端使用：待核实 | - |
| `obj.skuNum` | string | sku数量。前端使用：待核实 | - |
| `obj.pictureUrl` | string | 原图路径。前端使用：待核实 | - |
| `obj.designerPrctureUrl` | string | 美工原图 路径。前端使用：待核实 | - |
| `obj.CompetingGoodsNum` | string | 竞品数量。前端使用：待核实 | - |
| `obj.timeInvalid` | string | 时间无效（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.arterNotes` | string | ArterNotes（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.supplySkuUrl` | string | 供应SKUURL（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.projectid` | string | Projectid（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.artercomplettime` | string | Artercomplettime（字段名推断,语义待核实）。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
