<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-publish-info-sku-new

SKU刊登信息查询(近30天)：根据SKU查询该商品近30天已刊登的数据排名(图片、刊登标题、销量、站点/发货地、售价、店铺、平台SKU、大酋长/客户经理、店铺类型/运营状态、刊登日期等),并返回当前用户名下未刊登该商品的店铺及负责人。支持是否全公司、低分筛选、仅白名单店铺、仅白名单SKU等开关。

## 用法

```bash
mbs pim erp-product-get-publish-info-sku-new --sku <string> [--isAll <string>] [--isLowRate <string>] [--whiteShopOnly <string>] [--whiteItemOnly <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getPublishInfoSkuNew`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | 商品SKU编号(来源前端地址栏 GetQueryString('SKU'),查询主键) |
| `isAll` | isAll | query | string | 否 | - | 是否查看全公司,前端固定写死为1(1=全公司,0=本人) |
| `isLowRate` | isLowRate | query | string | 否 | - | 低分(低星)筛选,来源 GetQueryString('isLowRate'),可为空(取值含义待人工确认) |
| `whiteShopOnly` | whiteShopOnly | query | string | 否 | - | 是否仅看白名单店铺,来源 GetQueryString('whiteShopOnly'),可为空(待人工确认) |
| `whiteItemOnly` | whiteItemOnly | query | string | 否 | - | 是否仅看白名单SKU(白sku),来源 GetQueryString('whiteItemOnly'),可为空(待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 描述/脱敏标记,前端赋给desc7,为'1'时刊登标题脱敏显示(截取前25字符+***) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.publishInfo[]` | array | 已刊登数据排名列表(近30天) | - |
| `obj.publishInfo[][0]` | string | SKU图片URL(优先展示,为空时回退spuImageUrl) | - |
| `obj.publishInfo[][1]` | string | SPU图片URL(skuImageUrl为空时的回退图) | - |
| `obj.publishInfo[][2]` | number | 是否白名单SKU,1=是(展示"白sku"标记) | - |
| `obj.publishInfo[][3]` | string | 刊登的商品标题 | - |
| `obj.publishInfo[][4]` | string | 刊登商品来源链接(标题超链接href,新窗口打开) | - |
| `obj.publishInfo[][5]` | string | SKU是否在线/启用,值为'False'时展示"不在线"红标 | - |
| `obj.publishInfo[][6]` | number | 评分(分),有值才展示 | - |
| `obj.publishInfo[][7]` | number | 评分状态,1=危险(展示红色"危"标记及红色分数) | - |
| `obj.publishInfo[][8]` | number | 评论数(展示为 xx reviews) | - |
| `obj.publishInfo[][9]` | number | 销售量 | - |
| `obj.publishInfo[][10]` | string | 站点 | - |
| `obj.publishInfo[][11]` | string | 发货地 | - |
| `obj.publishInfo[][12]` | number | 总售价(美元) | - |
| `obj.publishInfo[][13]` | string | 刊登的店铺名称 | - |
| `obj.publishInfo[][14]` | string | 是否白名单店铺,有值/真时展示"白"标记 | - |
| `obj.publishInfo[][15]` | number | 店铺等级(钻石数),1/2/3/4=对应点亮的钻石数量,其它=全灰 | - |
| `obj.publishInfo[][16]` | string | 业务员/销售员 | - |
| `obj.publishInfo[][17]` | string | 平台SKU | - |
| `obj.publishInfo[][18]` | string | 大酋长 | - |
| `obj.publishInfo[][19]` | string | 客户经理 | - |
| `obj.publishInfo[][20]` | string | 店铺类型 | - |
| `obj.publishInfo[][21]` | string | 运营状态 | - |
| `obj.publishInfo[][22]` | string | 刊登日期 | - |
| `obj.noPublishInfo[]` | array | 我的未刊登店铺列表 | - |
| `obj.noPublishInfo[][0]` | string | 未刊登的店铺名称 | - |
| `obj.noPublishInfo[][1]` | string | 店铺负责人 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
