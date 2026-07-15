# mbs prm erp-publish-find-shop-param-by-shopname

按店铺名查询(TikTok)自动刊登参数：在「TikTok自动刊登」页面点击某店铺的「设置」齿轮时调用，按店铺名称查询该店铺已保存的自动刊登参数（站点、分类、毛利率、折扣、平台费率、上架时间、刊登间隔、是否自动刊登、算价渠道、库存、刊登数等），用于回显自动刊登参数设置弹窗。

## 用法

```bash
mbs prm erp-publish-find-shop-param-by-shopname --shopname <string>
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/tiktokProductController/findShopParamByShopname`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopname` | shopname | query | string | 是 | - | 店铺名称（URL query 参数）。来源：被点击「设置」齿轮元素的 data-shop 属性值，即该店铺名称 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息（统一响应包字段） | - |
| `obj` | object | 店铺自动刊登参数对象；为空时弹窗各项置空 | - |
| `obj.categoryName` | string | 马帮大类（一级分类名称，多个用英文逗号拼接；前端 split(',') 回填 #categoryName 并据此拉取二级分类） | - |
| `obj.shopname` | string | 店铺名称（回填弹窗标题 #pubModalShopName） | - |
| `obj.priceChannels` | string | 算价渠道（回填 #priceChannels，枚举：挂号 / 平邮） | - |
| `obj.site` | string | 站点（回填 #category）。枚举：MY/TH/SG/PH/ID/VN/BR/TW/MX/CO/CL/PL/ES/FR | - |
| `obj.titlePrefix` | string | 标题前缀（回填 #titlePrefix，对应控件当前已注释） | - |
| `obj.titleSuffix` | string | 标题后缀（回填 #titleSuffix，对应控件当前已注释） | - |
| `obj.bundleMinCount` | string | 套装优惠-最小商品数（回填 #bundleMinCount，对应控件当前已注释） | - |
| `obj.bundleDiscountRate` | string | 套装优惠-优惠折扣率（回填 #bundleDiscountRate，对应控件当前已注释） | - |
| `obj.businessLevel` | string | 店铺等级（回填 #shopLevel，无值默认0；枚举：1=精品重点店铺/2=普通铺货店铺/3=新待铺满店铺；对应控件当前已注释） | - |
| `obj.isKeyShop` | string | 店铺分类-是否缺货调0（回填 #isKeyShop，枚举：1=缺货不调0/0=缺货调0；对应控件当前已注释） | - |
| `obj.useGolbalPrice` | boolean | 是否使用全球价格（真值回填1否则0，写入 #useGolbalPrice） | - |
| `obj.productCostMultiple` | string | 产品成本倍数（回填 #productCostMultiple） | - |
| `obj.isMultiHouse` | string | 是否一品多仓（回填 #globalWareHouse，枚举：0=否/1=是） | - |
| `obj.publishCount` | string | 每天最大刊登数（有值回填 #publishCount，否则置空） | - |
| `obj.profitRate` | number | 目标毛利率（小数，前端 (profitRate*100).toFixed(0)+'%' 回填 #profitRate；要求不小于11%） | - |
| `obj.offRate` | number | 折扣率/OFF（小数，前端 (offRate*100).toFixed(0)+'%' 回填 #offRate） | - |
| `obj.platformRate` | number | 平台费率（有值回填 #platformRate，范围0-0.2，默认0.05） | - |
| `obj.inventory` | string | 库存（回填 #inventory） | - |
| `obj.publishInterval` | string | 刊登间隔（有值回填 #publishInterval，枚举：0=连续刊登/1/3/5/15/30分钟） | - |
| `obj.publishHour` | string | 上架时间（格式 HH:mm，前端按 : 拆分回填 #timeIntervalHour 时 / #timeIntervalMin 分） | - |
| `obj.secondCategoryName` | string | 二级分类名称（多个用英文逗号拼接；前端 split(',') 回填 #categoryName2） | - |
| `obj.tiktokFirstCategory` | string | TikTok 大类（多个用英文逗号拼接；前端 split(',') 回填 #tiktokFirstCategory） | - |
| `obj.logoPosition` | string | 水印位置（有值回填 #logoPosition，无值默认0；枚举：0=随机/1=左上/2=右上/3=左下/4=右下） | - |
| `obj.isAuto` | string | 是否自动刊登（有值回填 #isAuto，无值默认0；枚举：0=否/1=是/-1=禁用） | - |
| `obj.isSoldout` | string | 是否自动下架（枚举：0=否/1=是）（待人工确认：相关控件已注释，字段是否仍返回需后端确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
