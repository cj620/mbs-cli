# mbs pim erp-product-query-shopee-tort-words

查询Shopee拦截关键词(侵权词)：Shopee商品刊登页面点击「拦截关键词」按钮时调用，无入参，返回当前Shopee平台的全部拦截/侵权关键词字符串列表，前端在 #shopeeWordModal 弹窗内用 art-template 模板 shopeeWordTemplate 遍历 obj 渲染为关键词标签。

## 用法

```bash
mbs pim erp-product-query-shopee-tort-words
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeProductPublish/queryShopeeTortWords`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | Shopee拦截/侵权关键词列表,元素为关键词字符串;前端遍历渲染为<li>标签 | - |
| `obj[]` | string | 单个拦截/侵权关键词文本(模板变量v,直接展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
