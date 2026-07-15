# mbs fars erp-finance-get-shop-manager

获取店长信息：PayPal纠纷(Case)列表页初始化时调用，无入参，返回当前可选的店长名称列表，用于填充顶部"店长"多选下拉框(#shopManager)，作为列表查询的筛选条件来源。

## 用法

```bash
mbs fars erp-finance-get-shop-manager
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/paypalcase/getShopManager`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(失败时前端alert展示) | - |
| `obj[]` | array | 店长名称列表(下拉数据源) | - |
| `obj[]` | string | 单个店长名称(数组元素为字符串,直接作为<option>的value与文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
