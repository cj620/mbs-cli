# mbs pim erp-product-find-shop-param-by-shopname-ebay-product-controller

查询店铺自动刊登参数(按店铺名)：在 eBay 自动刊登页面点击某店铺的设置齿轮(showModal)时调用，按店铺名 shopname 查询该店铺已保存的 SMT/eBay 自动刊登参数(站点、目标毛利率、库存、SPK/非SPK备货时长、屏蔽国家、刊登间隔、上架时间、每日上限、是否全托管)，用于回填设置自动刊登参数弹窗。

## 用法

```bash
mbs pim erp-product-find-shop-param-by-shopname-ebay-product-controller --shopname <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/ebayProductController/findShopParamByShopname`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopname` | shopname | query | string | 是 | - | 店铺名称。来源:店铺列表项齿轮按钮的 data-shop 属性($(obj).data('shop'))，以 URL query 形式拼接传递。用于按店铺查询其已保存的自动刊登参数 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(本接口回调未使用,为统一信封字段) | - |
| `obj` | object | 店铺自动刊登参数对象,可能为 null | - |
| `obj.site` | string | 刊登站点(可能为多站点逗号拼接),回填 #category | - |
| `obj.profitRate` | number | 目标毛利率(小数形式,前端 ×100 取整后加'%'回填 #profitRate,如 0.15→15%) | - |
| `obj.dispatchtimemaxSPK` | string | SPK 备货时长(天),回填 #dispatchtimemaxSPK。枚举:5/10/15/30 | - |
| `obj.dispatchtimemax` | string | 非SPK 备货时长(天),回填 #dispatchtimemax。枚举:1/5/10/15/30 | - |
| `obj.inventory` | string | 库存数量,回填 #inventory | - |
| `obj.shieldCountry` | string | 屏蔽国家(国家代码逗号拼接,如 US,CA),回填 #shieldCountry | - |
| `obj.publishInterval` | string | 刊登间隔(分钟),回填 #publishInterval。枚举:0=连续刊登/1/3/5/15/30(分钟)。仅当有值时回填 | - |
| `obj.onedayPublishLimit` | number | 每日任务数量上限,回填 #onedayPublishLimit | - |
| `obj.publishHour` | string | 上架时间'HH:mm',前端 split(':') 分别回填小时 #timeIntervalHour、分钟 #timeIntervalMin。仅当有值时回填 | - |
| `obj.isAuto` | number | 是否全托管。1=全托管(勾选 #isAuto),其它=不勾选 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
