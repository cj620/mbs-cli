<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-publish-shop-yesterday

SMT自动刊登-昨日刊登统计查询：查询昨日SMT自动刊登的汇总统计：返回昨日参与生成listing的店铺数、生成的listing总数、刊登成功数与失败数，用于页面顶部概况栏展示。

## 用法

```bash
mbs pim erp-product-find-publish-shop-yesterday
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/smtProductController/findPublishShopYesterday`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 昨日刊登统计数据对象 | - |
| `obj.shopsnum` | number | 昨日参与生成listing的店铺数(页面"昨日为X个店铺") | - |
| `obj.allnum` | number | 昨日生成的listing总数(页面"生成X个listing") | - |
| `obj.successnum` | number | 昨日刊登成功数(页面"刊登成功X") | - |
| `obj.failnum` | number | 昨日刊登失败数(页面"失败X") | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
