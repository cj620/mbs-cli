# mbs pim erp-product-site

获取大类目(Excel模板)列表：亚马逊自动刊登确认页，点击/批量修改大类时，按当前SPU所在站点(site)拉取该站点下可选的Excel模板(大类)列表，用于填充 #bigCategorySelect 下拉，选项展示为"模板名 > 产品类型"，选中后用 templateId/productType 修改大类。

## 用法

```bash
mbs pim erp-product-site
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getExcelTemplate/{site}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `site` | site | path | string | 是 | - | 站点代号(URL路径变量)。来源 baseData.site：单个改大类取 td[data-site]，批量取选中行 site(要求同站点)。取值如 US/CA/ES/FR/IT/MX/DE/UK/JP/AU/NL |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 大类(Excel模板)列表;前端据此渲染 #bigCategorySelect 下拉 | - |
| `obj[][0]` | number | Excel模板ID(大类ID)。作为下拉 option 的 value;确认改大类时作为 templateId 提交 | - |
| `obj[][1]` | string | Excel模板名称(大类名称);下拉文本前半段 {excelTemplateName} > {productType} | - |
| `obj[][2]` | string | 产品类型(亚马逊 productType);下拉文本后半段,确认时由 text.split(" > ")[1] 取出作为 productType 提交 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
