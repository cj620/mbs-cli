# mbs oms erp-order-find-factory-market-delay-order

工厂集市延迟订单-可借用运单号查询：根据输入的一批交易单号（逗号分隔，最多500个）查询工厂集市延迟订单，返回每个订单的基本信息及最多三组可借用运单号候选（含运单号、物流方式、原运费、原店铺、原订单号），供前端选择并提前上网。

## 用法

```bash
mbs oms erp-order-find-factory-market-delay-order --tradeIdStr <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ERPOrder/findFactoryMarketDelayOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `tradeIdStr` | tradeIdStr | query | string | 是 | - | 交易单号串(URL query)。来源文本域 #tradeIdStr，多个交易单号英文逗号分隔，一次最多500个；空值前端拦截。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 延迟订单列表(模板 {{each obj}} 遍历的数据根) | - |
| `obj[][0]` | string | 交易单号 | - |
| `obj[][1]` | string | 订单编号 | - |
| `obj[][2]` | string | 订单日期/下单时间 | - |
| `obj[][3]` | number | 订单延迟天数(模板展示为 {delayDay}天) | - |
| `obj[][4]` | string | 订单状态 | - |
| `obj[][5]` | string | 投递渠道(平邮/挂号) | - |
| `obj[][6]` | string | 收件国家 | - |
| `obj[][7]` | string | 可借用运单号一-运单号(单选框默认选中此项) | - |
| `obj[][8]` | string | 可借用运单号一-物流方式/运单类型 | - |
| `obj[][9]` | number | 可借用运单号一-原运费(元)(title 提示用) | - |
| `obj[][10]` | string | 可借用运单号一-原店铺(title 提示用) | - |
| `obj[][11]` | string | 可借用运单号一-原订单号(title 提示用) | - |
| `obj[][12]` | string | 可借用运单号二-运单号 | - |
| `obj[][13]` | string | 可借用运单号二-物流方式/运单类型 | - |
| `obj[][14]` | number | 可借用运单号二-原运费(元)(title 提示用) | - |
| `obj[][15]` | string | 可借用运单号二-原店铺(title 提示用) | - |
| `obj[][16]` | string | 可借用运单号二-原订单号(title 提示用) | - |
| `obj[][17]` | string | 可借用运单号三-运单号 | - |
| `obj[][18]` | string | 可借用运单号三-物流方式/运单类型 | - |
| `obj[][19]` | number | 可借用运单号三-原运费(元)(title 提示用) | - |
| `obj[][20]` | string | 可借用运单号三-原店铺(title 提示用) | - |
| `obj[][21]` | string | 可借用运单号三-原订单号(title 提示用) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
