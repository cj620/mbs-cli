<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-all-shop-list

查询全部店铺列表：查询全部店铺列表(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-get-all-shop-list
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/brand/getAllShopList`
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
| `obj.obj[].shopid` | integer | 店铺ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].shopname` | string | '店铺名称',。前端使用：待核实 | - |
| `obj.obj[].companyid` | string | '公司id',。前端使用：待核实 | - |
| `obj.obj[].platformid` | string | 平台id',。前端使用：待核实 | - |
| `obj.obj[].platformname` | string | 平台名字。前端使用：待核实 | - |
| `obj.obj[].isopenshop` | string | 店铺是否开启（1、是，0、否）',。前端使用：待核实 | - |
| `obj.obj[].tokenstatus` | string | 令牌状态(1、授权通过，0、长时令牌过期)',。前端使用：待核实 | - |
| `obj.obj[].manageteamid` | integer | 小组id(HR操作记录表)',。前端使用：待核实 | - |
| `obj.obj[].isgetorder` | string | 是否拉取订单（1、是，0、否）',。前端使用：待核实 | - |
| `obj.obj[].getorderlasttime` | string | 最后一次拉取订单的时间2017-04-20',。前端使用：待核实 | - |
| `obj.obj[].isgetmessage` | string | 是否拉取消息（1、是，0、否）',。前端使用：待核实 | - |
| `obj.obj[].getmessagelasttime` | string | 最后一次拉取消息的时间2017-04-20',。前端使用：待核实 | - |
| `obj.obj[].isgetproduct` | string | 是否拉取在线商品（1、是，0、否）',。前端使用：待核实 | - |
| `obj.obj[].getproductlasttime` | string | 最后一次拉取商品的时间2017-04-20',。前端使用：待核实 | - |
| `obj.obj[].expirationtime` | string | 长时令牌过期时间',。前端使用：待核实 | - |
| `obj.obj[].createdby` | string | 创建人',。前端使用：待核实 | - |
| `obj.obj[].createdon` | string | 创建时间2017-04-20',。前端使用：待核实 | - |
| `obj.obj[].updatedby` | string | 修改人',。前端使用：待核实 | - |
| `obj.obj[].updatedon` | string | 修改时间2017-04-20',。前端使用：待核实 | - |
| `obj.obj[].deletedby` | string | 删除人',。前端使用：待核实 | - |
| `obj.obj[].deletedon` | string | 删除时间2017-04-20',。前端使用：待核实 | - |
| `obj.obj[].synchronouson` | string | 同步时间2017-04-20',。前端使用：待核实 | - |
| `obj.obj[].saleLeader` | integer | 销售组长（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].saleLeaderName` | string | 销售组长名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].shopType` | string | 店铺类型（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].operateStatus` | string | 运营状态： 1 运营中 、2暂停运营、3永久关闭中。前端使用：待核实 | - |
| `obj.obj[].bigChief` | integer | BIG主管（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].siteCode` | string | 站点。前端使用：待核实 | - |
| `obj.obj[].mainSite` | string | 主站点。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
