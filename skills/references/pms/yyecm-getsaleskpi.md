# mbs pms yyecm-getsaleskpi

销售员KPI(等级)查询：客服/销售工作台首页看板：按员工ID查询该销售员的销售额排名、销售额、毛利排名、毛利率、共事天数等 KPI 指标，用于渲染销售名片的排名与当前/上期业绩。

## 用法

```bash
mbs pms yyecm-getsaleskpi --employeeId <string> --callback <string>
```

## API

- Service: `yyecm`
- Method: `GET`
- Path: `/dev/yyecm/ecm/sales/getsaleskpi`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeId` | employeeId | query | string | 是 | - | 员工ID(销售员)。来源：页面 URL 查询参数 yyemployeeid，经 GetQueryString("yyemployeeid") 取得后作为 data.employeeId 传入 |
| `callback` | callback | query | string | 是 | - | JSONP 回调函数名。由 jQuery $.ajax({dataType:'jsonp', jsonp:'callback'}) 自动生成并追加至 URL，用于跨域返回包裹 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(系统 JSONP 统一包裹约定，本页未引用)(待人工确认) | - |
| `desc` | string | 响应提示信息(系统 JSONP 统一包裹约定，本页未引用)(待人工确认) | - |
| `obj` | object | 业务数据对象(销售员 KPI 指标集合) | - |
| `obj.salesAmountRanking` | string | 销售额排名(渲染至 #salesAmountRanking) | - |
| `obj.salesAmountTotal` | number | 销售额总排名(渲染至 #salesAmountTotal；≤3 或空时隐藏 #Amount 奖杯) | - |
| `obj.salesAmountNow` | string | 当前销售额(渲染至 #salesAmountNow) | - |
| `obj.salesAmountYesteray` | string | 截至昨日销售额(渲染至 #salesAmountYesteray；原文拼写 Yesteray) | - |
| `obj.grossProfitRatioRanking` | string | 毛利率排名(渲染至 #grossProfitRatioRanking) | - |
| `obj.grossProfitRatioTotal` | number | 毛利率总排名(渲染至 #grossProfitRatioTotal；≤3 或空时隐藏 #Profit 奖杯) | - |
| `obj.grossProfitRatioNow` | string | 当前毛利率(渲染至 #grossProfitRatioNow；非空时前端拼接 %) | - |
| `obj.grossProfitRatioLastPeriod` | string | 上期毛利率(渲染至 #grossProfitRatioLastPeriod；非空时前端拼接 %) | - |
| `obj.workingDays` | number | 共事(一起奋斗)天数(渲染至 #workingDays) | - |
| `obj.bigChief` | string | 大区/主管标识(仅注释代码引用，构造 dailyorderTimeReport 链接用)(待人工确认) | - |
| `obj.employeeName` | string | 员工姓名(仅注释代码引用)(待人工确认) | - |
| `obj.platformId` | string | 平台ID(仅注释代码引用)(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
