<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-smt-singlepublish-list-edit

获取编辑信息列表：获取编辑信息列表

## 用法

```bash
mbs pim instudio-pms-get-smt-singlepublish-list-edit [--listId <string>] [--id <string>] [--erpSpu <string>] [--publishSpu <string>] [--mainPic <string>] [--title <string>] [--title2 <string>] [--vType <integer>] [--vNum <integer>] [--shopname <string>] [--priceArea <string>] [--profitRate <string>] [--jitProfit <number>] [--publishItemid <string>] [--publishResponse <string>] [--createBy <string>] [--publishBy <string>] [--startIndex <integer>] [--pageSize <integer>] [--currentPage <integer>] [--starttime <string>] [--endtime <string>] [--shopsSplice <string>] [--shopmanager <string>] [--categoryname <string>] [--jumpUrl <string>] [--isCompulsory <integer>] [--timeOccur <string>] [--batchId <string>] [--publishOper <string>] [--publishOperId <integer>] [--productStatus <string>] [--salesLevel <string>] [--publishStatus <integer>] [--onlineStatus <integer>] [--publishtimedate <string>] [--createTime <string>] [--updateTime <string>] [--isOffline <integer>] [--isPriceDifference <integer>] [--groupName <string>] [--status2 <integer>] [--smtCategoryId <string>] [--saveNum <integer>] [--isRetry <integer>] [--discountstatus <integer>] [--discountName <string>] [--shiptoConfigId <integer>] [--shopNameJitb <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/smtSinglepublishController/getSmtSinglepublishListEdit`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `listId` | listId | body | string | 否 | - | 列表ID（字段名推断,语义待核实） |
| `id` | id | body | string | 否 | - | ID（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | 马帮spu |
| `publishSpu` | publishSpu | body | string | 否 | - | 刊登spu |
| `mainPic` | mainPic | body | string | 否 | - | 主图 |
| `title` | title | body | string | 否 | - | 标题 |
| `title2` | title2 | body | string | 否 | - | 标题 |
| `vType` | vType | body | integer | 否 | - | 类型（字段名推断,语义待核实） |
| `vNum` | vNum | body | integer | 否 | - | 数量（字段名推断,语义待核实） |
| `shopname` | shopname | body | string | 否 | - | 店铺 |
| `priceArea` | priceArea | body | string | 否 | - | 价格 |
| `profitRate` | profitRate | body | string | 否 | - | 毛利率 |
| `jitProfit` | jitProfit | body | number | 否 | - | 毛利率 |
| `publishItemid` | publishItemid | body | string | 否 | - | 刊登商品项ID（字段名推断,语义待核实） |
| `publishResponse` | publishResponse | body | string | 否 | - | 刊登响应（字段名推断,语义待核实） |
| `createBy` | createBy | body | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `publishBy` | publishBy | body | string | 否 | - | 刊登人（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `starttime` | starttime | body | string | 否 | - | Starttime（字段名推断,语义待核实） |
| `endtime` | endtime | body | string | 否 | - | Endtime（字段名推断,语义待核实） |
| `shopsSplice` | shopsSplice | body | string | 否 | - | 店铺列表Splice（字段名推断,语义待核实） |
| `shopmanager` | shopmanager | body | string | 否 | - | Shopmanager（字段名推断,语义待核实） |
| `categoryname` | categoryname | body | string | 否 | - | Categoryname（字段名推断,语义待核实） |
| `jumpUrl` | jumpUrl | body | string | 否 | - | JUMPURL（字段名推断,语义待核实） |
| `isCompulsory` | isCompulsory | body | integer | 否 | - | 是否Compulsory（字段名推断,语义待核实） |
| `timeOccur` | timeOccur | body | string | 否 | - | 时间Occur（字段名推断,语义待核实） |
| `batchId` | batchId | body | string | 否 | - | 批次id |
| `publishOper` | publishOper | body | string | 否 | - | 刊登人 |
| `publishOperId` | publishOperId | body | integer | 否 | - | 刊登人id |
| `productStatus` | productStatus | body | string | 否 | - | 产品状态 |
| `salesLevel` | salesLevel | body | string | 否 | - | 销量级别 |
| `publishStatus` | publishStatus | body | integer | 否 | - | 1:等待刊登2:刊登中3:刊登成功4:刊登失败 |
| `onlineStatus` | onlineStatus | body | integer | 否 | - | 0:等待上架1:上架中2:上架成功3:上架失败4:放弃上架 |
| `publishtimedate` | publishtimedate | body | string | 否 | - | 刊登时间 |
| `createTime` | createTime | body | string | 否 | - | 创建时间 |
| `updateTime` | updateTime | body | string | 否 | - | 修改时间 |
| `isOffline` | isOffline | body | integer | 否 | - | 是否下线（字段名推断,语义待核实） |
| `isPriceDifference` | isPriceDifference | body | integer | 否 | - | 1价格差异过大 |
| `groupName` | groupName | body | string | 否 | - | 分组名称（字段名推断,语义待核实） |
| `status2` | status2 | body | integer | 否 | - | 状态2（字段名推断,语义待核实） |
| `smtCategoryId` | smtCategoryId | body | string | 否 | - | 速卖通类目ID（字段名推断,语义待核实） |
| `saveNum` | saveNum | body | integer | 否 | - | 保存数量（字段名推断,语义待核实） |
| `isRetry` | isRetry | body | integer | 否 | - | 是否重试（字段名推断,语义待核实） |
| `discountstatus` | discountstatus | body | integer | 否 | - | Discountstatus（字段名推断,语义待核实） |
| `discountName` | discountName | body | string | 否 | - | 折扣名称（字段名推断,语义待核实） |
| `shiptoConfigId` | shiptoConfigId | body | integer | 否 | - | Shipto配置ID（字段名推断,语义待核实） |
| `shopNameJitb` | shopNameJitb | body | string | 否 | - | 店铺名称JITB（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.total` | integer | 总数（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.totalPages` | integer | 总数Pages（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.rows[]` | array | 行数据（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.success` | boolean | 成功（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.desc` | string | 描述（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.code` | integer | 编码（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.footer[]` | array | Footer（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.sort` | string | 排序（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.order` | string | 订单（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
