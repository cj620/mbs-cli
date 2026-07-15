<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-shop-name-by-platform-id

根据平台ID查询店铺(店铺下拉联动)：商品统计页平台选择器 onchange 触发：当已选中具体平台时，按 platformId 拉取该平台下的店铺列表，用于渲染“请选择店铺”下拉框(#ShopName)。若平台未选(值为空)则改走 /erpmonitor/erpmonitor/monitor/getShopName 查询全部店铺。

## 用法

```bash
mbs ars erpmonitor-get-shop-name-by-platform-id --platformId <string>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/monitor/getShopNameByPlatformId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | query | string | 是 | - | 平台ID。取自平台下拉框 $("#platformName").val()，option 值来源于 getPlatformNameAndId 返回项的 platformId；仅平台非空时提交并调用本接口。来源控件：<select id="platformName"> |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(系统统一包装字段，200/成功标识；本页未显式读取) | - |
| `desc` | string | 响应提示信息(系统统一包装字段；本页未显式读取) | - |
| `obj[]` | array | 店铺列表。模板 #contentTemplate2 遍历渲染为 #ShopName 店铺下拉的 <option> | - |
| `obj[][0]` | string | 店铺ID。渲染为 <option value="{{value.shopId}}">，作为店铺下拉选中值 | - |
| `obj[][1]` | string | 店铺名称。渲染为 <option> 显示文本 {{value.shopName}} | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
