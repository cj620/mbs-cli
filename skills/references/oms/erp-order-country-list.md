<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-country-list

借用运单号-国家列表查询：借用运单号(Vova借单)页面加载时调用，获取可借用运单号的国家列表，用于目的国家选择/展示。前端在页面初始化 countryList() 中以 GET 无参方式请求，成功后通过 art-template 模板 countryListTemplate 渲染。

## 用法

```bash
mbs oms erp-order-country-list
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/borrowingNo/countryList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
