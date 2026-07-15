<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-enabel-publish-shop-by-site

按站点查询可刊登店铺(Shopee)：Shopee「批量导入/生成 listing」弹窗中，用户在站点多选框选择一个或多个站点后，按所选站点列表查询这些站点下可用于刊登的店铺，返回店铺列表用于渲染「预刊登店铺」下拉选项。

## 用法

```bash
mbs pim erp-product-get-enabel-publish-shop-by-site --siteList <array<string>>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeProductPublish/getEnabelPublishShopBySite`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `siteList` | siteList | body | array<string> | 是 | - | 站点代码列表(数组)。来源:弹窗站点多选框 #modal-site。枚举:PH/SG/MY/TH/ID/VN/BR/MX/TW/CO/CL/PL/ES/FR/AR。用户可多选,未选时为空数组。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 可刊登店铺列表(本接口业务数据;前端 data.obj || []) | - |
| `obj[]` | string | 店铺名称(列表元素唯一被前端使用字段;作为下拉 option 的 value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
