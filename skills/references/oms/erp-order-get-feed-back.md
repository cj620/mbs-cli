<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-feed-back

订单评价(反馈)查询：订单详情页加载时根据订单号查询该订单的客户评价(反馈)列表，返回好评/中评/差评类型、评价内容、评价时间及星期，前端渲染于「订单评价」卡片。

## 用法

```bash
mbs oms erp-order-get-feed-back --orderid <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getFeedBack`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderid` | orderid | query | string | 是 | - | 订单号(订单ID)。来源：页面 URL query 参数 GetQueryString("orderid")，以 query string 拼接在接口 URL 末尾 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(其余接口统一约定，本接口前端未显式判码) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 订单评价(反馈)列表；为空时前端置为 [] 且卡片不展示 | - |
| `obj[][0]` | string | 评价类型枚举。好评(绿底)/中评(黄底)/差评(红底)，前端据此渲染徽标 | - |
| `obj[][1]` | string | 评价内容(文本) | - |
| `obj[][2]` | string | 评价时间(原字段拼写即 feadbackTime，前端原样展示) | - |
| `obj[][3]` | string | 评价时间对应的星期(如 星期一)，紧随时间展示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
