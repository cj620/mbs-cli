<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-customer-order-list

客户订购产品列表查询：客户详情页「订购产品」卡片的分页列表查询：按当前客户(sequenceid)聚合其订购的主产品行，支持 SKU 模糊搜索、排序、分页，返回订购主产品(主SKU、下单时间、代发订单数、订购总金额、订购总数量、SKU个数)列表及总数/总页数。

## 用法

```bash
mbs scm erp-manufacture-customer-order-list [--search <string>] --customer <string> [--orderBy <string>] --pageSize <string> --page <number>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/customer/customerOrderList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `search` | search | body | string | 否 | - | 模糊搜索关键词(按SKU搜索)，来源输入框 #search |
| `customer` | customer | body | string | 是 | - | 客户ID，来源页面URL query sequenceid，限定查询当前客户的订购数据 |
| `orderBy` | orderBy | body | string | 否 | - | 排序字段(含排序方向)，来源排序下拉 #selectOrder。枚举：a.mainProduct desc/asc nulls last、a.currentDate desc/asc nulls last、a.orderNum asc/desc nulls last、a.orderAmount desc/asc nulls last、a.productNum desc/asc nulls last；首屏无参调用时为 undefined |
| `pageSize` | pageSize | body | string | 是 | - | 每页条数，来源选择器 #selectPagesize。枚举：10/50/100 |
| `page` | page | body | number | 是 | - | 当前页码。search() 固定传 1；分页回调传 api.getCurrent() |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(列表查询主体，前端以 if(data.obj) 判定) | - |
| `obj.count` | number | 满足条件的订购记录总条数(渲染到 #count) | - |
| `obj.countPage` | number | 总页数(传入分页组件 pageCount) | - |
| `obj.result[]` | array | 订购主产品列表 | - |
| `obj.result[][0]` | string | 订购产品集合ID(渲染为行 data-id，展开二级时作为 batchSku 传入 batchSkuList 接口) | - |
| `obj.result[][1]` | string | 主SKU商品图片URL | - |
| `obj.result[][2]` | string | 主产品SKU编号(展示并链接到 /product/SKUdetails.html?SKU=) | - |
| `obj.result[][3]` | number | 该订购集合下的SKU个数(模板 if v.productCount!=1 时展示「等N个sku」) | - |
| `obj.result[][4]` | string | 下单时间(同时作为 openwin() 拼接当日订单时间区间的参数) | - |
| `obj.result[][5]` | number | 代发订单数 | - |
| `obj.result[][6]` | number | 订购总金额(模板 v.orderAmount.toLocaleString()，展示「N元」) | - |
| `obj.result[][7]` | number | 订购总数量(展示「N件」) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
