<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-find-postpone-info

延长收货订单分页查询：延长收货订单管理页查询：按订单编号、买家、时间(订单/发货)区间、店铺、店铺负责人、物流类型/方式、剩余收货时间区间、排序及 Tab 状态(延长收货订单/延长中)分页查询，返回订单列表及订单金额、毛利、物流、剩余收货时间、延长状态等字段。

## 用法

```bash
mbs scm erp-manufacture-find-postpone-info --page <number> [--tradeId <string>] [--customerId <string>] [--timeType <string>] [--beginTime <string>] [--finishTime <string>] [--shopType <string>] [--shopManager <string>] [--orderBy <string>] [--surplusBeginTime <string>] [--surplusFinishTime <string>] [--expressName <string>] [--expressType <string>] --status <number>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/postponeInfo/findPostponeInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码；首次/搜索固定传 1，分页回调传 api.getCurrent() |
| `tradeId` | tradeId | body | string | 否 | - | 订单编号(来源控件 #tradeId 输入框) |
| `customerId` | customerId | body | string | 否 | - | 买家名称(来源控件 #customerId 输入框) |
| `timeType` | timeType | body | string | 否 | - | 时间类型(配合 beginTime/finishTime)。0=订单时间;1=发货时间(默认) |
| `beginTime` | beginTime | body | string | 否 | - | 开始时间(日期 yyyy-MM-dd,来源控件 #beginTime) |
| `finishTime` | finishTime | body | string | 否 | - | 结束时间(日期 yyyy-MM-dd,来源控件 #finishTime) |
| `shopType` | shopType | body | string | 否 | - | 店铺(店铺名,来源控件 #shopNames 下拉,选项来自 shopTypeList) |
| `shopManager` | shopManager | body | string | 否 | - | 店铺负责人(来源控件 #shopManger 下拉,选项来自 operList) |
| `orderBy` | orderBy | body | string | 否 | - | 排序方式。orderTime=订单时间正序;orderTime desc=订单时间倒序;expressTime=发货时间正序(默认);expressTime desc=发货时间倒序 |
| `surplusBeginTime` | surplusBeginTime | body | string | 否 | - | 剩余收货时间-天数下限(单位:天,来源控件 #surplusBeginTime) |
| `surplusFinishTime` | surplusFinishTime | body | string | 否 | - | 剩余收货时间-天数上限(单位:天,来源控件 #surplusFinishTime) |
| `expressName` | expressName | body | string | 否 | - | 物流类型。平邮;挂号(来源控件 #expressName 下拉) |
| `expressType` | expressType | body | string | 否 | - | 物流方式(来源控件 #expressType 下拉,选项来自 expressList) |
| `status` | status | body | number | 是 | - | Tab 状态标识(由 findPostponeInfo(num) 入参传入)。0=延长收货订单;1=延长中 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应字段,本接口回调未直接判断,(待人工确认)) | - |
| `desc` | string | 响应提示信息(统一响应字段) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的订单总数(展示「共N条」) | - |
| `obj.countPage` | number | 总页数(传入分页控件 pageCount) | - |
| `obj.result[]` | array | 订单列表 | - |
| `obj.result[][0]` | string | 订单编号(主键标识,复选框 value 与订单详情链接 orderid) | - |
| `obj.result[][1]` | string | 店铺(店铺名) | - |
| `obj.result[][2]` | string | 店铺负责人 | - |
| `obj.result[][3]` | number | 订单金额 | - |
| `obj.result[][4]` | number | 毛利额 | - |
| `obj.result[][5]` | string | 运单号 | - |
| `obj.result[][6]` | string | 物流方式 | - |
| `obj.result[][7]` | string | 订单时间 | - |
| `obj.result[][8]` | string | 发货时间 | - |
| `obj.result[][9]` | string | 买家账号 | - |
| `obj.result[][10]` | string | 国家(买家所属国家) | - |
| `obj.result[][11]` | string | 最新物流信息(文本) | - |
| `obj.result[][12]` | string | 最新物流信息时间 | - |
| `obj.result[][13]` | string | 剩余收货时间 | - |
| `obj.result[][14]` | number | 延长状态(仅「延长中」Tab 模板使用)。0=延长中;2=延长失败 | - |
| `obj.result[][15]` | string | 延长失败原因/错误信息(仅「延长中」Tab 模板使用) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
