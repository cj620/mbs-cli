<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-leader-shop3

平台看店铺(getLeaderShop3)：根据平台、组员、大酋长、客服经理查询登录人可见的店铺列表，用于页面店铺下拉框联动渲染；后端按部门与管辖范围过滤并补写店铺级别/暂停/客户经理信息。

## 用法

```bash
mbs oms erp-order-get-leader-shop3 [--platformId <string>] [--employeeList <array>] [--bigChiefList <array>] [--customerServiceMgr <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getLeaderShop3`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | body | string | 否 | - | 平台ID(为空则不按平台过滤)。1=eBay,2=Amazon,10=AliExpress,16=Wish,18=Lazada,26=Shopee 等，来源控件 #reserve11 |
| `employeeList` | employeeList | body | array | 否 | - | 组员(运营员工名列表，未选传[])，后端按 db_shop.shopmanager IN(...) 过滤，来源控件 #employeeList |
| `bigChiefList` | bigChiefList | body | array | 否 | - | 大酋长(店铺主管)列表(未选传[])，employeeList为空且此项非空时后端据其反查组员，来源控件 #shopManager |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客服经理(逗号拼接，未选传'')，用于把客户经理名拼接进 SHOPNAME2 展示，来源控件 #custService(.join(',')) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 请求是否成功 | - |
| `code` | number | 响应状态码,200=成功,500=失败 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 店铺列表(为空/无数据时前端渲染 -店铺- 默认项) | - |
| `obj[][0]` | string | 店铺ID(db_shop.sid)，前端作为 option 的 value | - |
| `obj[][1]` | string | 店铺名称(db_shop.name)，前端显示/作为 value | - |
| `obj[][2]` | string | 店铺展示名(后端补写)：原店铺名+级别替换名(NEWNAME)+[暂停]+(客户经理)后缀 | - |
| `obj[][3]` | string | 店铺主管(db_shop.shopManager，空则'无') | - |
| `obj[][4]` | string | 平台经理(db_manager_shop.manager，空则'无') | - |
| `obj[][5]` | string | 店铺级别枚举(DB_SHOP_RATE.RANKING)。1=A;2=B;3=C;4=D;5=E;6=F;其它='无' | - |
| `obj[][6]` | string | 店铺真实性。credit2=1或2='虚拟',其它='真实' | - |
| `obj[][7]` | string | 开店时间(db_shop.SLEVEL 转 yyyy-MM-dd) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
