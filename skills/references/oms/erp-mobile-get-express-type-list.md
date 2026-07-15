# mbs oms erp-mobile-get-express-type-list

物流方式列表查询：移动端「修改物流」页面进入时自动调用，查询可选的物流方式（快递类型）列表，用于渲染单选列表供用户选择并修改订单物流方式。无请求参数，返回物流方式数组（含ID与名称）。

## 用法

```bash
mbs oms erp-mobile-get-express-type-list
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/pushController/getExpressTypeList`
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
| `code` | number | 响应状态码，200=成功（统一包裹字段） | - |
| `desc` | string | 响应提示信息（统一包裹字段） | - |
| `obj[]` | array | 物流方式列表（前端 data.obj，存在则渲染模板） | - |
| `obj[][0]` | string | 物流方式ID（点击回填为 typeid，确定时作为 expressTypeid 提交） | - |
| `obj[][1]` | string | 物流方式名称（列表展示文本；确定时作为 expressType 提交） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
