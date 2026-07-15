<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-category-list-by-parent-id

根据父级分类名称查询下级分类列表：在「设置SMT043自动刊登参数」弹窗中，用户选择「马帮大类(一级分类)」后，前端以所选父级分类名称 + 层级数(固定2)调用本接口，联动查询并渲染下属「二级分类」下拉选项。

## 用法

```bash
mbs pim erp-product-find-category-list-by-parent-id --parentCategoryname <array> --levelnum <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/categoryController/findCategoryListByParentId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `parentCategoryname` | parentCategoryname | body | array | 是 | - | 父级分类名称。取自 #categoryName(马帮大类，多选 ySelect)所选值数组；若调用方传入实参 arr 则用 arr。用于按父级分类名称查询其下级分类 |
| `levelnum` | levelnum | body | number | 是 | - | 要查询的分类层级数，固定传 2(即查询二级分类) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(平台统一外壳字段，本调用未直接使用) | - |
| `desc` | string | 响应提示信息(平台统一外壳字段，本调用未直接使用) | - |
| `obj[]` | array | 下级分类(二级分类)列表，前端遍历渲染为下拉选项 | - |
| `obj[]` | string | 分类名称(二级分类名称)，作为 <option> 的 value 与显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
