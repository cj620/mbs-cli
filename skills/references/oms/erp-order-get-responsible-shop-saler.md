# mbs oms erp-order-get-responsible-shop-saler

获取负责店长(店长下拉)列表：eBay Case 任务看板筛选区「店长」下拉框的数据源接口。页面加载时无参 POST 调用，返回当前用户可见的负责店长(销售员)名称数组，前端用 art-template 渲染为 option 列表填充 #shopSalers 下拉框。

## 用法

```bash
mbs oms erp-order-get-responsible-shop-saler
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayCaseTask/getResponsibleShopSaler`
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
| `code` | number | 响应状态码，200=成功(前端据此判断是否渲染) | - |
| `obj[]` | array | 负责店长(销售员)名称列表，元素为字符串 | - |
| `obj[]` | string | 单个店长名称，作为下拉 option 的 value 与展示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
