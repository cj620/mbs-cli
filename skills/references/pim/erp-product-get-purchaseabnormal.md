<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-purchaseabnormal

SKU采购异常统计查询：SKU详情页加载时调用，查询该SKU近60天的采购收货异常统计：少发、多发、漏发、错发、正常各类型的数量及其占总数比例，渲染到“查看采购单”旁的标签区(#infoContent)。

## 用法

```bash
mbs pim erp-product-get-purchaseabnormal --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getPurchaseabnormal`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | 商品SKU编号，查询该SKU近60天采购异常统计(URL查询参数,来源 GetQueryString('SKU')) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 采购异常统计对象(为空则不渲染) | - |
| `obj.lessnum` | number | 少发数量(近60天)；<=0 显示灰色标签,否则红色告警标签 | - |
| `obj.lessnumOfTotal` | string | 少发占总数比例(展示在括号内) | - |
| `obj.majority` | number | 多发数量(近60天)；<=0 灰色标签,否则红色告警标签 | - |
| `obj.majorityOfTotal` | string | 多发占总数比例(展示在括号内) | - |
| `obj.missout` | number | 漏发数量(近60天)；<=0 灰色标签,否则红色告警标签 | - |
| `obj.missoutOfTotal` | string | 漏发占总数比例(展示在括号内) | - |
| `obj.errornum` | number | 错发数量(近60天)；<=0 灰色标签,否则红色告警标签 | - |
| `obj.errornumOfTotal` | string | 错发占总数比例(展示在括号内) | - |
| `obj.normal` | number | 正常数量(近60天) | - |
| `obj.normalOfTotal` | string | 正常占总数比例(展示在括号内) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
