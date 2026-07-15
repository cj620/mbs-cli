# mbs pim instudio-pms-get-all-pricing-allocation-strategy

计算定价分摊策略：计算定价分摊策略

## 用法

```bash
mbs pim instudio-pms-get-all-pricing-allocation-strategy
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/pricingAllocationStrategyController/getAllPricingAllocationStrategy`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].id` | integer | id。前端使用：待核实 | - |
| `obj.obj[].salepricemin` | number | 最小售价。前端使用：待核实 | - |
| `obj.obj[].salepricemax` | string | 最大售价。前端使用：待核实 | - |
| `obj.obj[].proportion` | number | 比例。前端使用：待核实 | - |
| `obj.obj[].freightmin` | number | 最小运费。前端使用：待核实 | - |
| `obj.obj[].freightmax` | number | 最大运费。前端使用：待核实 | - |
| `obj.obj[].platform` | string | 平台。前端使用：待核实 | - |
| `obj.obj[].MSPR` | string | MSPR（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].price` | string | 价格（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].freight` | string | 运费（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].count` | integer | 数量（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
