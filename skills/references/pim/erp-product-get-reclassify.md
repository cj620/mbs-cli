# mbs pim erp-product-get-reclassify

获取子分类(店长)列表：移动端搜索页"店长"下拉的联动查询接口：当用户在"平台(父目录)"复选框中勾选某一项时，以该项的 sequenceid 作为 primaryCateId，查询其下属的子分类(店长)列表，用于渲染"店长"复选框组，并把每项的 sequenceid 收集到 childAll 作为默认子目录候选。

## 用法

```bash
mbs pim erp-product-get-reclassify --primaryCateId <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getReclassify`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `primaryCateId` | primaryCateId | query | string | 是 | - | 父级分类ID（平台/父目录的 sequenceid），来源平台复选框 getPrimarys 的选中值，经 URL Query 传递 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码（统一返回包裹字段，前端本调用未显式读取，待人工确认） | - |
| `desc` | string | 响应提示信息（统一返回包裹字段，前端本调用未显式读取，待人工确认） | - |
| `obj[]` | array | 子分类(店长)列表，前端遍历渲染复选框组并收集 sequenceid | - |
| `obj[][0]` | string | 子分类(店长)名称，渲染为复选框 label 文本 | - |
| `obj[][1]` | number | 子分类(店长)序号ID，渲染为复选框 value，并 push 进 childAll 作为默认子目录候选 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
