<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-images

获取亚马逊刊登SKU图片列表：亚马逊自动刊登确认列表中，点击某 SKU 的图片排序/拖拽排序时调用：按店铺+ERP SPU+ERP SKU+刊登分组ID 查询该 SKU 当前的主图、附图1~8、样本图(色卡图)URL，前端用 art-template imagesTemplate 渲染成可拖拽排序的 li>img 列表。

## 用法

```bash
mbs pim erp-product-get-images --shopId <string> --erpSPU <string> --erpSKU <string> --groupid <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getImages`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopId` | shopId | body | string | 是 | - | 店铺ID(亚马逊店铺标识,来源行数据 data-shopid) |
| `erpSPU` | erpSPU | body | string | 是 | - | ERP商品SPU编号(来源行数据 data-erpspu) |
| `erpSKU` | erpSKU | body | string | 是 | - | ERP商品SKU编号(变体SKU,来源行数据 data-erpsku) |
| `groupid` | groupid | body | string | 是 | - | 亚马逊刊登分组ID(同一刊登批次/Listing分组,来源行数据 data-groupid) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 图片信息对象(无 obj 则不渲染) | - |
| `obj.mainImageUrl` | string | 主图URL(列表首张,拖拽排序后作为主图) | - |
| `obj.otherImageUrl1` | string | 附图1 URL | - |
| `obj.otherImageUrl2` | string | 附图2 URL | - |
| `obj.otherImageUrl3` | string | 附图3 URL | - |
| `obj.otherImageUrl4` | string | 附图4 URL | - |
| `obj.otherImageUrl5` | string | 附图5 URL | - |
| `obj.otherImageUrl6` | string | 附图6 URL | - |
| `obj.otherImageUrl7` | string | 附图7 URL | - |
| `obj.otherImageUrl8` | string | 附图8 URL | - |
| `obj.swatchImageUrl` | string | 样本图/色卡图(swatch)URL | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
