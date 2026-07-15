<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-price-channel-by-site

根据站点查询算价渠道列表：Shopee 自动刊登「设置店铺刊登参数」弹窗中，根据当前店铺所属站点(site)查询该站点可选的算价渠道列表，用于填充弹窗内算价渠道下拉框(#priceChannels)的选项。

## 用法

```bash
mbs pim erp-product-find-price-channel-by-site --site <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeProductController/findPriceChannelBySite`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `site` | site | query | string | 是 | - | 站点代码。来源 pubModalState.site(由 setPubModal 赋值,取自 findShopParamByShopname 返回的店铺 obj.site)。已知取值:TH/VN/MX/PH/SG/MY/ID/BR 等 Shopee 站点 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200/304=成功;109无权限/404无效路径/500服务器异常/601未登录 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 算价渠道列表(字符串数组,前端赋值给 priceChannelOptions 渲染算价渠道下拉) | - |
| `obj[]` | string | 单个算价渠道名称/编码(下拉选项的 value 与展示文本,原值直接展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
