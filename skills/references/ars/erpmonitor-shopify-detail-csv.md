# mbs ars erpmonitor-shopify-detail-csv

Shopify商品详情文件上传(shopifyDetailCsv)：在"文件批量刊登"页面选择本地文件(Excel/CSV)后自动上传，用于按所选刊登店铺导入Shopify商品详情/刊登数据；以 multipart/form-data 携带文件，店铺名以 URL 查询参数 shopName 传入。上传完成后前端弹窗展示返回提示语(desc)并刷新刊登中列表。

## 用法

```bash
mbs ars erpmonitor-shopify-detail-csv [--shopName <string>] --file <unknown>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/shopifyConventSku/shopifyDetailCsv`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 否 | - | 刊登店铺名称，取自多选下拉 #shopName 的选中值，多选以英文逗号拼接，未选择传空；作为 URL 查询参数传入 |
| `file` | file | body | unknown | 是 | - | 上传的商品详情文件(Excel/CSV)，来源文件选择控件 #files(<input type=file name=file multiple>)，以 multipart/form-data 上传，表单字段名 file |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(见注释回调 if (data.code == 200)) | - |
| `desc` | string | 结果提示信息，前端弹窗 #tishi 直接展示($('#tishi').html(data.desc)) | - |
| `obj` | string | 处理结果对象；注释回调中作为导出文件下载地址使用(var url = data.obj)，正式回调未启用，具体结构(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
