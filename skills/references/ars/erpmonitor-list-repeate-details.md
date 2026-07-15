# mbs ars erpmonitor-list-repeate-details

重复铺货/重复标题详情查询：根据一批 SPU 商品ID(itemId,逗号拼接)批量查询每个 SPU 的重复铺货与重复标题明细，返回每个商品对应的重复 SPU 列表与重复标题列表(各含目标 itemId 与跳转 url)，用于店铺重复标题列表页的重复详情列渲染跳转链接。

## 用法

```bash
mbs ars erpmonitor-list-repeate-details --itemId <string>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/listRepeateDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `itemId` | itemId | body | string | 是 | - | SPU 商品ID列表，多个以英文逗号拼接的字符串；来源 sessionStorage['ids'](queryRepeatSpuTitleOfShop 返回的 content[i].spuId 集合) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(马帮标准响应外层字段,本页未直接使用,待人工确认) | - |
| `desc` | string | 响应提示信息(马帮标准响应外层字段,本页未直接使用,待人工确认) | - |
| `obj[]` | array | 业务数据数组,每元素为一个 SPU 的重复详情对象 | - |
| `obj[][0]` | string | SPU 商品ID(与请求 itemId 对应,前端据此定位单元格 #content{itemId}) | - |
| `obj[][1][]` | array | 重复铺货明细列表(可能为 null,前端判空后遍历) | - |
| `obj[][1][][0]` | string | 重复铺货的商品ID(渲染为链接文本) | - |
| `obj[][1][][1]` | string | 重复铺货商品的跳转URL(渲染为 <a href> 目标) | - |
| `obj[][2][]` | array | 重复标题明细列表(可能为 null,前端判空后遍历) | - |
| `obj[][2][][0]` | string | 重复标题的商品ID(渲染为链接文本) | - |
| `obj[][2][][1]` | string | 重复标题商品的跳转URL(渲染为 <a href> 目标) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
