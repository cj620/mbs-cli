<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-order-list

订单列表查询：订单中心列表多维度分页查询：按店铺/平台/订单状态/货运方式/自定义流程/关键词/时间区间/开发员/采购员/店长/经理/客服/销量级别/重量·价格·毛利·毛利率·剩余备货天数区间/退款/最晚到货等数十项条件,配合左侧标签(tab 0~11)分页返回订单及其商品明细(dbSellList)。

## 用法

```bash
mbs oms erp-order-order-list [--manager <array>] [--orderResult <string>] [--platformId <string>] [--shoptypelist <array>] [--ordersource <string>] [--status <string>] [--expresstypeList <array>] [--ordertypeid <string>] [--filtertype <string>] [--keyword <string>] [--timetype <string>] [--time1 <string>] [--time2 <string>] [--ismyfavorites <string>] [--tab <string>] [--selloper <string>] [--buyer <string>] [--shopmanager <string>] [--salesLevel <string>] [--orderproperty1 <string>] [--orderproperty2 <string>] [--productStatus <string>] [--orderweight1 <string>] [--orderweight2 <string>] [--moneyask1 <string>] [--moneyask2 <string>] [--grossprofit1 <string>] [--grossprofit2 <string>] [--grossprofitrate1 <string>] [--grossprofitrate2 <string>] [--leftStockingdays1 <string>] [--leftStockingdays2 <string>] [--refundreason <string>] [--refundtime1 <string>] [--refundtime2 <string>] [--latestDeliveryDate1 <string>] [--latestDeliveryDate2 <string>] [--orderby <string>] --page <number> --pageSize <string> [--customerServiceMgrList <array>] [--storage <string>] [--ordertype <string>] [--preSaleLabel <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/orderList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `manager` | manager | body | array | 否 | - | 经理(高级搜索,多选),来源 #managers |
| `orderResult` | orderResult | body | string | 否 | - | 订单结果筛选。1=亏损订单;2=侵权商品订单;3=超重订单;4=缺货订单;5=停产订单;6=禁止发货订单(仅 tag==1 生效) |
| `platformId` | platformId | body | string | 否 | - | 平台,来源 #platformList |
| `shoptypelist` | shoptypelist | body | array | 否 | - | 店铺列表,来源 base.shoptype/#shopList,无则 [] |
| `ordersource` | ordersource | body | string | 否 | - | 订单属性/订单来源,来源 #ordersource |
| `status` | status | body | string | 否 | - | 订单状态,来源 base.statusTag 或 #orderStatus |
| `expresstypeList` | expresstypeList | body | array | 否 | - | 货运方式(多选),来源 #findExpresstype |
| `ordertypeid` | ordertypeid | body | string | 否 | - | 自定义流程,来源 #findOrderType |
| `filtertype` | filtertype | body | string | 否 | - | 查询条件,来源 #queryConditions(如 closeTimeLess24) |
| `keyword` | keyword | body | string | 否 | - | 关键词,来源 #keyword;filtertype=closeTimeLess24 时固定为 '24' |
| `timetype` | timetype | body | string | 否 | - | 时间类型,来源 #timetype |
| `time1` | time1 | body | string | 否 | - | 时间区间-起始,来源 #time1(区间<=90天) |
| `time2` | time2 | body | string | 否 | - | 时间区间-结束,来源 #time2(区间<=90天) |
| `ismyfavorites` | ismyfavorites | body | string | 否 | - | 是否我的收藏。0=否;1=是,来源 #ismyfavorites |
| `tab` | tab | body | string | 否 | - | 当前标签编号(0全部/1今日/2待发货/3即将到期/4新订单/5配货中/6作废/7海外仓已支付/8海外仓配货中/9退款中/10退款完成/11取消退款);num==0 传空 |
| `selloper` | selloper | body | string | 否 | - | 开发员(高级搜索),来源 #selloper |
| `buyer` | buyer | body | string | 否 | - | 采购员(高级搜索),来源 #buyer |
| `shopmanager` | shopmanager | body | string | 否 | - | 店长(高级搜索),来源 #shopmanager |
| `salesLevel` | salesLevel | body | string | 否 | - | 销量级别(高级搜索),来源 #salesLevel |
| `orderproperty1` | orderproperty1 | body | string | 否 | - | 订单属性1(右侧标签筛选),来源 search() 入参 orderproperty |
| `orderproperty2` | orderproperty2 | body | string | 否 | - | 订单优化,来源 #orderproperty2 |
| `productStatus` | productStatus | body | string | 否 | - | 产品状态,来源 #productStatus |
| `orderweight1` | orderweight1 | body | string | 否 | - | 订单重量-起始,来源 #orderweight1 |
| `orderweight2` | orderweight2 | body | string | 否 | - | 订单重量-结束,来源 #orderweight2 |
| `moneyask1` | moneyask1 | body | string | 否 | - | 订单价格-起始,来源 #moneyask1 |
| `moneyask2` | moneyask2 | body | string | 否 | - | 订单价格-结束,来源 #moneyask2 |
| `grossprofit1` | grossprofit1 | body | string | 否 | - | 订单毛利-起始,来源 #grossprofit1 |
| `grossprofit2` | grossprofit2 | body | string | 否 | - | 订单毛利-结束,来源 #grossprofit2 |
| `grossprofitrate1` | grossprofitrate1 | body | string | 否 | - | 订单毛利率-起始,来源 #grossprofitrate1 |
| `grossprofitrate2` | grossprofitrate2 | body | string | 否 | - | 订单毛利率-结束,来源 #grossprofitrate2 |
| `leftStockingdays1` | leftStockingdays1 | body | string | 否 | - | 剩余备货天数-起始,来源 #leftStockingdays1 |
| `leftStockingdays2` | leftStockingdays2 | body | string | 否 | - | 剩余备货天数-结束,来源 #leftStockingdays2 |
| `refundreason` | refundreason | body | string | 否 | - | 退款原因,来源 #refundreason |
| `refundtime1` | refundtime1 | body | string | 否 | - | 退款时间-起始,来源 #refundtime1 |
| `refundtime2` | refundtime2 | body | string | 否 | - | 退款时间-结束,来源 #refundtime2 |
| `latestDeliveryDate1` | latestDeliveryDate1 | body | string | 否 | - | 最晚发货/到货时间-起始,来源 #latestDeliveryDate1 |
| `latestDeliveryDate2` | latestDeliveryDate2 | body | string | 否 | - | 最晚发货/到货时间-结束,来源 #latestDeliveryDate2 |
| `orderby` | orderby | body | string | 否 | - | 排序字段,来源 #orderby |
| `page` | page | body | number | 是 | - | 当前页码,来源 base.page(从1开始) |
| `pageSize` | pageSize | body | string | 是 | - | 每页条数,来源 #everyPage{num} |
| `customerServiceMgrList` | customerServiceMgrList | body | array | 否 | - | 客服经理(多选,有值才传),来源 #customerServ |
| `storage` | storage | body | string | 否 | - | 仓库,来源 #storage |
| `ordertype` | ordertype | body | string | 否 | - | 订单类型,来源 #ordertype(由 orderTypeList 填充) |
| `preSaleLabel` | preSaleLabel | body | number | 否 | - | 预售标签(有值才传,前端 Number() 转换),来源 #preSaleLabel |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(失败时 alert) | - |
| `content` | number | 默认时间范围天数:>0 且未填时间区间时前端自动填充 time1/time2 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的订单总数 | - |
| `obj.countPage` | number | 总页数(分页用) | - |
| `obj.result[]` | array | 订单列表 | - |
| `obj.result[][0]` | string | 订单编号(主键标识) | - |
| `obj.result[][1]` | string | 订单状态 | - |
| `obj.result[][2]` | string | 订单属性/来源(null 显示正常订单) | - |
| `obj.result[][3]` | number | 退款状态。1=退款中;2=退款成功;3=退款取消 | - |
| `obj.result[][4]` | string | 发货仓库 | - |
| `obj.result[][5]` | number | 毛利率(原值小数,前端x100保留2位展示%) | - |
| `obj.result[][6]` | number | 毛利额(前端保留2位展示) | - |
| `obj.result[][7]` | string | 下单时间 | - |
| `obj.result[][8]` | string | 交运时间(有则显示) | - |
| `obj.result[][9]` | string | 发货时间 | - |
| `obj.result[][10]` | string | 关闭时间提示(无发货时间时原样输出HTML) | - |
| `obj.result[][11]` | string | 退款时间(有则显示) | - |
| `obj.result[][12]` | string | 最晚到货时间(有则显示) | - |
| `obj.result[][13]` | string | 预估重量 | - |
| `obj.result[][14]` | string | 交易号 | - |
| `obj.result[][15]` | string | 平台订单号 | - |
| `obj.result[][16]` | string | 自选物流(超40字截断显示) | - |
| `obj.result[][17]` | string | 货运方式 | - |
| `obj.result[][18]` | string | FPX货运方式(非空时以|追加) | - |
| `obj.result[][19]` | string | 物流单号(可点击跳转17track) | - |
| `obj.result[][20]` | string | 国内物流单号(无expressid时显示'国内：xxx') | - |
| `obj.result[][21]` | string | 客户ID | - |
| `obj.result[][22]` | string | 国家 | - |
| `obj.result[][23]` | string | 国家(英文) | - |
| `obj.result[][24]` | string | 禁止发货标记。1=禁止发货;其他=可发货 | - |
| `obj.result[][25]` | string | 缺货标记。2=不缺货;其他=缺货 | - |
| `obj.result[][26]` | string | 是否超重。0=不超重;其他=超重 | - |
| `obj.result[][27]` | string | 是否已验。1=已验;其他=未验 | - |
| `obj.result[][28]` | string | 买家留言标记。1=有买家留言 | - |
| `obj.result[][29]` | string | 买家留言标记(配合tradetype判定展示) | - |
| `obj.result[][30]` | string | 平台留言(null=无平台留言) | - |
| `obj.result[][31]` | string | 平台留言标记。1时按已读处理 | - |
| `obj.result[][32]` | string | 预售订单标记(值='预售订单'时展示按钮) | - |
| `obj.result[][33]` | number | 申请退款金额(有则展示) | - |
| `obj.result[][34]` | number | 订单收入 | - |
| `obj.result[][35]` | number | 成本价合计 | - |
| `obj.result[][36]` | number | 商品总数量 | - |
| `obj.result[][37]` | string | 店铺 | - |
| `obj.result[][38]` | string | 是否已收藏。0=否;1=是 | - |
| `obj.result[][39]` | string | 订单备注(可编辑) | - |
| `obj.result[][40]` | string | 退款原因(有则红字展示) | - |
| `obj.result[][41]` | string | 交运失败原因(有则红字展示) | - |
| `obj.result[][42][]` | array | 订单商品明细列表 | - |
| `obj.result[][42][][0]` | string | 销售明细ID(导出/编辑/删除商品用) | - |
| `obj.result[][42][][1]` | string | 所属订单编号 | - |
| `obj.result[][42][][2]` | string | 商品图片URL | - |
| `obj.result[][42][][3]` | string | 商品SPU(刊登/分享用) | - |
| `obj.result[][42][][4]` | string | 马帮SPU ID(非ebay/wish平台分享判定) | - |
| `obj.result[][42][][5]` | string | 商品SKU编号(链接SKU详情) | - |
| `obj.result[][42][][6]` | string | 商品名称 | - |
| `obj.result[][42][][7]` | string | 产品状态(清仓/停产等) | - |
| `obj.result[][42][][8]` | string | 是否侵权。1=侵权 | - |
| `obj.result[][42][][9]` | string | 销量状态。超爆/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品 | - |
| `obj.result[][42][][10]` | string | 开发员 | - |
| `obj.result[][42][][11]` | number | 今日SKU订单数(角标) | - |
| `obj.result[][42][][12]` | string | 明细缺货标记。2=不缺货;其他=缺货 | - |
| `obj.result[][42][][13]` | number | 一品多仓标记。1=一品多仓 | - |
| `obj.result[][42][][14]` | string | 商品标记。3=已删除(划线灰显) | - |
| `obj.result[][42][][15]` | number | 零售价 | - |
| `obj.result[][42][][16]` | number | 成本价 | - |
| `obj.result[][42][][17]` | number | 数量 | - |
| `obj.result[][42][][18]` | number | 库存 | - |
| `obj.result[][42][][19]` | number | 下单数 | - |
| `obj.result[][42][][20]` | number | 在途数 | - |
| `obj.result[][42][][21]` | number | 待发货数 | - |
| `obj.result[][42][][22]` | number | 近7天销量 | - |
| `obj.result[][42][][23]` | number | 近30天销量 | - |
| `obj.result[][42][][24]` | number | 近90天销量 | - |
| `obj.result[][42][][25]` | string | 商品链接(平台) | - |
| `obj.result[][42][][26]` | string | 平台商品ID(随productLink展示) | - |
| `obj.result[][42][][27]` | string | 店长(取 dbSellList[0].shopManager) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
