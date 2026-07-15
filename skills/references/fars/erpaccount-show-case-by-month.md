# mbs fars erpaccount-show-case-by-month

Case按月统计(按所属订单月份归类)：仪表盘经理明细页：按搜索类型(物流方式/国家/订单月份/店铺/马帮SKU)与时间区间统计 case 数。页面 search() 用同一组参数发起两次 POST：第一次绘制 ECharts 柱状图(月份-case数)，第二次渲染明细表(月份/case数/case数按订单月份归类占比)。本页固定为按所属订单月份搜索(filterType=5)。

## 用法

```bash
mbs fars erpaccount-show-case-by-month [--casetimeend <string>] [--casetimestart <string>] [--country <string>] --detailCase <number> [--filterType <string>] [--shoptype <string>] [--productid <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/showCaseByMonth`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `casetimeend` | casetimeend | body | string | 否 | - | case 统计结束时间(结束月份)，来源控件 #casetimeend(type=date)；search() 内重置为当前日期 getNowFormatDate()，格式 YYYY-MM-DD |
| `casetimestart` | casetimestart | body | string | 否 | - | case 统计起始时间(开始月份)，来源控件 #casetimestart(type=date)；search() 内重置为结束日期前一个月 getBeforeMonth(date)，格式 YYYY-MM-DD |
| `country` | country | body | string | 否 | - | 国家，来源控件 #country(本页 DOM 中无该控件，取值通常为空；按国家搜索时使用)(待人工确认) |
| `detailCase` | detailCase | body | number | 是 | - | 明细 case 标识，固定传 1(表示获取按月明细数据) |
| `filterType` | filterType | body | string | 否 | - | 搜索类型(过滤维度)，来源控件 #filterType。枚举：1=按物流方式搜索;0=按国家搜索;5=按所属订单月份搜索(本页默认/固定);2=按店铺搜索;3=按马帮SKU搜索。值≠5 时跳转 managerdetail.html |
| `shoptype` | shoptype | body | string | 否 | - | 店铺类型/店铺，来源控件 #shoptype(本页 DOM 中无该控件，取值通常为空；按店铺搜索时使用)(待人工确认) |
| `productid` | productid | body | string | 否 | - | 马帮SKU/产品ID，来源控件 #productid(本页 DOM 中无该控件，取值通常为空；按马帮SKU搜索时使用)(待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | case 按月统计结果列表(每元素为一个月份的统计行) | - |
| `obj[][0]` | string | 月份(柱状图 X 轴 / 明细表「月份」列) | - |
| `obj[][1]` | number | case 数(柱状图 Y 轴 / 明细表「case数」列；前端对全部行求和生成合计行) | - |
| `obj[][2]` | number | case 数按订单月份归类占比(原值为小数，前端×100保留2位并拼接%展示；为空则不展示%) | - |
| `obj[][3]` | number | 期间订单数(模板 #contentTemplate3 中该列与 {{value.ordercount}} 均已注释，当前未启用)(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
