<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-amazon-not-fba-shop

亚马逊非FBA店铺列表查询：亚马逊调价页面初始化拉取当前用户可见的亚马逊非FBA店铺列表，用于渲染店铺筛选下拉与多选店铺框。请求体固定为空对象，无入参；返回店铺数组，元素含 shopId/shopName 等字段。

## 用法

```bash
mbs ars erpmonitor-get-amazon-not-fba-shop
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/amaoznRevisepriceConfirm/getAmazonNotFbaShop`
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
| `success` | boolean | 请求是否成功，true 时才读取 obj 并渲染 | - |
| `obj[]` | array | 亚马逊非FBA店铺列表 | - |
| `obj[][0]` | string | 店铺ID，作为下拉 option value；用于按店铺匹配 | - |
| `obj[][1]` | string | 店铺名称，作为下拉 option 显示文本；并用于解析站点(两位大写字母) | - |
| `obj[][2]` | any | 销售负责人(TS 可选字段，前端未直接使用，业务含义待人工确认) | - |
| `obj[][3]` | any | 大主管/总负责人(TS 可选字段，前端未直接使用，业务含义待人工确认) | - |
| `obj[][4]` | any | 销售负责人ID(TS 可选字段，前端未直接使用，业务含义待人工确认) | - |
| `obj[][5]` | any | 大主管/总负责人ID(TS 可选字段，前端未直接使用，业务含义待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
