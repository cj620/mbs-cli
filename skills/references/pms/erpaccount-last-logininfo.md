<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erpaccount-last-logininfo

上次登录信息查询：客服工作台首页加载时查询当前登录用户的“上次登录信息”，用于在页面顶部弹出安全提醒条（不同 loginType 对应 成功/警告/危险 三种样式），5 秒后自动收起。

## 用法

```bash
mbs pms erpaccount-last-logininfo
```

## API

- Service: `erpaccount`
- Method: `GET`
- Path: `/dev/erpaccount/erpaccount/dashboard/lastLogininfo`
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
| `code` | number | 响应状态码,200=成功（通用响应封装，本回调未使用）(待人工确认) | - |
| `desc` | string | 响应提示信息（通用响应封装，本回调未使用）(待人工确认) | - |
| `obj` | object | 上次登录信息对象（success 回调取 res.obj 渲染模板；为 null 时不展示） | - |
| `obj.loginType` | number | 登录提醒类型（模板据此选样式）。1=成功(绿色 background-success);2=警告(黄色 background-warning);3=危险(红色 background-danger) | - |
| `obj.loginName` | string | 登录用户名（提示语开头“{loginName}，您上次在…”） | - |
| `obj.warning` | string | 上次登录情况/告警描述文案（拼接于“您上次在{warning}”） | - |
| `obj.loginIp` | string | 上次登录 IP 地址（展示“IP:{loginIp}”） | - |
| `obj.loginTime` | string | 上次登录时间（展示“时间{loginTime}”） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
