<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-show-ebay-bill

eBay账期账单费用查询：eBay对账页面按账期(billStr)+店铺(shopId)分页查询账单费用列表，返回各店铺该账期的币种、新增费用、折扣和退款及其人民币折算金额，并返回总条数与总页数供前端分页。

## 用法

```bash
mbs oms erp-order-show-ebay-bill --billStr <string> [--shopId <string>] [--currPage <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayAccountFee/showEbayBill`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `billStr` | billStr | body | string | 是 | - | 账期/账单期间(eBay账单月份)。来源控件：账期下拉框 #shopids1；search() 取全局 shopid1(账期列表首项 list[0])，search1() 取 $('#shopids1').val() |
| `shopId` | shopId | body | string | 否 | - | 店铺ID。来源控件：店铺名下拉框 #shopids($('#shopids').val()，未选时为空) |
| `currPage` | currPage | body | number | 否 | - | 当前页码。来源：分页组件 api.getCurrent()，仅翻页回调追加；首次查询不传 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(前端 data.code==200 判定) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.list[]` | array | 账单费用列表 | - |
| `obj.list[][0]` | string | 店铺名 | - |
| `obj.list[][1]` | string | 时间/账单期间(账期) | - |
| `obj.list[][2]` | string | 币种 | - |
| `obj.list[][3]` | number | 新增费用(原币种金额) | - |
| `obj.list[][4]` | number | 折扣和退款(原币种金额) | - |
| `obj.list[][5]` | number | 折扣和退款（人民币） | - |
| `obj.list[][6]` | number | 新增费用（人民币） | - |
| `obj.list[][7]` | string | 店铺ID(用于拼接费用明细跳转链接 /order/ebayDetail.html?shopId=&billStr=) | - |
| `obj.total` | number | 满足条件的总条数(前端写入 #total，每页20条) | - |
| `obj.lastPage` | number | 总页数(search() 首查时传入分页组件 pageCount) | - |
| `obj.pages` | number | 总页数(search1() 搜索时传入分页组件 pageCount) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
