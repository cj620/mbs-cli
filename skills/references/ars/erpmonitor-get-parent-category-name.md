# mbs ars erpmonitor-get-parent-category-name

调价/不调价分类(父类目名称)查询：亚马逊价格调整页面初始化时调用：拉取父级类目名称列表，分别渲染到「不调价分类(adjustNoTemplate)」与「调价分类(adjustDoTemplate)」两个复选框下拉中，供生成提价商品信息时选择。无请求参数，响应为类目名称字符串数组。

## 用法

```bash
mbs ars erpmonitor-get-parent-category-name
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/amaoznRevisepriceConfirm/getParentCategoryName`
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
| `success` | boolean | 请求是否成功(前端 if (r.success) 判定，true 时才渲染分类列表) | - |
| `obj[]` | array | 父类目名称列表(字符串数组)，赋值给 pData.shopList 并渲染为两个分类下拉 | - |
| `obj[]` | string | 数组元素——单个父类目名称(模板中作为复选框 value 与显示文本 {{item}}) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
