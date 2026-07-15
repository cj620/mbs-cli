# mbs oms erp-order-find-wish-pbof-plan

按投放计划查询 Wish ProductBoost 推广效果：Wish ProductBoost(产品推广)报表「按照投放计划查看」维度的分页查询：按交易时间区间、店长、店铺、活动名称、活动状态等条件筛选，按指定字段升/降序排序，返回投放计划(活动)列表及其活动花费、订单数、ERP总成交额/总单量等汇总字段。

## 用法

```bash
mbs oms erp-order-find-wish-pbof-plan --startTime <string> --endTime <string> [--shopmanager <string>] [--shopName <string>] [--field <string>] [--campaignName <string>] [--order <string>] [--campaignState <string>] --currPage <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishProductBoost/findWishPBOfPlan`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `startTime` | startTime | body | string | 是 | - | 交易时间-起始(yyyy-MM-dd)，来源 #startTime date 控件，为空时拦截不发请求 |
| `endTime` | endTime | body | string | 是 | - | 交易时间-结束(yyyy-MM-dd)，来源 #endTime date 控件，为空时拦截不发请求 |
| `shopmanager` | shopmanager | body | string | 否 | - | 店长，来源 #Shopowner 下拉(选项由 findAllManager 填充)，可为空 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称，来源 #shopName 下拉(选项由 findAllshop 填充)，可为空 |
| `field` | field | body | string | 否 | - | 排序字段，来源 #rank。枚举 mabanggvm=ERP总成交额; mabangOrderNum=ERP总单量; spend=活动花费/实际花费; sales=订单数 |
| `campaignName` | campaignName | body | string | 否 | - | 活动名称(模糊)，来源 #campaignName 文本框，可为空 |
| `order` | order | body | string | 否 | - | 排序方式，来源 #descending。枚举 asc=升序; desc=降序(默认desc) |
| `campaignState` | campaignState | body | string | 否 | - | 活动状态，来源 #campaignState。枚举 空=全部; 新建; 进行中(默认); 终止; 已取消 |
| `currPage` | currPage | body | number | 是 | - | 当前页码，首页固定为1，翻页取分页组件 api.getCurrent() |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定传100 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准响应封装，源码未显式使用)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准响应封装，源码未显式使用)(待人工确认) | - |
| `obj` | object | 业务数据对象(分页结果)，if(data.obj) 判空 | - |
| `obj.pages` | number | 总页数，传入 findWishProductBoostReport(pages) 初始化分页组件 | - |
| `obj.total` | number | 满足条件的记录总数，渲染到 #total | - |
| `obj.list[]` | array | 投放计划(活动)列表，赋值 resDats，模板遍历 obj.list | - |
| `obj.list[][0]` | string | 活动名称 | - |
| `obj.list[][1]` | string | 活动状态(新建/进行中/终止/已取消) | - |
| `obj.list[][2]` | number | 活动花费/实际花费(USD，前端 toFixed(2) 展示) | - |
| `obj.list[][3]` | number | 预算花费(USD)，用于计算实际花费/预算花费比，为0/空时显示无数据 | - |
| `obj.list[][4]` | number | 订单数 | - |
| `obj.list[][5]` | string | 活动开始时间 | - |
| `obj.list[][6]` | string | 活动截止时间 | - |
| `obj.list[][7]` | string | 店铺 | - |
| `obj.list[][8]` | string | 店长 | - |
| `obj.list[][9]` | number | ERP总成交额(前端 toFixed(2) 展示) | - |
| `obj.list[][10]` | number | ERP总单量 | - |
| `obj.list[][11]` | string | 店铺ID，模板不展示，导出 orderExport() 遍历 resDats[i].shopId 拼接 manageShopIds | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
