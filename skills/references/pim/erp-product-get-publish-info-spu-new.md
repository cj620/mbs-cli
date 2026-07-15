# mbs pim erp-product-get-publish-info-spu-new

SPU刊登信息查询(新)：SPU详情页「刊登信息」面板查询：传入SPU与白名单/低分等筛选开关，返回该SPU在各平台店铺的刊登明细列表(图片、标题、销量、售价、店铺、负责人、平台SPU、刊登日期等)，以及当前用户名下尚未刊登该SPU的店铺列表；同时返回数据更新时间。

## 用法

```bash
mbs pim erp-product-get-publish-info-spu-new --spu <string> --isAll <string> [--isLowRate <number>] [--whiteShopOnly <number>] [--whiteItemOnly <number>] [--isWhiteItem <number>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getPublishInfoSpuNew`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 是 | - | SPU编号(主键查询条件)，取自页面URL参数 SPU(GetQueryString('SPU')) |
| `isAll` | isAll | body | string | 是 | - | 是否查看全部，前端固定传 0(仅本人/默认范围) |
| `isLowRate` | isLowRate | body | number | 否 | - | 是否查看低评分刊登。来源复选框 #isViewLowScore，勾选=1，未勾选=0 |
| `whiteShopOnly` | whiteShopOnly | body | number | 否 | - | 是否仅查看白名单店铺。来源复选框 #isViewWhiteList，勾选=1，未勾选=0 |
| `whiteItemOnly` | whiteItemOnly | body | number | 否 | - | 是否仅查看白名单商品(白SKU)。来源复选框 #whiteItemOnly，勾选=1，未勾选=0 |
| `isWhiteItem` | isWhiteItem | body | number | 否 | - | 是否白名单商品标记。来源复选框 #isWhiteItem(全局变量 isWhiteItem)，勾选=1，未勾选=0 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端据此渲染) | - |
| `desc` | string | 响应提示/标志位。前端存为 desc7，当值为 "1" 时刊登标题脱敏截断(取前25字+***)并隐藏来源链接 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.updateTime` | string | 数据更新时间(渲染到 #settimes) | - |
| `obj.publishInfo[]` | array | 刊登明细列表(该SPU在各平台店铺的刊登记录) | - |
| `obj.publishInfo[][0]` | string | SKU图片URL(优先展示，缺省回退 spuImageUrl) | - |
| `obj.publishInfo[][1]` | string | SPU图片URL(skuImageUrl 为空时展示) | - |
| `obj.publishInfo[][2]` | number | 是否白SKU。1=白SKU(展示「白sku」标签) | - |
| `obj.publishInfo[][3]` | string | 刊登标题(desc=="1"时脱敏截断展示) | - |
| `obj.publishInfo[][4]` | string | 刊登来源链接(标题超链接地址，desc!="1"时可点击) | - |
| `obj.publishInfo[][5]` | string | SKU是否在线。值为 'False' 时展示「不在线」红标 | - |
| `obj.publishInfo[][6]` | number | 销量 | - |
| `obj.publishInfo[][7]` | string | 刊登站点 | - |
| `obj.publishInfo[][8]` | string | 发货地 | - |
| `obj.publishInfo[][9]` | number | 售价 | - |
| `obj.publishInfo[][10]` | string | 店铺名称 | - |
| `obj.publishInfo[][11]` | boolean | 是否白名单店铺。为真时展示「白」标签 | - |
| `obj.publishInfo[][12]` | number | 店铺/刊登等级。1~4 对应钻石数(1=4钻最高，4=1钻，其它=0钻) | - |
| `obj.publishInfo[][13]` | string | 销售员(销售人员姓名) | - |
| `obj.publishInfo[][14]` | string | 平台SPU编号 | - |
| `obj.publishInfo[][15]` | string | 大主管(店铺负责人/主管) | - |
| `obj.publishInfo[][16]` | string | 客服主管 | - |
| `obj.publishInfo[][17]` | string | 店铺类型 | - |
| `obj.publishInfo[][18]` | string | 店铺运营状态 | - |
| `obj.publishInfo[][19]` | string | 刊登日期 | - |
| `obj.noPublishInfo[]` | array | 我的未刊登店铺列表(当前用户名下尚未刊登该SPU的店铺) | - |
| `obj.noPublishInfo[][0]` | string | 未刊登店铺名称 | - |
| `obj.noPublishInfo[][1]` | string | 店铺负责人头像URL(加载失败回退默认头像) | - |
| `obj.noPublishInfo[][2]` | string | 店铺负责人(点击可查看销售名片，传 shopManager) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
