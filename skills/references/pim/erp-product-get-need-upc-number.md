# mbs pim erp-product-get-need-upc-number

获取批量刊登所需UPC数量：亚马逊自动刊登确认列表中点击「批量UPC」时调用：把所有勾选的待刊登SPU行(每行携带 groupid)封装为 list 上送，后端按这些刊登组计算批量刊登所需补充的 UPC 总数，前端展示为「请填入 N 个UPC」的提示。

## 用法

```bash
mbs pim erp-product-get-need-upc-number --list <array<string>>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getNeedUpcNumber`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `list` | list | body | array<string> | 是 | - | 勾选的待刊登SPU行集合(批量UPC操作目标)，来源：列表中所有勾选复选框 name=overInput 的行 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(框架统一字段) | - |
| `desc` | string | 响应提示信息(框架统一字段) | - |
| `obj` | number | 批量刊登所需补充的UPC数量总计(前端渲染为「请填入 N 个UPC」) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
