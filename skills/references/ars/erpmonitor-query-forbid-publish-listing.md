# mbs ars erpmonitor-query-forbid-publish-listing

违禁/禁售刊登(重复铺货·重复标题)查询：根据上游列表得到的商品ID集合(itemId,逗号拼接)批量查询各商品的“重复铺货(repeateSpu)”与“重复标题(repeateTitle)”明细，返回每个商品对应的重复商品链接与ID，用于在列表行内渲染“重复铺货:[...] 重复标题:[...]”提示。

## 用法

```bash
mbs ars erpmonitor-query-forbid-publish-listing --itemId <string>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/queryForbidPublishListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `itemId` | itemId | body | string | 是 | - | 商品ID列表，多个以英文逗号拼接。来源：上游列表 data.obj.content[i].spuId → sessionStorage 'ids'。来源控件：无(程序自动组装) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(马帮通用响应包裹字段，本回调未直接使用) (待人工确认) | - |
| `desc` | string | 响应提示信息(马帮通用响应包裹字段，本回调未直接使用) (待人工确认) | - |
| `obj[]` | array | 业务数据数组，每个元素对应一个查询商品的重复信息 | - |
| `obj[][0]` | string | 商品ID(与请求传入的 itemId 对应，前端据此定位 #content<itemId> 容器) | - |
| `obj[][1][]` | array | 重复铺货列表(可能为 null；前端判空后遍历，渲染“重复铺货:[...]”) | - |
| `obj[][1][][0]` | string | 重复铺货商品链接URL(用于 <a href>) | - |
| `obj[][1][][1]` | string | 重复铺货商品ID(链接显示文本) | - |
| `obj[][2][]` | array | 重复标题列表(可能为 null；前端判空后遍历，渲染“重复标题:[...]”) | - |
| `obj[][2][][0]` | string | 重复标题商品链接URL(用于 <a href>) | - |
| `obj[][2][][1]` | string | 重复标题商品ID(链接显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
