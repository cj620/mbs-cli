# mbs pim erp-product-get-jing-li-zong-jian

判断当前用户是否经理总监(getJingLiZongJian)：经理工作台(Dashboard)加载时调用，判断当前登录用户是否为「经理/总监」角色；返回结果 obj 为真时展示「经理考核(managerAssessment)」模块。无请求参数，纯身份/权限校验型接口。

## 用法

```bash
mbs pim erp-product-get-jing-li-zong-jian
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getJingLiZongJian`
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
| `obj` | object | 角色判定结果：真值表示当前登录用户为经理/总监(展示经理考核模块)，假值/空则隐藏。前端仅作 truthy 判断，具体为布尔或角色信息对象(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
