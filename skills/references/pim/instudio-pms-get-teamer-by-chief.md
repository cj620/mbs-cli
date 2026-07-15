<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-teamer-by-chief

按主管查询Teamer：按主管查询Teamer(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-get-teamer-by-chief --name <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/hwcDevelopmentProject/getTeamerByChief`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `name` | name | query | string | 是 | - | 名称（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（条件判断，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（条件判断，行号待核实） | - |
| `obj.obj.result` | string | 结果（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.count` | string | 数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pageSize` | string | 每页条数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list` | string | 列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pages` | string | Pages（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.total` | string | 总数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.country` | string | 国家（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platform` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.join` | string | JOIN（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.totalpage` | string | Totalpage（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.checked` | string | Checked（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformIds` | string | 平台ID列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.getAttribute` | string | 查询属性（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.countPage` | string | 数量页码（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pictureUrl` | string | 图片URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sku` | string | SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tort` | string | 侵权（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.typeName` | string | 类型名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sellOper` | string | 销售操作（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopType` | string | 店铺类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopManager` | string | 店铺管理（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.homeBuyNum` | string | HOME购买数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.tempSaveNum` | string | 临时保存数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.overseasBuyNum` | string | Overseas购买数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.fbaSaveNum` | string | FBA保存数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.fbaSaveAmount` | string | FBA保存金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.costPrice` | string | 成本价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.yesterdayKuxi` | string | 昨日KUXI（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.storageFee` | string | 仓储费用（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sellNum7` | string | 销售数量7（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sellNum30` | string | 销售数量30（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sellNum90` | string | 销售数量90（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.buyDay` | string | 购买天（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sellDay` | string | 销售天（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.purchaseNumStr` | string | 采购数量字符串（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.profitRate` | string | 利润比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.refundRate` | string | 退款比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productCreateDate` | string | 商品创建日期（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopLi` | string | 店铺LI（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platForm` | string | 平台FORM（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PLATFORMNAME` | string | Platformname（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.PLATFORMID` | string | Platformid（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.caseNumber` | string | 工单编号（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.collectionPlatform` | string | Collection平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.brand` | string | 品牌（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.companyName` | string | 公司名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.companyLegalPerson` | string | 公司Legal人员（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.salesChiefCn` | string | 销售主管中文（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.salesPersonCn` | string | 销售人员中文（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developChiefCn` | string | Develop主管中文（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developerCn` | string | 开发者中文（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.infingeName` | string | Infinge名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.infingeId` | string | InfingeID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.employee_name` | string | 员工名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.employee_id` | string | 员工ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.infringementPlatformCn` | string | Infringement平台中文（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopName` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.erpCode` | string | ERP编码（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopStatusCN` | string | 店铺状态中文（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.grossProfit` | string | 毛利润（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sellQuantity` | string | 销售数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sellAmount` | string | 销售金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.date` | string | 日期（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.originalCurrency` | string | 原始币种（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rmbAmount` | string | RMB金额（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.infringementPlatform` | string | Infringement平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopStatus` | string | 店铺状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.salesChief` | string | 销售主管（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.salesPerson` | string | 销售人员（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developChief` | string | Develop主管（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.developer` | string | 开发者（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（条件判断，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
