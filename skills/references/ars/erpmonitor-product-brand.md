# mbs ars erpmonitor-product-brand

热销商品监控-商品品牌下拉查询：进入热销商品监控页(shopHotProducts2)时调用，加载"商品品牌"筛选下拉框的全部可选品牌列表。无请求参数，返回品牌集合(品牌ID + 品牌名称)，前端以 brandName 作为选项的 label 与 value。

## 用法

```bash
mbs ars erpmonitor-product-brand
```

## API

- Service: `erpmonitor`
- Method: `GET`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/productBrand`
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
| `code` | number | 响应状态码,200=成功(外层统一包装,本调用未直接读取)(待人工确认) | - |
| `desc` | string | 响应提示信息(外层统一包装,本调用未直接读取)(待人工确认) | - |
| `obj[]` | array | 商品品牌列表(前端赋值给 brandOptions 作为下拉选项数据源) | - |
| `obj[][0]` | string | 品牌ID(模板 :key="item.id" 用作选项唯一标识) | - |
| `obj[][1]` | string | 品牌名称(模板 :label="item.brandName" 展示文本, :value="item.brandName" 选中值) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
