<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-shop-name

查询店铺列表(下拉)：商品统计页在未选择平台(平台下拉为空)时，拉取全部可见店铺列表，用于填充"请选择店铺"下拉框；每项包含店铺ID与店铺名称，供后续按店铺过滤商品统计使用。

## 用法

```bash
mbs ars erpmonitor-get-shop-name
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/getShopName`
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
| `code` | number | 响应状态码,200=成功(统一包裹字段,本调用未显式读取)(待人工确认) | - |
| `desc` | string | 响应提示信息(统一包裹字段,本调用未显式读取)(待人工确认) | - |
| `obj[]` | array | 店铺列表数组(模板 {{each obj value i}} 遍历渲染店铺下拉) | - |
| `obj[][0]` | string | 店铺ID(作为 <option> 的 value 值,后续按店铺过滤统计) | - |
| `obj[][1]` | string | 店铺名称(作为 <option> 的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
