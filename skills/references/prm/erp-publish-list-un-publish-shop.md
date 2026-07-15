<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erp-publish-list-un-publish-shop

查询未刊登过的店铺列表(Joom)：进入 Joom 批量刊登页或切换到「等待刊登」标签时，在 search() 成功回调内调用，拉取当前用户「未刊登过」的 Joom 店铺列表，用于渲染 #shopName 店铺下拉框。该接口不携带任何请求参数。

## 用法

```bash
mbs prm erp-publish-list-un-publish-shop
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/joomProductPublish/listUnPublishShop`
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
| `code` | number | 响应状态码,200=成功(前端以 data.code==200 判定) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 未刊登过的店铺列表(渲染进 #shopName 下拉框) | - |
| `obj[][0]` | string | Joom 店铺ID(作为 option value 前段,shopId) | - |
| `obj[][1]` | string | Joom 店铺名称(下拉显示文本,option value 后段 shopName) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
