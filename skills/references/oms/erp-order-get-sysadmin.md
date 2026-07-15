<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-sysadmin

获取系统管理员默认平台：双屏销售大屏(doubleinfo2)初始化时调用。无入参，返回当前登录用户(系统管理员)的默认平台ID。前端在未通过URL指定 platformid 时，用返回的 obj 作为平台下拉框(#platformList)的默认选中值，随后触发 search() 按该平台刷新看板。

## 用法

```bash
mbs oms erp-order-get-sysadmin
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleVistingCard/getSysadmin`
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
| `code` | number | 响应状态码,200=成功(信封约定字段) | - |
| `desc` | string | 响应提示信息(信封约定字段) | - |
| `obj` | string | 系统管理员默认平台ID。前端在URL未带 platformid 时，作为平台下拉框(#platformList)默认选中值；取值为平台ID(如 1=eBay/2=Amazon/10=AliExpress 等，与页面平台枚举一致) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
