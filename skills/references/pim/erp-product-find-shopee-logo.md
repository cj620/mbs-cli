<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-shopee-logo

查询Shopee水印(Logo)样式列表：打开"设置自动刊登参数"弹窗时调用，查询当前可选的Shopee水印(Logo)样式列表，用于渲染"水印样式"下拉，供刊登时为图片加水印选择样式。无请求参数。

## 用法

```bash
mbs pim erp-product-find-shopee-logo
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/shopeeProductPublish/findShopeeLogo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息（统一返回体字段，本接口前端未使用，(待人工确认)是否返回） | - |
| `obj[]` | array | 水印(Logo)样式列表 | - |
| `obj[][0]` | number | 水印样式编号（选中后写入 #chose_number，作为刊登参数提交；"随机"对应0） | - |
| `obj[][1]` | string | 水印样式名称（列表展示文字、选中后写入 #chose_input，并作 img title） | - |
| `obj[][2]` | string | 水印样式预览图URL（列表项缩略图 img src，width=90） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
