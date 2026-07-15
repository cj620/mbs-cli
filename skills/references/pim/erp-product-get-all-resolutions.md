# mbs pim erp-product-get-all-resolutions

获取全部售后处理方案(文案)列表：拉取后端预置的售后问题处理方案文案列表，前端用于售后问题处理弹窗(developMarkModal)中处理方案下拉框(#selectedText)选项渲染；默认把列表第一项的 description 填入处理方案输入框(#markInput)。

## 用法

```bash
mbs pim erp-product-get-all-resolutions
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/getAllResolutions`
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
| `obj[]` | array | 售后处理方案(文案)列表,前端赋值给 list 并遍历渲染下拉选项 | - |
| `obj[]` | string | 处理方案文案内容(下拉 option 的 value 与显示文本;默认取 list[0].description 填入处理方案输入框 #markInput) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
