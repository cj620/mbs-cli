<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-productdepartment-pkmatch

各产品部门PK赛战报查询：产品部门新品PK赛大屏战报：查询各部门(队伍)新品销售额、订单销售额预估增长率、发货毛利额预估增长率及各项排名，按队伍逐行返回用于大屏 el-table 滚动播报展示。

## 用法

```bash
mbs oms erp-order-get-productdepartment-pkmatch --time <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/pKmatchController/getProductdepartmentPkmatch`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `time` | time | query | string | 是 | - | 战报期次/时间标识，源码固定硬编码为 203308，拼接在 URL Query 上，无来源控件。具体业务取值规则(待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(框架统一包装,本页未使用)(待人工确认) | - |
| `desc` | string | 响应提示信息(框架统一包装,本页未使用)(待人工确认) | - |
| `obj[]` | array | 战报数据列表(各部门/队伍逐行)，前端赋值给 tabledata | - |
| `obj[][0]` | string | 部门(列“部门”，prop=department) | - |
| `obj[][1]` | string | 队名(列“队名”，prop=groupname) | - |
| `obj[][2]` | string | 队长(列“队长”，prop=manager) | - |
| `obj[][3]` | number | 新品销售额(列“新品销售额”，prop=salesvolume) | - |
| `obj[][4]` | number | 新品销售额排名(列“新品销售额排名”；==1 时显示金奖杯图标) | - |
| `obj[][5]` | number | 订单销售额预估增长率(列“订单销售额预估增长率”，前端追加 % 展示) | - |
| `obj[][6]` | number | 订单销售额增长率排名(列“订单销售额增长率排名”；==1 时显示金奖杯图标) | - |
| `obj[][7]` | number | 发货毛利额预估增长率(列“发货毛利额预估增长率”，前端追加 % 展示) | - |
| `obj[][8]` | number | 发货毛利额增长率排名(列“发货毛利额增长率排名”；==1 时显示金奖杯图标) | - |
| `obj[][9]` | string | 数据更新时间(页面右上“本次播报数据更新至”取 tabledata[0].times) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
