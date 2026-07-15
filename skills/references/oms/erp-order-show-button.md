<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-show-button

今日必做清零按钮是否显示：管理者驾驶舱(看板)加载后，查询当前登录人是否具备「今日必做清零」按钮显示权限/条件，返回 1 显示、0 隐藏，用于控制页面 .getsure(保存今日清零结果按钮及提示语)的显隐。

## 用法

```bash
mbs oms erp-order-show-button
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/showButton`
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
| `code` | number | 响应状态码,200=成功;非200前端alert("清零按钮接口出现错误") | - |
| `desc` | string | 响应提示/错误信息(标准包裹字段,本回调未直接读取)(待人工确认) | - |
| `obj` | number | 清零按钮显隐标志。1=显示(.getsure show());0=隐藏(.getsure hide()) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
