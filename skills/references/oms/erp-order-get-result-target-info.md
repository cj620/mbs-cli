<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-result-target-info

新人转正结果考核目标查询(getResultTargetInfo)：营销新人成绩单「新人转正目标」模块——结果考核数据查询：按员工姓名查询该新人「结果考核」表格(考核店铺、转正目标、提前转正目标、实际完成销售额)及第一/第二阶段日常任务完成率，用于渲染结果考核行并回填两阶段完成率。

## 用法

```bash
mbs oms erp-order-get-result-target-info --employeeName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getResultTargetInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeName` | employeeName | query | string | 是 | - | 员工(新人)姓名。URL 查询参数；来源=当前页面 URL 的 employeeName 查询串，经 decodeURI 解码后拼接到接口地址 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(待人工确认) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(结果考核数据)；前端以 if(data.obj) 判空 | - |
| `obj.shopNames` | string | 结果考核-考核店铺名称(多店铺名称拼接) | - |
| `obj.transferAim` | string | 结果考核-转正目标(可编辑回填 #transInput) | - |
| `obj.astransferAim` | string | 结果考核-提前转正目标(可编辑回填 #astransInput) | - |
| `obj.saleAmount` | string | 结果考核-实际完成销售额(可编辑回填 #saleInput) | - |
| `obj.firstFinishRate` | string | 第一阶段-日常任务完成率(回填 #content7_1 #firstFinishRate/#firstInput) | - |
| `obj.secondFinishRate` | string | 第二阶段-日常任务完成率(回填 #content7_2 #secondFinishRate/#secondInput) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
