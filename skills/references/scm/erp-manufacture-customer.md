# mbs scm erp-manufacture-customer

客户信息详情查询：进入大客户详情页时，根据客户主键(sequenceid)查询单个客户的联系方式(Skype/微信/WhatsApp/邮箱/电话)及订单概览(累计订单数、累计金额、退款金额、复购间隔)，返回结果渲染到左侧客户信息卡片。

## 用法

```bash
mbs scm erp-manufacture-customer --id <string>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/customer/customer`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | query | string | 是 | - | 客户主键ID。来源：当前页面 URL 查询串 sequenceid（GetQueryString("sequenceid")）；以 URL 查询参数 ?id= 形式拼接传递；无对应输入控件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口成功回调仅判断 data.obj 是否存在) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(单个客户信息，模板中作为 list) | - |
| `obj.customer` | string | 客户名称(卡片标题 {{list.customer}}) | - |
| `obj.sequenceid` | number | 客户主键ID(编辑联系方式时回填 data-sequenceid) | - |
| `obj.customerSkype` | string | 客户 Skype 账号 | - |
| `obj.customerWechat` | string | 客户微信号 | - |
| `obj.customerWhatsApp` | string | 客户 WhatsApp 账号 | - |
| `obj.customerEmail` | string | 客户邮箱 | - |
| `obj.customerTel` | string | 客户电话号码 | - |
| `obj.orderNum` | number | 累计订单(订单数量) | - |
| `obj.orderAmount` | number | 累计金额(订购总金额) | - |
| `obj.refundAmount` | number | 退款金额 | - |
| `obj.repeatBuyInterval` | number | 复购间隔(单位：天) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
