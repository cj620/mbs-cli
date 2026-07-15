<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-team-member-by-leader-new

按店长查询团队成员(店长列表)：库存看板/必刊登「优化建议」筛选区，根据平台筛选条件查询团队成员(店长)列表，用于渲染店长下拉选择器(el-select)。Vue 组件 #shopvue 初始化及平台变更时调用，返回列表渲染为店长下拉项。

## 用法

```bash
mbs oms erp-order-get-team-member-by-leader-new [--bigChief <array>] [--companyId <string>] [--platformIds <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getTeamMemberByLeaderNew`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `bigChief` | bigChief | body | array | 否 | - | 大主管列表(过滤条件)。前端固定传空数组[](无对应控件) |
| `companyId` | companyId | body | string | 否 | - | 公司ID(按公司过滤)。前端固定传空字符串'' |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表。来源平台下拉(v-model=plantform/#plantform)：已选平台时为[平台ID],未选时为[]。元素为平台ID(string) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应结构) | - |
| `desc` | string | 响应提示信息(统一响应结构，本接口前端未读取，待人工确认) | - |
| `obj[]` | array | 店长(团队成员)列表，用于渲染店长下拉框 | - |
| `obj[]` | string | 员工(店长)姓名。下拉项的 label 与 value 均取此字段(前端唯一使用字段) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
