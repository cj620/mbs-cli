<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-0-2

获取大酋长(销售战报)列表：进入“产品刊登分析(开发覆盖率)”页面时加载“大酋长”下拉框数据源。页面 ready 时调用，返回大酋长(销售主管/区域负责人)列表，渲染为 #bigChief 下拉的 option，其 id 作为选中值、name 作为显示文本与 peoanme 属性。

## 用法

```bash
mbs oms erp-order-0-2 --p1 <number> --p2 <number>
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleReport/getBigChief2/2/0`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `p1` | p1 | query | number | 是 | - | URL 路径参数1，调用处固定为 2(业务含义待人工确认，疑为类型/维度标识) |
| `p2` | p2 | query | number | 是 | - | URL 路径参数2，调用处固定为 0(业务含义待人工确认，疑为状态/起始标识) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准响应包装，本页成功回调未直接使用，待人工确认) | - |
| `desc` | string | 响应提示信息(标准响应包装，本页成功回调未直接使用，待人工确认) | - |
| `obj[]` | array | 大酋长列表(成功回调据 data.obj 判断并渲染下拉) | - |
| `obj[][0]` | string | 大酋长ID，作为 option value，后续 #bigChief 选中值(传入 getTeamMemberByLeader) | - |
| `obj[][1]` | string | 大酋长姓名，作为 option 显示文本及 peoanme 属性(search 时取为 bigChief 名称) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
