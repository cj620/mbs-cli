<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-find-logistics-info2

物流订单信息查询：电商订单物流信息分页查询：按订单名称/客户、客户预留(自选物流)、货运方式、时间区间筛选，分页返回订单列表(订单编号、状态、店铺、金额、国家、物流单号、交易号、平台订单号等)及总条数/总页数。

## 用法

```bash
mbs fars erpaccount-find-logistics-info2 [--name <string>] [--customerreserve2 <string>] [--expresstype <string>] --pageSize <number> [--startTime <string>] [--endTime <string>] [--page <number>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/logisticsController/findLogisticsInfo2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `name` | name | body | string | 否 | - | 订单/客户名称(来源 URL 参数 name，decodeURI 后，值非 'null' 才提交) |
| `customerreserve2` | customerreserve2 | body | string | 否 | - | 客户预留信息/自选物流(来源 URL 参数 customerreserve，decodeURI 后，值非 'null' 才提交) |
| `expresstype` | expresstype | body | string | 否 | - | 货运方式/快递类型(来源 URL 参数 expresstype，decodeURI 后，值非 'null' 才提交) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定传 50) |
| `startTime` | startTime | body | string | 否 | - | 起始时间(来源 URL 参数 startDate) |
| `endTime` | endTime | body | string | 否 | - | 结束时间(来源 URL 参数 endDate) |
| `page` | page | body | number | 否 | - | 当前页码(仅分页回调携带，取自分页控件 api.getCurrent()；首次查询不传) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `content` | string | 标题/汇总提示 HTML(写入 #titleDetail) | - |
| `obj` | object | 业务数据对象(为空时总数显示 0) | - |
| `obj.count` | number | 满足条件的订单总条数(写入 #total) | - |
| `obj.countPage` | number | 总页数(传入分页控件 pageCount) | - |
| `obj.result[]` | array | 订单列表 | - |
| `obj.result[][0]` | string | 订单编号(主键，跳转 /mabang-new/orderdetail.html?orderid=) | - |
| `obj.result[][1]` | string | 订单状态 | - |
| `obj.result[][2]` | string | 订单来源/订单属性(为 null 时前端显示"正常订单") | - |
| `obj.result[][3]` | string | 店铺(类型)；含 factorymarket/seebee/jumia 时显示平台订单号 | - |
| `obj.result[][4]` | string | 客户ID | - |
| `obj.result[][5]` | string | 货币类型/币种符号(与原金额拼接展示) | - |
| `obj.result[][6]` | number | 原订单金额 | - |
| `obj.result[][7]` | number | 订单金额(RMB) | - |
| `obj.result[][8]` | number | 运费(RMB；与 moneyask 相加为总价) | - |
| `obj.result[][9]` | string | 客户预留信息/自选物流 | - |
| `obj.result[][10]` | string | 客户国家 | - |
| `obj.result[][11]` | string | 自选物流(邮政服务；前端截取前13字符，超长加"...") | - |
| `obj.result[][12]` | string | 货运方式 | - |
| `obj.result[][13]` | string | FPX 货运方式(非空时显示) | - |
| `obj.result[][14]` | string | 货运单号/国内单号(非空时显示) | - |
| `obj.result[][15]` | string | 订单日期(为 null 时显示"--") | - |
| `obj.result[][16]` | string | 交易号 | - |
| `obj.result[][17]` | string | 平台订单号(仅 shoptype 含 factorymarket/seebee/jumia 时显示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
