# mbs pim erp-product-list-relisting-details-shopee-product-publish

Shopee Relisting失败信息详情列表查询：查询某次 Shopee 重新刊登(Relisting)任务的失败明细：按刊登时间、店铺名分页返回失败的 Shopee 商品(平台/店铺/负责人/胤元SPU/源itemID/状态/销量/失败原因等)，前端用于 relisting 失败信息详情页表格渲染与分页。

## 用法

```bash
mbs pim erp-product-list-relisting-details-shopee-product-publish --isSuccess <string> --relistingTimeStart <string> --shopName <string> --pageSize <number> --currentPage <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeProductPublish/listRelistingDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `isSuccess` | isSuccess | body | string | 是 | - | 成功/失败标识，本页固定传 'fail'(仅查失败明细) |
| `relistingTimeStart` | relistingTimeStart | body | string | 是 | - | Relisting 刊登时间(起始)，来源 sessionStorage 'ShopeeListingTime' |
| `shopName` | shopName | body | string | 是 | - | 店铺名称(按店铺过滤)，来源 sessionStorage 'shopeeShopName' |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，固定 100 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码；首次加载固定 1，分页回调取 api.getCurrent() |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.list[]` | array | Relisting 失败明细列表 | - |
| `obj.list[][0]` | string | 平台ID；'26'=shopee | - |
| `obj.list[][1]` | string | 店铺名称 | - |
| `obj.list[][2]` | string | 店铺负责人(员工姓名) | - |
| `obj.list[][3]` | string | 胤元SPU 主图URL | - |
| `obj.list[][4]` | string | 胤元(ERP) SPU 编号，前端链接至 SPUdetails.html?SPU= | - |
| `obj.list[][5]` | string | 胤元SPU 源标题 | - |
| `obj.list[][6]` | string | 源 itemID 跳转链接URL | - |
| `obj.list[][7]` | string | 源 itemID(重新刊登前的平台 listing itemID) | - |
| `obj.list[][8]` | number | 状态枚举。-2=下架失败;-5=上架失败;-3=es下架失败;4=reslisting成功;5=源listing异常;6=库存为0;7=上架出现异常;其他=其他异常 | - |
| `obj.list[][9]` | number | 销量(SPU已售数量) | - |
| `obj.list[][10]` | string | 失败原因(简要) | - |
| `obj.list[][11]` | string | 失败原因明细(详细报错信息) | - |
| `obj.total` | number | 满足条件的失败明细总条数(前端显示'共N条') | - |
| `obj.pages` | number | 总页数(前端分页控件 pageCount) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
