# mbs pim erp-product-get-purchase-sku

SKU详情-采购记录查询(getPurchaseSku)：按SKU查询该SKU的全部采购记录，返回每条采购单的仓库、采购批次/组、供应商及等级、运单号与物流轨迹、购买/到货数量、采购价/运费、采购备注、采购员、采购/入库时间、采购状态/退款原因、跟单日志等。SKU详情页采购记录面板(content4)渲染数据源；按部门(content)做供应商/价格脱敏。

## 用法

```bash
mbs pim erp-product-get-purchase-sku --sku <string> [--oper3 <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getPurchaseSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | SKU编号。取自页面URL查询参数 ?SKU= (GetQueryString('SKU'))，随地址带入 |
| `oper3` | oper3 | query | string | 否 | - | 开发员(创建人oper3)。取自商品信息接口返回 resultObj.oper3，用于后端按开发员维度过滤/鉴权 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `content` | string | 当前用户所属部门名称。枚举:销售部/客服部(供应商、运单号、采购价脱敏为***)、总经办/财务部(供应商名做链接)、其他。前端逐条赋到 obj[i].content | - |
| `obj[]` | array | 采购记录列表 | - |
| `obj[][0]` | string | 仓库名称 | - |
| `obj[][1]` | string | 采购单/采购组ID(用于跳转采购单列表、跟单日志) | - |
| `obj[][2]` | string | SKU编号 | - |
| `obj[][3]` | string | 采购单开启标记。'2'=已关闭(显示已关闭并展示退款原因) | - |
| `obj[][4]` | string | 供应商ID(总经办/财务部时拼供应商详情链接) | - |
| `obj[][5]` | string | 供应商名称(销售部/客服部脱敏为***) | - |
| `obj[][6]` | string | 供应商等级(展示为X级;销售部/客服部脱敏) | - |
| `obj[][7]` | number | 所属公司ID。1=胤元;33=启元(前端转中文标签) | - |
| `obj[][8]` | string | 运单号(可点击跳快递100查询;销售部/客服部仅文本展示) | - |
| `obj[][9]` | string | 物流轨迹。原值为JSON字符串,前端 JSON.parse 后取 logisticsTrace[0].logisticsSteps 渲染悬浮轨迹表 | - |
| `obj[][10]` | string | 最新物流轨迹信息(运单号下方展示) | - |
| `obj[][11]` | string | 发货时间 | - |
| `obj[][12]` | number | 购买数量(为空显示--) | - |
| `obj[][13]` | number | 实际到货数量(为空显示--) | - |
| `obj[][14]` | number | 采购价格(销售部/客服部脱敏为***;与 reserve6 比较判高价采购) | - |
| `obj[][15]` | number | 运费 | - |
| `obj[][16]` | string | 采购备注(超16字截断,悬浮看全部) | - |
| `obj[][17]` | string | 备注/翻译提示(红色文字展示) | - |
| `obj[][18]` | number | 上次采购价。当 0<reserve6<inportPrice 时提示高价采购,上次采购价为: | - |
| `obj[][19]` | string | 采购员(创建人) | - |
| `obj[][20]` | string | 采购时间(为空显示---) | - |
| `obj[][21]` | string | 入库时间(为空显示---) | - |
| `obj[][22]` | string | 采购状态(openFlag='2'时强制显示已关闭) | - |
| `obj[][23]` | string | 退款原因(openFlag='2'已关闭时红色展示) | - |
| `obj[][24]` | string | 跟单备注图片URL(加载失败回退默认图) | - |
| `obj[][25]` | number | 跟单次数(总计跟进N次) | - |
| `obj[][26]` | object | 最近一条跟单日志对象(存在则展示跟进信息) | - |
| `obj[][26].m` | string | 跟单日志-内容/留言(展示于跟进信息) | - |
| `obj[][26].o` | string | 跟单日志-操作人(展示于跟进信息) | - |
| `obj[][26].t` | string | 跟单日志-时间(展示于跟进信息) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
