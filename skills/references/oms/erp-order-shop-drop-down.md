<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-shop-drop-down

店铺下拉列表查询：根据平台、总监/经理/店长、客户经理、运营状态、海外仓、店铺排名、店铺名称关键字等条件分页查询店铺下拉列表；后端会把入参的总监/经理/主管换算成店长再过滤，并按登录人名下组员限定数据范围。

## 用法

```bash
mbs oms erp-order-shop-drop-down [--platformIds <array>] [--managers <array>] [--leaders <array>] [--shopManagers <array>] [--keyWord <string>] [--customerServiceMgr <string>] [--isvirtual <string>] [--operatestatus <string>] [--page <number>] [--rank <string>]
```

## API

- Service: `erp-order`
- Method: `POST`
- Path: `/erpOrder/erpOrder/teamDropDown/shopDropDown`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表(默认[];如 eBay=1、Amazon=2、AliExpress=10、Wish=16、Lazada=18 等) |
| `managers` | managers | body | array | 否 | - | 经理(员工ID)列表(默认[];后端会换算为店长再过滤) |
| `leaders` | leaders | body | array | 否 | - | 总监(员工ID)列表(默认[];后端会换算为店长再过滤) |
| `shopManagers` | shopManagers | body | array | 否 | - | 店长(员工ID)列表(默认[]) |
| `keyWord` | keyWord | body | string | 否 | - | 店铺名称模糊搜索关键字(默认'';后端会剔除其中的'SIP'字样) |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客户经理(默认'';多值以英文逗号分隔,后端split成数组) |
| `isvirtual` | isvirtual | body | string | 否 | - | 是否海外仓店铺(默认null;取值含义 待人工确认) |
| `operatestatus` | operatestatus | body | string | 否 | - | 运营状态(默认null;取值含义 待人工确认) |
| `page` | page | body | number | 否 | - | 页码(默认1;后端pageSize默认200,起始下标=(page-1)*pageSize) |
| `rank` | rank | body | string | 否 | - | 店铺排名(默认null;取值含义 待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | number | 满足条件的总条数 | - |
| `totalPages` | number | 总页数(后端total/pageSize向上取整) | - |
| `rows[]` | array | 店铺记录列表(前端实际使用字段) | - |
| `rows[][0]` | string | 店铺ID(下拉项value,主键标识) | - |
| `rows[][1]` | string | 店铺名称(下拉项展示文本) | - |
| `rows[][2]` | string | 店铺名称2(别名/简称) | - |
| `rows[][3]` | string | 店长 | - |
| `rows[][4]` | string | 经理 | - |
| `rows[][5]` | string | 客户经理 | - |
| `rows[][6]` | string | 店铺排名 | - |
| `rows[][7]` | string | 运营状态 | - |
| `rows[][8]` | string | 开店时间 | - |
| `rows[][9]` | string | 信用/额度字段(CREDIT2)(具体业务含义 待人工确认) | - |
| `success` | boolean | 是否成功 | - |
| `desc` | string | 返回信息/提示 | - |
| `code` | number | 返回编码(成功=200,系统错误=500) | - |
| `footer[]` | array | 页脚汇总(本接口未使用,通常为null) | - |
| `sort` | string | 排序字段(本接口未使用) | - |
| `order` | string | 排序顺序(本接口未使用) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
