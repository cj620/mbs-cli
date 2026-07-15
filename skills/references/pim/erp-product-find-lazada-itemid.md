<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-lazada-itemid

解析上传文件获取itemId：Lazada批量下架页「生成下架商品信息」弹窗中，用户选择本地文件并点击「上传」按钮后，以 multipart/form-data 上传文件，后端解析文件内容匹配出对应的 itemId 集合并返回（JSON字符串数组），前端解析后用逗号拼接回填到 itemId 文本框。

## 用法

```bash
mbs pim erp-product-find-lazada-itemid --file <unknown>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaExportController/findLazadaItemid`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `file` | file | body | unknown | 是 | - | 上传的文件（itemId 导入文件）。来源控件 #importBill 表单内 <input type='file' name='file' id='file'>；以 multipart/form-data 上传，后端据文件内容匹配 itemId 列表 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（统一返回结构） | - |
| `desc` | string | 响应提示信息（统一返回结构） | - |
| `obj` | string | 业务数据：itemId 数组的 JSON 字符串，前端 JSON.parse(data.obj) 解析为数组后使用 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
