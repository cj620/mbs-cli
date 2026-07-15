# mbs oms erp-mobile-get-sku-info-by-item-id

在线商品SKU信息查询（按商品ID）：移动端「在线」商品列表中点击某商品行的展开箭头时调用，按商品ID(parentSPUId/itemId)与店铺ID(shopId)查询该商品下全部SKU的售价、币种、运费、在线库存、马帮库存及调价/调库存状态，并据部门(department)判断是否展示调价/调库存入口。

## 用法

```bash
mbs oms erp-mobile-get-sku-info-by-item-id --parentSPUId <string> --shopId <string>
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/hotProductListing/getSkuInfoByItemId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `parentSPUId` | parentSPUId | body | string | 是 | - | 商品ID(SPU父级ID，取自列表行 v.itemId，经 showTable 传入) |
| `shopId` | shopId | body | string | 是 | - | 店铺ID(取自列表行 v.shopId) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功,500=失败 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(无则不渲染) | - |
| `obj.department` | string | 所属部门。等于"销售部"时前端展示调价/调库存入口 | - |
| `obj.skuInfoList[]` | array | 该商品下的SKU信息列表 | - |
| `obj.skuInfoList[][0]` | string | ERP SKU编码(列表首列展示，亦作调价/调库存元素id) | - |
| `obj.skuInfoList[][1]` | string | SKU平台链接URL(存在时 erpSKU 渲染为超链接) | - |
| `obj.skuInfoList[][2]` | number | SKU售价(原币种，前端 .toFixed(2) 保留2位展示) | - |
| `obj.skuInfoList[][3]` | string | 币种(展示于售价之后) | - |
| `obj.skuInfoList[][4]` | number | SKU运费(前端 .toFixed(2) 展示；为空时显示"--") | - |
| `obj.skuInfoList[][5]` | number | 调价状态。4=调价中(展示红字"(调价中)"且禁止再次调价) | - |
| `obj.skuInfoList[][6]` | number | SKU所属平台ID。枚举(支持在线调价/调库存)：1/2/10/16/18/26；其余平台不展示调价/调库存入口 | - |
| `obj.skuInfoList[][7]` | number | 在线库存(为 null 时该列不展示) | - |
| `obj.skuInfoList[][8]` | number | 改库存状态。4=修改中(展示红字"(修改中)"且禁止再次修改) | - |
| `obj.skuInfoList[][9]` | number | 马帮库存(为 null 时改用红色 flag 展示) | - |
| `obj.skuInfoList[][10]` | string | 库存标记/提示(当 inventory 为 null 时以红色展示) | - |
| `obj.skuInfoList[][11]` | string | 店铺ID(调价 modifyPrice、调库存 adjustInventory 时取用) | - |
| `obj.skuInfoList[][12]` | string | 平台SKU(调价/调库存时取用，提交至 revisePrice/reviseInventory 的 platformSku) | - |
| `obj.skuInfoList[][13]` | string | 商品ID(调价/调库存时取用作 itemId) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
