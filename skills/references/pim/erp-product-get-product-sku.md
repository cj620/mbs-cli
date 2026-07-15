# mbs pim erp-product-get-product-sku

SPU下SKU信息查询：SPU 详情页按 SPU 查询该 SPU 下全部 SKU 列表，返回每个 SKU 的图片、名称、库存/待发货、供应商、商品属性、销量等级、颜色尺寸、含运费成本、新品扶持期价格与剩余天数、毛净重、包装尺寸、近7/30/90天销量、开发员与创建时间等，用于渲染「SKU 信息」表格。

## 用法

```bash
mbs pim erp-product-get-product-sku --spu <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getProductSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | 商品SPU编号，来源页面地址栏 ?SPU= 参数(GetQueryString('SPU'))，URL query 传递 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 该SPU下的SKU列表(前端遍历渲染,并读取 obj[0].supportday) | - |
| `obj[][0]` | string | SKU编号(行主键,用于跳转SKU详情/复选框value/库存明细弹窗) | - |
| `obj[][1]` | string | 商品图片URL(加载失败回退默认图) | - |
| `obj[][2]` | string | 商品名称 | - |
| `obj[][3]` | string | 淘汰标记。-1=已淘汰(整行置灰并显示已淘汰标签) | - |
| `obj[][4]` | string | 是否侵权。1=侵权(显示红色侵权标签) | - |
| `obj[][5]` | string | 产品状态(枚举含清仓/停产/暂停销售等,命中时橙色高亮,否则绿色标签) | - |
| `obj[][6]` | number | 库存数量 | - |
| `obj[][7]` | number | 待发货数量 | - |
| `obj[][8]` | string | 供应商(旺旺/阿里uid,用于拼接旺旺联系链接) | - |
| `obj[][9]` | string | 商品属性 | - |
| `obj[][10]` | string | 销量等级枚举:超级爆款/爆A/爆B(红);旺A/旺B(橙);平A/平B(蓝);滞A/滞B(描边);无销新品(默认) | - |
| `obj[][11]` | string | 颜色 | - |
| `obj[][12]` | string | 尺寸(尺码) | - |
| `obj[][13]` | number | 含运费成本(元) | - |
| `obj[][14]` | number | 新品扶持期剩余天数。obj[0].supportday存在时提示'新品扶持期间(剩N天)';行内有值时展示扶持期价格,否则显示--- | - |
| `obj[][15]` | number | 新品扶持期价格(元)(仅当supportday有值时展示) | - |
| `obj[][16]` | number | 毛重(克) | - |
| `obj[][17]` | number | 净重 | - |
| `obj[][18]` | string | 包装尺寸(长x宽x高) | - |
| `obj[][19]` | number | 近7天销量 | - |
| `obj[][20]` | number | 近30天销量 | - |
| `obj[][21]` | number | 近90天销量 | - |
| `obj[][22]` | string | 开发员(创建人) | - |
| `obj[][23]` | string | 开发(创建)时间 | - |
| `obj[][24]` | string | 严禁上架平台(有值时红字提示'{canSalePlatform}严禁上架') | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
