<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-month-sale-report

销售报表-月份(账期)列表查询：月度销售报表页(monthReport.html)初始化时调用,返回月份(账期)描述列表 obj。obj[0]=本月、obj[1]=上月、obj[2]=上上月(写入 sessionStorage 作为后续报表查询 descr 入参);obj 从第4个元素起(obj.splice(3))为前十二个月可选项,渲染进 #otherMonthSelect 下拉框。接口本身不传任何请求参数。

## 用法

```bash
mbs oms erp-order-find-month-sale-report
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/findMonth`
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
| `code` | number | 响应状态码,200=成功(本回调未校验,取自同文件标准响应包裹约定) | - |
| `desc` | string | 响应提示信息(本回调未使用,取自标准响应包裹约定) | - |
| `obj[]` | array | 月份(账期)描述列表;obj[0]本月、obj[1]上月、obj[2]上上月,obj.splice(3)(第4项起)为前十二个月可选项 | - |
| `obj[]` | string | 单个月份(账期)描述字符串,作为下拉项 value/文本,并作为后续报表查询的 descr 入参(具体文本格式待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
