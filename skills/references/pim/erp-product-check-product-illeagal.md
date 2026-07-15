<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-check-product-illeagal

违规产品审核：违规产品登记表(registrationForm)「违规产品」页签中，总经办点击行内[审核]弹出审核模态框，选择审核结果(通过/驳回)并填写备注后提交。后端按 sequenceid 标记该违规记录审核状态与备注，仅返回 code/desc，前端据 code 弹窗提示并刷新列表。

## 用法

```bash
mbs pim erp-product-check-product-illeagal --sequenceid <string> --checkstatus <string> [--checkremark <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/checkProductIlleagal`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sequenceid` | sequenceid | body | string | 是 | - | 违规产品记录序号ID(审核对象主键)。来源：列表行 value.sequenceid 经 getCheckModal 写入隐藏域 #sequenceid |
| `checkstatus` | checkstatus | body | string | 是 | - | 审核结果状态。1=通过;0=驳回。来源控件:下拉框 #checkstatus;为空 alert‘请选择’阻止提交 |
| `checkremark` | checkremark | body | string | 否 | - | 审核备注/意见。来源控件:文本域 #checkremarks。checkstatus==0(驳回)时必填,checkstatus==1(通过)时可空 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功(隐藏审核框、弹出提示并刷新列表 search1());非200仅弹出提示 | - |
| `desc` | string | 响应提示信息,前端写入 #tishi 弹窗展示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
