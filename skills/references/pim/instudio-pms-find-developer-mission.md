# mbs pim instudio-pms-find-developer-mission

开发池列表查询：开发池列表查询

## 用法

```bash
mbs pim instudio-pms-find-developer-mission [--currentPage <integer>] [--pageSize <integer>] [--startIndex <integer>] [--rejectType <string>] [--totalSaleCountMin <number>] [--totalSaleCountMax <number>] [--onlineDateStart <string>] [--onlineDateEnd <string>] [--categoryOne <string>] [--categoryTwo <string>] [--sevenSaleCountMin <number>] [--sevenSaleCountMax <number>] [--salePriceUsdMin <number>] [--salePriceUsdMax <number>] [--productKeyword <string>] [--flag <string>] [--developer <string>] [--auditor <string>] [--orderBy <string>] [--developerStatus <string>] [--isPush <boolean>] [--createDateStart <string>] [--createeDateEnd <string>] [--developerCon <string>] [--recommendSource <string>] [--pushName <string>] [--developType <string>] [--exportFlag <string>] [--developList <array<string>>] [--managerEmpList <array<string>>] [--bigChief <integer>] [--claimSaler <string>] [--oper <string>] [--devTeam <array<string>>] [--depart <string>] [--spu <string>] [--tabValue <integer>] [--companyid <integer>] [--develops <array<string>>] [--managerCatgegorys <array<string>>] [--teamId <string>] [--developerList <array<string>>] [--productNature <integer>] [--auditName1 <string>] [--auditName2 <string>] [--messionId <string>] [--auditDateTimeBegin <string>] [--auditDateTimeEnd <string>] [--messionIdList <array<string>>] [--productAttribute <string>] [--applicablePlatform <string>] [--managerName <string>] [--applicablePlatformName <string>] [--audit <string>] [--developTypeTaskPool <integer>] [--spuList <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/findDeveloperMission`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `rejectType` | rejectType | body | string | 否 | - | 拒绝类型： 1：一审拒绝，2： 二审拒绝 |
| `totalSaleCountMin` | totalSaleCountMin | body | number | 否 | - | 总销量范围最小值 |
| `totalSaleCountMax` | totalSaleCountMax | body | number | 否 | - | 总销量范围最大值 |
| `onlineDateStart` | onlineDateStart | body | string | 否 | - | 上架上架开始时间 |
| `onlineDateEnd` | onlineDateEnd | body | string | 否 | - | 上架上架结束时间 |
| `categoryOne` | categoryOne | body | string | 否 | - | 一级分类 |
| `categoryTwo` | categoryTwo | body | string | 否 | - | 二级分类 |
| `sevenSaleCountMin` | sevenSaleCountMin | body | number | 否 | - | 7天销量范围最小值 |
| `sevenSaleCountMax` | sevenSaleCountMax | body | number | 否 | - | 7天销量范围最大值 |
| `salePriceUsdMin` | salePriceUsdMin | body | number | 否 | - | 售价范围最小值 |
| `salePriceUsdMax` | salePriceUsdMax | body | number | 否 | - | 售价范围最大值 |
| `productKeyword` | productKeyword | body | string | 否 | - | 商品关键字 |
| `flag` | flag | body | string | 否 | - | 1 我的; 2 最新；3 公共池 4 回收站 |
| `developer` | developer | body | string | 否 | - | 开发员 |
| `auditor` | auditor | body | string | 否 | - | 审核人 |
| `orderBy` | orderBy | body | string | 否 | - | 排序字段 |
| `developerStatus` | developerStatus | body | string | 否 | - | 开发状态(1 未提交; 2 已开发; 3 已放弃; 4 待审核；5 审核通过; 6 审核不通过) |
| `isPush` | isPush | body | boolean | 否 | - | true 销售推送的 |
| `createDateStart` | createDateStart | body | string | 否 | - | 创建开始时间 |
| `createeDateEnd` | createeDateEnd | body | string | 否 | - | 创建结束时间 |
| `developerCon` | developerCon | body | string | 否 | - | 开发员搜索专用 |
| `recommendSource` | recommendSource | body | string | 否 | - | 推荐来源 |
| `pushName` | pushName | body | string | 否 | - | 反推人名 |
| `developType` | developType | body | string | 否 | - | Develop类型（字段名推断,语义待核实） |
| `exportFlag` | exportFlag | body | string | 否 | - | 导出标志（字段名推断,语义待核实） |
| `developList` | developList | body | array<string> | 否 | - | Develop列表（字段名推断,语义待核实） |
| `managerEmpList` | managerEmpList | body | array<string> | 否 | - | 管理EMP列表（字段名推断,语义待核实） |
| `bigChief` | bigChief | body | integer | 否 | - | BIG主管（字段名推断,语义待核实） |
| `claimSaler` | claimSaler | body | string | 否 | - | ClaimSaler（字段名推断,语义待核实） |
| `oper` | oper | body | string | 否 | - | 操作（字段名推断,语义待核实） |
| `devTeam` | devTeam | body | array<string> | 否 | - | DEV团队（字段名推断,语义待核实） |
| `depart` | depart | body | string | 否 | - | Depart（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `tabValue` | tabValue | body | integer | 否 | - | 1:所有 2:采样待审核 3:采样审核通过 4:未认领 5:已认领6:采样未付款 |
| `companyid` | companyid | body | integer | 否 | - | 地区ID |
| `develops` | develops | body | array<string> | 否 | - | Develops（字段名推断,语义待核实） |
| `managerCatgegorys` | managerCatgegorys | body | array<string> | 否 | - | 管理Catgegorys（字段名推断,语义待核实） |
| `teamId` | teamId | body | string | 否 | - | 小组id |
| `developerList` | developerList | body | array<string> | 否 | - | 小组开发人员list |
| `productNature` | productNature | body | integer | 否 | - | 产品性质:1自建 0:跟卖 |
| `auditName1` | auditName1 | body | string | 否 | - | 一审人 |
| `auditName2` | auditName2 | body | string | 否 | - | 二审人 |
| `messionId` | messionId | body | string | 否 | - | messionId |
| `auditDateTimeBegin` | auditDateTimeBegin | body | string | 否 | - | 二审审核开始时间 |
| `auditDateTimeEnd` | auditDateTimeEnd | body | string | 否 | - | 二审审核结束时间 |
| `messionIdList` | messionIdList | body | array<string> | 否 | - | MessionID列表（字段名推断,语义待核实） |
| `productAttribute` | productAttribute | body | string | 否 | - | 商品属性 |
| `applicablePlatform` | applicablePlatform | body | string | 否 | - | 适用平台 |
| `managerName` | managerName | body | string | 否 | - | 经理名称 |
| `applicablePlatformName` | applicablePlatformName | body | string | 否 | - | 适用平台名称 |
| `audit` | audit | body | string | 否 | - | 待1审是1 待二审是2 |
| `developTypeTaskPool` | developTypeTaskPool | body | integer | 否 | - | 开发任务池,开发类型 |
| `spuList` | spuList | body | array<string> | 否 | - | SPU列表（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值,条件判断，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值,条件判断,解构赋值，行号待核实） | - |
| `obj.obj.nextCursor` | string | 下一个Cursor（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.previousCursor` | string | PreviousCursor（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.list[]` | array | 当前页数据列表。前端使用：是（取值，行号待核实） | - |
| `obj.obj.pages` | string | Pages（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.total` | string | 总数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
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
