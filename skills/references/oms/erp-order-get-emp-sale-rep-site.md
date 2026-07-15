<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-emp-sale-rep-site

员工销售报表站点统计查询：月销售主管报表中，鼠标悬浮到某员工行时按需查询该员工在指定月份、指定平台下各站点的新刊登量、总在线量与新品比例，渲染到悬浮下拉框中。第一层(getEmpSaleRepSite)与第二层(getEmpSaleRepSite2)均调用本接口，入参与出参一致。

## 用法

```bash
mbs oms erp-order-get-emp-sale-rep-site --empName <string> --descr <string> --isChief <string> --platformId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getEmpSaleRepSite`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `empName` | empName | body | string | 是 | - | 员工姓名。来源 hover 行 data-empname，若含 '[' 则截取 '[' 之前部分（去除工号/后缀） |
| `descr` | descr | body | string | 是 | - | 月份描述（统计月份）。来源 sessionStorage 的 thisMonth/lastMonth/beforeMonth（或其他月选择值） |
| `isChief` | isChief | body | string | 是 | - | 是否主管标识。来源 hover 行 data-ischief（用于区分主管/员工口径） |
| `platformId` | platformId | body | string | 是 | - | 平台ID。来源 hover 行 data-platformid（按平台过滤站点统计） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功；500=失败 | - |
| `desc` | string | 响应提示信息（code=500 时作为错误文案红色展示） | - |
| `obj[]` | array | 站点统计列表（员工在该月份/平台下各站点统计） | - |
| `obj[][0]` | string | 站点（站点名称，表头“站点”） | - |
| `obj[][1]` | number | 新刊登量（表头“新刊登量”） | - |
| `obj[][2]` | number | 总在线量（表头“总在线量”；为空时展示 '--'） | - |
| `obj[][3]` | number | 新品比例（表头“新品比例”，前端拼接 '%' 展示；为 null 时展示 '--'） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
