<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-sku

获取速卖通(SMT)托管内容选项：SKU详情页“申请备货/上架”弹窗中，选择速卖通(smt1/aliexpress)平台时，根据当前 SKU 拉取该平台可选的托管内容选项列表(返回字符串数组)，前端用于渲染“适用内容”下拉选项(value 与 label 同值)。

## 用法

```bash
mbs pim erp-product-sku
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/getSmtTuoGuan/{SKU}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sKU` | SKU | path | string | 是 | - | 商品SKU编号(路径变量,拼接于 URL 末尾 /getSmtTuoGuan/{SKU});来源:当前页面地址栏查询参数 SKU,经 GetQueryString('SKU') 取得 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj[]` | array | 速卖通(SMT)托管内容选项列表 | - |
| `obj[]` | string | 单个托管内容选项文本(数组元素,前端映射为 {value:该值,label:该值} 作为“适用内容”下拉项;具体枚举由后端返回(待人工确认具体取值集合)) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
