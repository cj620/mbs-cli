# mbs pim erp-product-get-manufac-refund

供应商/开发员退货排行查询（退货排行榜）：降本排行榜页面「退货排行」标签页数据查询：按开始/结束时间区间统计各人员（开发员/采购员）的退款情况，返回按退款金额排行的人员列表（姓名、统计项金额、累计退款金额）。

## 用法

```bash
mbs pim erp-product-get-manufac-refund --page <number> [--startTime <string>] [--endTime <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productExtend/getManufacRefund`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码，前端固定传 1 |
| `startTime` | startTime | body | string | 否 | - | 统计开始时间，取自时间选择控件 #startTime（yyyy-MM-dd） |
| `endTime` | endTime | body | string | 否 | - | 统计结束时间，取自时间选择控件 #endTime（yyyy-MM-dd） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `content` | string | 动态列表头名称（模板 <th>{{content}}</th>，对应统计项/周期标题）(待人工确认) | - |
| `obj[]` | array | 人员退货排行列表 | - |
| `obj[][0]` | string | 人员姓名（开发员/采购员），渲染于「姓名」列 | - |
| `obj[][1]` | string | 统计项金额，渲染于动态列 {{content}}（如本月退款金额） | - |
| `obj[][2]` | string | 累计退款金额，渲染于「累计退款金额」列 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
