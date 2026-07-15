# mbs ars erpmonitor-get-yesterday-wish-account

昨日wish放款额度查询：财务看板初始化时调用，查询 payoneer 接口提供的 wish 店铺昨日可放款总额，前端直接渲染到看板「昨日wish放款额度」卡片(#WishAccount)。无请求参数。

## 用法

```bash
mbs ars erpmonitor-get-yesterday-wish-account
```

## API

- Service: `erpmonitor`
- Method: `GET`
- Path: `/erpmonitor/erpmonitor/accountStatementMonitor/getYesterdayWishAccount`
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
| `code` | number | 响应状态码,200=成功(统一响应包装) | - |
| `desc` | string | 响应提示信息(统一响应包装) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.WishAccount` | string | 昨日wish放款额度(payoneer接口提供的wish店铺可放款总额，前端直接 html 渲染到 #WishAccount，单位:元/￥) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
