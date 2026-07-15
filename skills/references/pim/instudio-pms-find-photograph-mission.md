<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-photograph-mission

批量添加拍照任务：批量添加拍照任务

## 用法

```bash
mbs pim instudio-pms-find-photograph-mission [--createdBy <string>] [--photograph <string>] [--allotStatus <string>] [--finishStatus <string>] [--filterView <string>] [--sku <string>] [--purchaseId <string>] [--devBigChief <string>] [--reserveFlag <string>] [--evaluateFlag <string>] [--spuList <array<string>>] [--orderIds <array<string>>] [--createTimeStart <string>] [--createTimeEnd <string>] [--employeeList <array<string>>] [--receiveGoodsNum <integer>] [--spu <string>] [--currentPage <integer>] [--pageSize <integer>] [--missionIdList <array<string>>] [--shootingLocation <string>] [--type <string>] [--orderId <string>] [--missionId <string>] [--photoRemark <string>] [--photoUrl <string>] [--allotTimeStart <string>] [--allotTimeEnd <string>] [--isTwoPicture <string>] [--companyId <integer>] [--searchCompanyId <integer>] [--viewCompanyId <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/ProductPhotographController/findPhotographMission`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `createdBy` | createdBy | body | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `photograph` | photograph | body | string | 否 | - | Photograph（字段名推断,语义待核实） |
| `allotStatus` | allotStatus | body | string | 否 | - | Allot状态（字段名推断,语义待核实） |
| `finishStatus` | finishStatus | body | string | 否 | - | 完成状态（字段名推断,语义待核实） |
| `filterView` | filterView | body | string | 否 | - | 过滤查看（字段名推断,语义待核实） |
| `sku` | sku | body | string | 否 | - | SKU（字段名推断,语义待核实） |
| `purchaseId` | purchaseId | body | string | 否 | - | 采购ID（字段名推断,语义待核实） |
| `devBigChief` | devBigChief | body | string | 否 | - | DEVBIG主管（字段名推断,语义待核实） |
| `reserveFlag` | reserveFlag | body | string | 否 | - | 1 有库存 2 部分没有库存 或者全没库存的 |
| `evaluateFlag` | evaluateFlag | body | string | 否 | - | 1 未评价 2已评价 |
| `spuList` | spuList | body | array<string> | 否 | - | SPU列表（字段名推断,语义待核实） |
| `orderIds` | orderIds | body | array<string> | 否 | - | 订单ID列表（字段名推断,语义待核实） |
| `createTimeStart` | createTimeStart | body | string | 否 | - | 创建时间(开始) |
| `createTimeEnd` | createTimeEnd | body | string | 否 | - | 创建时间(结束) |
| `employeeList` | employeeList | body | array<string> | 否 | - | 同组人员 |
| `receiveGoodsNum` | receiveGoodsNum | body | integer | 否 | - | 收货货品数量（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `missionIdList` | missionIdList | body | array<string> | 否 | - | MissionID列表（字段名推断,语义待核实） |
| `shootingLocation` | shootingLocation | body | string | 否 | - | 摄影师/咔神拍摄 |
| `type` | type | body | string | 否 | - | 拍照/视频订单 |
| `orderId` | orderId | body | string | 否 | - | 订单ID（字段名推断,语义待核实） |
| `missionId` | missionId | body | string | 否 | - | MissionID（字段名推断,语义待核实） |
| `photoRemark` | photoRemark | body | string | 否 | - | 图片备注（字段名推断,语义待核实） |
| `photoUrl` | photoUrl | body | string | 否 | - | 图片URL（字段名推断,语义待核实） |
| `allotTimeStart` | allotTimeStart | body | string | 否 | - | Allot时间开始（字段名推断,语义待核实） |
| `allotTimeEnd` | allotTimeEnd | body | string | 否 | - | Allot时间结束（字段名推断,语义待核实） |
| `isTwoPicture` | isTwoPicture | body | string | 否 | - | 是否两个图片（字段名推断,语义待核实） |
| `companyId` | companyId | body | integer | 否 | - | 商品所属公司id |
| `searchCompanyId` | searchCompanyId | body | integer | 否 | - | 搜索公司id |
| `viewCompanyId` | viewCompanyId | body | integer | 否 | - | 当前登录人所属公司id |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.nextCursor` | string | 下一个Cursor（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.previousCursor` | string | PreviousCursor（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.list[]` | array | 当前页数据列表。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
