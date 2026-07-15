<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-zong-jian-zong-jing-ban

判断当前用户是否总监/总经办：进入SKU详情页采购数量表单时自动调用，判断当前登录用户是否为总监/总经办角色，返回布尔值写入 state.generalManager；为 true 时跳过库存价/采购数量上限等业务校验规则。无入参，登录身份取自后端会话/Token。

## 用法

```bash
mbs pim erp-product-get-zong-jian-zong-jing-ban
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getZongJianZongJingBan`
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
| `code` | number | 响应状态码,200=成功(参照同文件其他接口统一约定) | - |
| `desc` | string | 响应提示信息(参照同文件其他接口统一约定) | - |
| `obj` | boolean | 是否总监/总经办。true=是(采购数量表单跳过库存价与数量上限校验,直接放行)；false=否(执行 StockPriceRule/AddNumRule 校验)。前端取此值写入 state.generalManager | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
