# mbs scm erp-purchase-query-cai-niao-in-storage-order

菜鸟入库单列表查询：优选仓菜鸟入库单分页列表查询：按单据类型(采购入库单/退货入库单)、时间区间、入库单编号、SKU、店铺、状态筛选，返回入库单行(FOC单号、优选SKU、申请/已入数、各仓库存、销量、直邮信息、采购情况、状态、操作日志等)及是否有操作权限。

## 用法

```bash
mbs scm erp-purchase-query-cai-niao-in-storage-order [--createTimeEnd <string>] [--createTimeStart <string>] [--erpSku <string>] [--orderCode <string>] --pageNum <number> --pageSize <number> [--shopName <array>] [--status <string>] [--orderType <string>]
```

## API

- Service: `erpPurchase`
- Method: `POST`
- Path: `/erpPurchase/erpPurchase/caiNiao/queryCaiNiaoInStorageOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `createTimeEnd` | createTimeEnd | body | string | 否 | - | 结束时间(格式 yyyy-MM-dd)，来源结束时间日期选择器 time2 |
| `createTimeStart` | createTimeStart | body | string | 否 | - | 开始时间(格式 yyyy-MM-dd)，来源开始时间日期选择器 time1(默认当前时间前30天) |
| `erpSku` | erpSku | body | string | 否 | - | 优选SKU，来源输入框 erpSkuname(placeholder=sku) |
| `orderCode` | orderCode | body | string | 否 | - | 入库单编号，来源输入框 orderCode |
| `pageNum` | pageNum | body | number | 是 | - | 当前页码，来源分页组件(默认1) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定传 50 |
| `shopName` | shopName | body | array | 否 | - | 申请店铺列表(字符串数组，多店铺空格分隔)，来源多选店铺 shop |
| `status` | status | body | string | 否 | - | 入库单状态，来源状态下拉 status(取值来自 getStutusList 接口 item.id) |
| `orderType` | orderType | body | string | 否 | - | 单据类型。601=采购入库单;501=退货入库单(默认601)，来源顶部类型下拉 type |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准信封字段) | - |
| `desc` | string | 响应提示信息(标准信封字段) | - |
| `content` | number | 总记录数(前端 Number(res.data.content) 赋给分页 total) | - |
| `obj` | object | 业务数据对象(为 null 时前端置空列表) | - |
| `obj.dataList[]` | array | 入库单行列表 | - |
| `obj.dataList[][0]` | string | FOC单号(入库单编号) | - |
| `obj.dataList[][1]` | string | 优选SKU(链接至 SKUdetails2.html) | - |
| `obj.dataList[][2]` | string | 优选仓 itemid(为空显示"添加itemid"，链接至速卖通商品页) | - |
| `obj.dataList[][3]` | number | 申请数(空时展示0) | - |
| `obj.dataList[][4]` | number | 已入库数(空时展示0) | - |
| `obj.dataList[][5]` | number | 现库存数 | - |
| `obj.dataList[][6]` | number | 中间仓库存 | - |
| `obj.dataList[][7]` | number | listing 30天销量(空时展示0) | - |
| `obj.dataList[][8]` | number | 直邮SKU 7天销量 | - |
| `obj.dataList[][9]` | number | 直邮SKU 30天销量 | - |
| `obj.dataList[][10]` | number | 直邮SKU 90天销量 | - |
| `obj.dataList[][11]` | string | 申请店铺 | - |
| `obj.dataList[][12]` | string | 申请人 | - |
| `obj.dataList[][13]` | string | 直邮SKU | - |
| `obj.dataList[][14]` | number | 直邮库存 | - |
| `obj.dataList[][15]` | number | 直邮待发货数 | - |
| `obj.dataList[][16]` | number | 直邮在途数 | - |
| `obj.dataList[][17]` | string | 采购情况 | - |
| `obj.dataList[][18]` | string | 采购备注(为空显示"添加采购备注") | - |
| `obj.dataList[][19]` | string | 状态(中文描述) | - |
| `obj.dataList[][20]` | number | 状态码(2/6/8 时不显示上架操作按钮) | - |
| `obj.dataList[][21]` | string | 入库单行记录ID(上架/设itemid/采购备注均以此为主键) | - |
| `obj.dataList[][22][]` | array | 操作日志列表 | - |
| `obj.dataList[][22][][0]` | string | 操作人 | - |
| `obj.dataList[][22][][1]` | string | 操作时间 | - |
| `obj.dataList[][22][][2]` | string | 操作内容 | - |
| `obj.dataList[][22][][3]` | string | 日志记录ID(列表 key) | - |
| `obj.authority` | boolean | 是否有操作(上架)权限(赋给 show 控制操作列显隐) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
