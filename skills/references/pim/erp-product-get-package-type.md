<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-package-type

获取包装方式下拉选项：SKU 详情页初始化时调用，拉取全部包装方式字典项（ID + 名称），渲染到 #packageType 下拉框。无任何请求参数，返回包装方式列表，前端用 art-template 遍历生成 <option>；packageTypeId == 0 的项作为占位项并置为 disabled。

## 用法

```bash
mbs pim erp-product-get-package-type
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getPackageType`
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
| `code` | number | 响应状态码,200=成功(统一响应包装,模板未直接使用,待人工确认是否返回) | - |
| `desc` | string | 响应提示信息(统一响应包装,模板未直接使用,待人工确认是否返回) | - |
| `obj[]` | array | 包装方式列表 | - |
| `obj[][0]` | string | 包装方式ID(作为<option>的value;==0时为占位/请选择项并disabled) | - |
| `obj[][1]` | string | 包装方式名称(下拉显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
