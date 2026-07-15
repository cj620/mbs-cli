<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-no-sale-platform

平台禁限售政策列表查询：在「产品问题投诉」页面，当问题类型为“平台限售”且选择平台后，按平台名称查询该平台对应的禁限售（禁售）政策列表，返回字符串数组用于「禁售政策」下拉框选项。

## 用法

```bash
mbs oms erp-order-no-sale-platform --platformName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/noSalePlatform`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformName` | platformName | query | string | 是 | - | 平台名称（URL 查询参数）。来源：平台下拉框选中项的 PLATFORMNAME（经 platchange() 赋给 platFormname 后传入 gatnosaleplat）。取值由 /erpOrder/erpOrder/saleReport/getPlatformList 返回的 PLATFORMNAME 决定，常见如 Amazon/ebay/Wish/aliexpress/TikTok/Walmart 等。空或 null 时前端不发起请求。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（统一响应包字段；本调用未显式校验） | - |
| `desc` | string | 响应提示信息（统一响应包字段；本调用未显式使用） | - |
| `obj[]` | array | 禁限售（禁售）政策名称列表，字符串数组，赋给 nosalelist | - |
| `obj[]` | string | 数组元素：单条禁限售政策名称，直接作为下拉项 key/label/value 及显示文本（{{item}}） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
