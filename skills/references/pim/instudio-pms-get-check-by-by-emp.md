<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-check-by-by-emp

按按EMP查询校验：按按EMP查询校验(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-get-check-by-by-emp
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/getCheckByByEmp`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值,条件判断，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值,条件判断,解构赋值，行号待核实） | - |
| `obj.obj.pages` | string | Pages（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.total` | string | 总数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list` | string | 列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.totalPages` | string | 总数Pages（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rows` | string | 行数据（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productId` | string | 商品ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.orderId` | string | 订单ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sid` | string | 店铺ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.customerReq1` | string | 客户REQ1（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.customerReq2` | string | 客户REQ2（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.isConfirm` | string | 是否确认（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.checked` | string | Checked（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.expandState` | string | Expand状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.date` | string | 日期（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.statusDescription` | string | 状态描述（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.dataset` | string | Dataset（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tradeOrderId` | string | 交易订单ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.detail` | string | 详情（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleLeader` | string | 销售组长（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.SHOPID` | string | 店铺ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.SHOPNAME` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.trackingNumber` | string | 跟踪编号（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopName` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.personResponsible` | string | 人员Responsible（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopManager` | string | 店铺管理（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.totalExpressAmount` | string | 总数快递金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.totalCostPrice` | string | 总数成本价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.packageId` | string | 包裹ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.createdOn` | string | 创建（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.orderTime` | string | 订单时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.downloadTime` | string | 下载时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showBg` | string | 展示BG（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.STORAGE` | string | 仓储（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.STORAGESAVENUM` | string | Storagesavenum（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.STORAGEINTRANSIT` | string | Storageintransit（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.returnTypeName` | string | 退货类型名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.countryName` | string | 国家名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.cancelReason` | string | 取消原因（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.replace` | string | Replace（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（条件判断，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
