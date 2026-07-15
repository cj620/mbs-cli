# mbs ars erpmonitor-list-product-by-listing-shopify-convent-sku

刊登商品列表查询（按刊登状态分页）：Shopify刊登管理页的商品刊登记录分页列表查询：按刊登状态（刊登中/刊登完毕/刊登成功/刊登失败）与页码分页拉取，返回 SPU 刊登记录列表（含主图、加密SPU、标题、分类、刊登店铺/人/状态/时间）及其下的 SKU 变体明细（加密SKU、原价、售卖价、库存等）。

## 用法

```bash
mbs ars erpmonitor-list-product-by-listing-shopify-convent-sku --status <string> --currentPage <number>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/shopifyConventSku/listProductByListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | string | 是 | - | 刊登状态。始终随请求发送：search() 默认 刊登中，search2() 默认 刊登完毕；若状态下拉 #status 选中则取其值，枚举=刊登中/刊登成功/刊登失败。来源控件：#status 下拉框 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。首次查询固定 1，翻页时取分页控件 api.getCurrent() 的当前页。来源控件：.M-box/.M-box2 分页组件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（前端 data.code==200 判定） | - |
| `desc` | string | 响应提示信息（异常/提示文案，其他同控制器接口回填至弹窗） | - |
| `obj` | object | 业务数据对象（分页结果） | - |
| `obj.total` | number | 满足条件的记录总数（前端渲染“共 N 条”） | - |
| `obj.pages` | number | 总页数（前端传入分页控件 pageCount） | - |
| `obj.list[]` | array | 商品刊登记录列表（SPU行） | - |
| `obj.list[][0]` | string | 商品主图URL（渲染 <img src>，失败回退默认图） | - |
| `obj.list[][1]` | string | 商品SPU编号（列表主键，链接至 SPU 详情页） | - |
| `obj.list[][2]` | string | 加密SPU（MD5加密后的SPU编码） | - |
| `obj.list[][3]` | string | 商品标题 | - |
| `obj.list[][4]` | string | 商品分类 | - |
| `obj.list[][5]` | string | 刊登店铺名称 | - |
| `obj.list[][6]` | string | 刊登人（员工姓名） | - |
| `obj.list[][7]` | number | 刊登状态枚举。1=刊登中；2=刊登失败；3=刊登成功（前端转中文展示） | - |
| `obj.list[][8]` | string | 生成时间 | - |
| `obj.list[][9]` | string | 刊登时间（为空时展示占位“------------”） | - |
| `obj.list[][10][]` | array | 该SPU下的SKU变体明细列表（.length 作为徽标数量展示） | - |
| `obj.list[][10][][0]` | string | SKU变体图片URL（失败回退默认图） | - |
| `obj.list[][10][][1]` | string | SKU编号（链接至 SKU 详情页） | - |
| `obj.list[][10][][2]` | string | 加密SKU | - |
| `obj.list[][10][][3]` | number | SKU原价（划线价/对比价） | - |
| `obj.list[][10][][4]` | number | SKU售卖价 | - |
| `obj.list[][10][][5]` | number | SKU库存数量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
