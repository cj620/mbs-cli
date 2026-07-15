# mbs pim erp-product-get-product-reduce-price

降本SKU榜查询：降本排行榜页「降本SKU榜」分页查询：按SKU编号、开发员、采购员筛选，返回SKU降本明细（开发员/采购组、图片、产品名、降本持续天数、30天销量、当前采购价、累计降本金额、每周降本金额）及总数、总页数。

## 用法

```bash
mbs pim erp-product-get-product-reduce-price [--sku <string>] [--developOper <string>] [--purchaseOper <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productExtend/getProductReducePrice`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | body | string | 否 | - | SKU编号（来源输入框 #SKU，占位「请输入sku编号」；为空时查询全部） |
| `developOper` | developOper | body | string | 否 | - | 开发员（来源下拉框 #developOper，选项由 /product/getEmpByDep?depId=62 加载；空值=全部） |
| `purchaseOper` | purchaseOper | body | string | 否 | - | 采购员（来源下拉框 #purchaseOper，选项由 /product/getEmpByDep?depId=65 加载；空值=全部） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（前端固定传 50） |
| `page` | page | body | number | 是 | - | 当前页码（首次固定为 1，分页回调取 api.getCurrent()） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的总条数（前端写入 #total，按每页50条计算页数） | - |
| `obj.countPage` | number | 总页数（传入分页组件 pageCount） | - |
| `obj.result[]` | array | 降本SKU列表 | - |
| `obj.result[][0]` | string | 开发员 | - |
| `obj.result[][1]` | string | 采购组（开发员下方展示） | - |
| `obj.result[][2]` | string | 商品图片URL（加载失败回退默认图 timg.jpg） | - |
| `obj.result[][3]` | string | SKU编号（链接至 /product/SKUdetails.html?SKU=） | - |
| `obj.result[][4]` | string | 产品名称（SPU/SKU列展示） | - |
| `obj.result[][5]` | number | 降本持续天数（展示「降本持续N天」） | - |
| `obj.result[][6]` | number | 30天销量 | - |
| `obj.result[][7]` | number | 当前采购价 | - |
| `obj.result[][8]` | number | 累计降本金额 | - |
| `obj.result[][9]` | string | 每周降本金额（逗号拼接字符串，前端 split(',') 拆为各周金额，对应表头「第N周」） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
