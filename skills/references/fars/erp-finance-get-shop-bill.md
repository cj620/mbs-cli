# mbs fars erp-finance-get-shop-bill

平台店铺列表查询：财务-平台账单页中，平台下拉框 change 时触发，按所选平台名称查询其下全部店铺，返回店铺列表用于渲染「店铺」下拉框选项。

## 用法

```bash
mbs fars erp-finance-get-shop-bill [--platform <string>]
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/bill/getShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platform` | platform | query | string | 否 | - | 平台名称。取自页面「平台」下拉框 #Platform 的当前值，以查询字符串拼接在 URL 上；未选择时传空字符串。来源控件：#Platform select。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（标准外壳；本接口回调未引用，待人工确认是否返回） | - |
| `desc` | string | 响应提示信息（标准外壳；本接口回调未引用，待人工确认是否返回） | - |
| `obj[]` | array | 店铺列表（模板遍历对象，确认使用） | - |
| `obj[]` | string | 店铺名称（作为店铺下拉 #shopList 选项的 value 与显示文本，确认使用） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
