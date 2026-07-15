# mbs pim instudio-pms-second-categorys

开发中台的二级分类列表数据：开发中台的二级分类列表数据

## 用法

```bash
mbs pim instudio-pms-second-categorys [--times <string>] [--firstCategoryName <string>] [--page <integer>] [--pageSize <integer>] [--startIndex <integer>] [--firstCategoryList <array<string>>] [--secondCategoryName <string>] [--secondCategoryList <array<string>>] [--companyId <integer>] [--exportTimeList <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/skuCategory/secondCategorys`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `times` | times | body | string | 否 | - | 时间 (yyyy-MM) |
| `firstCategoryName` | firstCategoryName | body | string | 否 | - | 一级类目 |
| `page` | page | body | integer | 否 | - | 页码 |
| `pageSize` | pageSize | body | integer | 否 | - | 页容量 |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `firstCategoryList` | firstCategoryList | body | array<string> | 否 | - | 首个类目列表（字段名推断,语义待核实） |
| `secondCategoryName` | secondCategoryName | body | string | 否 | - | 二级类目 |
| `secondCategoryList` | secondCategoryList | body | array<string> | 否 | - | 秒类目列表（字段名推断,语义待核实） |
| `companyId` | companyId | body | integer | 否 | - | 公司ID（字段名推断,语义待核实） |
| `exportTimeList` | exportTimeList | body | array<string> | 否 | - | 导出使用的时间字段 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.categoryName` | string | 类目名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.class` | string | 类（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rate` | string | 比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.salesRatio` | string | 销售比例（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.firstCategory` | string | 首个类目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.chartType` | string | 图表类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
