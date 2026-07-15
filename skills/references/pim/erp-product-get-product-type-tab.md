# mbs pim erp-product-get-product-type-tab

亚马逊自动刊登-获取产品类型(类目)标签页：亚马逊自动刊登待确认页面顶部「类目标签栏」数据获取：按所选店铺(shopIds)与刊登状态(status)统计各产品类型(一级类目)的待处理数量，返回类目列表，前端用 categoryListTemplate 渲染为可点击的标签页(tab)，点击后按 productType/templateId 二次筛选列表。

## 用法

```bash
mbs pim erp-product-get-product-type-tab [--shopIds <array>] [--status <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getProductTypeTab`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopIds` | shopIds | body | array | 否 | - | 店铺标识列表；来源店铺多选控件 #shopNames 的选中值，searchByStatus 调用时传 [shop] 单店铺数组。元素为店铺名/店铺标识(string) |
| `status` | status | body | string | 否 | - | 刊登状态(在线结果)；来源刊登状态控件 #publishStatus(searchByStatus 的 str 参数)，为空字符串表示不限状态 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端据 r.code==200 判断) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 产品类型(类目)标签列表 | - |
| `obj[][0]` | string | 产品类型/类目名称(标签标题，title/category-name 展示，点击传入 typeSearch 作为 amazonCategoryName 二次筛选) | - |
| `obj[][1]` | number | 模板ID(标签唯一标识，渲染为 TAB_TOTAL_{templateId}，点击作为 tabId 传入 typeSearch) | - |
| `obj[][2]` | number | 该类目下的待刊登数量(标签 badge 展示) | - |
| `obj[][3]` | string | 一级类目名称(js 类目项默认结构字段，前端未直接渲染，(待人工确认)是否随接口返回) | - |
| `obj[][4]` | string | 一级类目ID(js 类目项默认结构字段，前端未直接渲染，(待人工确认)是否随接口返回) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
