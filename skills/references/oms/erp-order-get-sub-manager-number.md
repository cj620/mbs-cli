<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-sub-manager-number

销售目标-下级主管(酋长)业绩数量查询：销售日报页面，点击展开某员工行时，按 employeeId+weekTag 查询其下级主管(酋长)的本周/上周/上上周业绩数量明细(weekList)，用于渲染下钻子表。请求参数全部以 URL query 传递(weekTag: 001本周/010上周/100上上周)。

## 用法

```bash
mbs oms erp-order-get-sub-manager-number --employeeId <string> [--employeeName <string>] --weekTag <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/salesTarget/getSubManagerNumber`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeId` | employeeId | query | string | 是 | - | 员工ID(被展开行的主管/员工ID)，来源：被点击行 tr 的 data-id |
| `employeeName` | employeeName | query | string | 否 | - | 员工姓名，来源：被点击行 tr 的 data-name，仅用于回显/拼接 |
| `weekTag` | weekTag | query | string | 是 | - | 周标签枚举。001=本周;010=上周;100=上上周 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(统一外壳，200=成功；本回调未显式使用) | - |
| `desc` | string | 响应提示信息(统一外壳，本回调未显式使用) | - |
| `obj` | object | 业务数据对象(回调以 if(data.obj) 判空) | - |
| `obj.flag` | number | 是否可继续下钻标记。模板中 flag==1 时不显示展开图标(无下级)，否则显示；前端会将其复制到每条 weekList[i].flag | - |
| `obj.weekList[]` | array | 下级主管(酋长)业绩明细列表(前端映射为 nextList 渲染) | - |
| `obj.weekList[][0]` | string | 下级主管员工ID(渲染到 tr 的 data-id，供再次下钻店铺) | - |
| `obj.weekList[][1]` | string | 下级主管姓名(展示并写入 tr 的 data-name) | - |
| `obj.weekList[][2]` | string | 平台名称(存在时以标签形式展示) | - |
| `obj.weekList[][3]` | number | 该主管业绩数量合计(行汇总列) | - |
| `obj.weekList[][4]` | number | 是否可继续下钻标记(前端由 obj.flag 赋值；接口本身是否返回该字段待人工确认)，控制子图标显示 | - |
| `obj.weekList[][5][]` | array | 分周/分日业绩数量明细列表(逐列渲染) | - |
| `obj.weekList[][5][]` | number | 对应周/日的业绩数量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
