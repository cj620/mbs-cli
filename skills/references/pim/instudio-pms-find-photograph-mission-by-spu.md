<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-photograph-mission-by-spu

根据spu查询拍照任务：根据spu查询拍照任务

## 用法

```bash
mbs pim instudio-pms-find-photograph-mission-by-spu
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/ProductPhotographController/findPhotographMissionBySPU`
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
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].missionId` | integer | MissionID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].spu` | string | SPU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].spuImage` | string | SPU图片（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].skunum` | integer | Skunum（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].photoRemark` | string | 图片备注（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].photoRemark2` | string | 图片备注2（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].photoRemark3` | string | 图片备注3（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].spuName` | string | SPU名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].photograph` | string | Photograph（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].allotStatus` | integer | Allot状态（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].finishStatus` | integer | 完成状态（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].headPhoto` | string | HEAD图片（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].webOther` | string | 网页其他（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].createdBy` | string | 创建人（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].createdOn` | string | 创建（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].createdOnStr` | string | 创建字符串（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].orderId` | string | 订单ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].purchaseId` | string | 采购ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].purchaseMsg` | string | 采购消息（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].reserve` | string | 预留（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].skuStr` | string | SKU字符串（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].shootingLocation` | integer | 拍摄地点。前端使用：待核实 | - |
| `obj.obj[].evaluateTime` | string | Evaluate时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].evaluateContent` | string | Evaluate内容（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].evaluateStatus` | string | Evaluate状态（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].location` | string | 库位（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].arterRemarkImage` | string | Arter备注图片（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].arterNotes` | string | ArterNotes（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].imageList[]` | array | 图片列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].imageList[]` | string | - | - |
| `obj.obj[].imageCnt` | integer | 图片CNT（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].artPic[]` | array | ART图片（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].artPicList[]` | array | ART图片列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].missionId2` | integer | MissionID2（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].developType` | integer | Develop类型（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].finishTimeStr` | string | 完成时间字符串（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].type` | integer | 类型（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].orderType` | string | 订单类型（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].artExcelUrl` | string | ARTExcelURL（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].artExcelUrlList[]` | array | ARTExcelURL列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].artExcelUrlList[]` | string | - | - |
| `obj.obj[].isReserve` | integer | 1:有库存 0:需要采购。前端使用：待核实 | - |
| `obj.obj[].delayDayStr` | string | 迟滞天数。前端使用：待核实 | - |
| `obj.obj[].priority` | integer | 优先级。前端使用：待核实 | - |
| `obj.obj[].ispurchase` | integer | 是否展示标识。前端使用：待核实 | - |
| `obj.obj[].pictureType` | integer | 是否勾选二套图。前端使用：待核实 | - |
| `obj.obj[].checkStatus` | integer | 是否审核完成。前端使用：待核实 | - |
| `obj.obj[].unCreateOrderReason` | string | UN创建订单原因（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].isReceiveGoods` | string | 是否收货货品（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].submitSaleTime` | string | 提交销售时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].receiveGoodsOper` | string | 收货货品操作（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].receiveTime` | string | 收货时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].photoUrl` | string | 图片URL（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].photoStatus` | string | 图片状态（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].photoContent` | string | 图片内容（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].allotTime` | string | Allot时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].isTwoPicture` | string | 是否两个图片（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].storage` | string | 仓储（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].source` | string | 来源（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
