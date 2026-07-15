<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-smt-autopublish-spu

SMT自动刊登SPU列表查询：SMT(速卖通)自动刊登管理页的SPU分页列表查询：支持按SPU编码/批量SPU/itemid关键词、店铺、SMT分类、开发时间/刊登时间区间、产品状态、销量级别、在线状态、价差大等条件筛选；返回SPU行及其下挂的SKU明细列表。

## 用法

```bash
mbs pim erp-product-find-smt-autopublish-spu --currentPage <number> --pageSize <number> [--targetShop <string>] [--onlineResult <string>] [--topShopname <string>] [--smtCategoryName <string>] [--spu <string>] [--spuText <string>] [--itemid <string>] [--isPriceDifference <number>] [--createTimeStart <string>] [--createTimeEnd <string>] [--publishTimeStart <string>] [--publishTimeEnd <string>] [--productStatus <string>] [--salesLevel <string>] [--onlineStatus <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/smtProductController/findSmtAutopublishSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码（num==1 取 baseData.currentPage，否则取 baseData.leftcurrentPage，默认1） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（固定传 50） |
| `targetShop` | targetShop | body | string | 否 | - | 目标店铺（来源 baseData.targetShop，由侧边店铺状态点击 searchStatus(str,shop) 设置；num==1 时清空） |
| `onlineResult` | onlineResult | body | string | 否 | - | 在线刊登结果状态（来源 baseData.onlineResult，由侧边状态点击设置；num==1 时清空） |
| `topShopname` | topShopname | body | string | 否 | - | 顶部店铺筛选（来源 #shopName 下拉选择） |
| `smtCategoryName` | smtCategoryName | body | string | 否 | - | SMT分类名称（来源 #smtCategoryName 输入） |
| `spu` | spu | body | string | 否 | - | 关键词-SPU编码（#filtertype=1 时取 #keyword；非1/2/3 时传空字符串） |
| `spuText` | spuText | body | string | 否 | - | 关键词-批量SPU编码（#filtertype=2 时取 #keyword，多个逗号分割） |
| `itemid` | itemid | body | string | 否 | - | 关键词-平台itemid（#filtertype=3 时取 #keyword；非1/2/3 时传空字符串） |
| `isPriceDifference` | isPriceDifference | body | number | 否 | - | 是否仅看价差大（勾选 #isPriceDifference 时传 1，否则不传） |
| `createTimeStart` | createTimeStart | body | string | 否 | - | 开发时间-起始（#setTime=1 且 #startTime 有值时，值为 日期 00:00:00） |
| `createTimeEnd` | createTimeEnd | body | string | 否 | - | 开发时间-结束（#setTime=1 且 #endTime 有值时，值为 日期 23:59:59） |
| `publishTimeStart` | publishTimeStart | body | string | 否 | - | 刊登时间-起始（#setTime=2 且 #startTime 有值时，值为 日期 00:00:00） |
| `publishTimeEnd` | publishTimeEnd | body | string | 否 | - | 刊登时间-结束（#setTime=2 且 #endTime 有值时，值为 日期 23:59:59） |
| `productStatus` | productStatus | body | string | 否 | - | 产品状态（来源 #status 下拉） |
| `salesLevel` | salesLevel | body | string | 否 | - | 销量级别（来源 #salesStatus 下拉） |
| `onlineStatus` | onlineStatus | body | string | 否 | - | 在线状态（来源 #onlineStatus 下拉） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（为空时列表总数显示0） | - |
| `obj.total` | number | 满足条件的SPU总数（渲染到 #total） | - |
| `obj.totalPages` | number | 总页数（传入 findTaskReport 初始化分页） | - |
| `obj.rows[]` | array | SPU行列表（作为 contentTemplate 的 list） | - |
| `obj.rows[][0]` | string | 刊登批次ID（复选框 value，立即/定时刊登入参） | - |
| `obj.rows[][1]` | string | SPU唯一ID(itemid)，放弃/改属性/重新刊登入参 | - |
| `obj.rows[][2]` | string | 行记录ID（用于标题/价格等DOM元素id拼接） | - |
| `obj.rows[][3]` | string | 商品SPU编号（链接到SPU详情页） | - |
| `obj.rows[][4]` | string | 平台商品itemid（链接到速卖通商品页） | - |
| `obj.rows[][5]` | string | 商品主图URL | - |
| `obj.rows[][6]` | string | 商品标题（可编辑，限128字） | - |
| `obj.rows[][7]` | string | 是否侵权标记（'1'=侵权，显示"侵权"标签） | - |
| `obj.rows[][8]` | string | 标题风险词（有值则标红并提示） | - |
| `obj.rows[][9]` | string | 销量级别（超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品） | - |
| `obj.rows[][10]` | number | 退款率(%)（≥5 时显示"高退款"标签） | - |
| `obj.rows[][11]` | string | 差评信息文案（非"差评0个"时显示，可点击查看评价） | - |
| `obj.rows[][12]` | number | 属性类型：1=单属性;2=多属性 | - |
| `obj.rows[][13]` | number | 销量 | - |
| `obj.rows[][14]` | string | 价格区间文案 | - |
| `obj.rows[][15]` | number | 是否价差大：1=差价大(显示"(差价大)") | - |
| `obj.rows[][16]` | string | SMT分类名称 | - |
| `obj.rows[][17]` | string | SMT分类ID（修改属性 smtFailPropGet 入参） | - |
| `obj.rows[][18]` | string | 销售备注(红字) | - |
| `obj.rows[][19]` | string | 销售追加备注(红字，有值才显示) | - |
| `obj.rows[][20]` | string | 类目名称 | - |
| `obj.rows[][21]` | string | 品牌名称 | - |
| `obj.rows[][22]` | number | SPU新价格 | - |
| `obj.rows[][23]` | number | 毛利率(原值小数，前端×100保留2位展示%) | - |
| `obj.rows[][24]` | number | 毛利率变化标记：1=变化(标红) | - |
| `obj.rows[][25]` | number | 促销折扣率(原值小数，前端×100展示%) | - |
| `obj.rows[][26]` | string | 目标店铺 | - |
| `obj.rows[][27]` | string | 刊登人 | - |
| `obj.rows[][28]` | number | 状态标记（=1 且 publishStatus=0 时显示运费模板编辑） | - |
| `obj.rows[][29]` | string | 当前运费模板名称 | - |
| `obj.rows[][30]` | string | 当前运费模板ID | - |
| `obj.rows[][31][]` | array | 可选运费模板列表 | - |
| `obj.rows[][31][][0]` | string | 运费模板ID（下拉option值） | - |
| `obj.rows[][31][][1]` | string | 运费模板名称（下拉option文本） | - |
| `obj.rows[][32]` | number | 刊登状态：0=等待刊登;1=刊登中;2=刊登成功;3=刊登失败;4=放弃刊登 | - |
| `obj.rows[][33]` | string | 刊登失败响应/原因（publishStatus=3 时显示） | - |
| `obj.rows[][34]` | number | 是否可重新刊登：1=显示"重新刊登"按钮 | - |
| `obj.rows[][35]` | number | 是否可编辑属性：1=失败时显示"修改属性"按钮 | - |
| `obj.rows[][36]` | string | 开发(创建)时间 | - |
| `obj.rows[][37]` | string | 刊登时间 | - |
| `obj.rows[][38][]` | array | 该SPU下的SKU明细列表（行右上角徽标显示其长度） | - |
| `obj.rows[][38][][0]` | string | SKU记录ID（改价DOM元素id拼接、改价入参） | - |
| `obj.rows[][38][][1]` | string | SKU编号（链接到SKU详情页） | - |
| `obj.rows[][38][][2]` | string | SKU主图URL | - |
| `obj.rows[][38][][3]` | number | 是否捆绑：1=显示"（捆绑）" | - |
| `obj.rows[][38][][4]` | string | 产品状态 | - |
| `obj.rows[][38][][5]` | number | 是否侵权：1=显示"侵权"标签 | - |
| `obj.rows[][38][][6]` | string | SKU销量级别(枚举同SPU) | - |
| `obj.rows[][38][][7]` | string | 禁售平台 | - |
| `obj.rows[][38][][8]` | number | 在线库存 | - |
| `obj.rows[][38][][9]` | number | ERP重量(kg) | - |
| `obj.rows[][38][][10]` | number | 当前ERP库存 | - |
| `obj.rows[][38][][11]` | number | 原价格 | - |
| `obj.rows[][38][][12]` | number | 新价格（可编辑，改价入参） | - |
| `obj.rows[][38][][13]` | string | SKU毛利率（profitRateChangeFlag=1 时标红） | - |
| `obj.rows[][38][][14]` | number | 毛利率变化标记：1=变化(标红) | - |
| `obj.rows[][38][][15]` | string | 币种 | - |
| `obj.rows[][38][][16]` | string | 区域定价数据（点击"查看详情"渲染 shipTemplate） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
