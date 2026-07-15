<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-ipm-project-info

海外仓计划列表：海外仓计划列表

## 用法

```bash
mbs pim instudio-pms-ipm-project-info --projectCode <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/ipmProjectInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `projectCode` | projectCode | query | string | 是 | - | 项目编码（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].listId[]` | array | 列表ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].listId[]` | integer | - | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].productName` | string | 产品名称。前端使用：待核实 | - |
| `obj.obj[].productNameZh` | string | 产品名称。前端使用：待核实 | - |
| `obj.obj[].platformName` | string | 平台名称。前端使用：待核实 | - |
| `obj.obj[].productUrl` | string | 产品平台地址。前端使用：待核实 | - |
| `obj.obj[].imageUrl` | string | 图片地址。前端使用：待核实 | - |
| `obj.obj[].salePriceUsd` | number | 美元售价。前端使用：待核实 | - |
| `obj.obj[].salePriceUsdStr` | string | 美元售价。前端使用：待核实 | - |
| `obj.obj[].favorableRate` | number | 好评率。前端使用：待核实 | - |
| `obj.obj[].totalSaleCount` | integer | 总销量。前端使用：待核实 | - |
| `obj.obj[].sevenSaleCount` | integer | 7天销量。前端使用：待核实 | - |
| `obj.obj[].bsrRank` | integer | bsr排名。前端使用：待核实 | - |
| `obj.obj[].commentCount` | integer | 评论数。前端使用：待核实 | - |
| `obj.obj[].onlineDate` | string | 上线日期。前端使用：待核实 | - |
| `obj.obj[].developer` | string | 开发员。前端使用：待核实 | - |
| `obj.obj[].developerStatus` | integer | 开发状态(1 未提交; 2 已开发; 3 已放弃; 4 待审核；5 审核通过; 6 审核不通过)。前端使用：待核实 | - |
| `obj.obj[].abandonReason` | string | 放弃原因。前端使用：待核实 | - |
| `obj.obj[].abandonReasonRemark` | string | 放弃原因备注。前端使用：待核实 | - |
| `obj.obj[].abandonDate` | string | 放弃时间。前端使用：待核实 | - |
| `obj.obj[].createdBy` | string | 创建人。前端使用：待核实 | - |
| `obj.obj[].createdOn` | string | 创建时间。前端使用：待核实 | - |
| `obj.obj[].categoryParentid` | string | 一级产品分类ID。前端使用：待核实 | - |
| `obj.obj[].categoryId` | string | 二级产品分类ID。前端使用：待核实 | - |
| `obj.obj[].categoryOneName` | string | 一级分类名称。前端使用：待核实 | - |
| `obj.obj[].categoryTwoName` | string | 二级分类名称。前端使用：待核实 | - |
| `obj.obj[].onlineDateStr` | string | 上线日期。前端使用：待核实 | - |
| `obj.obj[].abandonDateStr` | string | 放弃时间。前端使用：待核实 | - |
| `obj.obj[].createdOnStr` | string | 创建时间。前端使用：待核实 | - |
| `obj.obj[].iconUrl` | string | icon链接。前端使用：待核实 | - |
| `obj.obj[].notPassReason` | string | 不通过原因。前端使用：待核实 | - |
| `obj.obj[].auditor` | string | 审核人。前端使用：待核实 | - |
| `obj.obj[].auditor2` | string | 审核人。前端使用：待核实 | - |
| `obj.obj[].auditDate` | string | 审核日期。前端使用：待核实 | - |
| `obj.obj[].auditDate2` | string | 审核日期。前端使用：待核实 | - |
| `obj.obj[].auditDateStr` | string | 审核日期。前端使用：待核实 | - |
| `obj.obj[].verityRemark` | string | 审核通过备注。前端使用：待核实 | - |
| `obj.obj[].tort` | integer | 侵权（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].createdOnStr1` | string | 创建字符串1（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].auditDateStr1` | string | 审核日期字符串1（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].auditDateStr2` | string | 审核日期字符串2（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].createByStr` | string | 创建人字符串（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].departmentId` | string | 部门id。前端使用：待核实 | - |
| `obj.obj[].goodsSupply` | integer | 1:已找到货源。前端使用：待核实 | - |
| `obj.obj[].saleCurrency` | string | 币种。前端使用：待核实 | - |
| `obj.obj[].productAttribute` | string | 商品属性。前端使用：待核实 | - |
| `obj.obj[].productAttributeCN` | string | 商品属性 -中文名称。前端使用：待核实 | - |
| `obj.obj[].presalePrice` | number | 预售估价。前端使用：待核实 | - |
| `obj.obj[].mainKeyword` | string | 主关键词。前端使用：待核实 | - |
| `obj.obj[].differentiation` | string | 差异化。前端使用：待核实 | - |
| `obj.obj[].profitRate` | string | 利润率。前端使用：待核实 | - |
| `obj.obj[].freightWay` | string | 货运方式。前端使用：待核实 | - |
| `obj.obj[].operationView` | string | 运营意见。前端使用：待核实 | - |
| `obj.obj[].operationView1` | string | 运营意见。前端使用：待核实 | - |
| `obj.obj[].shipCycle` | string | 发货期数（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].ipmProjectCode` | string | IPM项目编码（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].oper` | string | 操作（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].auditStatus` | string | 审核状态（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].auditStatus2` | string | 审核状态2（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].auditRemark` | string | 审核备注（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].auditPerson` | string | 审核人员（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].timeAudit` | string | 时间审核（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].isSyncIpmSku` | string | 是否同步IPMSKU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].isDevelop` | string | 是否Develop（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].referenceLength` | integer | 参考长。前端使用：待核实 | - |
| `obj.obj[].referenceWidth` | integer | 参考宽。前端使用：待核实 | - |
| `obj.obj[].referenceHeight` | integer | 参考高。前端使用：待核实 | - |
| `obj.obj[].forecastMonthSale` | string | 预估月销。前端使用：待核实 | - |
| `obj.obj[].costPrice` | number | 成本。前端使用：待核实 | - |
| `obj.obj[].weight` | number | 重量。前端使用：待核实 | - |
| `obj.obj[].claimSaler` | string | 认领销售。前端使用：待核实 | - |
| `obj.obj[].isclaim` | string | Isclaim（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].operationViewList[]` | array | 操作查看列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].operationViewList[]` | string | - | - |
| `obj.obj[].viewListSize` | integer | 查看列表大小（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].operationViewMapList[]` | array | 操作查看MAP列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].artPic[]` | array | ART图片（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].artPicList[]` | array | ART图片列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].spu` | string | SPU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].artExcelUrl` | string | ARTExcelURL（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].artExcelUrlList[]` | array | ARTExcelURL列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].artExcelUrlList[]` | string | - | - |
| `obj.obj[].canSaleSite` | string | CAN销售站点（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].artTaskSchedule` | string | 美工作图任务进度。前端使用：待核实 | - |
| `obj.obj[].rejectType` | string | 拒绝类型： 1：一审拒绝，2： 二审拒绝, 3 不是拒绝类型了类似于null。前端使用：待核实 | - |
| `obj.obj[].platformShopId` | integer | 平台店铺ID。前端使用：待核实 | - |
| `obj.obj[].platformShopName` | string | 平台店铺名称。前端使用：待核实 | - |
| `obj.obj[].platformOrderId` | string | 平台订单号。前端使用：待核实 | - |
| `obj.obj[].platformOrderAmount` | number | 平台订单金额。前端使用：待核实 | - |
| `obj.obj[].platformOrderStatus` | string | 平台订单状态。前端使用：待核实 | - |
| `obj.obj[].platformTrackId` | string | 平台运单号。前端使用：待核实 | - |
| `obj.obj[].platformLogistics` | string | 平台物流轨迹。前端使用：待核实 | - |
| `obj.obj[].platformLogisticsArr[]` | array | 平台物流ARR（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].purchaseStatus` | integer | 采样审核状态,0:未采样1:待审核2:审核通过3:审核拒绝。前端使用：待核实 | - |
| `obj.obj[].purchaseDescr` | string | 采样备货备注。前端使用：待核实 | - |
| `obj.obj[].purchaseSubmitBy` | string | 采样备货提交人。前端使用：待核实 | - |
| `obj.obj[].purchaseSubmitOn` | string | 采样备货提交时间。前端使用：待核实 | - |
| `obj.obj[].purchaseAuditBy` | string | 采样备货审核人。前端使用：待核实 | - |
| `obj.obj[].purchaseAuditOn` | string | 采样备货审核时间。前端使用：待核实 | - |
| `obj.obj[].productNature` | integer | 产品性质:1自建 0:跟卖。前端使用：待核实 | - |
| `obj.obj[].supplyJson` | string | 采购链接JSON格式。前端使用：待核实 | - |
| `obj.obj[].supplyJsonList[]` | array | 采购链接。前端使用：待核实 | - |
| `obj.obj[].supplyJsonList[]` | string | - | - |
| `obj.obj[].followSuitRemark` | string | 销售跟卖备注。前端使用：待核实 | - |
| `obj.obj[].developmentResults` | integer | 开发结果 展示:1 展示 0 不展示。前端使用：待核实 | - |
| `obj.obj[].packageIsSingle` | string | 独立包装(1是 2否)。前端使用：待核实 | - |
| `obj.obj[].remark` | string | 备注。前端使用：待核实 | - |
| `obj.obj[].developTypeName` | string | 开发类型名称。前端使用：待核实 | - |
| `obj.obj[].suspectedCount` | integer | 相似商品图计数。前端使用：待核实 | - |
| `obj.obj[].similarStatus` | integer | 0,正常1,含禁售2,含侵权。前端使用：待核实 | - |
| `obj.obj[].noPassType` | string | 不通过类型。前端使用：待核实 | - |
| `obj.obj[].noPassTypes[]` | array | 不通过类型。前端使用：待核实 | - |
| `obj.obj[].noPassTypes[]` | string | - | - |
| `obj.obj[].noPassFile[]` | array | 不通过文件。前端使用：待核实 | - |
| `obj.obj[].noPassFile[]` | string | - | - |
| `obj.obj[].flag` | string | 标志（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].highQualityDiffRefund` | integer | 是否有高质差退款标签 1 是 0 否。前端使用：待核实 | - |
| `obj.obj[].riskType` | string | 风险系数分类。前端使用：待核实 | - |
| `obj.obj[].checkImage` | string | 审核图片。前端使用：待核实 | - |
| `obj.obj[].arterNotes` | string | 美工备注。前端使用：待核实 | - |
| `obj.obj[].arter_notes_img` | string | 美工备注。前端使用：待核实 | - |
| `obj.obj[].salesVolume` | string | 竞品销量。前端使用：待核实 | - |
| `obj.obj[].bottomPrice` | string | 竞品最低价。前端使用：待核实 | - |
| `obj.obj[].avgPrice` | string | 平均价格（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].checkPicture[]` | array | 校验图片（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].checkPicture[]` | string | - | - |
| `obj.obj[].checkEmp[]` | array | 校验EMP（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].checkEmp[]` | string | - | - |
| `obj.obj[].hwcType` | string | 海外仓类型（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].salesPrice` | string | 销售价格（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].physicalPictureUrl` | string | 实拍图片。前端使用：待核实 | - |
| `obj.obj[].styleId` | string | 样式ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].styleNames[]` | array | 样式名称列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].styleNames[]` | string | - | - |
| `obj.obj[].sellingPoint` | string | SellingPoint（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].procurementRemark` | string | 采购备注（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].length` | string | 长度（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].width` | string | 宽度（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].height` | string | 高度（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].alibabaLinkUrl` | string | 1688链接。前端使用：待核实 | - |
| `obj.obj[].certificationList` | string | 商品资质名称数组。前端使用：待核实 | - |
| `obj.obj[].brandName` | string | 品牌名称。前端使用：待核实 | - |
| `obj.obj[].brandId` | integer | 品牌编号。前端使用：待核实 | - |
| `obj.obj[].companyId` | string | 公司ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].patentCourtry` | string | PatentCourtry（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
