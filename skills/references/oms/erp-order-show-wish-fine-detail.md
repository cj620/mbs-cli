<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-show-wish-fine-detail

Wish罚款明细查询：按时间区间、店铺名、罚款类型分页查询 Wish 平台罚款明细列表，返回总条数、总页数及每条罚款记录(店铺、交易/订单ID、延迟天数、发生时间、罚款/扣减金额(美元/人民币)、是否撤销、罚款类型与状态)。

## 用法

```bash
mbs oms erp-order-show-wish-fine-detail [--dateFromStr <string>] [--dateToStr <string>] [--shopName <string>] [--type <string>] --currPage <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishFine/showWishFineDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `dateFromStr` | dateFromStr | query | string | 否 | - | 起始时间(罚款发生时间区间-起)，来自页面URL Query GetQueryString('dateFromStr') |
| `dateToStr` | dateToStr | query | string | 否 | - | 结束时间(罚款发生时间区间-止)，来自页面URL Query GetQueryString('dateToStr') |
| `shopName` | shopName | query | string | 否 | - | 店铺名(按店铺过滤)，来自页面URL Query GetQueryString('shopName') |
| `type` | type | query | string | 否 | - | 罚款类型(类型过滤，具体取值含义待人工确认)，来自页面URL Query GetQueryString('type') |
| `currPage` | currPage | query | number | 是 | - | 当前页码(从1开始；首次固定1，翻页取分页组件 api.getCurrent()；每页固定100条) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | number | 满足条件的罚款记录总条数(写入页面"共N条") | - |
| `pages` | number | 总页数(初始化分页组件 pageCount) | - |
| `list[]` | array | 罚款明细列表 | - |
| `list[][0]` | string | 店铺名 | - |
| `list[][1]` | string | 交易ID | - |
| `list[][2]` | string | 订单ID(前端拼接 /eshop/order.do?method=edit&orderid= 跳转订单详情) | - |
| `list[][3]` | number | 延迟天数 | - |
| `list[][4]` | string | 发生时间 | - |
| `list[][5]` | string | 罚款ID | - |
| `list[][6]` | number | 罚款金额(单位：美元) | - |
| `list[][7]` | number | 扣减金额(单位：美元) | - |
| `list[][8]` | number | 罚款金额(单位：人民币) | - |
| `list[][9]` | number | 扣减金额(单位：人民币) | - |
| `list[][10]` | string | 是否已撤销/冲正(IsReversed，取值含义待人工确认) | - |
| `list[][11]` | string | 罚款类型(文本，后端已转中文展示) | - |
| `list[][12]` | string | 罚款状态(文本，后端已转中文展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
