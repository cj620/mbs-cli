# mbs fars erpaccount-find-logistics

昨天货运渠道监控报表查询：物流员/销售首页仪表盘加载时调用，按时间区间统计昨天各货运渠道的发货单量、运费、重量、单价、上网/妥投时效、无物流轨迹占比及渠道启用状态，返回渠道监控列表用于「昨天货运渠道监控报表」表格渲染。

## 用法

```bash
mbs fars erpaccount-find-logistics --sortStyle <string> --endnum <string> --startTime <string> --endTime <string>
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/logisticsController/findLogistics`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sortStyle` | sortStyle | body | string | 是 | - | 排序方式。前端固定传'发货单量降序'(来源:代码常量,无控件) |
| `endnum` | endnum | body | string | 是 | - | 查询条数(取前N条)。前端固定传'20'(来源:代码常量,无控件) |
| `startTime` | startTime | body | string | 是 | - | 统计开始时间(yyyy-MM-dd)。前端取当前日期前一天(getBeforeMonth(new Date())),即'昨天'(来源:代码计算,无控件) |
| `endTime` | endTime | body | string | 是 | - | 统计结束时间(yyyy-MM-dd)。源码赋值为startTime(与开始时间相同,疑为笔误)(来源:代码计算,无控件) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 货运渠道监控列表(按发货单量降序) | - |
| `obj[][0]` | string | 货运渠道名称(同时用于跳转趋势图 expressName 参数) | - |
| `obj[][1]` | number | 发货单量 | - |
| `obj[][2]` | number | 运费(￥) | - |
| `obj[][3]` | number | 重量 | - |
| `obj[][4]` | number | 单价(元/克) | - |
| `obj[][5]` | string | 类型 | - |
| `obj[][6]` | number | 上网时效(天)(为空则不展示) | - |
| `obj[][7]` | number | 妥投时效(天)(为空则不展示) | - |
| `obj[][8]` | number | 无物流轨迹占比(前端拼接 % 展示) | - |
| `obj[][9]` | number | 渠道状态枚举。0=停用;1=正常 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
