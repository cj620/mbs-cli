# mbs pim erp-product-preview-task

Shopee批量刊登-预览生成店铺商品行(previewTask)：Shopee商品批量刊登弹窗中，依据所选站点(siteList)与预刊登店铺(shopList)，后端预生成待刊登店铺商品行(含唯一标识、默认站点、店铺名)，前端渲染到批量导入表格供补填库存/利润率/折扣率/平台费率/价格渠道后提交刊登。

## 用法

```bash
mbs pim erp-product-preview-task --siteList <array> [--shopList <array>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeProductPublish/previewTask`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `siteList` | siteList | body | array | 是 | - | 站点列表，取自站点多选框 #modal-site 的 select2 选中值。为空时前端阻止请求。枚举：PH/SG/MY/ID/BR/VN/TW/TH/MX 等 Shopee 站点代码 |
| `shopList` | shopList | body | array | 否 | - | 预刊登店铺列表，取自店铺多选框 #modal-shop 的 select2 选中值。店铺选项由 getEnabelPublishShopBySite 按所选站点动态加载 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 预生成的待刊登店铺商品行列表(为空则取 []) | - |
| `obj[][0]` | string | 行唯一标识，前端用于与表格已存在行匹配去重，渲染为隐藏域 | - |
| `obj[][1]` | string | 默认站点(站点代码)，只读展示，并决定价格渠道(priceChannels)可选项 | - |
| `obj[][2]` | string | 店铺名称，渲染为隐藏域，并默认填入提交备注(submitContent) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
