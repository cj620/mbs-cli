<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-forbid-sku-list

拦截SKU列表查询(forbidSkuList)：eBay 批量刊登页「拦截SKU」弹框的分页列表查询。打开拦截SKU弹框、翻页、以及按 SKU 模糊搜索均调用本接口，返回被拦截 SKU 列表(SKU编号/拦截站点范围/提交人/提交时间)及分页汇总。

## 用法

```bash
mbs pim erp-product-forbid-sku-list [--currentPage <number>] [--pageSize <number>] [--sku <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productPublish/forbidSkuList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 否 | - | 当前页码。初始固定传1；翻页时取分页组件 api.getCurrent()。来源控件：分页组件 .M-box。(模糊搜索分支不传) |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数，前端固定传10。(模糊搜索分支不传) |
| `sku` | sku | body | string | 否 | - | 按SKU模糊查询关键词。来源控件：搜索输入框 .searchSKUs。(初始加载/翻页分支不传) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.total` | number | 满足条件的拦截SKU总条数(前端写入 #totale 展示) | - |
| `obj.totalPages` | number | 总页数(前端传给 findEbayPage 初始化分页 pageCount) | - |
| `obj.rows[]` | array | 拦截SKU列表行(前端取 res.obj.rows 作为 list 渲染 #ebayTemplate) | - |
| `obj.rows[][0]` | number | 序号/记录ID(模板「序号」列) | - |
| `obj.rows[][1]` | string | SKU编号(模板「SKU编号」列；删除拦截 deleteForbitList 取该sku) | - |
| `obj.rows[][2]` | string | 拦截范围(eBay站点，多站点逗号拼接，如 Australia,UK,US,Germany,France 等) | - |
| `obj.rows[][3]` | string | 提交人(模板「提交人」列) | - |
| `obj.rows[][4]` | string | 提交时间(模板「提交时间」列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
