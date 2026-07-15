# mbs oms erp-order-borrow-order-log

借用订单日志查询：按订单时间区间、物流类型(平邮/挂号)、订单编号、借用运单号、借用物流方式、国家等条件分页查询借用订单操作日志，返回订单基本信息、借用运单信息及操作人/操作时间/描述。

## 用法

```bash
mbs oms erp-order-borrow-order-log [--ordertimestart <string>] [--ordertimeend <string>] [--channel <string>] [--orderId <string>] [--borrowExpressId <string>] [--borrowExpressType <string>] [--country <string>] --currPage <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ERPOrder/borrowOrderLog`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `ordertimestart` | ordertimestart | body | string | 否 | - | 订单开始时间(来源控件 #ordertimestart 日期选择器；格式 YYYY-MM-DD) |
| `ordertimeend` | ordertimeend | body | string | 否 | - | 订单结束时间(来源控件 #ordertimeend 日期选择器；格式 YYYY-MM-DD) |
| `channel` | channel | body | string | 否 | - | 物流类型(来源控件 #channel 下拉；枚举：空=全部 / 平邮 / 挂号) |
| `orderId` | orderId | body | string | 否 | - | 订单编号(来源控件 #orderId 输入框) |
| `borrowExpressId` | borrowExpressId | body | string | 否 | - | 借用运单号(来源控件 #borrowExpressId 输入框) |
| `borrowExpressType` | borrowExpressType | body | string | 否 | - | 借用物流方式(来源控件 #borrowExpressType 输入框) |
| `country` | country | body | string | 否 | - | 国家(来源控件 #country 输入框) |
| `currPage` | currPage | body | number | 是 | - | 当前页码(首次固定为1，分页回调取 api.getCurrent()) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(固定为50) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包装字段，前端本页未直接读取，(待人工确认)) | - |
| `desc` | string | 响应提示信息(统一响应包装字段，(待人工确认)) | - |
| `obj` | object | 业务数据对象(前端据 data.obj 判断是否有数据) | - |
| `obj.pages` | number | 总页数(前端赋给 _pagecount 用于分页控件) | - |
| `obj.total` | number | 满足条件的记录总数(前端展示「共 N 条」) | - |
| `obj.list[]` | array | 借用订单日志列表 | - |
| `obj.list[][0]` | string | 交易单号 | - |
| `obj.list[][1]` | string | 订单编号 | - |
| `obj.list[][2]` | string | 订单日期/订单时间 | - |
| `obj.list[][3]` | number | 订单延迟天数(前端展示为「N天」) | - |
| `obj.list[][4]` | string | 订单状态 | - |
| `obj.list[][5]` | string | 物流类型(平邮/挂号) | - |
| `obj.list[][6]` | string | 国家 | - |
| `obj.list[][7]` | string | 已借用运单号 | - |
| `obj.list[][8]` | string | 借用物流方式 | - |
| `obj.list[][9]` | number | 原运费(元)(行 title 悬浮展示「原运费N元」) | - |
| `obj.list[][10]` | string | 原店铺(行 title 悬浮展示「原店铺X」) | - |
| `obj.list[][11]` | string | 原订单号(行 title 悬浮展示「原订单号X」) | - |
| `obj.list[][12]` | string | 操作人 | - |
| `obj.list[][13]` | string | 操作时间 | - |
| `obj.list[][14]` | string | 描述 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
