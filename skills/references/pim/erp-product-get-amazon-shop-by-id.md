<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-amazon-shop-by-id

根据店铺ID查询Amazon店铺信息：商品导出新建页选择 Amazon 店铺(下拉控件 #shopnames)后，按所选店铺 sid 查询该店铺详情，回填品牌名称(platformshopname)与店铺URL名(amazonurlname)到表单。店铺ID以 URL query 参数 shopid 传递，无请求体。

## 用法

```bash
mbs pim erp-product-get-amazon-shop-by-id --shopid <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productReport/getAmazonShopById`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopid` | shopid | query | string | 是 | - | 店铺ID(URL query 参数)。取自 Amazon 店铺下拉控件 #shopnames 的选中值，即店铺 sid(选项 value 来源于 getAmazonShop 返回的 v.sid)。无请求体。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包装,前端本调用未显式校验) | - |
| `desc` | string | 响应提示信息(统一响应包装) | - |
| `obj[]` | array | 店铺信息列表，前端取首元素 obj[0] 使用 | - |
| `obj[][0]` | string | 平台店铺品牌名称，回填到输入框 #platformshopname | - |
| `obj[][1]` | string | 店铺URL名/站点标识，回填到隐藏输入框 #amazonurlname | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
