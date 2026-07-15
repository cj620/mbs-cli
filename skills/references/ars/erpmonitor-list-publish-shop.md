# mbs ars erpmonitor-list-publish-shop

查询Allegro可刊登店铺列表：Allegro商品刊登导入页初始化时调用，获取当前用户可选的Allegro店铺列表，用于填充「导入」弹窗中的「选择店铺」下拉框(#shopName)。POST无请求体，返回店铺ID与店铺名称集合。

## 用法

```bash
mbs ars erpmonitor-list-publish-shop
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/allegroProductPublish/listPublishShop`
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
| `code` | number | 响应状态码,200=成功(通用响应体字段,待人工确认) | - |
| `desc` | string | 响应提示信息(通用响应体字段,待人工确认) | - |
| `obj[]` | array | 业务数据-Allegro店铺列表(前端 data.obj 作为 list 遍历) | - |
| `obj[][0]` | string | Allegro店铺ID(作为下拉 option 的 value,提交刊登时传给 shopName) | - |
| `obj[][1]` | string | Allegro店铺名称(下拉 option 的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
