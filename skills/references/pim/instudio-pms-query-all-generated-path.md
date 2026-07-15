<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-query-all-generated-path

获取所有生成路径：获取所有生成路径

## 用法

```bash
mbs pim instudio-pms-query-all-generated-path
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/productImage/queryAllGeneratedPath`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `list[]` | array | 列表。前端使用：待核实 | - |
| `totalCount` | integer | 总数量。前端使用：待核实 | - |
| `resultCount` | integer | 结果数量。前端使用：待核实 | - |
| `searchList[]` | array | 搜索列表。前端使用：待核实 | - |
| `searchList[]` | string | - | - |
| `saleProjectByExecutor[]` | array | 销售项目人执行器。前端使用：待核实 | - |
| `obj.pictureDirectory` | string | 路径。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
