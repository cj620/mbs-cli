# mbs ars erpmonitor-amazon-reviseprice-confirm-list

亚马逊调价确认列表查询：AMZ调价页列表分页查询：按创建时间、刊登时间、调价结果、店铺、原/新价格区间、物流方式、涨降价、SKU/SPU/子ASIN、是否跟卖、运费模板等条件分页查询亚马逊调价确认记录，返回列表及分页汇总。tab=1 等待调价，tab=2 调价完毕。

## 用法

```bash
mbs ars erpmonitor-amazon-reviseprice-confirm-list [--publishStartDate <string>] [--publishEndDate <string>] [--startDate <string>] [--endDate <string>] [--revisePriceResult <string>] [--shopId <string>] [--smallOriginPrice <string>] [--olderOriginPrice <string>] [--smallNewPrice <string>] [--olderNewPrice <string>] [--expressChannel <string>] --tab <string> [--revisePriceUpFlag <string>] [--erpSku <string>] [--erpSpu <string>] [--sonAsins <string>] [--followUpFlag <string>] [--shippingTemplate <string>] --currPage <number> --pageSize <number>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/amaoznRevisepriceConfirm/amazonRevisepriceConfirmList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `publishStartDate` | publishStartDate | body | string | 否 | - | 刊登时间-起始(仅 tab=1/getList 携带) |
| `publishEndDate` | publishEndDate | body | string | 否 | - | 刊登时间-结束(仅 tab=1/getList 携带) |
| `startDate` | startDate | body | string | 否 | - | 创建时间-起始(默认当天前2天) |
| `endDate` | endDate | body | string | 否 | - | 创建时间-结束(默认当天) |
| `revisePriceResult` | revisePriceResult | body | string | 否 | - | 调价结果。0=等待调价;2=调价中;3=调价成功;4=调价失败(空=全部) |
| `shopId` | shopId | body | string | 否 | - | 店铺ID |
| `smallOriginPrice` | smallOriginPrice | body | string | 否 | - | 原价格范围-开始 |
| `olderOriginPrice` | olderOriginPrice | body | string | 否 | - | 原价格范围-结束 |
| `smallNewPrice` | smallNewPrice | body | string | 否 | - | 新价格范围-开始 |
| `olderNewPrice` | olderNewPrice | body | string | 否 | - | 新价格范围-结束 |
| `expressChannel` | expressChannel | body | string | 否 | - | 物流方式(模糊搜索) |
| `tab` | tab | body | string | 是 | - | 标签页。1=等待调价;2=调价完毕 |
| `revisePriceUpFlag` | revisePriceUpFlag | body | string | 否 | - | 涨降价标志。1=涨价;2=降价(空=全部) |
| `erpSku` | erpSku | body | string | 否 | - | ERP SKU(搜索) |
| `erpSpu` | erpSpu | body | string | 否 | - | ERP SPU(搜索) |
| `sonAsins` | sonAsins | body | string | 否 | - | 子ASIN(多个逗号分隔) |
| `followUpFlag` | followUpFlag | body | string | 否 | - | 是否跟卖。0=跟卖;1=非跟卖(空=全部) |
| `shippingTemplate` | shippingTemplate | body | string | 否 | - | 运费模板名称(值为'null'时置为 null,空模板) |
| `currPage` | currPage | body | number | 是 | - | 当前页码(分页/搜索时重置为1) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(50/100/500,+转数字) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 业务是否成功(true 时取 obj 渲染) | - |
| `code` | number | 响应状态码(统一响应体,200=成功;本接口回调以 success 判断)(待人工确认是否返回) | - |
| `desc` | string | 响应提示信息(统一响应体)(待人工确认是否返回) | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.content[]` | array | 调价记录列表 | - |
| `obj.content[][0]` | string | 调价记录ID(主键,勾选/我要调价/删除/导出传参) | - |
| `obj.content[][1]` | string | 商品图片URL(空则占位图) | - |
| `obj.content[][2]` | string | ERP SKU(链接到 SKUdetails 详情页) | - |
| `obj.content[][3]` | string | 商品/listing链接 | - |
| `obj.content[][4]` | string | 商品标题 | - |
| `obj.content[][5]` | string | 子ASIN | - |
| `obj.content[][6]` | string | 平台SKU | - |
| `obj.content[][7]` | string | 销量级别。超爆/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品 | - |
| `obj.content[][8]` | number | 原SKU价格 | - |
| `obj.content[][9]` | number | SKU运费(null 或 0 视为无运费,否则价格后展示 +运费(ship)) | - |
| `obj.content[][10]` | string | 币种 | - |
| `obj.content[][11]` | number | 新SKU价格 | - |
| `obj.content[][12]` | number | 修改后价格(-1 表示未修改,展示为'-';非 -1 时原新价格加删除线) | - |
| `obj.content[][13]` | string | 平邮/挂号分界线 | - |
| `obj.content[][14]` | string | 物流方式 | - |
| `obj.content[][15]` | string | 店铺名称 | - |
| `obj.content[][16]` | string | 店铺负责人 | - |
| `obj.content[][17]` | string | 运费模板 | - |
| `obj.content[][18]` | number | 是否跟卖。0=是(跟卖);1=否(非跟卖) | - |
| `obj.content[][19]` | string | 调价内容描述(有则展示) | - |
| `obj.content[][20]` | number | 调价状态。0=等待调价;1/2=调价中;3=调价成功;4=调价失败 | - |
| `obj.content[][21]` | string | 调价响应信息(状态=4 失败时展示,截取前50字符,悬浮显示全文) | - |
| `obj.content[][22]` | string | 创建人(空展示 ------) | - |
| `obj.content[][23]` | string | 创建时间(空展示 ------) | - |
| `obj.content[][24]` | string | 刊登时间(空展示 ------) | - |
| `obj.content[][25]` | string | 提价(调价)时间(空展示 ------) | - |
| `obj.toatalCount` | number | 总记录数(原拼写 toatalCount,前端展示总条数) | - |
| `obj.pageSize` | number | 每页条数 | - |
| `obj.totalPage` | number | 总页数(用于分页组件 pageCount) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
