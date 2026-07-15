# mbs pim erp-product-get-shop-configure-by-shop-id

根据店铺ID查询亚马逊自动刊登店铺配置：打开自动刊登设置弹窗(showModal)时调用，按 shopId 查询该亚马逊店铺已保存的自动刊登配置(库存/平台费率/毛利/品牌/制造商/物流渠道/类目/VAT/国家/预刊登时间/自动刊登开关/UPC豁免/备货天数/跟卖移除等)，用于回填弹窗各表单控件；无配置时返回空对象，前端清空表单。

## 用法

```bash
mbs pim erp-product-get-shop-configure-by-shop-id --shopId <string>
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getShopConfigureByShopId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopId` | shopId | query | string | 是 | - | 店铺ID。来源：被点击行/按钮的 data-shopid($(obj).data('shopid'))，等同 baseData.shopId。以 URL 查询参数 ?shopId= 形式传递 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 店铺自动刊登配置对象；为空表示该店铺尚未配置，前端清空表单 | - |
| `obj.inventory` | number | 在线库存(回填 #inventory) | - |
| `obj.platformRate` | string | 平台费率(回填 #platformRate) | - |
| `obj.divideLine` | string | 分割线/价格分界值(回填 #divideLine) | - |
| `obj.targetProfit` | string | 目标毛利率(百分数，回填 #profitRate) | - |
| `obj.brandName` | string | 品牌名称(回填 #brandName) | - |
| `obj.manufacturer` | string | 制造商(回填 #manufacturer) | - |
| `obj.surfaceMailChannel` | string | 平邮物流渠道(回填 #expressChannelP；保存时'平邮中最优匹配'会转为'平邮') | - |
| `obj.registerMailChannel` | string | 挂号物流渠道(回填 #expressChannelG；保存时'挂号中最优匹配'会转为'挂号') | - |
| `obj.categoryList[]` | array | 大类(一级类目)列表，回填多选 #firstCategory(select2)；为空时取 [] | - |
| `obj.isVat` | string | 是否含VAT(回填 #priceVat) | - |
| `obj.country` | string | 国家/站点(回填 #countrySelect) | - |
| `obj.prePublishHour` | string | 预刊登时间(小时，0~23，回填 #prePublishHour) | - |
| `obj.openAutoPublish` | string | 是否开启自动刊登(回填 #autoPublish；无配置时默认 0) | - |
| `obj.openAddInventory` | string | 是否开启自动加库存(回填 #openAddInventory) | - |
| `obj.isUpcExempt` | string | 是否UPC豁免(回填 #isUpcExempt) | - |
| `obj.stockDay` | string | 平邮备货天数(回填 #stockDay；空则置'') | - |
| `obj.registerStockDay` | string | 挂号备货天数(回填 #registerStockDay；空则置'') | - |
| `obj.orderNumDay` | string | 跟卖/订单天数(写入 window.$OpenFollowUp.form.orderNumDay) | - |
| `obj.openFollowUpRemove` | string | 是否开启跟卖移除(写入 window.$OpenFollowUp.form.openFollowUpRemove) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
