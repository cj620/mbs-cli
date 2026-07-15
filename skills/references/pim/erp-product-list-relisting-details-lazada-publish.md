<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-list-relisting-details-lazada-publish

Lazada Relisting失败信息详情列表查询：查询 Lazada 平台重新刊登(relisting)的失败信息详情：按 relisting 时间、店铺名称分页查询失败列表，返回每条 SPU 的平台、店铺、店铺负责人、源标题/源itemID、上架状态、销量、失败原因等，并返回总条数与总页数用于分页。

## 用法

```bash
mbs pim erp-product-list-relisting-details-lazada-publish --isSuccess <string> --relistingTimeStart <string> [--shopName <string>] --pageSize <number> --currentPage <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaPublish/listRelistingDetails`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `isSuccess` | isSuccess | body | string | 是 | - | 成功/失败标识，固定传 'fail'(仅查询失败记录) |
| `relistingTimeStart` | relistingTimeStart | body | string | 是 | - | relisting(重新刊登)起始时间，来源 sessionStorage.lazadalistingTime |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(按店铺过滤)，来源 sessionStorage.shopName，可能为空 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，固定 100 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码，首次加载固定 1，分页回调取 api.getCurrent() |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.list[]` | array | 失败详情列表(前端取 data.obj.list 渲染模板) | - |
| `obj.list[][0]` | number | 平台ID。18=lazada | - |
| `obj.list[][1]` | string | 店铺名称 | - |
| `obj.list[][2]` | string | 店铺负责人(员工姓名) | - |
| `obj.list[][3]` | string | SPU 商品主图URL | - |
| `obj.list[][4]` | string | 胤元(ERP)SPU 编号，点击跳转 SPUdetails.html?SPU= 详情 | - |
| `obj.list[][5]` | string | 胤元SPU源标题(鼠标悬停 title 展示全文) | - |
| `obj.list[][6]` | string | 源 itemID 的外部跳转链接URL | - |
| `obj.list[][7]` | string | 源 itemID(平台原 listing 商品ID) | - |
| `obj.list[][8]` | number | 上架/下架状态枚举。-3/-5/5/6=上架失败;3=下架失败;4=成功;7=上架异常(前端转中文展示) | - |
| `obj.list[][9]` | number | 销量 | - |
| `obj.list[][10]` | string | 失败原因 | - |
| `obj.list[][11]` | string | 失败原因明细(错误详情，与 reason 换行拼接展示) | - |
| `obj.total` | number | 满足条件的总条数(前端渲染至 #total) | - |
| `obj.pages` | number | 总页数(前端传入 pagingfailDetails() 初始化分页控件) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
