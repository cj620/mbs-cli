<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-customer-list

客户(CRM)列表查询：CRM 客户列表分页查询：支持按客户名称模糊、所属销售、订单数量区间、订单总金额区间、累计毛利额区间、是否有跟进日志、最新跟进日志时间区间、是否已录入客户信息等条件筛选，并按下单时间/订单数量/订单总金额/客单价/毛利率/累计毛利额排序，返回客户列表及其订单、毛利、退款、跟进等汇总字段。

## 用法

```bash
mbs scm erp-manufacture-customer-list [--search <string>] [--sales <array>] [--isEdit <string>] [--minOrderNum <string>] [--maxOrderNum <string>] [--minOrderAmount <string>] [--maxOrderAmount <string>] [--minProfitAmount <string>] [--maxProfitAmount <string>] [--isHaveTaskLog <string>] [--updateLogDateStart <string>] [--updateLogDateEnd <string>] [--orderBy <string>] --pageSize <string> --page <number>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/customer/customerList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `search` | search | body | string | 否 | - | 客户名称模糊搜索关键词(来源输入框 #searchName) |
| `sales` | sales | body | array | 否 | - | 所属销售(来源输入框 #saleNames,有值时[值],无值时空数组[]) |
| `isEdit` | isEdit | body | string | 否 | - | 是否已录入客户信息(来源复选框 #isEdit,勾选=1,未勾选='') |
| `minOrderNum` | minOrderNum | body | string | 否 | - | 订单数量-起始(来源数字框 #minOrderNum) |
| `maxOrderNum` | maxOrderNum | body | string | 否 | - | 订单数量-结束(来源数字框 #maxOrderNum) |
| `minOrderAmount` | minOrderAmount | body | string | 否 | - | 订单总金额-起始(来源数字框 #minOrderAmount) |
| `maxOrderAmount` | maxOrderAmount | body | string | 否 | - | 订单总金额-结束(来源数字框 #maxOrderAmount) |
| `minProfitAmount` | minProfitAmount | body | string | 否 | - | 累计毛利额-起始(来源数字框 #minProfitAmount) |
| `maxProfitAmount` | maxProfitAmount | body | string | 否 | - | 累计毛利额-结束(来源数字框 #maxProfitAmount) |
| `isHaveTaskLog` | isHaveTaskLog | body | string | 否 | - | 是否有跟进日志(来源下拉 #isHaveTaskLog,''=请选择;0=无跟进日志;1=有跟进日志) |
| `updateLogDateStart` | updateLogDateStart | body | string | 否 | - | 最新跟进日志时间-起始(来源日期框 #updateLogDateStart,yyyy-MM-dd) |
| `updateLogDateEnd` | updateLogDateEnd | body | string | 否 | - | 最新跟进日志时间-结束(来源日期框 #updateLogDateEnd,yyyy-MM-dd) |
| `orderBy` | orderBy | body | string | 否 | - | 排序方式(来源下拉 #orderBy,1=下单时间倒序;2=订单数量降序;3=订单总金额降序;4=客单价降序;5=毛利率降序;6=累计毛利额降序) |
| `pageSize` | pageSize | body | string | 是 | - | 每页条数(来源下拉 #selectPagesize,10/50/100) |
| `page` | page | body | number | 是 | - | 当前页码(search()固定传1;分页回调传 api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(信封字段) | - |
| `desc` | string | 响应提示信息(信封字段) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的客户总数(前端写入 #count 展示) | - |
| `obj.countPage` | number | 总页数(前端传入 findProductDetails() 作为分页 pageCount) | - |
| `obj.result[]` | array | 客户列表 | - |
| `obj.result[][0]` | string | 客户记录序号ID(用于跳转客户详情、批量选择 checkbox 值) | - |
| `obj.result[][1]` | string | 客户姓名(渲染为客户详情链接文本) | - |
| `obj.result[][2]` | string | 所属部门;值为'总经办'时显示批量选择列与'批量修改所属销售'按钮,并可编辑所属销售 | - |
| `obj.result[][3]` | number | 是否已录入客户信息(1=已录入,显示联系人图标) | - |
| `obj.result[][4]` | string | 主买产品主图URL(加载失败回退默认图 timg.jpg) | - |
| `obj.result[][5]` | string | 主买产品SKU(渲染为SKU详情链接) | - |
| `obj.result[][6]` | string | 主买品类 | - |
| `obj.result[][7]` | string | 集中购买店铺 | - |
| `obj.result[][8]` | number | 订单数量 | - |
| `obj.result[][9]` | number | 订单总金额 | - |
| `obj.result[][10]` | number | 客单价 | - |
| `obj.result[][11]` | number | 毛利率(前端以 值% 形式展示) | - |
| `obj.result[][12]` | number | 累计毛利额 | - |
| `obj.result[][13]` | number | 复购间隔(天) | - |
| `obj.result[][14]` | number | 退款次数 | - |
| `obj.result[][15]` | number | 退款金额 | - |
| `obj.result[][16]` | string | 最近下单时间 | - |
| `obj.result[][17]` | string | 所属销售(总经办行可点击编辑) | - |
| `obj.result[][18]` | object | 最新跟进记录对象(可能为空,空时不渲染) | - |
| `obj.result[][18].content` | string | 最新跟进记录内容 | - |
| `obj.result[][18].createBy` | string | 跟进记录创建人 | - |
| `obj.result[][18].createDate` | string | 跟进记录创建时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
