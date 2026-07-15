# mbs pim instudio-pms-get-amazon-saler

获取刊登任务创建人查询的下拉列表：获取刊登任务创建人查询的下拉列表

## 用法

```bash
mbs pim instudio-pms-get-amazon-saler
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/amazon/getAmazonSaler`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值,条件判断，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值,条件判断，行号待核实） | - |
| `obj.obj.allTemplate` | string | 全部模板（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.list` | string | 列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pages` | string | Pages（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.total` | string | 总数（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.picture` | string | 图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.successnum` | string | Successnum（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.useUpcNum` | string | USEUPC数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.canUseUpcNum` | string | CANUSEUPC数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishFailedNum` | string | 刊登失败数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.giveUpPublishNum` | string | GIVE上架刊登数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.publishSuccessNum` | string | 刊登成功数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.waitPublishNum` | string | WAIT刊登数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.inventory` | string | 库存（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformRate` | string | 平台比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.divideLine` | string | Divide行（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.targetProfit` | string | 目标利润（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.brandName` | string | 品牌名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.manufacturer` | string | Manufacturer（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.surfaceMailChannel` | string | SurfaceMAIL渠道（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.registerMailChannel` | string | 注册MAIL渠道（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryList` | string | 类目列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.isVat` | string | 是否VAT（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.country` | string | 国家（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.prePublishHour` | string | PRE刊登小时（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.openAutoPublish` | string | 开启自动刊登（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.openAddInventory` | string | 开启新增库存（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.isUpcExempt` | string | 是否UPCExempt（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.stockDay` | string | 库存天（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.registerStockDay` | string | 注册库存天（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.orderNumDay` | string | 订单数量天（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.openFollowUpRemove` | string | 开启Follow上架删除（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.join` | string | JOIN（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.fail` | string | 失败（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.repead` | string | Repead（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.success` | string | 成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopId` | string | 店铺ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopName` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.groupid` | string | 分组ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.site` | string | 站点（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.dataset` | string | Dataset（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.erpSPU` | string | ERPSPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.erpSKU` | string | ERPSKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.productTitle` | string | 商品标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rows` | string | 行数据（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.SHOPID` | string | 店铺ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.SHOPNAME` | string | 店铺名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopManager` | string | 店铺管理（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.submitOper` | string | 提交操作（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.response` | string | 响应（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.createTime` | string | 创建时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.updateTime` | string | 更新时间（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.status` | string | 状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
