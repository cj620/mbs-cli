<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-get-customer-log

客户操作日志查询(getCustomerLog)：客户详情页加载/编辑客户信息后调用，按客户ID查询该客户的全部操作日志(操作人、操作时间、操作内容)，返回日志列表渲染到 #customerLog 区域(art-template logTemplate)。

## 用法

```bash
mbs scm erp-manufacture-get-customer-log --customId <string>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/customer/getCustomerLog`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `customId` | customId | query | string | 是 | - | 客户ID(客户序列ID)。来源：页面 URL 查询参数 sequenceid，经 GetQueryString("sequenceid") 取得后以 ?customId= 拼接到接口URL。来源控件：URL 地址栏参数(非页面输入控件) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 客户操作日志列表(模板 logTemplate 遍历渲染) | - |
| `obj[][0]` | string | 操作人(创建人)，模板绿色字号展示 | - |
| `obj[][1]` | string | 操作时间，模板展示于操作人之后 | - |
| `obj[][2]` | string | 操作日志内容(正文) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
