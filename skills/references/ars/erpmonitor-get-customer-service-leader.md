# mbs ars erpmonitor-get-customer-service-leader

客服组长下拉列表查询：运营监控报表「客服绩效数据」视图初始化时调用，获取全部客服组长列表，用于填充页面「组长」多选下拉框(#leaderList)，供后续按组长查询组员/店铺/客服绩效数据。该接口无请求参数(不传 body)。

## 用法

```bash
mbs ars erpmonitor-get-customer-service-leader
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/smtShopKpi/getCustomerServiceLeader`
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
| `code` | number | 响应状态码,200=成功(本接口前端未显式校验,仅判断 obj) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 客服组长列表(前端作为 leaderTemplate 的 list 渲染) | - |
| `obj[][0]` | string | 组长ID(填入 <option value>,作为后续查询组员的入参) | - |
| `obj[][1]` | string | 组长姓名(下拉选项显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
