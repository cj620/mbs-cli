<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-ebay-reviseprice-confirm-list

ebay提价确认列表查询：ebay提价页列表分页查询：按创建时间、店铺、提价结果、涨/降价、当前售价区间、新售价区间、当前/新物流方式、创建人、itemId等条件筛选，返回提价确认记录列表。等待提价与提价完毕两个Tab共用同一接口。

## 用法

```bash
mbs ars erpmonitor-ebay-reviseprice-confirm-list --currPage <number> --pageSize <string> [--requestdatestart <string>] [--requestdateend <string>] [--revisestatus <string>] [--shopid <string>] [--originskupricemin <string>] [--originskupricemax <string>] [--newskupricemin <string>] [--newskupricemax <string>] [--originexpresstype <string>] [--expresstype <string>] [--tab <string>] [--upOrDown <string>] [--requestby <string>] [--itemIds <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/ebayRevisepriceConfirm/ebayRevisepriceConfirmList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | body | number | 是 | - | 当前页码。来源 pData.currPage(初始1，分页回调更新，search()重置为1) |
| `pageSize` | pageSize | body | string | 是 | - | 每页条数。来源下拉框 #selectPagesize/#selectPagesize2，枚举 50/100/200/500，默认200 |
| `requestdatestart` | requestdatestart | body | string | 否 | - | 创建时间-起始(yyyy-MM-dd)。来源日期框 #beginTime，默认当前日期前2天 |
| `requestdateend` | requestdateend | body | string | 否 | - | 创建时间-结束(yyyy-MM-dd)。来源日期框 #endTimes，默认当天 |
| `revisestatus` | revisestatus | body | string | 否 | - | 提价结果状态。来源下拉框 #selectStatus，枚举 1=等待提价;2=提价失败;3=提价成功;4=提价中(空=全部) |
| `shopid` | shopid | body | string | 否 | - | 店铺ID。来源下拉框 #selectShop(选项由 findShops 接口填充，value=shopId) |
| `originskupricemin` | originskupricemin | body | string | 否 | - | 当前售价-区间最小值。来源数字框 #originskupricemin |
| `originskupricemax` | originskupricemax | body | string | 否 | - | 当前售价-区间最大值。来源数字框 #originskupricemax |
| `newskupricemin` | newskupricemin | body | string | 否 | - | 新售价-区间最小值。来源数字框 #newskupricemin |
| `newskupricemax` | newskupricemax | body | string | 否 | - | 新售价-区间最大值。来源数字框 #newskupricemax |
| `originexpresstype` | originexpresstype | body | string | 否 | - | 当前物流方式。来源文本框 #originexpresstype |
| `expresstype` | expresstype | body | string | 否 | - | 新物流方式。来源文本框 #expresstype |
| `tab` | tab | body | string | 否 | - | 当前Tab标识。来源 sessionStorage.tab，枚举 等待提价/提价完毕 |
| `upOrDown` | upOrDown | body | string | 否 | - | 涨价/降价筛选。来源下拉框 #selectupOrDown，枚举 up=涨价;down=降价(空=全部) |
| `requestby` | requestby | body | string | 否 | - | 创建人。来源文本框 #requestby |
| `itemIds` | itemIds | body | string | 否 | - | 商品itemId(多个用逗号分割，不支持换行)。来源文本框 #itemIds |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 请求是否成功，true 时才渲染列表 | - |
| `obj` | object | 业务数据对象(分页结果)，为空时列表置0 | - |
| `obj.content[]` | array | 提价确认记录列表 | - |
| `obj.content[][0]` | string | 记录ID(勾选框 value，用于提价/删除操作) | - |
| `obj.content[][1]` | number | 提价状态枚举。1=等待提价;2=提价失败;3=提价成功;4=提价中(前端经 pData.revisestatus 映射中文；=1可勾选，=2标红并展示失败信息，=3标绿) | - |
| `obj.content[][2]` | string | SKU主图URL(为空时显示默认占位图) | - |
| `obj.content[][3]` | string | ERP SKU编号(链接至 /product/SKUdetails.html?SKU=) | - |
| `obj.content[][4]` | string | 商品标题 | - |
| `obj.content[][5]` | string | 店铺名称 | - |
| `obj.content[][6]` | string | 负责人 | - |
| `obj.content[][7]` | string | 商品ID(ebay itemId，链接至 //www.ebay.de/itm/) | - |
| `obj.content[][8]` | number | 当前售价(与 currency 拼接展示) | - |
| `obj.content[][9]` | string | 货币符号/代码(拼接于当前售价、新售价之后) | - |
| `obj.content[][10]` | number | 新售价(与 currency 拼接展示) | - |
| `obj.content[][11]` | string | 旧(当前)物流方式(为空显示 ------) | - |
| `obj.content[][12]` | string | 新物流方式(为空显示 ------) | - |
| `obj.content[][13]` | string | 提价失败响应信息(仅 revisestatus==2 时展示，悬浮显示全文，列表截取前50字符) | - |
| `obj.content[][14]` | string | 创建人 | - |
| `obj.content[][15]` | string | 创建时间 | - |
| `obj.content[][16]` | string | 刊登时间(为空显示 ------) | - |
| `obj.content[][17]` | string | 提价时间(为空显示 ------) | - |
| `obj.toatalCount` | number | 满足条件的总记录数(前端显示「共N条」，原字段拼写即 toatalCount) | - |
| `obj.pageSize` | number | 每页条数 | - |
| `obj.totalPage` | number | 总页数(传入分页控件 pageCount) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
