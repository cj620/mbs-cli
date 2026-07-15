# mbs pim instudio-pms-export-sku-category

开发中台 类目维度导出：开发中台 类目维度导出

## 用法

```bash
mbs pim instudio-pms-export-sku-category [--times <string>] [--status <integer>] [--firstCategory <string>] [--secondCategory <string>] [--categoryList <array<string>>] [--page <integer>] [--pageSize <integer>] [--startIndex <integer>] [--chartType <string>] [--companyId <integer>] [--warningIndexList <array<string>>] [--exportTitleList <array<string>>] [--exportTimeList <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/skuCategory/export`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `times` | times | body | string | 否 | - | 时间 (yyyy-MM) |
| `status` | status | body | integer | 否 | - | 数据维度(1 一级类目 2 二级类目) |
| `firstCategory` | firstCategory | body | string | 否 | - | 一级类目 |
| `secondCategory` | secondCategory | body | string | 否 | - | 二级类目 |
| `categoryList` | categoryList | body | array<string> | 否 | - | 数据权限 可以查看的一级类目 |
| `page` | page | body | integer | 否 | - | 页码 |
| `pageSize` | pageSize | body | integer | 否 | - | 页容量 |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `chartType` | chartType | body | string | 否 | - | 趋势图类别 |
| `companyId` | companyId | body | integer | 否 | - | 公司ID（字段名推断,语义待核实） |
| `warningIndexList` | warningIndexList | body | array<string> | 否 | - | 警戒指标 选中, 显示对应指标触发警戒的, 如果选择多个 or的关系 |
| `exportTitleList` | exportTitleList | body | array<string> | 否 | - | 需要导出的标题头 |
| `exportTimeList` | exportTimeList | body | array<string> | 否 | - | 导出使用的时间字段 |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
