# mbs oms erp-order-customer-service-assess-shop

店铺客服考核(平台店铺评估)查询：店铺业绩列表(chakanShop)中鼠标悬浮店铺名时触发，按店铺名查询该店铺在所属平台(Shopee/Lazada/ebay)的客服考核/店铺评估明细，返回评估项数组(obj)。前端按 platform 套用不同模板(shopeeTemplate/lazadaTemplate/ebayTemplate)渲染，code=500 时直接展示 desc 文案。

## 用法

```bash
mbs oms erp-order-customer-service-assess-shop --shopName <string>
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/shopAchievements/customerServiceAssessShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 是 | - | 店铺名。查询条件，拼接到 URL ?shopName= 后。来源：列表行 data-shopname(即 value.shopName)，由悬浮事件透传，单值 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功(渲染模板);500=失败(展示 desc 红色文案) | - |
| `desc` | string | 响应提示信息(code=500 时作为错误文案渲染到悬浮层) | - |
| `obj[]` | array | 评估项数组(每个平台一组评估指标；ebay 仅取首元素 obj[0]) | - |
| `obj[][0]` | string | 评估类型中文名称(Shopee/Lazada 表头列展示) | - |
| `obj[][1]` | string | 评估类型标识。Shopee 用于判断 overall_review_rating(总体评分,展示 /5)；ebay 中为用户名 | - |
| `obj[][2]` | string | Shopee 指标值显示颜色(内联 style=color:...) | - |
| `obj[][3]` | string | 通用值1。Shopee=我的商店指标值;ebay=剩余刊登数量 | - |
| `obj[][4]` | string | 通用值2。Shopee=上周;Lazada=完成分数;ebay=已刊登数量 | - |
| `obj[][5]` | string | 通用值3。Shopee=最近一个月;ebay=总刊登数量 | - |
| `obj[][6]` | string | 通用值4。Shopee=目标前缀;Lazada=评估状态(good=达标/bad=未达标);ebay=币种/单位 | - |
| `obj[][7]` | string | 通用值5。Shopee=指标值单位/补充(总体评分时拼 /5);Lazada=目标;ebay=剩余销售额 | - |
| `obj[][8]` | string | 通用值6。Shopee=目标值;ebay=已销售额 | - |
| `obj[][9]` | string | 通用值7。ebay=总销售额 | - |
| `obj[][10]` | string | 通用值8。ebay=卖家等级 | - |
| `obj[][11]` | string | 通用值9。ebay=好评率 | - |
| `obj[][12]` | string | 通用值10。ebay=店铺订阅 | - |
| `obj[][13]` | string | 最后更新时间(ebay 模板展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
