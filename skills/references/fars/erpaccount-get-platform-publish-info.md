<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-get-platform-publish-info

平台正常在售产品刊登报表查询：财务管理看板加载“正常在售产品刊登报表”：无入参，按商品类目返回 EBAY/ALIEXPRESS/WISH/AMAZON/LAZADA/SHOPEE 六大平台的在线老品SKU数、在线新品SKU数(新品=30天内创建的sku)、平均刊登量，前端用 art-template 渲染为表格。

## 用法

```bash
mbs fars erpaccount-get-platform-publish-info
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/getPlatformPublishInfo`
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
| `code` | number | 响应状态码,200=成功(本接口模板未取用,统一外层)(待人工确认) | - |
| `desc` | string | 响应提示信息(本接口模板未取用,统一外层)(待人工确认) | - |
| `obj[]` | array | 正常在售产品刊登报表数据(按商品类目分行) | - |
| `obj[][0]` | string | 商品类目名称 | - |
| `obj[][1]` | number | EBAY平台-在线老品SKU数 | - |
| `obj[][2]` | number | EBAY平台-在线新品SKU数(新品=30天内创建的sku) | - |
| `obj[][3]` | number | EBAY平台-平均刊登量 | - |
| `obj[][4]` | number | ALIEXPRESS(速卖通)平台-在线老品SKU数 | - |
| `obj[][5]` | number | ALIEXPRESS(速卖通)平台-在线新品SKU数 | - |
| `obj[][6]` | number | ALIEXPRESS(速卖通)平台-平均刊登量 | - |
| `obj[][7]` | number | WISH平台-在线老品SKU数 | - |
| `obj[][8]` | number | WISH平台-在线新品SKU数 | - |
| `obj[][9]` | number | WISH平台-平均刊登量 | - |
| `obj[][10]` | number | AMAZON(亚马逊)平台-在线老品SKU数 | - |
| `obj[][11]` | number | AMAZON(亚马逊)平台-在线新品SKU数 | - |
| `obj[][12]` | number | AMAZON(亚马逊)平台-平均刊登量 | - |
| `obj[][13]` | number | LAZADA平台-在线老品SKU数 | - |
| `obj[][14]` | number | LAZADA平台-在线新品SKU数 | - |
| `obj[][15]` | number | LAZADA平台-平均刊登量 | - |
| `obj[][16]` | number | SHOPEE平台-在线老品SKU数 | - |
| `obj[][17]` | number | SHOPEE平台-在线新品SKU数 | - |
| `obj[][18]` | number | SHOPEE平台-平均刊登量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
