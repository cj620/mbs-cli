# mbs ars erpmonitor-getlogin-info

获取登录用户信息：页面加载后拉取当前登录用户的基础信息，前端仅取用其中的 obj.manageShopIds（当前用户可管理的店铺ID集合），用于后续店铺列表查询/过滤。请求无入参，返回统一响应体。

## 用法

```bash
mbs ars erpmonitor-getlogin-info
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/getloginInfo`
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
| `code` | number | 响应状态码，200=成功；601=未登录/登录失效(待人工确认本接口是否返回) | - |
| `desc` | string | 响应提示信息（统一约定字段）(待人工确认本接口是否返回) | - |
| `obj` | object | 业务数据对象（登录用户信息） | - |
| `obj.manageShopIds` | string | 当前登录用户可管理的店铺ID集合（成功回调中作为入参传入 findEditorShop(data.obj.manageShopIds)，用于按可管理店铺过滤/查询；具体为逗号拼接字符串或数组 待人工确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
