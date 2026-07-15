# mbs scm erp-manufacture-export-excel

SMT纠纷信息导出Excel：在SMT纠纷统计页点击导出按钮，按当前列表查询条件导出纠纷信息明细Excel。请求体复用纠纷列表查询(getIssueInfoList)最后一次的查询参数(exportdata=params)，响应为二进制文件流(responseType:blob)，文件名取自响应头content-disposition。

## 用法

```bash
mbs scm erp-manufacture-export-excel [--country <string>] [--shopManager <string>] [--shopName <string>] [--sku <string>] [--spu <string>] [--expressType <string>] [--customerName <string>] [--itemId <string>] [--orderId <string>] --pageSize <number> [--sortStr <string>] --currentPage <number> [--startTime <string>] [--endTime <string>] [--gmtCreateStartTime <string>] [--gmtCreateEndTime <string>]
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/issueInfo/exportExcel`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `country` | country | body | string | 否 | - | 国家(el-input 占位国家, searchData.country, 仅列表模式显示) |
| `shopManager` | shopManager | body | string | 否 | - | 店长(el-select 占位店长, 选项来自 querySmtShopManager) |
| `shopName` | shopName | body | string | 否 | - | 店铺(el-select-v2 占位店铺, 选项来自 querySmtShop) |
| `sku` | sku | body | string | 否 | - | SKU(el-input 占位sku, searchData.sku, 仅列表模式显示) |
| `spu` | spu | body | string | 否 | - | SPU(el-input 占位spu, searchData.spu, 仅列表模式显示) |
| `expressType` | expressType | body | string | 否 | - | 物流方式(el-select-v2 占位物流方式, 选项来自 findPostponeShop.expressList, 仅列表模式显示) |
| `customerName` | customerName | body | string | 否 | - | 客户名称(searchData.customerName, 页面无对应控件, 固定传空) |
| `itemId` | itemId | body | string | 否 | - | 产品ID(el-input 占位产品ID, searchData.itemId) |
| `orderId` | orderId | body | string | 否 | - | 订单ID(el-input 占位订单ID, searchData.orderId, 仅列表模式显示) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(searchData.pageSize 固定50, 与分页 page-size=50 一致) |
| `sortStr` | sortStr | body | string | 否 | - | 排序字段。q.issuenum desc=纠纷数量倒序(默认);q.refundMoney desc=退款金额倒序;q.goodsErrIssueNum desc=货不对板数量倒序;q.expressErrIssueNum desc=物流纠纷数量倒序 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码(分页 @current-change 传入, 导出时为最后一次查询页码) |
| `startTime` | startTime | body | string | 否 | - | 订单时间-起始(time.value[0], 格式 YYYY-MM-DD, 默认近30天) |
| `endTime` | endTime | body | string | 否 | - | 订单时间-结束(time.value[1], 格式 YYYY-MM-DD, 默认今天) |
| `gmtCreateStartTime` | gmtCreateStartTime | body | string | 否 | - | 纠纷时间-起始(time2.value[0], 格式 YYYY-MM-DD, 默认近30天) |
| `gmtCreateEndTime` | gmtCreateEndTime | body | string | 否 | - | 纠纷时间-结束(time2.value[1], 格式 YYYY-MM-DD, 默认今天) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `data` | unknown | 导出的Excel二进制文件流(responseType:blob), 前端 new Blob([data]) 后通过 a 标签 download 触发下载 | - |
| `content-disposition` | string | 响应头, 含 filename=<文件名>, 前端 decodeURI 后截取 filename= 之后内容作为下载文件名 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
