# mbs pim erp-product-get-big-cheif-by-spu

按SPU查询开发大酋长与开发员：产品问题投诉(侵权反馈)页面初始化时，根据当前 SPU 查询该商品对应的「开发大酋长」与「开发员」，并自动回填到页面只读输入框，供投诉任务匹配责任人使用。

## 用法

```bash
mbs pim erp-product-get-big-cheif-by-spu --spu <string>
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/infringement/getBigCheifBySpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | 商品SPU编号。来源=URL 查询参数 productid（GetQueryString('productid') 解析、按 %20 取最后一段）。查询主键，拼接在 URL ?spu= 后传递 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功；非200时前端弹出 desc 并终止后续处理 | - |
| `desc` | string | 响应提示/错误信息（失败时 alert(desc) 展示给用户） | - |
| `obj` | object | 业务数据对象，包含该 SPU 对应的开发负责人信息 | - |
| `obj.bigChief` | string | 开发大酋长（姓名/工号），回填到页面「开发大酋长」只读输入框 devchief | - |
| `obj.developer` | string | 开发员（姓名/工号），回填到页面「开发员」只读输入框 devleader | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
