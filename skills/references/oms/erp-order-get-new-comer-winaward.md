<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-new-comer-winaward

新人试用期获得奖项查询：新人成绩单页面「试用期间获得奖项」模块数据查询：按员工姓名查询该新人在试用期间获得的奖项列表，返回奖项名称集合，前端逐条渲染序号与奖项名称。

## 用法

```bash
mbs oms erp-order-get-new-comer-winaward --employeeName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getNewComerWinaward`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeName` | employeeName | query | string | 是 | - | 员工姓名（新人姓名）。来源：页面URL查询参数employeeName，GetQueryString获取并decodeURI解码后拼接到接口URL查询串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（标准响应包字段） | - |
| `desc` | string | 响应提示信息（标准响应包字段） | - |
| `obj[]` | array | 试用期间获得奖项列表（前端判断if(data.obj)后赋值给list遍历渲染） | - |
| `obj[]` | string | 奖项名称（模板中{{v.winAward}}，逐条渲染于表格第二列；第一列为前端循环下标i，非接口返回字段） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
