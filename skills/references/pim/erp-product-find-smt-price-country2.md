<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-smt-price-country2

速卖通调价-国家(站点)列表查询：速卖通(SMT)批量调价页初始化时调用，查询可调价的国家/站点列表。前端不传任何请求参数，返回的列表用于渲染按 shipto 国家调价弹框中每个国家的+/-选择器与百分比/数值输入框(控件ID按 site 拼接)，并缓存到 conList 供生成调价信息时按国家组装 reviseParam。

## 用法

```bash
mbs pim erp-product-find-smt-price-country2
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/smtProductController/findSmtPriceCountry2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 国家(站点)列表，前端缓存为 conList 并渲染到 #shopToul | - |
| `obj[][0]` | string | 国家(站点)显示名称，渲染为每行 <span>{{v.country}}</span> 标签 | - |
| `obj[][1]` | string | 站点/国家代码，用于拼接控件ID(con{site} 选择器、inputval{site} 输入框)，并作为生成调价信息时 reviseParam 的按国家键 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
