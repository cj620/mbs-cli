<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-get-listing-detail-info

热销商品-在线刊登详情查询：移动端「在线详情」页加载时调用，按父SPU(商品)ID与店铺ID查询该刊登商品的在线详情：标题/主图/店铺/刊登人/发布时间/30天销量，以及各SKU的属性、净重、在线售价/运费、在线库存、马帮库存、调价/改库存状态等，用于详情卡片渲染。

## 用法

```bash
mbs oms erp-mobile-get-listing-detail-info --parentSPUId <string> --shopId <string>
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/hotProductListing/getListingDetailInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `parentSPUId` | parentSPUId | body | string | 是 | - | 父SPU(商品)ID。来源：页面URL查询参数itemId(GetQueryString('itemId'))；取不到时回填空字符串 |
| `shopId` | shopId | body | string | 是 | - | 店铺ID。来源：页面URL查询参数shopId(GetQueryString('shopId'))；取不到时回填空字符串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功，500=失败(统一返回信封) | - |
| `desc` | string | 响应提示信息(统一返回信封) | - |
| `obj` | object | 业务数据对象(在线刊登详情)；前端以data.obj存在与否决定是否渲染 | - |
| `obj.itemId` | string | 商品(刊登)ID，卡片头部展示 | - |
| `obj.orderid` | string | 订单ID(隐藏域copyText{orderid}，供「复制」按钮handleClone复制) | - |
| `obj.shopName` | string | 店铺名称 | - |
| `obj.saleLeader` | string | 销售负责人(存在时于店铺名后括号展示) | - |
| `obj.mainImage` | string | 商品主图URL(加载失败回退/2018ui/assets/images/timg.jpg) | - |
| `obj.productTitle` | string | 商品标题 | - |
| `obj.thirtyDaysSalesNum` | number | 近30天销量 | - |
| `obj.spuSiteCodeType` | string | SPU站点编码类型(标题行右侧展示) | - |
| `obj.publishDate` | string | 发布(刊登)时间 | - |
| `obj.publishOper` | string | 刊登人 | - |
| `obj.productLink` | string | 在线商品链接(非空时展示「在线链接」跳转) | - |
| `obj.department` | string | 所属部门；前端判断=='销售部'时放开调价/改库存入口(显示扳手图标) | - |
| `obj.skuList[]` | array | SKU明细列表(详情表格逐行渲染) | - |
| `obj.skuList[][0]` | string | ERP SKU编号(表格首列，作为元素id/type标识) | - |
| `obj.skuList[][1]` | string | SKU在线链接(非空时SKU编号可点击跳转) | - |
| `obj.skuList[][2]` | string | 商品属性 | - |
| `obj.skuList[][3]` | string | 净重 | - |
| `obj.skuList[][4]` | number | SKU在线售价(前端toFixed(2)展示，拼接币种) | - |
| `obj.skuList[][5]` | string | 币种(售价后缀) | - |
| `obj.skuList[][6]` | number | 运费(非空时toFixed(2)展示，否则显示--) | - |
| `obj.skuList[][7]` | number | 在线库存(为null时不展示该列内容) | - |
| `obj.skuList[][8]` | number | 马帮库存(为null时改红字展示flag) | - |
| `obj.skuList[][9]` | string | 马帮库存缺省时的红字提示标记 | - |
| `obj.skuList[][10]` | number | 调价状态；=4表示「调价中」(并禁用调价入口) | - |
| `obj.skuList[][11]` | number | 库存修改状态；=4表示「修改中」(并禁用改库存入口) | - |
| `obj.skuList[][12]` | number | SKU所属平台ID；前端按1/10/16/2/18/26/120等判定是否允许调价/改库存 | - |
| `obj.skuList[][13]` | string | SKU所属店铺ID(调价/改库存请求参数，modifyPrice/adjustInventory读取) | - |
| `obj.skuList[][14]` | string | 平台SKU(调价/改库存请求参数) | - |
| `obj.skuList[][15]` | string | 父SPU(商品)ID(调价/改库存请求参数itemId) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
