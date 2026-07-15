# mbs pim instudio-pms-export-manufacture

供应商中台导出：供应商中台导出

## 用法

```bash
mbs pim instudio-pms-export-manufacture [--times <string>] [--manufacture <string>] [--paymentType <string>] [--buyer <string>] [--buyers <array<string>>] [--page <integer>] [--pageSize <integer>] [--startIndex <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/manufacture/export`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `times` | times | body | string | 否 | - | 时间 |
| `manufacture` | manufacture | body | string | 否 | - | 供应商 |
| `paymentType` | paymentType | body | string | 否 | - | 付款方式 |
| `buyer` | buyer | body | string | 否 | - | 采购员 |
| `buyers` | buyers | body | array<string> | 否 | - | 采购员s |
| `page` | page | body | integer | 否 | - | 页码 |
| `pageSize` | pageSize | body | integer | 否 | - | 页容量 |
| `startIndex` | startIndex | body | integer | 否 | - | 开始页码 |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
