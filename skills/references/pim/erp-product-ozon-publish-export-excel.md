# mbs pim erp-product-ozon-publish-export-excel

OZON自动刊登列表导出Excel：OZON推荐(自动)刊登列表页按当前搜索表单筛选条件导出符合条件的刊登SPU为Excel。请求体复用列表查询getParams()结果并追加分页;响应为二进制.xls文件流(responseType=blob),前端创建a标签触发下载,文件名为ozon自动刊登+时间戳.xls。

## 用法

```bash
mbs pim erp-product-ozon-publish-export-excel [--ozonCategoryName <string>] [--productStatus <string>] [--salesLevelList <array>] [--topShopname <string>] [--onlineResult <string>] [--targetShop <string>] [--spu <string>] [--spuText <string>] [--itemid <string>] [--createTimeStart <string>] [--createTimeEnd <string>] [--publishTimeStart <string>] [--publishTimeEnd <string>] [--isPriceDifference <number>] --currentPage <number> --pageSize <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/ozonProductController/ozonPublishExportExcel`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `ozonCategoryName` | ozonCategoryName | body | string | 否 | - | OZON分类名称(来源:请输入ozon分类输入框) |
| `productStatus` | productStatus | body | string | 否 | - | 产品状态(下拉,枚举:正常/清仓/停产/自动创建/暂停销售) |
| `salesLevelList` | salesLevelList | body | array | 否 | - | 销量级别列表(多选下拉,选项取自product/getProductType:超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品) |
| `topShopname` | topShopname | body | string | 否 | - | 店铺名称(下拉,选项取自ozonProductController/findPublishShop返回的shopnames) |
| `onlineResult` | onlineResult | body | string | 否 | - | 刊登状态(下拉,枚举:等待刊登/刊登中/刊登成功/刊登失败/审核中/放弃刊登) |
| `targetShop` | targetShop | body | string | 否 | - | 目标店铺(默认空字符串;左侧店铺列表点击时由setShopParams写入,导出复用搜索表单值) |
| `spu` | spu | body | string | 否 | - | 关键词-SPU编码(仅searchType=spu时存在,值=searchTypeValue输入框内容) |
| `spuText` | spuText | body | string | 否 | - | 关键词-SPU编码多个查询(仅searchType=spuText时存在,逗号分割多个SPU) |
| `itemid` | itemid | body | string | 否 | - | 关键词-itemid(仅searchType=itemid时存在,值=searchTypeValue输入框内容) |
| `createTimeStart` | createTimeStart | body | string | 否 | - | 生成时间-起始(仅timeType=createTime时存在,格式YYYY-MM-DD 00:00:00,来源日期区间选择器起点) |
| `createTimeEnd` | createTimeEnd | body | string | 否 | - | 生成时间-结束(仅timeType=createTime时存在,格式YYYY-MM-DD 23:59:59,来源日期区间选择器终点) |
| `publishTimeStart` | publishTimeStart | body | string | 否 | - | 上架时间-起始(仅timeType=publishTime时存在,格式YYYY-MM-DD 00:00:00) |
| `publishTimeEnd` | publishTimeEnd | body | string | 否 | - | 上架时间-结束(仅timeType=publishTime时存在,格式YYYY-MM-DD 23:59:59) |
| `isPriceDifference` | isPriceDifference | body | number | 否 | - | 是否仅看差价大(差价大复选框;勾选传1,未勾选则不传该字段) |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码(导出时由pageInfo.pageIndex强制写入,默认从1开始) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(导出时由pageInfo.pageSize强制写入,可选50/100/150/200/1000,默认50) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `(file stream)` | unknown | Excel二进制文件流(application/vnd.ms-excel,扩展名.xls),responseType=blob整体作为附件下载,前端文件名ozon自动刊登+时间戳.xls,无字段级结构 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
