<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-publish-shop-smt-product-controller

查询自动刊登店铺列表（含刊登汇总）：SMT(速卖通)自动刊登页面初始化时调用：返回当前用户头像、刊登成功/待刊登汇总数，以及该用户名下全部店铺列表（每店铺含店铺名与刊登成功数）。前端据此渲染左侧店铺导航树及顶部店铺下拉框，并触发昨日汇总查询。无请求参数，依赖登录会话。

## 用法

```bash
mbs pim erp-product-find-publish-shop-smt-product-controller
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/smtProductController/findPublishShop`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(为空则前端不渲染) | - |
| `obj.avatar` | string | 当前用户头像URL(非空时写入#userimg的src) | - |
| `obj.successnum` | number | 刊登成功总数(写入#successnum) | - |
| `obj.waitnum` | number | 待刊登(等待刊登)总数(写入#waitnum) | - |
| `obj.shopnames[]` | array | 当前用户名下店铺列表(用于店铺导航树与店铺下拉框) | - |
| `obj.shopnames[][0]` | string | 店铺名称(作为下拉option的value与文本,并作为后续按店铺查询的key) | - |
| `obj.shopnames[][1]` | number | 该店铺刊登成功数(导航树中绿色括号展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
