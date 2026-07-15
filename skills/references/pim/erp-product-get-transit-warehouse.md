# mbs pim erp-product-get-transit-warehouse

获取中转仓(海外仓)列表：加载 SKU 详情页「配置海外仓映射关系」弹窗中「中转仓」下拉框的可选项。无入参，返回可选中转仓(海外仓)名称字符串列表，前端 el-select 用 v-for 直接渲染为选项(label=value=名称字符串)。

## 用法

```bash
mbs pim erp-product-get-transit-warehouse
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/productDetails/getTransitWarehouse`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 中转仓(海外仓)名称列表,绑定到 overhouseList 作为「中转仓」下拉数据源 | - |
| `obj[]` | string | 单个中转仓(海外仓)名称(同时作为下拉项 label 与 value) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
