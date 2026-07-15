<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-find-manufacture

供应商列表查询(含名下SKU订单)：移动端「供应商管理」页面，根据供应商名称关键词分页查询供应商列表，每个供应商下挂其相关 SKU 的商品(图片/名称/SKU/总笔数/总金额)，并返回当前用户头像地址。支持「加载更多」翻页。

## 用法

```bash
mbs oms erp-mobile-find-manufacture --currentPage <number> [--name <string>]
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/shoeController/findManufacture`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码(从1开始)。首次/搜索时为1，「加载更多」时 currentPage++，来源全局变量 currentPage |
| `name` | name | body | string | 否 | - | 供应商名称搜索关键词，来源搜索控件 #keyword 输入值(首次自动加载时为空) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(平台标准包装字段，待人工确认) | - |
| `desc` | string | 响应提示信息(平台标准包装字段，待人工确认) | - |
| `obj` | object | 业务数据对象(前端 if(data.obj) 判空) | - |
| `obj.rows[]` | array | 供应商列表(前端 list.concat(data.obj.rows) 累加) | - |
| `obj.rows[][0]` | string | 供应商名称(模板 {{v.name}}，折叠项标题) | - |
| `obj.rows[][1][]` | array | 该供应商名下 SKU 商品列表(模板 {{each v.list item j}}) | - |
| `obj.rows[][1][][0]` | string | 商品图片URL(模板 {{item.image}}，加载失败回退默认图) | - |
| `obj.rows[][1][][1]` | string | SKU 商品名称(模板 {{item.skuname}}) | - |
| `obj.rows[][1][][2]` | string | SKU 编号(模板 {{item.sku}}) | - |
| `obj.rows[][1][][3]` | number | 总笔数(模板 {{item.ordernum}}，有值才显示) | - |
| `obj.rows[][1][][4]` | number | 总金额(模板 {{item.amount}}，有值才显示) | - |
| `obj.totalPages` | number | 总页数(前端 currentPage == data.obj.totalPages 判断是否到末页) | - |
| `content` | string | 当前用户头像URL(前端写入 #photos 的 src，无值则用默认头像) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
