# mbs oms erp-order-get-develop-manager-pk-match

开发经理PK赛数据查询：大屏「经理擂台」PK 播报数据查询：按指定日期(默认昨天)与平台拉取各部门经理的爆款SKU数量、百元动销率及其排名榜单，前端 Element-Plus 表格滚动播报，超过21条滚动后跳转开发员榜单页。

## 用法

```bash
mbs oms erp-order-get-develop-manager-pk-match --time <string> --platform <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/pKmatchController/getDevelopManagerPkMatch`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `time` | time | query | string | 是 | - | 数据日期，URL query 参数；前端默认取昨天日期，格式 YYYYMMDD(由 new Date().getTime()-24*60*60*1000 计算后拼接年月日)。单位：日期(YYYYMMDD) |
| `platform` | platform | query | string | 是 | - | 平台标识，URL query 参数；页面固定传 aliexpress(速卖通)。枚举：aliexpress=速卖通(本页固定) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 统一响应状态码,200=成功(本页未直接引用，待人工确认) | - |
| `desc` | string | 统一响应提示信息(本页未直接引用，待人工确认) | - |
| `obj[]` | array | 经理PK榜数据列表(前端解构 {obj} 后直接作为表格数据 tabledata) | - |
| `obj[][0]` | string | 数据更新时间(顶部「本次播报数据更新至」取 tabledata[0].times) | - |
| `obj[][1]` | string | 二级部门 | - |
| `obj[][2]` | string | 三级部门 | - |
| `obj[][3]` | string | 姓名(经理) | - |
| `obj[][4]` | number | 爆款SKU数量 | - |
| `obj[][5]` | number | 爆款SKU数量排名(值=1时行尾显示金色奖杯图标) | - |
| `obj[][6]` | number | 百元动销率(%)；前端展示：值为0时显示0，否则拼接%。单位：百分比 | - |
| `obj[][7]` | number | 百元动销率排名(值=1时行尾显示金色奖杯图标) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
