# mbs pim instudio-pms-export-customer-service-date

查询客服绩效数据：查询客服绩效数据

## 用法

```bash
mbs pim instudio-pms-export-customer-service-date --sortedBy <string>
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/customerServiceDateController/exportCustomerServiceDate`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sortedBy` | sortedBy | query | string | 是 | - | Sorted人（字段名推断,语义待核实） |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
