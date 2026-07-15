<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-order-spu

根据SPU查询销售单(订单)列表：SPU详情页「销售单信息」模块：按SPU查询该商品关联的全部订单明细，返回订单编号、商品标题、数量、售价、运费、毛利、重量、下单/发货时间、成交账号、国家、状态、店铺负责人等字段，前端用 art-template contentTemplate0 逐行渲染订单表格。

## 用法

```bash
mbs pim erp-product-get-order-spu --spu <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getOrderSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | 商品SPU编号。来源：页面 URL 查询参数 SPU(GetQueryString('SPU'))，由 SPU 详情页地址带入 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端 data.code == 200 才渲染) | - |
| `desc` | string | 响应提示信息(平台统一包装字段，本接口回调未使用) | - |
| `obj[]` | array | 订单(销售单)列表 | - |
| `obj[][0]` | string | 订单编号(链接到 /mabang-new/orderdetail.html?orderid=) | - |
| `obj[][1]` | string | 是否无权限查看(='1' 时订单链接禁用，仅展示文本) | - |
| `obj[][2]` | string | 禁发货标记(='1' 显示禁发图标，否则显示可发货图标) | - |
| `obj[][3]` | string | 缺货标记(='1' 显示缺货图标) | - |
| `obj[][4]` | number | 抛重(>0 时显示抛重炸弹图标) | - |
| `obj[][5]` | string | 商品平台链接URL(有值则商品标题为超链接) | - |
| `obj[][6]` | string | 商品标题(英文名，表头「商品标题」) | - |
| `obj[][7]` | string | eBay商品itemid(无 platformUrl 时以 (ebayitemid) 前缀展示) | - |
| `obj[][8]` | number | 真实海外仓价格(>0 时显示「真实海外仓」红标) | - |
| `obj[][9]` | number | 商品提醒类型枚举。1=AZ跟卖；2=批发大客户；3=虚拟海外仓；4=独立站；5=国内电商；6=sip订单 | - |
| `obj[][10]` | number | 数量(订单商品数量，表头「数量」) | - |
| `obj[][11]` | number | 售价(表头「售价」) | - |
| `obj[][12]` | number | 预估运费(表头「预估运费」) | - |
| `obj[][13]` | number | 真实运费(表头「真实运费」) | - |
| `obj[][14]` | number | 运费收入(表头「运费收入」) | - |
| `obj[][15]` | number | 毛利(表头「毛利」) | - |
| `obj[][16]` | number | 预估重量(表头「预估重量」) | - |
| `obj[][17]` | number | 真实重量(表头「真实重量」) | - |
| `obj[][18]` | string | 下单时间(表头「下单时间」) | - |
| `obj[][19]` | string | 发货时间(表头「发货时间」) | - |
| `obj[][20]` | string | 成交账号(表头「成交账号」) | - |
| `obj[][21]` | string | 国家(表头「国家」) | - |
| `obj[][22]` | string | 订单状态(表头「状态」) | - |
| `obj[][23]` | string | 店铺负责人头像URL(加载失败回退默认头像) | - |
| `obj[][24]` | string | 店铺负责人(表头「店铺负责人」，点击调 getSalesInfo 查看名片) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
