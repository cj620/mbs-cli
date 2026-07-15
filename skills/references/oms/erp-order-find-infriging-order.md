# mbs oms erp-order-find-infriging-order

侵权商品订单查询：查询命中侵权(已标注侵权但线上仍出单)的订单列表，按店铺、店长筛选并分页返回侵权订单及其侵权SKU、订单金额、状态、店铺等信息，供仪表盘“侵权或禁售”页签展示与后续作废/换图下架/标记处理。

## 用法

```bash
mbs oms erp-order-find-infriging-order [--shopid <string>] [--shopManager <string>] [--currPage <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findInfrigingOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopid` | shopid | query | string | 否 | - | 店铺ID。来源控件：店铺下拉框 #shopName3，未选则为空 |
| `shopManager` | shopManager | query | string | 否 | - | 店长(店铺负责人)。来源控件：店长下拉框 #saleLeader3，未选则为空 |
| `currPage` | currPage | query | number | 否 | - | 当前页码。仅翻页时由分页组件回调 api.getCurrent() 追加；首次查询不传(后端默认第1页)。每页固定10条 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（列表查询前端仅判断 data.obj 是否存在） | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象；为空(falsy)时前端将总数置0 | - |
| `obj.total` | number | 满足条件的侵权订单总条数（渲染至 #torttotal/#tortspan） | - |
| `obj.pages` | number | 总页数（传入 tortPaging 初始化分页组件 pageCount） | - |
| `obj.list[]` | array | 侵权订单列表 | - |
| `obj.list[][0]` | string | 订单编号（主键标识；行 data-id、详情链接、作废/换图/明细查询均用） | - |
| `obj.list[][1]` | string | 侵权SKU（“换图下架”InFigure 及“搜索其他侵权listing”均用） | - |
| `obj.list[][2]` | string | 商品 itemId（线上商品项编号） | - |
| `obj.list[][3]` | string | 商品标题 | - |
| `obj.list[][4]` | string | 订单状态 | - |
| `obj.list[][5]` | string | 店铺名称（与店长拼接展示 店铺(店长)） | - |
| `obj.list[][6]` | string | 店长(店铺负责人) | - |
| `obj.list[][7]` | string | 客户ID | - |
| `obj.list[][8]` | number | 订单金额(RMB)，前端 toFixed(2) 保留2位展示 | - |
| `obj.list[][9]` | string | 订单日期 | - |
| `obj.list[][10]` | string | 拉单(创建订单)时间 | - |
| `obj.list[][11]` | number | 运费金额 | - |
| `obj.list[][12]` | string | 交易单号(平台交易号) | - |
| `obj.list[][13]` | string | 订单备注（存在时单独行展示“订单备注:xxx”） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
