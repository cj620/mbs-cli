# mbs pim instudio-pms-export-art-photographer

美工摄影报表：美工摄影报表

## 用法

```bash
mbs pim instudio-pms-export-art-photographer [--oper <string>] [--positionName <string>] [--teamName <string>] [--spucount <integer>] [--skucount <integer>] [--ordercount <integer>] [--totalamount <number>] [--profit <number>] [--startDate <string>] [--endDate <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/AllMessage/exportArtPhotographer`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `oper` | oper | body | string | 否 | - | 姓名 |
| `positionName` | positionName | body | string | 否 | - | 职位 |
| `teamName` | teamName | body | string | 否 | - | 小组 |
| `spucount` | spucount | body | integer | 否 | - | spu数量 |
| `skucount` | skucount | body | integer | 否 | - | sku数量 |
| `ordercount` | ordercount | body | integer | 否 | - | 订单数量 |
| `totalamount` | totalamount | body | number | 否 | - | 销售额 |
| `profit` | profit | body | number | 否 | - | 毛利 |
| `startDate` | startDate | body | string | 否 | - | 开始日期（字段名推断,语义待核实） |
| `endDate` | endDate | body | string | 否 | - | 结束日期（字段名推断,语义待核实） |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
