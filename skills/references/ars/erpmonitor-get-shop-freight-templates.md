<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-get-shop-freight-templates

店铺运费模板查询：爆款商品监控(shopHotProducts2)页面，按当前所选平台与店铺查询其可用的运费模板列表，用于运费模板多选下拉的选项数据。仅当已选平台且已选至少一个店铺时才发起请求。

## 用法

```bash
mbs ars erpmonitor-get-shop-freight-templates --platformId <string> --shopNames <array>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/getShopFreightTemplates`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | body | string | 是 | - | 平台ID。来源：页面平台下拉选择 shopapp.platform（单值）。为空时不发起请求。 |
| `shopNames` | shopNames | body | array | 是 | - | 店铺名称列表。来源：店铺多选 shopapp.shop（el-option 的 value=SHOPNAME，店铺名数组）。长度为 0 时不发起请求。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 运费模板列表 | - |
| `obj[][0]` | string | 运费模板ID（下拉选项 value，绑定到 shipping） | - |
| `obj[][1]` | string | 运费模板名称（下拉选项 label，显示文案） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
