# mbs fars erpaccount-last-logininfo

上次登录信息查询：仪表盘(common.html)加载后由 getmessageconfig() 成功回调触发 lastLogininfo()，GET 查询当前登录用户的上次登录信息（登录人、提示文案、IP、时间及提示级别），渲染到顶部告警条 #lastLogininfo，5秒后自动收起。无请求参数。

## 用法

```bash
mbs fars erpaccount-last-logininfo
```

## API

- Service: `erpaccount`
- Method: `GET`
- Path: `/erpaccount/erpaccount/dashboard/lastLogininfo`
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
| `code` | number | 响应状态码,200=成功（统一响应外壳；本回调未显式判断，待人工确认） | - |
| `desc` | string | 响应提示信息（统一响应外壳，待人工确认） | - |
| `obj` | object | 上次登录信息对象（成功回调取 res.obj 渲染） | - |
| `obj.loginType` | number | 提示级别枚举：1=正常(绿色 success 提示);2=警告(黄色 warning 提示);3=危险(红色 danger 提示)。前端据此选择告警条样式 | - |
| `obj.loginName` | string | 登录人姓名（模板展示「{loginName}，您上次在…」） | - |
| `obj.warning` | string | 上次登录提示文案/地点描述（模板「您上次在{warning}」） | - |
| `obj.loginIp` | string | 上次登录 IP 地址（模板「IP:{loginIp}」） | - |
| `obj.loginTime` | string | 上次登录时间（模板「时间{loginTime}」） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
