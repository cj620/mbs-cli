<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-product-details

新品出单产品明细查询：看板店铺(seebeeDevelopmentShop)新品出单产品明细分页查询：按店铺管理员/店铺名称/自建-继承状态/时间区间/类型筛选，分页返回商品图片、SPU、产品名、商品属性、出单量、创建时间等明细行，并返回总条数与总页数用于分页。

## 用法

```bash
mbs oms erp-order-find-product-details [--shopManager <string>] [--shopName <string>] [--status <string>] [--beginTime <string>] [--endTime <string>] [--type <string>] --currentPage <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/seebeeDevelopmentShop/findProductDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopManager` | shopManager | body | string | 否 | - | 店铺管理员/店长（来源 URL 参数 shopManager，经 decodeURI 解码后传入） |
| `shopName` | shopName | body | string | 否 | - | 店铺名称（search() 固定传空字符串；search2() 传 URL 参数 shopName 解码值） |
| `status` | status | body | string | 否 | - | 状态（来源 URL 参数 status）。枚举：0=自建；1=继承 |
| `beginTime` | beginTime | body | string | 否 | - | 开始时间（来源 URL 参数 beginTime，时间区间起始） |
| `endTime` | endTime | body | string | 否 | - | 结束时间（来源 URL 参数 endTime，时间区间结束） |
| `type` | type | body | string | 否 | - | 类型（来源 URL 参数 type，业务类型筛选） |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码（首次固定为 1，翻页时取分页组件 api.getCurrent()） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（search()/其分页=50；search2()/其分页=5） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码（马帮统一外层包装，本页未直接引用）(待人工确认) | - |
| `desc` | string | 响应提示信息（马帮统一外层包装，本页未直接引用）(待人工确认) | - |
| `obj` | object | 业务数据对象（前端直接读取 res.obj） | - |
| `obj.total` | number | 满足条件的明细总条数（渲染到 #total） | - |
| `obj.totalPages` | number | 总页数（传入分页组件 pageCount） | - |
| `obj.rows[]` | array | 商品出单明细行列表（遍历渲染 #productTemplate） | - |
| `obj.rows[][0]` | string | 商品图片URL（模板 <img src="{{v.proPicture}}">） | - |
| `obj.rows[][1]` | string | 商品SPU编号（有值时渲染为 SPU 详情链接 /product/SPUdetails.html?SPU= 及趋势图 /achievement/tendInformation.html?spu=） | - |
| `obj.rows[][2]` | string | 产品名称 | - |
| `obj.rows[][3]` | string | 商品属性 | - |
| `obj.rows[][4]` | number | 出单量 | - |
| `obj.rows[][5]` | string | 创建时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
