# mbs prm erpsoldout-get-info-submit

SKU侵权平台信息查询(getInfoSubmit)：SKU详情页加载时查询该SKU的侵权平台提示信息，后端返回以英文分号';'拼接的侵权平台字符串，前端按';'拆分后逐条以红色文字渲染到#totarplat区域，用于提示运营该SKU在哪些平台存在侵权风险。

## 用法

```bash
mbs prm erpsoldout-get-info-submit --sku <string>
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/getInfoSubmit`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | 商品SKU编码。来源：当前SKU详情页URL查询参数SKU(GetQueryString('SKU'))；通过?sku=拼接到接口地址。用于定位要查询侵权平台信息的SKU。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(框架统一字段,本回调未显式判断)(待人工确认) | - |
| `desc` | string | 响应提示信息(框架统一字段,本回调未使用)(待人工确认) | - |
| `obj` | string | 该SKU的侵权平台信息字符串,以英文分号';'拼接多个平台;前端split(';')后得到objs数组,逐条以红色文字渲染至#totarplat(模板totarplatTemplate)。obj为空/无值时不渲染。 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
