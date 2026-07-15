<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erp-task-get-product-illegal

违规产品列表查询：已完成商品看板"违规产品"页签的分页列表查询：按当前页码/每页条数、审核状态(待处理/已完成)及角色(经理·总监/普通)拉取违规(被举报)商品列表，返回商品信息、开发人/创建人、销量(7/30/90)、毛利率/退款率、举报类型/原因/图片、处理结果等字段，供 productsTemplate 渲染。

## 用法

```bash
mbs pms erp-task-get-product-illegal --page <number> --pageSize <number> [--checkStatus <string>] [--role <number>]
```

## API

- Service: `erpTask`
- Method: `POST`
- Path: `/erpTask/erpTask/developMustDo/getProductIllegal`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码。首屏固定 1，分页回调取 api.getCurrent() |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定传 10 |
| `checkStatus` | checkStatus | body | string | 否 | - | 审核状态。取自页面下拉 #checkStatus：1=待处理；2=已完成 |
| `role` | role | body | number | 否 | - | 角色标识。getoper() 的 obj 为"产品部-经理"或"产品部-总监"时=2，否则=1 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 违规商品总数(前端写入 #productstotal/#productspan/#productspan1) | - |
| `obj.countPage` | number | 总页数(用于分页控件 pageCount) | - |
| `obj.result[]` | array | 违规(被举报)商品列表 | - |
| `obj.result[][0]` | string | 商品主图 URL(加载失败回退默认图) | - |
| `obj.result[][1]` | string | 商品 SKU/ID(链接 SKUdetails.html?SKU=) | - |
| `obj.result[][2]` | string | 商品名称 | - |
| `obj.result[][3]` | string | 开发人员 | - |
| `obj.result[][4]` | string | 开发时间 | - |
| `obj.result[][5]` | string | 商品属性 | - |
| `obj.result[][6]` | string | 销量等级枚举:超爆/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品(前端据此显示不同颜色标签) | - |
| `obj.result[][7]` | number | 近7天销量 | - |
| `obj.result[][8]` | number | 近30天销量 | - |
| `obj.result[][9]` | number | 近90天销量 | - |
| `obj.result[][10]` | number | 毛利率(前端直接拼接 % 展示) | - |
| `obj.result[][11]` | number | 退款率(前端直接拼接 % 展示) | - |
| `obj.result[][12]` | string | 创建人 | - |
| `obj.result[][13]` | string | 创建时间 | - |
| `obj.result[][14]` | string | 举报类型 | - |
| `obj.result[][15]` | string | 举报名称/违规名称(WG69 时提示重量亏损专用文案) | - |
| `obj.result[][16]` | string | 举报的 itemId/asin(为 null 时展示空) | - |
| `obj.result[][17][]` | array | 举报图片 URL 数组(逐张渲染为可点击缩略图) | - |
| `obj.result[][18]` | string | 处理结果/备注(有值时经理可"经理确认") | - |
| `obj.result[][19]` | string | 审核备注(待处理且无 remarks 时展示) | - |
| `obj.result[][20]` | number | 序号ID(用于"售后问题处理"弹窗 developMarkModal) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
