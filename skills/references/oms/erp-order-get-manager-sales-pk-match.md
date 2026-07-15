# mbs oms erp-order-get-manager-sales-pk-match

二级部门经理销售PK榜单查询：实景大屏「业绩PK」播报页：按平台(aliexpress)与数据日期查询各二级部门经理的销售额PK榜单，返回上月/本月/预计本月/预计增长销售额及排名，前端以 el-table 渲染，前3名展示奖杯。

## 用法

```bash
mbs oms erp-order-get-manager-sales-pk-match --time <string> --platform <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/pKmatchController/getManagerSalesPkMatch`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `time` | time | query | string | 是 | - | 数据日期，格式 YYYYMMDD；前端固定取「昨日」(当前时间-24h)，示例 URL 中为空串 |
| `platform` | platform | query | string | 是 | - | 平台标识，固定取值 aliexpress(速卖通) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 二级部门经理销售PK榜单列表(赋值给 tabledata) | - |
| `obj[][0]` | string | 二级部门(el-table 列「二级部门」prop=department) | - |
| `obj[][1]` | string | 二级部门负责人(列「二级部门负责人」prop=manager) | - |
| `obj[][2]` | string | 上月销售额(列标题「7月销售额」prop=lastMonthSalesAmont) | - |
| `obj[][3]` | string | 本月销售额(列标题「8月销售额」prop=currentMonthSalesAmont) | - |
| `obj[][4]` | string | 预计本月销售额(列「预计8月销售额」prop=expCurMonthSalesAmont) | - |
| `obj[][5]` | string | 预计增长销售额(列「预计增长销售额」prop=expIncrSalesAmont) | - |
| `obj[][6]` | number | 排名(列「排名」prop=rank；rank=1/2/3 时展示奖杯图标) | - |
| `obj[][7]` | string | 本次播报数据更新时间(取 tabledata[0].times 展示「本次播报数据更新至」) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
