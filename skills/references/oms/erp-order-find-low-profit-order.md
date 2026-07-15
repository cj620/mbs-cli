<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-low-profit-order

低利润(限价)订单列表查询：仪表盘「限价订单」(低利润订单)页签的分页列表查询：按店长、店铺、任务类型、平台、推送时间区间、处理状态等条件筛选低利润/限价订单，返回订单列表及金额、国家、时间、运费、交易单号、订单备注、是否低利润等字段，前端用 art-template 渲染表格。

## 用法

```bash
mbs oms erp-order-find-low-profit-order [--shopManager <string>] [--shopid <string>] [--orderType <string>] [--platformId <string>] [--yearMonth <string>] [--operStatus <string>] [--pushStartTime <string>] [--pushEndTime <string>] [--currPage <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findLowProfitOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopManager` | shopManager | body | string | 否 | - | 店长(店长筛选下拉 #saleLeader10 的值) |
| `shopid` | shopid | body | string | 否 | - | 店铺ID(店铺筛选下拉 #shopName10 的值) |
| `orderType` | orderType | body | string | 否 | - | 任务类型(下拉 #orderType)。''=全部;1=不满足供应商限价;2=不满足公司内部毛利率要求;3=smt高成本低毛利率;4=ebay高金额低毛利率 |
| `platformId` | platformId | body | string | 否 | - | 平台ID(平台下拉 #platformes2 的值,选项由 getPlatformList2() 动态加载) |
| `yearMonth` | yearMonth | body | string | 否 | - | 年月(原下拉 #yearMonth2,该控件在HTML中已被注释,当前实际取值为undefined,仅参数对象保留该键)(待人工确认) |
| `operStatus` | operStatus | body | string | 否 | - | 处理状态(下拉 #operStatus)。''=全部;1=未完成(默认选中);2=已完成 |
| `pushStartTime` | pushStartTime | body | string | 否 | - | 推送开始时间(日期区间组件 date-picker 的 timmer[0],选择时间区间后才追加) |
| `pushEndTime` | pushEndTime | body | string | 否 | - | 推送结束时间(日期区间组件 date-picker 的 timmer[1],选择时间区间后才追加) |
| `currPage` | currPage | body | number | 否 | - | 当前页码(仅翻页 limitedPricePaging() 回调时追加;首次查询不传,后端默认第1页,每页10条) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.pages` | number | 总页数(前端用于初始化分页控件) | - |
| `obj.total` | number | 满足条件的订单总数 | - |
| `obj.list[]` | array | 低利润(限价)订单列表 | - |
| `obj.list[][0]` | string | 订单编号(主键标识,行 data-id、跳转订单详情、复选框值) | - |
| `obj.list[][1]` | number | 是否低利润订单。1=是(订单号标红并显示「标记完成」按钮) | - |
| `obj.list[][2]` | string | 订单状态 | - |
| `obj.list[][3]` | string | 店铺名称 | - |
| `obj.list[][4]` | string | 店长 | - |
| `obj.list[][5]` | string | 客户ID | - |
| `obj.list[][6]` | string | 原订单币种 | - |
| `obj.list[][7]` | number | 原金额(原币种金额) | - |
| `obj.list[][8]` | number | 订单金额(RMB) | - |
| `obj.list[][9]` | string | 国家(中文) | - |
| `obj.list[][10]` | string | 国家(英文) | - |
| `obj.list[][11]` | string | 订单日期 | - |
| `obj.list[][12]` | string | 拉单时间 | - |
| `obj.list[][13]` | number | 运费 | - |
| `obj.list[][14]` | string | 交易单号 | - |
| `obj.list[][15]` | string | 订单备注(存在时单独行展示「订单备注:xxx」) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
