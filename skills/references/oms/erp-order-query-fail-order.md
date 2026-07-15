# mbs oms erp-order-query-fail-order

失败订单查询：按订单下载/导入时间区间分页查询导入 ODO 系统失败的订单列表，返回失败订单的订单号、错误信息、下载时间、导入时间及分页汇总信息（总数、总页数）。

## 用法

```bash
mbs oms erp-order-query-fail-order [--startTime <string>] [--endTime <string>] --currPage <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/Odo/queryFailOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `startTime` | startTime | body | string | 否 | - | 开始时间(订单下载/导入起始时间)，来源控件 #starttime2(input type=date)，格式 yyyy-MM-dd |
| `endTime` | endTime | body | string | 否 | - | 结束时间(订单下载/导入结束时间)，来源控件 #endtime2(input type=date)，格式 yyyy-MM-dd；前端校验开始时间不可大于结束时间 |
| `currPage` | currPage | body | number | 是 | - | 当前页码，首次查询固定为 1，分页时取分页控件 api.getCurrent()，每页固定 50 条 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(标准响应码，本页成功回调未直接使用) | - |
| `desc` | string | 响应提示信息(标准响应字段，本页未直接使用)(待人工确认) | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.total` | number | 满足条件的失败订单总数(渲染至 #total) | - |
| `obj.pages` | number | 总页数(传入分页控件 pageCount) | - |
| `obj.list[]` | array | 失败订单列表 | - |
| `obj.list[][0]` | string | 订单ID(订单号) | - |
| `obj.list[][1]` | string | 错误信息(导入失败原因) | - |
| `obj.list[][2]` | string | 订单下载时间 | - |
| `obj.list[][3]` | string | 订单导入ODO系统时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
