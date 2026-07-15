# mbs pim erp-product-get-commissioner-by-id

根据当前用户ID判断是否为专员：根据当前登录用户（由登录态/会话识别，无需前端显式传参）查询其是否为采购/库存专员，返回布尔型权限标志。仪表盘据此判断是否展示退款日报等总监级模块；SKU详情页据此判断备货申请金额≥1000时是否需要专员审批。

## 用法

```bash
mbs pim erp-product-get-commissioner-by-id
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getCommissionerById`
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
| `desc` | string | 响应提示信息 | - |
| `obj` | boolean | 是否为专员标志。true=当前用户是专员(采购/库存专员);false=非专员。前端以真值判断:salesman.js据此决定是否展示退款日报(refunddayreport);SKUdetails2.js存入valStore.stockCommissioner,备货金额≥1000且非专员时拦截申请 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
