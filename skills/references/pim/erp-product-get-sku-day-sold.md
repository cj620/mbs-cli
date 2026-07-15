<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-sku-day-sold

SKU每日销量查询(getSkuDaySold)：进入SKU详情页时，按当前SKU查询其各SID(子SKU/库存单元)的销量值，前端拼成 sid: reserve9 字符串后展示在"当日销量"区域(#skuDatSold)。

## 用法

```bash
mbs pim erp-product-get-sku-day-sold --sku <string>
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/productDetails/getSkuDaySold`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | SKU编号(query 参数)。来源：页面 URL 的 SKU 参数，经 GetQueryString("SKU") 取得后拼接到接口地址 ?sku= 之后 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端判断 data.code == 200 才渲染) | - |
| `desc` | string | 响应提示信息(统一返回结构字段，本接口未直接使用) | - |
| `obj[]` | array | SKU 各 SID 销量列表(前端 data.obj.map(...) 遍历，为空/假值则不渲染) | - |
| `obj[][0]` | string | SID(子SKU/库存单元标识)，拼接为展示文本前缀 | - |
| `obj[][1]` | number | 该SID对应的销量值(预留字段9，此处承载SKU日销量数值；具体口径"当日/日均销量"待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
