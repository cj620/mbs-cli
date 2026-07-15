# mbs prm erp-publish-fin-tiktok-first-category

查询TikTok一级分类：TikTok 自动刊登页加载时调用，获取 TikTok 全部一级分类名称列表，用于渲染页面「TikTok一级分类」筛选下拉框(#tiktokFirstCategory)。请求体为空对象，不需要任何入参；返回值 obj 为分类名称字符串数组。

## 用法

```bash
mbs prm erp-publish-fin-tiktok-first-category
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/tiktokProductController/finTiktokFirstCategory`
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
| `code` | number | 响应状态码,200=成功（ERP统一响应外壳，待人工确认） | - |
| `desc` | string | 响应提示信息（ERP统一响应外壳，待人工确认） | - |
| `obj[]` | array | TikTok一级分类名称列表（字符串数组，前端 data.obj.map 遍历使用） | - |
| `obj[]` | string | 单个 TikTok 一级分类名称（数组元素为字符串，前端转为 {name:item} 渲染为下拉 option 的 value 与文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
