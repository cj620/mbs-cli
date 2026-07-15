<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-ebay-autopublish-spu

eBay自动刊登SPU列表查询：eBay自动刊登页面主列表查询：按店铺/刊登状态/产品状态/销量级别/站点/SPU编码等条件分页查询待刊登及已刊登的 SPU 刊登任务，返回 SPU 行及其下的 SKU 刊登明细列表(ebayPublishSku)。

## 用法

```bash
mbs pim erp-product-find-ebay-autopublish-spu --currentPage <number> --pageSize <number> [--targetShop <string>] [--publishResult <string>] [--topShopname <string>] [--publishStatus <string>] [--spu <string>] [--spuProductStatus <string>] [--spuSalesLevel <string>] [--site <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/ebayProductController/findEbayAutopublishSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码(分页，首次为1) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定50) |
| `targetShop` | targetShop | body | string | 否 | - | 目标店铺名(左侧店铺状态点击设置) |
| `publishResult` | publishResult | body | string | 否 | - | 刊登结果筛选(等待刊登/刊登成功/刊登失败/放弃刊登) |
| `topShopname` | topShopname | body | string | 否 | - | 顶部店铺筛选(店铺名，来源 #shopName) |
| `publishStatus` | publishStatus | body | string | 否 | - | 刊登状态(来源 #onlineStatus)。0=等待刊登;1=刊登中;2=刊登成功;3=刊登失败;4=放弃刊登 |
| `spu` | spu | body | string | 否 | - | SPU编码(关键词，来源 #keyword) |
| `spuProductStatus` | spuProductStatus | body | string | 否 | - | 产品状态(来源 #status)。正常/清仓/停产/自动创建/暂停销售 |
| `spuSalesLevel` | spuSalesLevel | body | string | 否 | - | 销量级别(来源 #salesStatus，值为 typeName，如 超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品) |
| `site` | site | body | string | 否 | - | 站点(来源 #site，选项由 ebayPublishSite 动态填充) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的总条数 | - |
| `obj.totalPages` | number | 总页数(传入分页组件) | - |
| `obj.rows[]` | array | SPU刊登任务列表 | - |
| `obj.rows[][0]` | string | 记录ID | - |
| `obj.rows[][1]` | string | 商品SPU编号 | - |
| `obj.rows[][2]` | string | SPU主图URL | - |
| `obj.rows[][3]` | string | 刊登商品标题(可编辑，限80字符) | - |
| `obj.rows[][4]` | string | SPU销量级别。超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品 | - |
| `obj.rows[][5]` | number | 属性类型。1=单属性;2=多属性 | - |
| `obj.rows[][6]` | number | 销量 | - |
| `obj.rows[][7]` | string | 刊登站点 | - |
| `obj.rows[][8]` | string | 原价格区间 | - |
| `obj.rows[][9]` | number | 是否差价大。1=差价大 | - |
| `obj.rows[][10]` | string | 侵权词 | - |
| `obj.rows[][11]` | string | 物流(配送方式名称) | - |
| `obj.rows[][12]` | number | 刊登量 | - |
| `obj.rows[][13]` | string | 发货地 | - |
| `obj.rows[][14]` | string | 备货时长 | - |
| `obj.rows[][15]` | string | 新价格区间 | - |
| `obj.rows[][16]` | number | 毛利率(小数，前端×100保留2位展示%) | - |
| `obj.rows[][17]` | number | 折扣率OFF(存在时×100展示%) | - |
| `obj.rows[][18]` | string | 刊登店铺(目标店铺名) | - |
| `obj.rows[][19]` | string | 目标店铺ID | - |
| `obj.rows[][20]` | string | 刊登人 | - |
| `obj.rows[][21]` | number | 刊登状态。0=等待刊登;1=刊登中;2=刊登成功;3=刊登失败;4=放弃刊登 | - |
| `obj.rows[][22]` | string | 刊登成功后的 listing 链接 | - |
| `obj.rows[][23]` | string | 刊登返回信息 | - |
| `obj.rows[][24]` | string | 生成时间 | - |
| `obj.rows[][25]` | string | 上架时间 | - |
| `obj.rows[][26]` | string | 开发员 | - |
| `obj.rows[][27]` | string | 创建(开发)时间 | - |
| `obj.rows[][28]` | string | 批次ID(勾选/刊登提交用) | - |
| `obj.rows[][29]` | string | 唯一ID(刊登/删除操作用) | - |
| `obj.rows[][30][]` | array | 该SPU下的SKU刊登明细列表 | - |
| `obj.rows[][30][][0]` | string | SKU主图URL | - |
| `obj.rows[][30][][1]` | string | SKU编号 | - |
| `obj.rows[][30][][2]` | number | 是否捆绑。1=捆绑 | - |
| `obj.rows[][30][][3]` | string | 产品状态 | - |
| `obj.rows[][30][][4]` | number | 是否侵权。1=侵权 | - |
| `obj.rows[][30][][5]` | string | SKU销量级别。超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品 | - |
| `obj.rows[][30][][6]` | string | 禁售平台 | - |
| `obj.rows[][30][][7]` | number | 在线库存 | - |
| `obj.rows[][30][][8]` | number | 当前ERP库存 | - |
| `obj.rows[][30][][9]` | string | 原价格 | - |
| `obj.rows[][30][][10]` | string | 新价格 | - |
| `obj.rows[][30][][11]` | string | 币种 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
