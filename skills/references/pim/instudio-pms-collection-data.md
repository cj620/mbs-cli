<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-collection-data

数据采集, 根据listing url 采集数据：数据采集, 根据listing url 采集数据

## 用法

```bash
mbs pim instudio-pms-collection-data --url <string>
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/amazon/collectionData`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `url` | url | query | string | 是 | - | URL（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.fieldName` | string | 字段名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.validate` | string | 校验（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.title` | string | 标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryId` | string | 类目ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.parentSku` | string | 父级SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.country` | string | 国家（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.brand` | string | 品牌（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.maker` | string | Maker（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.no` | string | 编号（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.goodsId` | string | 货品ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.condition` | string | 条件（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.conditionDesc` | string | 条件描述（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list_price` | string | 列表价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list_price_with_tax` | string | 列表价格税费（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.nowValues` | string | NOW值列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（表格列/表单项，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
