<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-borrow-order-log-fm

借用订单日志查询：按订单时间区间、平邮/挂号类型、订单编号、借用运单号、借用物流方式、国家等条件，分页查询订单的借用运单操作日志列表，返回总条数/总页数及每条日志的订单、借用运单、操作人等信息。

## 用法

```bash
mbs oms erp-order-borrow-order-log-fm [--ordertimestart <string>] [--ordertimeend <string>] [--channel <string>] [--orderId <string>] [--borrowExpressId <string>] [--borrowExpressType <string>] [--country <string>] --currPage <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ERPOrder/borrowOrderLogFm`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `ordertimestart` | ordertimestart | body | string | 否 | - | 订单开始时间(来源控件 #ordertimestart 日期框,格式 yyyy-MM-dd) |
| `ordertimeend` | ordertimeend | body | string | 否 | - | 订单结束时间(来源控件 #ordertimeend 日期框,格式 yyyy-MM-dd) |
| `channel` | channel | body | string | 否 | - | 类型(来源 #channel 下拉)。枚举:平邮 / 挂号；空=全部 |
| `orderId` | orderId | body | string | 否 | - | 订单编号(来源 #orderId 输入框) |
| `borrowExpressId` | borrowExpressId | body | string | 否 | - | 借用运单号(来源 #borrowExpressId 输入框) |
| `borrowExpressType` | borrowExpressType | body | string | 否 | - | 借用物流方式(来源 #borrowExpressType 输入框) |
| `country` | country | body | string | 否 | - | 国家(来源 #country 输入框) |
| `currPage` | currPage | body | number | 是 | - | 当前页码(首次固定 1,翻页取分页控件 api.getCurrent()) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定 50) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准外层,本页未直接使用)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准外层,本页未直接使用)(待人工确认) | - |
| `obj` | object | 业务数据对象(无则前端置空列表、总数显示0) | - |
| `obj.total` | number | 满足条件的日志总条数(显示于 #total) | - |
| `obj.pages` | number | 总页数(赋给 _pagecount 供分页控件) | - |
| `obj.list[]` | array | 借用订单日志列表 | - |
| `obj.list[][0]` | string | 交易单号 | - |
| `obj.list[][1]` | string | 订单编号 | - |
| `obj.list[][2]` | string | 订单日期 | - |
| `obj.list[][3]` | number | 订单延迟天数(模板后缀"天") | - |
| `obj.list[][4]` | string | 订单状态 | - |
| `obj.list[][5]` | string | 平邮/挂号(物流类型) | - |
| `obj.list[][6]` | string | 国家 | - |
| `obj.list[][7]` | string | 已借用运单号 | - |
| `obj.list[][8]` | string | 借用物流方式 | - |
| `obj.list[][9]` | number | 原运费(元,显示于行 title 提示) | - |
| `obj.list[][10]` | string | 原店铺(显示于行 title 提示) | - |
| `obj.list[][11]` | string | 原订单号(显示于行 title 提示) | - |
| `obj.list[][12]` | string | 操作人 | - |
| `obj.list[][13]` | string | 操作时间 | - |
| `obj.list[][14]` | string | 描述 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
