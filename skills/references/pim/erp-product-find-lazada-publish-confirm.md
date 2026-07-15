# mbs pim erp-product-find-lazada-publish-confirm

Lazada批量改标题-修改确认列表查询：Lazada批量修改标题页面查询修改任务列表：支持按站点、刊登店铺、修改状态、修改人、SPU/SKU模糊关键词筛选，分页返回修改任务行（原标题/新标题/店铺/站点/SKU/itemID/状态/创建与修改人时间）。descr 区分修改中（空）与修改完毕（修改完成）两个 Tab。

## 用法

```bash
mbs pim erp-product-find-lazada-publish-confirm --currentPage <number> [--descr <string>] [--shopname <string>] [--site <string>] [--status <string>] [--updateby <string>] [--fuzzySearch <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaExportController/findLazadaPublishConfirm`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。首次查询固定为1；分页回调中取 api.getCurrent() |
| `descr` | descr | body | string | 否 | - | 查询类型标识。''=修改中Tab(search)；'修改完成'=修改完毕Tab(search2) |
| `shopname` | shopname | body | string | 否 | - | 刊登店铺。下拉单选值(#shopName，选项由 findManageShop 填充) |
| `site` | site | body | string | 否 | - | 站点。枚举：PH/SG/MY/TH/ID/VN(#employeeList) |
| `status` | status | body | string | 否 | - | 修改状态。0=等待修改;1=修改中;2=修改成功;3=修改失败(#status) |
| `updateby` | updateby | body | string | 否 | - | 修改人。下拉单选值(#modifier，选项由 findManageEmployeeNames 填充) |
| `fuzzySearch` | fuzzySearch | body | string | 否 | - | SPU/SKU 模糊搜索关键词(修改中=#spus1，修改完毕=#spus2) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息(弹窗展示) | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.total` | number | 满足条件的任务总条数 | - |
| `obj.totalPages` | number | 总页数(分页控件 pageCount) | - |
| `obj.rows[]` | array | 修改任务行列表 | - |
| `obj.rows[][0]` | string | 任务记录ID(status==0 时作为复选框 value) | - |
| `obj.rows[][1]` | string | 商品SPU编号(链接至 SPUdetails.html) | - |
| `obj.rows[][2]` | string | 商品SKU编号(链接至 SKUdetails.html) | - |
| `obj.rows[][3]` | string | listing 原标题 | - |
| `obj.rows[][4]` | string | listing 新标题(待修改目标标题) | - |
| `obj.rows[][5]` | string | 刊登店铺名称 | - |
| `obj.rows[][6]` | string | 站点(PH/SG/MY/TH/ID/VN) | - |
| `obj.rows[][7]` | string | SPU 英文标题(ERP 内标题) | - |
| `obj.rows[][8]` | string | 平台卖家SKU(sellersku) | - |
| `obj.rows[][9]` | string | 平台 itemID(与 srcUrl 组成跳转链接) | - |
| `obj.rows[][10]` | string | listing 原始链接URL(itemID 超链接地址) | - |
| `obj.rows[][11]` | string | 修改状态枚举。0=等待修改;1=修改中;2=修改成功;3=修改失败 | - |
| `obj.rows[][12]` | string | 修改失败原因(status==3 时悬浮展示，来自平台API) | - |
| `obj.rows[][13]` | string | 创建人 | - |
| `obj.rows[][14]` | string | 创建时间 | - |
| `obj.rows[][15]` | string | 修改人 | - |
| `obj.rows[][16]` | string | 修改时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
