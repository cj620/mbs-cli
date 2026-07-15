<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-jing-li-zong-jian-ana-zong-jing-ban1

经理/总监/Ana/总经办权限校验：库存看板页加载时(created 钩子)发起的无参权限探测接口。后端依据当前会话用户身份判定其是否为经理/总监/Ana/总经办，返回对象 obj；前端仅以 data.obj 是否为真值判断有无权限，为真则置 accessible=true，从而让「停止spu推送」按钮可见。

## 用法

```bash
mbs pim erp-product-get-jing-li-zong-jian-ana-zong-jing-ban1
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getJingLiZongJianAnaZongJingBan1`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准包络,前端本接口未显式判断) | - |
| `desc` | string | 响应提示信息(标准包络) | - |
| `obj` | object | 权限判定结果对象。前端仅以其真值(truthy)判断当前用户是否为经理/总监/Ana/总经办：非空/非null 即视为有权限，置 accessible=true。其内部具体字段前端未使用,(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
