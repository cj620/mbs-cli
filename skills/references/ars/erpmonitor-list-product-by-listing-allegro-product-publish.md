# mbs ars erpmonitor-list-product-by-listing-allegro-product-publish

Allegro已导入商品(Listing)列表查询：查询 Allegro 商品导入(刊登 listing)结果列表：按 SPU、导入结果状态、导入人分页筛选，返回导入商品(SPU)行及其下 SKU 明细、店铺、毛利率、备货时长、物流模板、价格、导入人、导入结果与时间等字段；列表行可展开查看 SKU 价格/库存/币种。

## 用法

```bash
mbs ars erpmonitor-list-product-by-listing-allegro-product-publish --currentPage <number> --pagesize <number> [--spu <string>] [--status <string>] [--employee <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/allegroProductPublish/listProductByListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码(来源 baseData.currentPage，默认1，分页回调 api.getCurrent() 更新) |
| `pagesize` | pagesize | body | number | 是 | - | 每页条数(前端固定传 200) |
| `spu` | spu | body | string | 否 | - | SPU 搜索(来源输入框 #spuCode，支持 spu 或 sku) |
| `status` | status | body | string | 否 | - | 导入结果状态(来源下拉 #status)。空=全部;导入成功;导入失败 |
| `employee` | employee | body | string | 否 | - | 导入人(来源下拉 #employee，值为 employee_id) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准响应包装，本页代码未直接使用，(待人工确认)) | - |
| `desc` | string | 响应提示信息(标准响应包装，本页代码未直接使用，(待人工确认)) | - |
| `obj` | object | 业务数据对象(success 回调以 data.obj 判空) | - |
| `obj.list[]` | array | 导入商品(SPU)列表 | - |
| `obj.list[][0]` | string | 商品主图URL(加载失败回退默认图) | - |
| `obj.list[][1][]` | array | 该商品下的 SKU 明细列表(行内徽标显示 .length 数量) | - |
| `obj.list[][1][][0]` | string | SKU 图片URL(加载失败回退默认图) | - |
| `obj.list[][1][][1]` | string | SKU 编号(链接到 /product/SPUdetails.html?SPU=) | - |
| `obj.list[][1][][2]` | string | SKU 价格 | - |
| `obj.list[][1][][3]` | string | 币种 | - |
| `obj.list[][1][][4]` | string | SKU 库存 | - |
| `obj.list[][2]` | string | 商品 SPU 编号(链接到 /product/SPUdetails.html?SPU=) | - |
| `obj.list[][3]` | string | 商品标题 | - |
| `obj.list[][4]` | string | 店铺(已刊登店铺) | - |
| `obj.list[][5]` | string | 毛利率 | - |
| `obj.list[][6]` | string | 备货时长 | - |
| `obj.list[][7]` | string | 物流模板名称 | - |
| `obj.list[][8]` | string | 价格(价格区间) | - |
| `obj.list[][9]` | string | 导入人 | - |
| `obj.list[][10]` | number | 导入结果状态枚举。21=导入成功;23=导入失败(失败时展示 publish_response) | - |
| `obj.list[][11]` | string | 导入/发布响应信息(status=23 失败时展示) | - |
| `obj.list[][12]` | string | 导入时间 | - |
| `obj.pages` | number | 总页数(首页时传入 paging() 初始化分页组件) | - |
| `obj.total` | number | 总条数(渲染到 #total) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
