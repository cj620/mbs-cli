<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-dbsell-info

订单SKU(商品)明细列表查询(getDbsellInfo)：订单详情页根据订单ID(orderid)查询该订单下的全部商品(SKU)明细行，返回 obj.list 数组，含每行 SKU 的产品信息、价格(售价/成本)、订购数量、库存/在途/缺货、仓库仓位、收入金额、状态/侵权/折扣等字段；前端据此渲染商品明细表并计算订单总成本(totalCost = Σ ordernum × costprice)。

## 用法

```bash
mbs oms erp-order-get-dbsell-info --orderid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getDbsellInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单ID(query 参数)。来源：页面 URL query GetQueryString("orderid") |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(赋值给 basedata.ordernum) | - |
| `obj.list[]` | array | 订单商品(SKU)明细行列表 | - |
| `obj.list[][0]` | string | 行状态标志。3=已删除/失效(行置灰、禁用勾选与编辑)；前端按 flag!=3 过滤有效行 | - |
| `obj.list[][1]` | string | 商品SKU/产品ID(主键标识，用于勾选 value、跳转 SKUdetails、删除/拆分匹配) | - |
| `obj.list[][2]` | string | 销售明细ID(sellid，用于编辑/删除/拆分定位 editSell/deleteSell) | - |
| `obj.list[][3]` | string | 商品图片URL(el-image 预览与展示) | - |
| `obj.list[][4]` | string | 商品名称(标题展示) | - |
| `obj.list[][5]` | string | 平台商品ID/物品ID(存在时展示并可复制) | - |
| `obj.list[][6]` | string | 平台商品链接(itemid 超链接 href) | - |
| `obj.list[][7]` | string | 一品多仓标记。1=一品多仓(展示绿色标签) | - |
| `obj.list[][8]` | string | 店铺名称(平台id=120 时查询延迟履约数据 isReplaceProduct 入参) | - |
| `obj.list[][9]` | string | 警示标志。2=心碎图标置灰/隐藏追踪采购信息 | - |
| `obj.list[][10]` | string | 产品状态。清仓/停产/暂停销售=橙色告警标签,其余=绿色标签 | - |
| `obj.list[][11]` | string | 侵权标记。1=展示"侵权"红色标签 | - |
| `obj.list[][12]` | string | 折扣信息(黄色展示) | - |
| `obj.list[][13]` | string | 属性类型名称(配合 outstatus() 着色展示) | - |
| `obj.list[][14]` | string | 商品属性(展示；toViewPrice 拼接为查价 properties 入参) | - |
| `obj.list[][15]` | string | 开发员(展示"开发:xxx") | - |
| `obj.list[][16]` | number | 销售单价(￥展示,经 ceil 处理) | - |
| `obj.list[][17]` | number | 订购数量(展示；与 costprice 相乘累加为订单总成本 totalCost；拆分时 ordernumold/ordernumnew) | - |
| `obj.list[][18]` | number | 成本价(￥/ceil 展示；totalCost 计算用) | - |
| `obj.list[][19]` | number | 已存/可节省数量(成本旁链接展示，点击 getSaveNumber) | - |
| `obj.list[][20]` | string | 预计到货时间(存在时展示"预计到货 xxx") | - |
| `obj.list[][21]` | number | 缺货数量(>0 时展示"缺货N个"，并影响仓库/仓位展示) | - |
| `obj.list[][22]` | string | 仓库(无缺货且有值时展示"仓库:xxx") | - |
| `obj.list[][23]` | string | 仓位(无缺货且有值时展示"仓位:xxx") | - |
| `obj.list[][24]` | number | 下单(采购)数量(与在途配合展示"下单/在途") | - |
| `obj.list[][25]` | number | 在途数量(与下单配合展示"下单/在途") | - |
| `obj.list[][26]` | number | 待发货数量(>0 时红色展示"待发货:N") | - |
| `obj.list[][27]` | string | 商品包装尺寸(灰色展示) | - |
| `obj.list[][28]` | number | 商品重量(单位:g，展示"xxx(g)") | - |
| `obj.list[][29]` | number | 商品收入金额(￥/ceil 展示) | - |
| `obj.list[][30]` | number | 运费收入金额(￥/ceil 展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
