# mbs oms erp-order-get-shop-select

新人成绩单-店铺下拉查询：为「新人成绩单(营销新人详情)」页面的店铺多选下拉框提供数据源：无入参，返回当前可选店铺列表(店铺ID + 店铺名称)，前端用 art-template 渲染为带「全选」的复选框列表。

## 用法

```bash
mbs oms erp-order-get-shop-select
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getShopSelect`
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
| `code` | number | 响应状态码,200=成功(平台统一包装,本页未显式判断) | - |
| `desc` | string | 响应提示信息(平台统一包装) | - |
| `obj[]` | array | 店铺列表(success 回调取 data.obj 渲染下拉) | - |
| `obj[][0]` | string | 店铺ID(复选框 value,作为提交时的店铺标识) | - |
| `obj[][1]` | string | 店铺名称(复选框 data-name 及展示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
