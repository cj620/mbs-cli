# mbs pim erp-product-find-shop-param-by-shopname-shopee-product-controller

查询店铺自动刊登参数(按店铺名)：Shopee 自动刊登页打开店铺刊登参数弹窗(showModal)时，按店铺名(shopname)查询该店铺已保存的自动刊登参数(站点/算价渠道/一二级分类/毛利率/折扣率/平台费率/库存/刊登数量/间隔/时间/捆绑/水印/托管等)，用于回显弹窗各控件。入参经 URL 查询串 shopname 传递，无请求体。

## 用法

```bash
mbs pim erp-product-find-shop-param-by-shopname-shopee-product-controller --shopname <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeProductController/findShopParamByShopname`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopname` | shopname | body | string | 是 | - | 店铺名称(URL查询参数)。取自被点击元素 data-shop，定位该店铺的自动刊登参数配置 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `obj` | object | 店铺自动刊登参数对象；为空(null)时弹窗控件清空 | - |
| `obj.categoryName` | string | 一级分类名称(多个以英文逗号拼接，前端 split(',') 还原并回填 #categoryName 级联) | - |
| `obj.site` | string | 站点编码(如 TH/VN/MX/PH/SG/MY/ID/BR，前端据此显隐对应站点专属配置块) | - |
| `obj.priceChannels` | string | 算价渠道(回填 #priceChannels) | - |
| `obj.secondCategoryName` | string | 二级分类名称(多个以英文逗号拼接，回填 #category2 与 #categoryName2) | - |
| `obj.isSoldout` | string | 是否售罄下架标记(回填 #isSoldout) | - |
| `obj.titlePrefix` | string | 标题前缀(回填 #titlePrefix) | - |
| `obj.titleSuffix` | string | 标题后缀(回填 #titleSuffix) | - |
| `obj.bundleMinCount` | string | 捆绑最小数量(回填 #bundleMinCount) | - |
| `obj.bundleDiscountRate` | string | 捆绑折扣率(回填 #bundleDiscountRate) | - |
| `obj.businessLevel` | string | 店铺经营等级(回填 #shopLevel，为空时默认 0) | - |
| `obj.isKeyShop` | string | 是否重点店铺(回填 #isKeyShop) | - |
| `obj.publishCount` | number | 每轮最大刊登数(回填 #publishCount，为空则置空) | - |
| `obj.profitRate` | number | 目标毛利率(小数，前端 ×100 取整并加 % 回填 #profitRate) | - |
| `obj.offRate` | number | 折扣率(小数，前端 ×100 取整并加 % 回填 #offRate) | - |
| `obj.platformRate` | string | 平台费率(回填 #platformRate) | - |
| `obj.inventory` | string | 库存(回填 #inventory) | - |
| `obj.publishInterval` | string | 刊登间隔(回填 #publishInterval) | - |
| `obj.publishHour` | string | 刊登时间(格式 HH:mm，前端 split(':') 拆为时/分回填 #timeIntervalHour/#timeIntervalMin) | - |
| `obj.logoStyle` | string | 水印样式编号(回填 #chose_number，为空默认"0") | - |
| `obj.styleName` | string | 水印样式名称(回填 #chose_input，为空默认"随机") | - |
| `obj.logoPosition` | string | 水印位置(回填 #logoPosition，为空默认"0") | - |
| `obj.isAuto` | string | 是否自动(算价/自动标记，回填 #isAuto，为空默认"0") | - |
| `obj.isTrust` | string | 是否托管(回填 #isTrust，为空默认"0") | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
