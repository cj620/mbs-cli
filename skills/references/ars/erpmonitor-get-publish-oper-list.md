<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-publish-oper-list

刊登人下拉列表查询：热销商品监控(在线列表)页面「刊登人」下拉框数据源：根据平台、总监、经理等团队维度过滤，返回可选刊登人(id/name)列表，供顶部筛选区 publisher 选择器渲染。

## 用法

```bash
mbs ars erpmonitor-get-publish-oper-list --employeeType <string> [--companyId <array>] [--platformIds <array>] [--leaders <array>] [--managers <array>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/getPublishOperList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 是 | - | 员工类型，前端固定传"1" |
| `companyId` | companyId | body | array | 否 | - | 公司ID列表，当前固定传空数组[] |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表，来源平台选择器(this.platform)：已选为[平台ID]，未选为[](见getPlatformValueArr()) |
| `leaders` | leaders | body | array | 否 | - | 总监(leader)列表，来源总监下拉选中值this.directors |
| `managers` | managers | body | array | 否 | - | 经理(manager)列表，来源经理下拉选中值this.managers |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 刊登人列表(赋值给publishOperList) | - |
| `obj[][0]` | string | 刊登人ID(记录标识，模板用作:key) | - |
| `obj[][1]` | string | 刊登人姓名(模板el-option的label与value) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
