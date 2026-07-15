# mbs pim erp-product-find-spu-for-publish

查询待刊登SPU列表：ebay批量刊登页面加载时调用，查询当前用户已暂存/待刊登的SPU编号清单（无入参，按登录上下文查询），返回SPU字符串数组，前端用逗号拼接后回填到“ebay批量刊登”输入框(#batchsku)，供后续生成listing使用。

## 用法

```bash
mbs pim erp-product-find-spu-for-publish
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/findSpuForPublish`
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
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息（标准响应包字段，前端未直接使用）(待人工确认) | - |
| `obj[]` | array | 待刊登SPU编号列表，元素为字符串(SPU编号)；前端 obj.join(',') 拼接回填到批量刊登输入框 | - |
| `obj[]` | string | 数组元素：单个待刊登SPU编号 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
