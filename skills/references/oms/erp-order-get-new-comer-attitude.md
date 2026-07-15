# mbs oms erp-order-get-new-comer-attitude

新人成绩单-态度(出勤)明细查询：营销新人成绩单详情页「态度」板块数据查询：按员工姓名查询新人的出勤态度明细，返回个人与大酋长组平均两行数据，含应出勤工时、实际工时、事假、其它假、迟到、秒闪、缺卡、旷工等出勤考核指标，用于渲染态度表格。

## 用法

```bash
mbs oms erp-order-get-new-comer-attitude --employeeName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getNewComerAttitude`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeName` | employeeName | body | string | 是 | - | 员工(新人)姓名，作为查询主键，拼接到接口URL查询串(GetQueryString('employeeName')→decodeURI) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(待人工确认,模板未直接使用) | - |
| `desc` | string | 响应提示信息(待人工确认,模板未直接使用) | - |
| `obj[]` | array | 业务数据列表，态度(出勤)明细行集合；前端据 data.obj 真假判断是否渲染 | - |
| `obj[][0]` | number | 数据行类型枚举。1=个人;2=大酋长组平均(前端转中文展示) | - |
| `obj[][1]` | number | 应该出勤工时 | - |
| `obj[][2]` | number | 实际工时 | - |
| `obj[][3]` | number | 事假 | - |
| `obj[][4]` | number | 其它假 | - |
| `obj[][5]` | number | 迟到次数 | - |
| `obj[][6]` | number | 秒闪次数 | - |
| `obj[][7]` | number | 缺卡(次数) | - |
| `obj[][8]` | number | 旷工(次数) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
