# mbs pim erp-product-find-shop-param-by-shopname-lazada-autopublish-controller

按店铺名查询店铺自动刊登参数：在 Lazada 自动刊登页面点击某店铺设置/编辑时调用，依据店铺名(shopname)查询该店铺已保存的自动刊登参数(分类、利润率、降价率、库存、包邮、刊登时间/间隔、是否重点店铺、是否最低价限制、是否自动、是否信任及创建信息)，用于回显到刊登参数弹窗 #pubModal。

## 用法

```bash
mbs pim erp-product-find-shop-param-by-shopname-lazada-autopublish-controller --shopname <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaAutopublishController/findShopParamByShopname`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopname` | shopname | query | string | 是 | - | 店铺名称。来源店铺列表项 data-shop({{v.shopname}})，经 $(obj).data('shop') 拼接到 URL Query |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 店铺自动刊登参数对象；为空时前端清空弹窗表单 | - |
| `obj.categoryname` | string | 刊登分类名称，多个以逗号拼接；前端 split(',') 后回填分类多选 #categoryName | - |
| `obj.profitRate` | number | 利润率(小数)；前端 (profitRate*100).toFixed(0)+'%' 展示为百分比，回填 #profitRate | - |
| `obj.offRate` | number | 降价率/折扣率(小数)；前端 (offRate*100).toFixed(0)+'%' 展示为百分比，回填 #offRate | - |
| `obj.publishInterval` | number | 刊登间隔，回填 #publishInterval（无值默认 0） | - |
| `obj.isKeyShop` | string | 是否重点店铺，回填下拉 #isKeyShop（枚举取值待人工确认） | - |
| `obj.isMinPriceLimit` | string | 是否启用最低价限制，回填下拉 #isMinPriceLimit（枚举取值待人工确认） | - |
| `obj.publishHour` | string | 刊登时间点，格式 HH:mm；前端 split(':')[0]→#timeIntervalHour(时)、split(':')[1]→#timeIntervalMin(分) | - |
| `obj.freeShipping` | number | 是否包邮。1=包邮(勾选 #freeShipping)，0=不包邮(不勾选)；同时 val() 回填 | - |
| `obj.isTrust` | string | 是否信任刊登，回填 #isTrust（枚举取值待人工确认） | - |
| `obj.inventory` | string | 刊登库存数量，回填 #inventory | - |
| `obj.isAuto` | string | 是否自动刊登，回填 #isAuto（无值默认 0；枚举取值待人工确认） | - |
| `obj.shopname` | string | 店铺名称，用于拼接 #textinfo 创建信息文案 | - |
| `obj.createBy` | string | 创建人，拼接到 #textinfo（shopname+createBy+createTime+'创建'） | - |
| `obj.createTime` | string | 创建时间，拼接到 #textinfo | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
