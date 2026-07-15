<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-clearance

国内清仓商品管理-清仓商品列表查询：国内清仓商品管理页面列表查询接口：按清仓状态(草稿中/等待清仓/清仓中/清仓完成)分页查询清仓商品，支持按SKU、子目录、排序方式、进度(移仓/拍照/刊登)筛选，返回清仓商品列表及总数。

## 用法

```bash
mbs pim erp-product-clearance [--status <string>] [--pageSize <string>] [--page <number>] [--sid <string>] [--categoryid <string>] [--orderby <string>] [--flag <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productClearance/clearance`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | string | 否 | - | 清仓状态。枚举：草稿中/等待清仓/清仓中/清仓完成 |
| `pageSize` | pageSize | body | string | 否 | - | 每页条数(固定传 '50'；search()中不传) |
| `page` | page | body | number | 否 | - | 当前页码(初始为1，分页回调取 api.getCurrent()；search()中不传) |
| `sid` | sid | body | string | 否 | - | 关键词-SKU(来源输入框 #sid，有值才传) |
| `categoryid` | categoryid | body | string | 否 | - | 子目录分类ID(来源下拉 #categoryId2 的 sequenceid，有值才传) |
| `orderby` | orderby | body | string | 否 | - | 排序方式。枚举：1=按成本价降序;2=按成本价升序;3=按库存量降序;4=按库存量升序;5=按重量降序;6=按重量升序 |
| `flag` | flag | body | string | 否 | - | 进度筛选。枚举：flag1=移仓;flag2=拍照;flag3=刊登 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准包装字段) | - |
| `desc` | string | 响应提示信息(标准包装字段) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的清仓商品总数(前端 Math.ceil(count/pageSize) 算总页数) | - |
| `obj.pageSize` | number | 每页条数(参与总页数计算) | - |
| `obj.result[]` | array | 清仓商品列表 | - |
| `obj.result[][0]` | string | SKU编号(行主键，作为 tr id、复选框 value、详情链接 SKUdetails.html?SKU=) | - |
| `obj.result[][1]` | string | 商品图片URL | - |
| `obj.result[][2]` | string | 移仓标记(非null时展示标签，如"已移仓") | - |
| `obj.result[][3]` | string | 拍照标记(非null时展示紫色标签，如"已拍照") | - |
| `obj.result[][4]` | string | 刊登标记(非null时展示红色标签，如"已刊登") | - |
| `obj.result[][5]` | string | 商品名称(超长省略号展示) | - |
| `obj.result[][6]` | string | 成本价 | - |
| `obj.result[][7]` | string | 库存量 | - |
| `obj.result[][8]` | string | 仓位 | - |
| `obj.result[][9]` | string | 产品完好状况(如"包装破损N个;产品损坏N个;缺少配件N个;完好无损;") | - |
| `obj.result[][10]` | string | 操作人 | - |
| `obj.result[][11]` | string | 操作时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
