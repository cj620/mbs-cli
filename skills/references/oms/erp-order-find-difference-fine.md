<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-difference-fine

销售报表-罚款差异明细查询：日销售报表费用差异下钻：平台含Wish(16)且费用类型为罚款时，按报表搜索条件+指定日期分页查询罚款明细。

## 用法

```bash
mbs oms erp-order-find-difference-fine [--employeeType <string>] [--startTime <string>] [--endTime <string>] [--openBeginTime <string>] [--openEndTime <string>] --platformIds <array> [--companyIdList <array>] [--siteList <array>] [--categoryNameList <array>] [--customerServiceMgr <string>] [--shopName <array>] [--employeeName <string>] [--bigChief <string>] [--notFbaHwc <string>] [--categoryNameList2 <array>] [--littleLeaders <array>] [--leaders <array>] [--operateStatus <string>] [--whiteList <string>] [--groupCompanyId <string>] [--managers <string>] [--shopManagers <string>] [--credits2 <string>] [--orderTypes <array>] --oneDay <string> --type <string> --pageSize <number> --page <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/findDifferenceFine`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 统计/员工维度类型(来源 dateType) |
| `startTime` | startTime | body | string | 否 | - | 统计开始时间(yyyy-MM-dd) |
| `endTime` | endTime | body | string | 否 | - | 统计结束时间(yyyy-MM-dd) |
| `openBeginTime` | openBeginTime | body | string | 否 | - | 开店时间-起始 (待人工确认) |
| `openEndTime` | openEndTime | body | string | 否 | - | 开店时间-结束 (待人工确认) |
| `platformIds` | platformIds | body | array | 是 | - | 平台ID列表(eBay='1'；含'16'=Wish 且 type=='罚款' 时才调用本接口) |
| `companyIdList` | companyIdList | body | array | 否 | - | 公司ID列表(默认[]) |
| `siteList` | siteList | body | array | 否 | - | 站点列表 |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 一级分类名称列表 |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客服主管(多选逗号拼接) |
| `shopName` | shopName | body | array | 否 | - | 店铺名称列表(空格拆分) |
| `employeeName` | employeeName | body | string | 否 | - | 员工/店长姓名(来源 shopmanager) |
| `bigChief` | bigChief | body | string | 否 | - | 大主管(来源 manager) |
| `notFbaHwc` | notFbaHwc | body | string | 否 | - | 订单类型筛选(是否非FBA海外仓)(待人工确认) |
| `categoryNameList2` | categoryNameList2 | body | array | 否 | - | 二级分类名称列表 |
| `littleLeaders` | littleLeaders | body | array | 否 | - | 小组长 |
| `leaders` | leaders | body | array | 否 | - | 组长(来源 leader) |
| `operateStatus` | operateStatus | body | string | 否 | - | 运营状态 |
| `whiteList` | whiteList | body | string | 否 | - | 白名单(来源 whitelist) |
| `groupCompanyId` | groupCompanyId | body | string | 否 | - | 集团公司ID(仅 headCompany 存在时追加) |
| `managers` | managers | body | string | 否 | - | 经理/总管(type=='ship' 时追加,来源 manager) |
| `shopManagers` | shopManagers | body | string | 否 | - | 店长(type=='ship' 时追加,来源 shopmanager) |
| `credits2` | credits2 | body | string | 否 | - | 信用/账期筛选(待人工确认) |
| `orderTypes` | orderTypes | body | array | 否 | - | 订单类型集合 |
| `oneDay` | oneDay | body | string | 是 | - | 指定单日(URL 参数 oneDay,本页追加) |
| `type` | type | body | string | 是 | - | 费用类型(URL 参数 type,本接口对应'罚款') |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(本页固定 50) |
| `page` | page | body | number | 是 | - | 当前页码(首查=1,分页回调取 api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(非200弹 desc) | - |
| `desc` | string | 响应提示信息(失败时 alert) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的总条数(渲染至 #finetotal) | - |
| `obj.countPage` | number | 总页数(传入分页组件 pageCount) | - |
| `obj.result[]` | array | 罚款明细列表(渲染 list) | - |
| `obj.result[][0]` | string | 订单ID(链接至 /eshop/order.do?method=edit&orderid=) | - |
| `obj.result[][1]` | string | 店铺名称(店铺类型,展示于“店铺名称”列) | - |
| `obj.result[][2]` | string | 罚款类型 | - |
| `obj.result[][3]` | number | 罚款金额(RMB,展示于动态“{type}(RMB)”列) | - |
| `obj.result[][4]` | string | 店长 | - |
| `obj.result[][5]` | string | 罚款原因 | - |
| `obj.result[][6]` | string | 插入时间 | - |
| `obj.result[][7]` | string | 产品SKU(逗号分隔,前端 split(',') 渲染为 SKU 详情链接) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
