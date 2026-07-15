<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-new-comer-help-result

新人助力结果查询：按员工姓名查询新人转正助力结果，返回方案一/方案二两套助力评估数据（第一阶段、第二阶段、转正述职评分、完成目标档位、提前转正天数），用于在"新人助力结果"表格中渲染。

## 用法

```bash
mbs oms erp-order-get-new-comer-help-result --employeeName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getNewComerHelpResult`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeName` | employeeName | query | string | 是 | - | 员工姓名。来源：页面 URL 查询串 employeeName，经 GetQueryString 取值并 decodeURI 解码后拼接到接口 URL |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（信封字段，待人工确认枚举） | - |
| `desc` | string | 响应提示信息（信封字段） | - |
| `obj[]` | array | 新人助力结果列表（前端取 data.obj 作为列表渲染） | - |
| `obj[][0]` | string | 方案一-第一阶段（助力结果） | - |
| `obj[][1]` | string | 方案一-第二阶段（助力结果） | - |
| `obj[][2]` | string | 方案一-转正述职评分 | - |
| `obj[][3]` | string | 方案二-完成目标档位 | - |
| `obj[][4]` | string | 方案二-提前转正天数（单位：天） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
