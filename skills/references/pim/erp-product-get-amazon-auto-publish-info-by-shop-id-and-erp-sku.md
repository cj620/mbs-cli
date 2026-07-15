<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-amazon-auto-publish-info-by-shop-id-and-erp-sku

亚马逊自动刊登-按店铺与ERP SKU查询刊登明细：在「亚马逊自动刊登确认」列表中点击 SPU 行展开时，按 erpSpu+shopId+groupid 加载该 SPU 在该店铺下的全部变体 SKU 刊登明细（标题/描述/类目/主题/库存/颜色/尺寸/价格/运费模板/刊登状态/多张图片），渲染为子表格行供逐项编辑。

## 用法

```bash
mbs pim erp-product-get-amazon-auto-publish-info-by-shop-id-and-erp-sku --erpSpu <string> --shopId <string> --groupid <string> [--amazonCategoryName <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getAmazonAutoPublishInfoByShopIdAndErpSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `erpSpu` | erpSpu | body | string | 是 | - | ERP 商品 SPU 编号(被展开行的 SPU，来源行 data-erpspu) |
| `shopId` | shopId | body | string | 是 | - | 店铺ID(来源行 data-shopid) |
| `groupid` | groupid | body | string | 是 | - | 刊登分组ID(同一SPU在该店铺的刊登任务分组，来源行 data-groupid) |
| `amazonCategoryName` | amazonCategoryName | body | string | 否 | - | 亚马逊类目名(取当前类目Tab baseData.typeFlag；首页/未选时可能为空) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(前端按 data.obj 是否存在渲染) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 变体SKU明细列表(同一SPU+店铺下的多个SKU行) | - |
| `obj[][0]` | string | ERP 商品 SPU 编号(写入行 data-erpspu，用于后续编辑/删除) | - |
| `obj[][1]` | string | ERP 商品 SKU 编号(写入行 data-erpsku，变体唯一标识) | - |
| `obj[][2]` | string | 店铺ID(写入行 data-shopid) | - |
| `obj[][3]` | string | 刊登分组ID(写入行 data-groupid) | - |
| `obj[][4]` | string | 卖家SKU(SellerSku，可点击编辑，链接到 SKUdetails 详情页) | - |
| `obj[][5]` | string | 商品编码类型(如 UPC/EAN 等，展示于编码前缀) | - |
| `obj[][6]` | string | 商品编码值(为空时展示"系统默认"，存在时可"使用系统默认UPC") | - |
| `obj[][7]` | string | 商品标题(可点击 getProductTitle 编辑) | - |
| `obj[][8]` | string | 商品描述(可点击 updateShow(this,'2') 编辑) | - |
| `obj[][9]` | string | 站点(写入子类目td data-site，用于查子类目) | - |
| `obj[][10]` | string | 一级类目名称(写入 data-category-name，子类目联动用) | - |
| `obj[][11]` | string | 产品类型/类目展示文本 | - |
| `obj[][12]` | string | 子类目(itemType；为空展示"修改子类目") | - |
| `obj[][13]` | string | 变体主题(VariationTheme；为空展示"修改") | - |
| `obj[][14]` | number | 在线库存数量(可编辑) | - |
| `obj[][15]` | string | 颜色(ColorName；为空展示"修改") | - |
| `obj[][16]` | string | 尺寸(SizeName；为空展示"修改") | - |
| `obj[][17]` | string | 运费模板名称(MerchantShippingGroupName，待刊登时可改) | - |
| `obj[][18]` | number | 商品件数(numberOfItems；为空展示"修改") | - |
| `obj[][19]` | number | 标准价格(StandardPrice，可编辑) | - |
| `obj[][20]` | string | 币种(价格币种) | - |
| `obj[][21]` | number | 刊登状态枚举。0=待刊登;1=刊登中;2=失败;3=成功;5=放弃 | - |
| `obj[][22]` | string | 刊登失败原因(publishStatus=2 时 popover 展示) | - |
| `obj[][23]` | boolean | 图片是否已满标记(false 时展示"添加图片"占位) | - |
| `obj[][24]` | string | 主图URL(processingImgData 归集为 cusImgs) | - |
| `obj[][25]` | string | 附图1 URL | - |
| `obj[][26]` | string | 附图2 URL | - |
| `obj[][27]` | string | 附图3 URL | - |
| `obj[][28]` | string | 附图4 URL | - |
| `obj[][29]` | string | 附图5 URL | - |
| `obj[][30]` | string | 附图6 URL | - |
| `obj[][31]` | string | 附图7 URL | - |
| `obj[][32]` | string | 附图8 URL | - |
| `obj[][33]` | string | 样本/色卡图(swatchImage) URL | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
