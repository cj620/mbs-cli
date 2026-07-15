<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-product-relevant-information

店铺运营相关信息列表查询：店铺运营监控看板列表分页查询：按平台、店铺、销售负责人、销售大酋长、客户经理、统计时间区间、运营状态等条件筛选，返回各店铺的新品率、动销率、在售/下架商品数、刊登/改价/改运费/改标题等运营维护指标及反馈好评率、统计周期等汇总字段。

## 用法

```bash
mbs ars erpmonitor-product-relevant-information [--platformId <string>] [--shopName <string>] [--saleLeader <string>] [--greatChief <string>] [--statisticalDateStart <string>] [--statisticalDateEnd <string>] [--customerManager <string>] [--isOpenShop <string>] [--orderFiled <string>] --currPage <number> [--operateStatus <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/productRelevantInformation`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | body | string | 否 | - | 平台ID(来源控件#platformName平台下拉,空值=全选平台) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(来源控件#ShopName店铺下拉,空值=全选店铺) |
| `saleLeader` | saleLeader | body | string | 否 | - | 销售负责人ID(来源控件#saleLeader,值为saleLeaderId) |
| `greatChief` | greatChief | body | string | 否 | - | 销售大酋长ID(来源控件#greatChief,值为greatChiefId) |
| `statisticalDateStart` | statisticalDateStart | body | string | 否 | - | 统计时间-起始(开始日期,来源控件#updatedOn type=date) |
| `statisticalDateEnd` | statisticalDateEnd | body | string | 否 | - | 统计时间-结束(结束日期,来源控件#updatedOff type=date) |
| `customerManager` | customerManager | body | string | 否 | - | 客户经理(来源控件#customerManager) |
| `isOpenShop` | isOpenShop | body | string | 否 | - | 店铺状态(#isOpenShop控件已注释,当前固定传空)(待人工确认) |
| `orderFiled` | orderFiled | body | string | 否 | - | 排序字段(来源控件#orderFiled;空=默认;newPublishRate=新品率降序;soldListingRate=动销率降序;onlineProductCount=在售商品数降序;offlineProductCount=已下架商品数降序;newPublishCount=周期内刊登数降序;spuOnlineProductCount=在线SPU数降序;skuOnlineProductCount=在线SKU数降序;thirtyDaysNewOnlineListing=30天刊登listing在线量降序;thirtyDaysSoldNumber=30天销量降序) |
| `currPage` | currPage | body | number | 是 | - | 当前页码(搜索固定1,分页取api.getCurrent();每页30条) |
| `operateStatus` | operateStatus | body | string | 否 | - | 运营状态(来源控件#OperateStatus;空=全部;1=运营中;2=暂停运营) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(待人工确认) | - |
| `desc` | string | 响应提示信息(待人工确认) | - |
| `obj` | object | 业务数据对象(前端据data.obj判空) | - |
| `obj.total` | number | 满足条件的店铺总条数(写入#total展示) | - |
| `obj.pages` | number | 总页数(传入分页组件pageCount) | - |
| `obj.list[]` | array | 店铺运营信息列表 | - |
| `obj.list[][0]` | string | 平台名称 | - |
| `obj.list[][1]` | string | 店铺名称 | - |
| `obj.list[][2]` | string | 客户经理(有值时标签展示) | - |
| `obj.list[][3]` | string | 销售负责人 | - |
| `obj.list[][4]` | string | 销售大酋长 | - |
| `obj.list[][5]` | string | 店铺状态(1=已开启,其它=已关闭,前端转中文展示) | - |
| `obj.list[][6]` | string | 运营状态(有值时标签展示) | - |
| `obj.list[][7]` | string | 新品率(手动) | - |
| `obj.list[][8]` | string | 动销率 | - |
| `obj.list[][9]` | number | 在售商品数量 | - |
| `obj.list[][10]` | string | 额度数量(有值时标签展示) | - |
| `obj.list[][11]` | number | 已下架商品数量 | - |
| `obj.list[][12]` | number | 周期内刊登数 | - |
| `obj.list[][13]` | string | 店铺ID(用于各违规明细/图表链接跳转) | - |
| `obj.list[][14]` | number | 发货地违规数量(跳转originvDetails.html) | - |
| `obj.list[][15]` | number | 重复商品数量(跳转duplicateTitle.html) | - |
| `obj.list[][16]` | number | sku刊错数量(跳转eIncorrect.html) | - |
| `obj.list[][17]` | number | 销售平台误刊数量(跳转forbidPublish.html) | - |
| `obj.list[][18]` | number | 周期内改价量 | - |
| `obj.list[][19]` | number | 周期内改运费量 | - |
| `obj.list[][20]` | number | 周期内改标题量 | - |
| `obj.list[][21]` | number | 周期内改关键字量 | - |
| `obj.list[][22]` | number | 周期内改图片量 | - |
| `obj.list[][23]` | number | 周期内改描述量 | - |
| `obj.list[][24]` | number | 30天销量 | - |
| `obj.list[][25]` | number | 30天手动刊登listing在线量 | - |
| `obj.list[][26]` | number | 店铺反馈数量 | - |
| `obj.list[][27]` | number | 好评率(非null时前端追加%展示) | - |
| `obj.list[][28]` | string | 平台ID(用于图表productStatistics.html链接) | - |
| `obj.list[][29]` | string | 最新统计周期起始(为null时仅显示createdOn,否则显示latestCreatedOn-createdOn) | - |
| `obj.list[][30]` | string | 统计周期(结束时间) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
