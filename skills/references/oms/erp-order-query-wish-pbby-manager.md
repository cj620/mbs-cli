# mbs oms erp-order-query-wish-pbby-manager

Wish推广(店长维度)活动查询：按店长(店铺经理)与时间区间查询其名下店铺的 Wish 商品推广(Product Boost)活动列表，返回各活动的店铺、活动ID/名称、起止时间、状态、成交额(GMV)、最大预算与期间消耗等；前端汇总各活动期间消耗(incrementFee)合计展示。

## 用法

```bash
mbs oms erp-order-query-wish-pbby-manager --shopmanager <string> --startTime <string> --endTime <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishProductBoost/QueryWishPBByManager`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopmanager` | shopmanager | body | string | 是 | - | 店长(店铺经理)名称。来源：URL 参数 shopmanager，经 decodeURI 解码 |
| `startTime` | startTime | body | string | 是 | - | 查询起始时间。来源：URL 参数 startTime |
| `endTime` | endTime | body | string | 是 | - | 查询结束时间。来源：URL 参数 endTime |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准响应包装,源码未直接引用,(待人工确认)) | - |
| `desc` | string | 响应提示信息(标准响应包装,源码未直接引用,(待人工确认)) | - |
| `obj` | object | 业务数据对象(success 回调取 data.obj) | - |
| `obj.list[]` | array | Wish 推广活动列表(success 回调 data.obj.list,模板 {{each list}} 渲染) | - |
| `obj.list[][0]` | string | 店铺名 | - |
| `obj.list[][1]` | string | 活动 ID | - |
| `obj.list[][2]` | string | 活动名称 | - |
| `obj.list[][3]` | string | 活动开始时间 | - |
| `obj.list[][4]` | string | 活动结束时间 | - |
| `obj.list[][5]` | string | 活动状态 | - |
| `obj.list[][6]` | number | 成交总额(GMV) | - |
| `obj.list[][7]` | number | 活动最大预算 | - |
| `obj.list[][8]` | number | 期间消耗(回调中若为空置 0,并累加 toFixed(2) 汇总展示) | - |
| `obj.list[][9]` | number | SPU总成交额(模板中已注释,当前未展示) | - |
| `obj.list[][10]` | number | 当前消耗(模板中已注释,当前未展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
