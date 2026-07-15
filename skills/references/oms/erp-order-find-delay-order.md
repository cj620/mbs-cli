<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-delay-order

查询可借用运单号(延迟订单)：根据输入的交易单号(可多个逗号分隔,一次最多500个)查询延迟订单及其可借用的运单号(最多三个候选),返回订单基础信息、延迟天数、渠道、国家及每个候选运单号的快递类型/原运费/原店铺/原订单号,供前端选择并'提前上网'借用。

## 用法

```bash
mbs oms erp-order-find-delay-order --tradeIdStr <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ERPOrder/findDelayOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `tradeIdStr` | tradeIdStr | query | string | 是 | - | 交易单号(URL查询参数)。来源:文本域 #tradeIdStr;支持多个交易单号逗号分隔,一次最多500个;为空时前端弹窗拦截不发请求 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 延迟订单列表(可借用运单号查询结果) | - |
| `obj[][0]` | string | 交易单号 | - |
| `obj[][1]` | string | 订单编号 | - |
| `obj[][2]` | string | 订单日期 | - |
| `obj[][3]` | number | 订单延迟天数(单位:天,模板展示为'{delayDay}天') | - |
| `obj[][4]` | string | 订单状态 | - |
| `obj[][5]` | string | 渠道(平邮/挂号) | - |
| `obj[][6]` | string | 国家 | - |
| `obj[][7]` | string | 可借用运单号一-运单号ID(单选框 value,默认选中) | - |
| `obj[][8]` | string | 可借用运单号一-快递类型 | - |
| `obj[][9]` | number | 可借用运单号一-原运费(单位:元,title 提示) | - |
| `obj[][10]` | string | 可借用运单号一-原店铺(类型,title 提示) | - |
| `obj[][11]` | string | 可借用运单号一-原订单号(title 提示) | - |
| `obj[][12]` | string | 可借用运单号二-运单号ID(单选框 value) | - |
| `obj[][13]` | string | 可借用运单号二-快递类型 | - |
| `obj[][14]` | number | 可借用运单号二-原运费(单位:元,title 提示) | - |
| `obj[][15]` | string | 可借用运单号二-原店铺(类型,title 提示) | - |
| `obj[][16]` | string | 可借用运单号二-原订单号(title 提示) | - |
| `obj[][17]` | string | 可借用运单号三-运单号ID(单选框 value) | - |
| `obj[][18]` | string | 可借用运单号三-快递类型 | - |
| `obj[][19]` | number | 可借用运单号三-原运费(单位:元,title 提示) | - |
| `obj[][20]` | string | 可借用运单号三-原店铺(类型,title 提示) | - |
| `obj[][21]` | string | 可借用运单号三-原订单号(title 提示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
