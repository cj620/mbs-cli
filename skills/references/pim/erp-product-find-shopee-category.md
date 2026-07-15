# mbs pim erp-product-find-shopee-category

Shopee各站点类目查询：按 SKU 或 SPU 分页查询商品在 Shopee 七个站点(ID印尼/SG新加坡/MY马来/TH泰国/PH菲律宾/TW台湾/VN越南)的类目分类与属性值，返回分页列表供页面表格渲染、修改与批量修改。

## 用法

```bash
mbs pim erp-product-find-shopee-category --currentPage <number> [--sku <string>] [--spu <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productReport/findShopeeCategory`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。search() 首次查询固定传 1；翻页时取分页控件 api.getCurrent() 的当前页 |
| `sku` | sku | body | string | 否 | - | SKU编号(关键词)。仅当搜索类型 #status=1(按SKU搜索) 时传入，值来自输入框 #skuCode；与 spu 互斥 |
| `spu` | spu | body | string | 否 | - | SPU编号(关键词)。仅当搜索类型 #status=2(按SPU搜索) 时传入，值来自输入框 #skuCode；与 sku 互斥 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象；为空时页面把总数置 0 | - |
| `obj.total` | number | 满足条件的总条数(渲染到 #total) | - |
| `obj.totalPages` | number | 总页数(传入分页控件 pageCount) | - |
| `obj.rows[]` | array | 商品类目列表 | - |
| `obj.rows[][0]` | string | 商品记录ID(修改/批量修改主键，传入后端) | - |
| `obj.rows[][1]` | string | 更新标识/更新人(批量修改时回传，作乐观锁/更新依据) | - |
| `obj.rows[][2]` | string | SPU编号(链接至 SPU 详情页) | - |
| `obj.rows[][3]` | string | SKU编号(链接至 SKU 详情页) | - |
| `obj.rows[][4]` | string | ID(印尼)站点-分类(Shopee Indonesia 类目id) | - |
| `obj.rows[][5]` | string | ID(印尼)站点-属性值 | - |
| `obj.rows[][6]` | string | SG(新加坡)站点-分类 | - |
| `obj.rows[][7]` | string | SG(新加坡)站点-属性值 | - |
| `obj.rows[][8]` | string | MY(马来西亚)站点-分类 | - |
| `obj.rows[][9]` | string | MY(马来西亚)站点-属性值 | - |
| `obj.rows[][10]` | string | TH(泰国)站点-分类 | - |
| `obj.rows[][11]` | string | TH(泰国)站点-属性值 | - |
| `obj.rows[][12]` | string | PH(菲律宾)站点-分类 | - |
| `obj.rows[][13]` | string | PH(菲律宾)站点-属性值 | - |
| `obj.rows[][14]` | string | TW(台湾)站点-分类 | - |
| `obj.rows[][15]` | string | TW(台湾)站点-属性值 | - |
| `obj.rows[][16]` | string | VN(越南)站点-分类 | - |
| `obj.rows[][17]` | string | VN(越南)站点-属性值 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
