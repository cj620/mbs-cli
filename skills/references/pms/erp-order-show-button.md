# mbs pms erp-order-show-button

今日必做清零按钮显隐判断：客服工作台首页判断「保存今日清零结果」按钮是否显示：后端据当前登录人当日是否满足清零条件返回 obj=0/1，前端据此 show/hide 按钮。页面加载调用一次并每 30 秒轮询。

## 用法

```bash
mbs pms erp-order-show-button
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/dev/erpOrder/erpOrder/saleFussionOrder/showButton`
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
| `code` | number | 响应状态码，200=成功；非200前端alert「清零按钮接口出现错误」 | - |
| `desc` | string | 响应提示信息（统一响应体字段，本接口成功回调未使用）(待人工确认) | - |
| `obj` | number | 清零按钮显隐标志。1=显示「保存今日清零结果」按钮($('.getsure').show())；0=隐藏($('.getsure').hide()) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
