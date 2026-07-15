<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-country-from-es

获取发货地(国家)下拉列表：热销商品监控(店铺热销商品)页面初始化时调用，从 ES 中查询全部可选发货地(国家)列表，用于填充页面顶部筛选区 #countryFrome 多选下拉框。无任何请求参数，返回国家集合。

## 用法

```bash
mbs ars erpmonitor-get-country-from-es
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/getCountryFromEs`
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
| `code` | number | 响应状态码,200=成功(统一返回包装,模板未直接消费) | - |
| `desc` | string | 响应提示信息(统一返回包装,模板未直接消费) | - |
| `obj[]` | array | 发货地(国家)列表,模板 {{each obj value i}} 遍历生成下拉项 | - |
| `obj[]` | string | 发货地(国家),作为 <option> 的 value 与显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
