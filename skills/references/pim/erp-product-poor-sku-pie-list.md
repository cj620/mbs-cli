# mbs pim erp-product-poor-sku-pie-list

不良库存饼图(末次采购/滞销)分析数据查询：根据当前页表格的 SKU 列表，批量查询每个 SKU 末次入库成功采购单往前推 30/60/90 天的入库采购分析明细（备货人/数量/金额/入库时间）。前端用其计算末次采购分析(备货人、备货数量、备货金额、距今天数)及不良库存分析(占比最高备货人、占比)，并在查看分析表抽屉中渲染 30/60/90 天饼图。

## 用法

```bash
mbs pim erp-product-poor-sku-pie-list --fielde741ce4d <array<string>>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/indonesia/poorSkuPieList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `fielde741ce4d` | (请求体根数组) | body | array<string> | 是 | - | SKU 编码数组，请求体本身即为该数组(list.map(item => item.sku))，来源=当前页表格数据各行 sku；无独立控件，随列表自动带出 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.collectPie30[]` | array | 近30天入库采购分析明细列表(前端用于末次采购分析及30天占比饼图) | - |
| `obj.collectPie30[][0]` | string | SKU 编码(前端按行 sku 过滤匹配) | - |
| `obj.collectPie30[][1]` | string | 30天-采购备货人(操作人) | - |
| `obj.collectPie30[][2]` | number | 30天-备货(入库)数量 | - |
| `obj.collectPie30[][3]` | number | 30天-备货(入库)金额 | - |
| `obj.collectPie30[][4]` | number | 入库时间戳(ms)，前端取最近一次(降序首条)计算距今天数 poorInvDays | - |
| `obj.collectPie60[]` | array | 近60天入库采购分析明细列表(前端用于60天占比饼图) | - |
| `obj.collectPie60[][0]` | string | SKU 编码 | - |
| `obj.collectPie60[][1]` | string | 60天-采购备货人(操作人) | - |
| `obj.collectPie60[][2]` | number | 60天-备货(入库)数量 | - |
| `obj.collectPie60[][3]` | number | 60天-备货(入库)金额 | - |
| `obj.collectPie90[]` | array | 近90天入库采购分析明细列表(前端用于不良库存分析占比最高人及90天占比饼图) | - |
| `obj.collectPie90[][0]` | string | SKU 编码 | - |
| `obj.collectPie90[][1]` | string | 90天-采购备货人(操作人) | - |
| `obj.collectPie90[][2]` | number | 90天-备货(入库)数量 | - |
| `obj.collectPie90[][3]` | number | 90天-备货(入库)金额 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
