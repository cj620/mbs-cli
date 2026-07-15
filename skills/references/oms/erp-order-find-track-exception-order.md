# mbs oms erp-order-find-track-exception-order

投递失败(物流轨迹异常)订单列表查询：客户评价(差评)管理页「投递失败订单」标签页的分页列表查询：按店铺、店长、异常类型(固定4)、查询类型(固定"客服")等条件，查询物流投递失败/轨迹异常的订单，返回订单列表及分页信息。

## 用法

```bash
mbs oms erp-order-find-track-exception-order [--shopid <string>] [--shopManager <string>] [--expressTypeId <string>] [--exceptionType <string>] [--expressTimeStart <string>] [--expressTimeEnd <string>] [--queryType <string>] [--currPage <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findTrackExceptionOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopid` | shopid | body | string | 否 | - | 店铺ID（来源控件 #shopName7，本页 DOM 中无该控件，取值为 undefined，待人工确认） |
| `shopManager` | shopManager | body | string | 否 | - | 店长/销售负责人（来源控件 #saleLeader7，本页 DOM 中无该控件，取值为 undefined，待人工确认） |
| `expressTypeId` | expressTypeId | body | string | 否 | - | 物流渠道(物流方式)ID（当前固定传空字符串） |
| `exceptionType` | exceptionType | body | string | 否 | - | 异常类型（固定 '4'，代表物流投递失败/轨迹异常；其他枚举待人工确认） |
| `expressTimeStart` | expressTimeStart | body | string | 否 | - | 发货时间-起始（当前固定传空字符串） |
| `expressTimeEnd` | expressTimeEnd | body | string | 否 | - | 发货时间-结束（当前固定传空字符串） |
| `queryType` | queryType | body | string | 否 | - | 查询类型/查询角色（固定 '客服'） |
| `currPage` | currPage | body | number | 否 | - | 当前页码（currPage || 1，首次查询及标签切换为 1，分页回调传 api.getCurrent()；每页固定 10 条） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（code == 200 才渲染列表） | - |
| `obj` | object | 业务数据对象（分页结果） | - |
| `obj.list[]` | array | 投递失败订单列表 | - |
| `obj.list[][0]` | string | 订单编号（行 data-id，并拼接 /mabang-new/orderdetail.html?orderid= 跳转详情；查看轨迹/标记异常/展开明细均以此为参数） | - |
| `obj.list[][1]` | string | 订单状态 | - |
| `obj.list[][2]` | string | 发货单号(物流追踪号)（拼接 https://t.17track.net/en#nums= 跳转17track查询） | - |
| `obj.list[][3]` | string | 发货时间 | - |
| `obj.list[][4]` | string | 延迟类型/异常描述 | - |
| `obj.list[][5]` | string | 店铺名称 | - |
| `obj.list[][6]` | string | 店长(店铺负责人，与 shopName 一起展示 店铺(店长)) | - |
| `obj.list[][7]` | string | 物流渠道(物流方式) | - |
| `obj.list[][8]` | number | 订单金额(RMB)（前端 toFixed(2) 展示，故应为数值类型） | - |
| `obj.list[][9]` | string | 订单日期 | - |
| `obj.list[][10]` | string | 拉单时间(创建订单时间) | - |
| `obj.list[][11]` | number | 运费 | - |
| `obj.list[][12]` | string | 交易单号 | - |
| `obj.list[][13]` | string | 订单备注（{{if v.content}} 存在时单独成行展示「订单备注:」） | - |
| `obj.pages` | number | 总页数（用于初始化分页 deliverFailedPaging(obj?.pages)） | - |
| `obj.total` | number | 总条数（展示到 #deliverFailedTotal 与标签角标 #deliverFailedSpan，缺省 0） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
