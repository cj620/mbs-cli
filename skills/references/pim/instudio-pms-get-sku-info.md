<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-sku-info

查询SKU信息：查询SKU信息(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-get-sku-info [--id <integer>] [--projectId <integer>] [--code <string>] [--name <string>] [--logisticsType <integer>] [--wareHouseType <integer>] [--nowScheduleType <integer>] [--nowSchedule <string>] [--nextSchedule <string>] [--budgeSkuCnt <integer>] [--budgetSkuCnt <string>] [--skuCnt <integer>] [--budgeAmount <number>] [--budgetAmount <string>] [--lastAmount <number>] [--budgeWeight <integer>] [--budgetWeight <string>] [--totalWeight <integer>] [--startTime <string>] [--endTime <string>] [--realEndTime <string>] [--realEndTimeUnix <integer>] [--isFinished <integer>] [--deliveryTime <string>] [--publishTime <string>] [--dateCode <string>] [--timeCreated <string>] [--selectProductEndOpId <integer>] [--selectProductEndOpName <string>] [--selectProductEndTime <string>] [--remark <string>] [--packageRemark <string>] [--receiveInfo <string>] [--extend <string>] [--dateCodeNumber <integer>] [--opUserId <string>] [--opUserName <string>] [--skuList <array<string>>] [--addProductCntStr <string>] [--skuStr <string>] [--taskPurchaseType <integer>] [--createby <string>] [--orderId <string>] [--waitAuditSkuCnt <integer>] [--warehouseTypeText <string>] [--logisticsTypeText <string>] [--outStockCount <integer>] [--warehouseType <string>] [--paohuoRate <number>] [--startTimeFormat <string>] [--deliveryTimeFormat <string>] [--publishTimeFormat <string>] [--expressFee <number>] [--orderIdList <array<string>>] [--taskCode <string>] [--isSelectProductEnd <integer>] [--verifyStatus <string>] [--verifyTime <string>] [--verifyFaliedReason <string>] [--resultStatus <string>] [--warehouseTypeId <integer>] [--orderInfoList <array<object>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/hwcDevelopmentProject/getSkuInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `projectId` | projectId | body | integer | 否 | - | 项目ID（字段名推断,语义待核实） |
| `code` | code | body | string | 否 | - | 编码（字段名推断,语义待核实） |
| `name` | name | body | string | 否 | - | 名称（字段名推断,语义待核实） |
| `logisticsType` | logisticsType | body | integer | 否 | - | 物流类型（字段名推断,语义待核实） |
| `wareHouseType` | wareHouseType | body | integer | 否 | - | WAREHouse类型（字段名推断,语义待核实） |
| `nowScheduleType` | nowScheduleType | body | integer | 否 | - | NOW定时类型（字段名推断,语义待核实） |
| `nowSchedule` | nowSchedule | body | string | 否 | - | NOW定时（字段名推断,语义待核实） |
| `nextSchedule` | nextSchedule | body | string | 否 | - | 下一个定时（字段名推断,语义待核实） |
| `budgeSkuCnt` | budgeSkuCnt | body | integer | 否 | - | BudgeSKUCNT（字段名推断,语义待核实） |
| `budgetSkuCnt` | budgetSkuCnt | body | string | 否 | - | 预算SKUCNT（字段名推断,语义待核实） |
| `skuCnt` | skuCnt | body | integer | 否 | - | SKUCNT（字段名推断,语义待核实） |
| `budgeAmount` | budgeAmount | body | number | 否 | - | Budge金额（字段名推断,语义待核实） |
| `budgetAmount` | budgetAmount | body | string | 否 | - | 预算金额（字段名推断,语义待核实） |
| `lastAmount` | lastAmount | body | number | 否 | - | 最近金额（字段名推断,语义待核实） |
| `budgeWeight` | budgeWeight | body | integer | 否 | - | Budge重量（字段名推断,语义待核实） |
| `budgetWeight` | budgetWeight | body | string | 否 | - | 预算重量（字段名推断,语义待核实） |
| `totalWeight` | totalWeight | body | integer | 否 | - | 总重量（字段名推断,语义待核实） |
| `startTime` | startTime | body | string | 否 | - | 开始时间（字段名推断,语义待核实） |
| `endTime` | endTime | body | string | 否 | - | 结束时间（字段名推断,语义待核实） |
| `realEndTime` | realEndTime | body | string | 否 | - | 实际结束时间（字段名推断,语义待核实） |
| `realEndTimeUnix` | realEndTimeUnix | body | integer | 否 | - | 实际结束时间UNIX（字段名推断,语义待核实） |
| `isFinished` | isFinished | body | integer | 否 | - | 是否Finished（字段名推断,语义待核实） |
| `deliveryTime` | deliveryTime | body | string | 否 | - | 配送时间（字段名推断,语义待核实） |
| `publishTime` | publishTime | body | string | 否 | - | 刊登时间（字段名推断,语义待核实） |
| `dateCode` | dateCode | body | string | 否 | - | 日期编码（字段名推断,语义待核实） |
| `timeCreated` | timeCreated | body | string | 否 | - | 时间创建（字段名推断,语义待核实） |
| `selectProductEndOpId` | selectProductEndOpId | body | integer | 否 | - | 查询商品结束OPID（字段名推断,语义待核实） |
| `selectProductEndOpName` | selectProductEndOpName | body | string | 否 | - | 查询商品结束OP名称（字段名推断,语义待核实） |
| `selectProductEndTime` | selectProductEndTime | body | string | 否 | - | 查询商品结束时间（字段名推断,语义待核实） |
| `remark` | remark | body | string | 否 | - | 备注（字段名推断,语义待核实） |
| `packageRemark` | packageRemark | body | string | 否 | - | 包裹备注（字段名推断,语义待核实） |
| `receiveInfo` | receiveInfo | body | string | 否 | - | 收货信息（字段名推断,语义待核实） |
| `extend` | extend | body | string | 否 | - | Extend（字段名推断,语义待核实） |
| `dateCodeNumber` | dateCodeNumber | body | integer | 否 | - | 日期编码编号（字段名推断,语义待核实） |
| `opUserId` | opUserId | body | string | 否 | - | OP用户ID（字段名推断,语义待核实） |
| `opUserName` | opUserName | body | string | 否 | - | OP用户名称（字段名推断,语义待核实） |
| `skuList` | skuList | body | array<string> | 否 | - | SKU列表（字段名推断,语义待核实） |
| `addProductCntStr` | addProductCntStr | body | string | 否 | - | 新增商品CNT字符串（字段名推断,语义待核实） |
| `skuStr` | skuStr | body | string | 否 | - | SKU字符串（字段名推断,语义待核实） |
| `taskPurchaseType` | taskPurchaseType | body | integer | 否 | - | 任务采购类型（字段名推断,语义待核实） |
| `createby` | createby | body | string | 否 | - | Createby（字段名推断,语义待核实） |
| `orderId` | orderId | body | string | 否 | - | 订单ID（字段名推断,语义待核实） |
| `waitAuditSkuCnt` | waitAuditSkuCnt | body | integer | 否 | - | WAIT审核SKUCNT（字段名推断,语义待核实） |
| `warehouseTypeText` | warehouseTypeText | body | string | 否 | - | 仓库类型文本（字段名推断,语义待核实） |
| `logisticsTypeText` | logisticsTypeText | body | string | 否 | - | 物流类型文本（字段名推断,语义待核实） |
| `outStockCount` | outStockCount | body | integer | 否 | - | 出库库存数量（字段名推断,语义待核实） |
| `warehouseType` | warehouseType | body | string | 否 | - | 仓库类型（字段名推断,语义待核实） |
| `paohuoRate` | paohuoRate | body | number | 否 | - | Paohuo比率（字段名推断,语义待核实） |
| `startTimeFormat` | startTimeFormat | body | string | 否 | - | 开始时间格式（字段名推断,语义待核实） |
| `deliveryTimeFormat` | deliveryTimeFormat | body | string | 否 | - | 配送时间格式（字段名推断,语义待核实） |
| `publishTimeFormat` | publishTimeFormat | body | string | 否 | - | 刊登时间格式（字段名推断,语义待核实） |
| `expressFee` | expressFee | body | number | 否 | - | 快递费用（字段名推断,语义待核实） |
| `orderIdList` | orderIdList | body | array<string> | 否 | - | 订单ID列表（字段名推断,语义待核实） |
| `taskCode` | taskCode | body | string | 否 | - | 任务编码（字段名推断,语义待核实） |
| `isSelectProductEnd` | isSelectProductEnd | body | integer | 否 | - | 是否查询商品结束（字段名推断,语义待核实） |
| `verifyStatus` | verifyStatus | body | string | 否 | - | 验证状态（字段名推断,语义待核实） |
| `verifyTime` | verifyTime | body | string | 否 | - | 验证时间（字段名推断,语义待核实） |
| `verifyFaliedReason` | verifyFaliedReason | body | string | 否 | - | 验证Falied原因（字段名推断,语义待核实） |
| `resultStatus` | resultStatus | body | string | 否 | - | 结果状态（字段名推断,语义待核实） |
| `warehouseTypeId` | warehouseTypeId | body | integer | 否 | - | 仓库类型ID（字段名推断,语义待核实） |
| `orderInfoList` | orderInfoList | body | array<object> | 否 | - | 订单信息列表（字段名推断,语义待核实） |

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
