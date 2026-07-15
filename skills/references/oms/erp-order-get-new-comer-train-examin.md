# mbs oms erp-order-get-new-comer-train-examin

新人培训考核查询：营销新人成绩单详情页「培训考核」板块数据查询：按员工姓名查询该新人应参加/已参加的培训课题及各项考试结果，返回培训考核记录列表，前端渲染到「培训考核」表格(content5)。

## 用法

```bash
mbs oms erp-order-get-new-comer-train-examin --employeeName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getNewComerTrainExamin`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeName` | employeeName | body | string | 是 | - | 员工(新人)姓名。来源：当前页面 URL 查询参数 employeeName(GetQueryString 取得后 decodeURI 解码)，以 URL query 形式拼接传递 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(200=成功；前端未直接使用，约定字段) | - |
| `desc` | string | 响应提示信息(前端未直接使用，约定字段) | - |
| `obj[]` | array | 培训考核记录列表(前端判断 data.obj 存在后包装为 {list: obj} 渲染；为空则不渲染) | - |
| `obj[][0]` | number | 课题类型枚举(应参加培训的课题)。1=（培训+考试）新人入职培训（第一天）;2=（培训）新人岗位技能培训（前两月）;3=（培训+考试）新人业务流程复训（第二月）;4=（3次考试）公司制度考试（每月）;5=（3次考试）物流政策考试（每月）;6=（3次考试）侵权政策考试（每月）;7=（3次考试）平台政策考试（每月）。前端据此转中文展示 | - |
| `obj[][1]` | string | 已参加培训的课题(展示于「已参加培训的课题」列) | - |
| `obj[][2]` | string | 考试结果(展示于「考试结果」列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
