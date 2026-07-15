<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-category-select

类目全类搜索(下拉联想)：商品类目管理页顶部「全类搜索」输入框的远程联想接口：用户输入类目名称关键词(防抖500ms)后，按关键词模糊匹配返回类目候选列表，供 el-select 下拉展示；选中后用于回填面包屑层级并跳转加载该类目的数据。

## 用法

```bash
mbs pim erp-product-get-category-select --keyword <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/categoryController/getCategorySelect`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `keyword` | keyword | body | string | 是 | - | 类目名称搜索关键词(URL查询参数)。来源全类搜索 el-select 输入框，为空不发请求，输入后防抖500ms拼到URL |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 类目候选列表；为空则前端不更新下拉 | - |
| `obj[][0]` | number | 类目ID(下拉:key，唯一标识) | - |
| `obj[][1]` | string | 类目显示名称(下拉label与展示文本，通常为各级类目名拼接的完整路径) | - |
| `obj[][2]` | string | 类目名称(选中后赋给 dataPage.catName 作为子类搜索条件) | - |
| `obj[][3]` | number | 类目层级(选中后用于 getData 加载对应层级) | - |
| `obj[][4]` | string | 父类目ID(选中后传入 getData 作为 parentId) | - |
| `obj[][5]` | string | 一级类目ID(用于回填面包屑 breadLIst) | - |
| `obj[][6]` | string | 二级类目ID(用于回填面包屑 breadLIst) | - |
| `obj[][7]` | string | 三级类目ID(用于回填面包屑 breadLIst) | - |
| `obj[][8]` | string | 一级类目名称(面包屑显示) | - |
| `obj[][9]` | string | 二级类目名称(面包屑显示) | - |
| `obj[][10]` | string | 三级类目名称(面包屑显示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
