# mbs pim erp-product-get-product-tort

商品SPU侵权信息查询：根据商品 SPU 与平台(固定 Walmart)查询该商品的侵权提示信息，前端将返回的 content 文本以告警条形式展示在限价/侵权提示组件中，用于刊登前提醒卖家避免侵权下架风险。

## 用法

```bash
mbs pim erp-product-get-product-tort --spu <string> --platform <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getProductTort`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 是 | - | 商品 SPU 编号，来源组件 props.spu，URL query 参数，无值则不发请求 |
| `platform` | platform | body | string | 是 | - | 平台标识，当前调用点硬编码为 Walmart，URL query 参数 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `content` | string | 侵权提示信息文本，有值时前端包成数组赋给 tortList 以告警条逐条展示（前端实际使用字段） | - |
| `code` | number | 响应状态码（平台统一响应封装字段，本调用点未消费）(待人工确认) | - |
| `desc` | string | 响应提示信息（平台统一响应封装字段，本调用点未消费）(待人工确认) | - |
| `success` | boolean | 业务是否成功（平台统一响应封装字段，本调用点未消费）(待人工确认) | - |
| `obj` | object | 业务数据对象（平台统一响应封装字段，本接口未在该调用点消费）(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
