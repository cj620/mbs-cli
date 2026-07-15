<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-zong-jing-ban-cai-wu

获取总经办财务权限标识：无入参的权限校验接口。前端在供应商回款(returnOfItem)页面初始化时调用,根据返回的布尔值 obj 决定当前用户是否为「总经办财务」,进而控制「财务导入」「批量核销」「财务核销」「异常处理」等财务操作入口(ButtonAble)是否展示。

## 用法

```bash
mbs pim erp-product-get-zong-jing-ban-cai-wu
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getZongJingBanCaiWu`
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
| `code` | number | 响应状态码,200=成功(统一响应结构固定字段;本接口前端未直接读取) | - |
| `desc` | string | 响应提示信息(统一响应结构固定字段;本接口前端未直接读取) | - |
| `obj` | boolean | 是否为「总经办财务」权限标识:true=是总经办财务(显示财务导入/批量核销/财务核销等入口),false=否(隐藏)。前端直接 ButtonAble.value = data.obj 作布尔判断使用 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
