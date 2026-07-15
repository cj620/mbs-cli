# mbs prm erp-publish-forbid-sku-list

拦截SKU列表查询：eBay批量刊登页"拦截SKU"弹窗的列表查询接口：分页查询已被拦截(禁止刊登)的SKU记录，支持按SKU模糊查询，返回拦截SKU清单(SKU、拦截站点/范围、提交人、提交时间)及分页汇总信息。

## 用法

```bash
mbs prm erp-publish-forbid-sku-list [--currentPage <number>] [--pageSize <number>] [--sku <string>]
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/productPublish/forbidSkuList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 否 | - | 当前页码(初始查询固定为1；分页回调取 api.getCurrent()) |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数(前端固定为10) |
| `sku` | sku | body | string | 否 | - | 拦截SKU模糊查询关键词(仅 searchSkuList() 按SKU查询时传入，来源输入框 .searchSKUs) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.total` | number | 拦截SKU总条数(渲染至 #totale) | - |
| `obj.totalPages` | number | 总页数(传入 findEbayPage 初始化分页控件) | - |
| `obj.rows[]` | array | 拦截SKU列表 | - |
| `obj.rows[][0]` | string | 拦截记录ID(删除时作为 span 元素id，调用 deleteForbitList) | - |
| `obj.rows[][1]` | string | 被拦截的SKU编码 | - |
| `obj.rows[][2]` | string | 拦截站点/范围(逗号分隔，取值如 Australia,Austria,Canada,eBayMotors,Ireland,Italy,Spain,Switzerland,UK,US,Germany,France) | - |
| `obj.rows[][3]` | string | 提交人(创建拦截记录的操作员) | - |
| `obj.rows[][4]` | string | 提交时间(拦截记录创建时间) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
