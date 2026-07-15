# mbs pim instudio-pms-get-purchase-order-info

开发任务采样备货查看1688订单：开发任务采样备货查看1688订单

## 用法

```bash
mbs pim instudio-pms-get-purchase-order-info [--id <integer>] [--shopId <integer>] [--shopName <string>] [--orderId <string>] [--amount <number>] [--status <integer>] [--offline <integer>] [--descr <string>] [--oper <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/getPurchaseOrderInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `shopId` | shopId | body | integer | 否 | - | 店铺ID |
| `shopName` | shopName | body | string | 否 | - | 店铺名称 |
| `orderId` | orderId | body | string | 否 | - | 订单号 |
| `amount` | amount | body | number | 否 | - | 采样金额 |
| `status` | status | body | integer | 否 | - | 状态 1:待审核 2:审核通过3:审核拒绝 |
| `offline` | offline | body | integer | 否 | - | 线下采样 0和null表示线上 1表示线下 |
| `descr` | descr | body | string | 否 | - | 备注 |
| `oper` | oper | body | string | 否 | - | 操作人 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
