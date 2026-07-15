<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-get-position-id-by-oper

根据操作员获取岗位ID：移动端订单详情页加载时调用，无入参，返回当前登录操作员对应的岗位ID。前端取响应体 obj 字段赋给 window.positionId，供作废订单等操作校验。

## 用法

```bash
mbs oms erp-mobile-get-position-id-by-oper
```

## API

- Service: `erpMobile`
- Method: `GET`
- Path: `/erpMobile/erpMobile/pushController/getPositionIdByOper`
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
| `code` | number | 响应状态码,200=成功(信封字段,本接口success回调未读取) | - |
| `desc` | string | 响应提示信息(信封字段,本接口success回调未读取) | - |
| `obj` | string | 当前登录操作员对应的岗位ID(职位ID)。前端解构后赋给 window.positionId,供作废订单等操作校验,为空按null处理。标量类型为字符串/数值(具体类型待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
