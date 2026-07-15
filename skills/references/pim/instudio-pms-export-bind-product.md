# mbs pim instudio-pms-export-bind-product

导出捆绑商品：导出捆绑商品

## 用法

```bash
mbs pim instudio-pms-export-bind-product [--page <integer>] [--currentPage <integer>] [--pageSize <integer>] [--queryField <string>] [--field <string>] [--keyword <string>] [--text <string>] [--status <string>] [--exportAll <boolean>] [--exportScope <string>] [--exportType <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/product/exportBindProduct`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `queryField` | queryField | body | string | 否 | - | 查询字段（字段名推断,语义待核实） |
| `field` | field | body | string | 否 | - | 字段（字段名推断,语义待核实） |
| `keyword` | keyword | body | string | 否 | - | 关键词（字段名推断,语义待核实） |
| `text` | text | body | string | 否 | - | 文本（字段名推断,语义待核实） |
| `status` | status | body | string | 否 | - | 状态（字段名推断,语义待核实） |
| `exportAll` | exportAll | body | boolean | 否 | - | 导出全部（字段名推断,语义待核实） |
| `exportScope` | exportScope | body | string | 否 | - | 导出范围（字段名推断,语义待核实） |
| `exportType` | exportType | body | string | 否 | - | 导出类型（字段名推断,语义待核实） |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
