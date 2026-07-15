# mbs pim erp-product-get-product-info-sku

商品详情-按SKU查询商品基本信息：移动端「产品详情」页加载时，按 URL 上的 SKU 查询该商品的基本信息（名称、SPU/SKU、售价、售卖状态/等级、销量、毛利率/退款率、重量、库存、颜色尺码、包装、仓库仓位、开发员/采购员、申报名、备注等），返回数组(前端取第 0 个元素)渲染基本信息卡片。

## 用法

```bash
mbs pim erp-product-get-product-info-sku --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getProductInfoSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | body | string | 是 | - | 商品SKU编号(URL Query 参数)。来源：页面地址 ?sku= 经 GetQueryString('sku') 取得，无对应输入控件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(其它接口判 data.code==200，本回调判 data.obj) | - |
| `desc` | string | 响应提示信息(失败时 alert 展示) | - |
| `obj[]` | array | 商品详情数组,前端固定取 obj[0] 渲染 | - |
| `obj[][0]` | string | 商品名称(标题展示) | - |
| `obj[][1]` | string | 商品SPU编号(展示于 SPU/SKU 行) | - |
| `obj[][2]` | string | 商品SKU编号(展示于 SPU/SKU 行的 SKU 位) | - |
| `obj[][3]` | string | 售卖状态(中文:正常/清仓/停产/自动创建/暂停销售;"暂停销售"且有 availTime 时显示恢复时间) | - |
| `obj[][4]` | string | 销量等级枚举(超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品),前端转星级图标 | - |
| `obj[][5]` | string | 产品名(红色副标题展示) | - |
| `obj[][6]` | number | 成本价/售价(￥展示) | - |
| `obj[][7]` | string | 恢复销售时间(status=暂停销售时展示) | - |
| `obj[][8]` | string | 是否可修改状态。'1'=显示「修改状态」按钮,其它=隐藏 | - |
| `obj[][9]` | string | 是否侵权。'1'=显示「侵权」遮罩,其它=隐藏 | - |
| `obj[][10]` | string | 商品分类(有值才展示「商品分类」行) | - |
| `obj[][11]` | string | 商品属性(有值才展示「商品属性」行) | - |
| `obj[][12]` | number | 近7天销量(展示于 7/30/90天销量) | - |
| `obj[][13]` | number | 近30天销量 | - |
| `obj[][14]` | number | 近90天销量 | - |
| `obj[][15]` | number | 毛利率(原值为小数,前端 ×100 保留2位展示%) | - |
| `obj[][16]` | number | 发货退款率(前端直接拼接 % 展示) | - |
| `obj[][17]` | number | 退款单数(展示「N单」) | - |
| `obj[][18]` | number | 毛重(单位:克) | - |
| `obj[][19]` | number | 净重(单位:克) | - |
| `obj[][20]` | number | 售罄次数(有值才展示) | - |
| `obj[][21]` | string | 禁售平台(有值才展示) | - |
| `obj[][22]` | number | 库存(有值才展示) | - |
| `obj[][23]` | string | 颜色(与尺码同行展示) | - |
| `obj[][24]` | string | 尺码 | - |
| `obj[][25]` | string | 包装尺寸(与包装重量同行) | - |
| `obj[][26]` | number | 包装重量 | - |
| `obj[][27]` | string | 仓库(与仓位同行展示) | - |
| `obj[][28]` | string | 仓位 | - |
| `obj[][29]` | string | 开发员(与采购员同行展示) | - |
| `obj[][30]` | string | 采购员 | - |
| `obj[][31]` | string | 编辑员(有值才展示) | - |
| `obj[][32]` | string | 创建时间(有值才展示) | - |
| `obj[][33]` | string | 采购备注(有值才展示) | - |
| `obj[][34]` | string | 销售备注(有值才展示) | - |
| `obj[][35]` | string | 审核备注(有值才展示) | - |
| `obj[][36]` | string | 中文申报名(有值才展示) | - |
| `obj[][37]` | string | 英文申报名(有值才展示) | - |
| `obj[][38]` | string | 被合并的SKU(有值才展示,单独成段) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
