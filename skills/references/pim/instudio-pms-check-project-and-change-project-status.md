# mbs pim instudio-pms-check-project-and-change-project-status

校验项目变更项目状态：校验项目变更项目状态(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-check-project-and-change-project-status [--projectId <string>] [--verifyStatus <string>] [--reason <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/hwcDevelopmentProject/checkProjectAndChangeProjectStatus`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `projectId` | projectId | body | string | 否 | - | 项目ID（字段名推断,语义待核实） |
| `verifyStatus` | verifyStatus | body | string | 否 | - | 验证状态（字段名推断,语义待核实） |
| `reason` | reason | body | string | 否 | - | 原因（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值,条件判断，行号待核实） | - |
| `obj.obj.success` | string | 成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.datas` | string | 数据（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.address` | string | 地址（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.stats` | string | 统计（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pagination` | string | Pagination（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.TimeOutFlag` | string | 时间出库标志（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.project` | string | 项目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.failedSkus` | string | 失败SKU列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.taskSku` | string | 任务SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.props` | string | Props（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.warehouseAddress` | string | 仓库地址（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.auditFlag` | string | 审核标志（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.verifyStatus` | string | 验证状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.reason` | string | 原因（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.verifyTime` | string | 验证时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.fbaFlag` | string | FBA标志（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.purchaseBuyer` | string | 采购买家（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.audit` | string | 审核（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.successPurchase` | string | 成功采购（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.join` | string | JOIN（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.isSelectProductEnd` | string | 是否查询商品结束（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.selectProductEndOpName` | string | 查询商品结束OP名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.selectProductEndTime` | string | 查询商品结束时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.warehouseType` | string | 仓库类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.picture` | string | 图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.vNum` | string | 数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.selectProductType` | string | 查询商品类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.paohuoRate` | string | Paohuo比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sku` | string | SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.width` | string | 宽度（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.high` | string | HIGH（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.isWarehouseSku` | string | 是否仓库SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.costPrice` | string | 成本价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.weight` | string | 重量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.outerWarehouse` | string | Outer仓库（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.localWarehouse` | string | 本地仓库（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.referencePrice` | string | Reference价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.relatedProductPrice` | string | Related商品价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productProperty` | string | 商品属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.buyflag` | string | Buyflag（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.relatedProduct` | string | Related商品（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.packageRemark` | string | 包裹备注（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.operationView` | string | 操作查看（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.selectPersons` | string | 查询Persons（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.operatePerson` | string | 操作人员（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.addToProjectTime` | string | 新增项目时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.auditStatusText` | string | 审核状态文本（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.auditRemark` | string | 审核备注（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.addProductCnt` | string | 新增商品CNT（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.taskPurchaseType` | string | 任务采购类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.price` | string | 价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.url` | string | URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.faildSkus` | string | FaildSKU列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.failmsg` | string | Failmsg（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.city` | string | 城市（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.province` | string | 省份（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.oper` | string | 操作（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.phone` | string | 电话（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.zipCode` | string | 压缩包编码（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.addProductPrice` | string | 新增商品价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.property` | string | 属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.addSkuType` | string | 新增SKU类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platform` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.logisticsType` | string | 物流类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.budgetWeight` | string | 预算重量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.budgetAmount` | string | 预算金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.startTime` | string | 开始时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishTime` | string | 刊登时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.deliveryTime` | string | 配送时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.remark` | string | 备注（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.receiveInfo` | string | 收货信息（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopName` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.country2Code` | string | 国家2编码（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.nowSchedule` | string | NOW定时（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
