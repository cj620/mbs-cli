<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erp-report-get-aliexpress-pop-product

速卖通POP半托管JIT预约商品列表查询：速卖通（AliExpress）POP半托管「立即加入JIT」页面的商品分页查询：按店铺、预约状态、item ID、库存区间筛选并支持排序，返回商品列表及每个商品的SKU明细（属性、销量级别、包装尺寸重量、价格、货品信息、各仓JIT可售库存）。

## 用法

```bash
mbs ars erp-report-get-aliexpress-pop-product [--shopName <array<string>>] [--productId <string>] --page <number> --size <number> [--popStatus <array<number>>] [--total <number>] [--minStock <number>] [--maxStock <number>] [--sort <number>]
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/aliexpressPopProduct/getAliexpressPopProduct`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | body | array<string> | 否 | - | 店铺名称（多选）。来源：店铺多选下拉，选项来自 shopDropDown 接口，默认全选 |
| `productId` | productId | body | string | 否 | - | 商品 item ID。来源：item ID 输入框 |
| `page` | page | body | number | 是 | - | 当前页码（从1开始） |
| `size` | size | body | number | 是 | - | 每页条数，默认30，可选 30/50/100/200 |
| `popStatus` | popStatus | body | array<number> | 否 | - | 预约状态（多选），默认[1]。1=待提交;2=成功;3=失败;4=已放弃;5=异常;6=已提交 |
| `total` | total | body | number | 否 | - | 总条数（前端分页展示字段，默认1，随 searchOption 一并提交，后端忽略） |
| `minStock` | minStock | body | number | 否 | - | 库存下限（库存-小）。来源：库存-小 输入框 |
| `maxStock` | maxStock | body | number | 否 | - | 库存上限（库存-大）。来源：库存-大 输入框 |
| `sort` | sort | body | number | 否 | - | 排序方式，默认0。0=默认;1=最大库存降序;2=最大库存升序;3=listing30订单量降序;4=listing30订单量升序 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | string | 响应状态码，'200'=成功（统一响应包，本接口前端仅取 obj） | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.list[]` | array | 商品列表（映射为主表 tableData） | - |
| `obj.list[][0]` | string | 商品主图URL | - |
| `obj.list[][1]` | string | 店铺名称 | - |
| `obj.list[][2]` | number | 预约状态。1=待提交;2=成功;3=失败;4=已放弃;5=异常;6=已提交（1/3 时可勾选与操作） | - |
| `obj.list[][3]` | string | 商品标题 | - |
| `obj.list[][4]` | string | 商品 item ID | - |
| `obj.list[][5]` | number | listing 近30天订单量（支持自定义排序） | - |
| `obj.list[][6]` | string | 异常原因（失败/异常时后端返回信息） | - |
| `obj.list[][7]` | string | 货币代码（商品价格币种，展示于价格前缀） | - |
| `obj.list[][8][]` | array | SKU 明细列表（展开行表格数据） | - |
| `obj.list[][8][][0]` | string | SKU 行ID（el-table row-key） | - |
| `obj.list[][8][][1]` | string | 销量级别（el-tag 展示） | - |
| `obj.list[][8][][2]` | string | 包装重量(kg)，可编辑；保存校验 ≤1.8kg | - |
| `obj.list[][8][][3]` | number | 包装长度(cm)，可编辑；校验单边≤57、三边和≤87 | - |
| `obj.list[][8][][4]` | number | 包装宽度(cm)，可编辑；校验单边≤57、三边和≤87 | - |
| `obj.list[][8][][5]` | number | 包装高度(cm)，可编辑；校验单边≤57、三边和≤87 | - |
| `obj.list[][8][][6]` | string | 商品基础价格，可编辑（配合 currency_code 展示） | - |
| `obj.list[][8][][7]` | string | SKU 编码，可编辑 | - |
| `obj.list[][8][][8]` | string(JSON) | SKU 属性列表（JSON字符串，前端 JSON.parse 为数组；保存时再 JSON.stringify） | - |
| `obj.list[][8][][9]` | string(JSON) | 货品信息（JSON字符串，前端 JSON.parse 为对象；保存时再 JSON.stringify） | - |
| `obj.list[][8][][10]` | string(JSON) | 半托管-JIT 各仓库存列表（JSON字符串，前端 JSON.parse 为数组；保存时再 JSON.stringify） | - |
| `obj.count` | number | 满足条件的商品总数（赋给 searchOption.total 用于分页） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
