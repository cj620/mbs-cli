# mbs pim erp-product-get-sku-warehouse

查询SKU可配置海外仓类型列表：SKU详情页点击“配置海外仓映射关系”时，按 SKU 查询其可选的海外仓类型列表，用于弹窗中“海外仓类型”下拉选择框。返回值为海外仓类型字符串数组，前端 el-select 直接用每个字符串同时作为 label 和 value 渲染。

## 用法

```bash
mbs pim erp-product-get-sku-warehouse --sku <string>
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/productDetails/getSkuWarehouse`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | SKU 编码。来源：当前页面 URL 查询参数 SKU（GetQueryString('SKU')），作为 query 拼接在 getSkuWarehouse?sku= 之后；用于按 SKU 查询其可配置的海外仓类型 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（前端本接口未显式判码，直接读取 obj） | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 海外仓类型列表，元素为字符串。赋给 warehouseList，作为“海外仓类型”下拉选项数据源 | - |
| `obj[]` | string | 单个海外仓类型名称。在下拉中同时作为选项 label（显示文本）与 value（提交值，最终写入映射配置的 warehouse 字段） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
