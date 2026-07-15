# mbs pim erp-product-export-distribution

印尼分销订单外部仓导出(越域网/赛盈网)：在采购看板自建商品(分销)页勾选订单后，按导出渠道(越域网flag=1/赛盈网flag=0)将所选订单导出为Excel。请求体提交所选订单号集合orderNo及渠道标识flag，后端返回Excel二进制流(.xlsx)，前端以Blob接收并触发浏览器下载。

## 用法

```bash
mbs pim erp-product-export-distribution --orderNo <array> --flag <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/indonesia/exportDistribution`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderNo` | orderNo | body | array | 是 | - | 待导出的订单号集合，由所有勾选的 name=mybuild 复选框 value 组成；为空则前端拦截不发请求 |
| `flag` | flag | body | number | 是 | - | 导出渠道标识。1=越域网导出;0=赛盈网导出(来源按钮 onclick 传参) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `(binary)` | unknown | Excel(.xlsx) 二进制文件流(responseType=blob)，前端保存为 {时间戳}.xlsx 下载，无结构化字段 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
