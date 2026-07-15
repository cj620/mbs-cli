# mbs ars erpmonitor-details-disabled-info

在线列表删除下架(detailsDisabledInfo)：在线列表(热销商品监控)页勾选listing后批量删除/下架;平台为Joom(85)或TikTok(120)时调用,提交选中listing整行对象数组,成功后弹出desc并刷新列表。

## 用法

```bash
mbs ars erpmonitor-details-disabled-info --root <array<unknown>>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/detailsDisabledInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `root` | [root] | body | array<unknown> | 是 | - | 请求体根节点:选中的待删除/下架listing对象数组(整行对象,JSON.stringify后提交) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(前端据此判断成功/失败) | - |
| `desc` | string | 响应提示信息(成功/失败均直接alert展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
