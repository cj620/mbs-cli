<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-0-1

获取大酋长列表：手动刊登相关数据统计页初始化时调用，获取「大酋长」下拉选择框的数据源。返回大酋长（团队负责人）列表，每项含 id 与 name，前端用 art-template 渲染为 #bigChief 下拉框的 option（value=id，文本=name）。选中后联动 getTeamMemberByLeader 拉取组员。

## 用法

```bash
mbs oms erp-order-0-1 --p1 <number> --p2 <number>
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleReport/getBigChief2/1/0`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `p1` | p1 | query | number | 是 | - | 路径参数1，固定值 1，具体业务含义（如类型/状态/是否启用）(待人工确认) |
| `p2` | p2 | query | number | 是 | - | 路径参数2，固定值 0，具体业务含义（如状态/层级/标志位）(待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（前端示例未显式校验）(待人工确认) | - |
| `desc` | string | 响应提示信息（前端示例未使用）(待人工确认) | - |
| `obj[]` | array | 大酋长（团队负责人）列表，前端取 data.obj 作为下拉数据源 | - |
| `obj[][0]` | string | 大酋长ID，渲染为 option value，选中值用于联动查询组员 | - |
| `obj[][1]` | string | 大酋长姓名/名称，渲染为 option 显示文本（搜索时取 option:selected 文本作为 bigChief 入参） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
