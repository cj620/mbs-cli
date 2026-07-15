# mbs ars erpmonitor-tiktok-reviseprice-confirm-list

TikTok提价确认列表查询：TikTok提价确认列表分页查询：按提价申请时间、提价状态、店铺、原/新SKU价格区间、SPU近7天订单数区间、平台Item ID、页签、提价/降价、申请人等条件分页查询提价确认单，返回SPU行及其SKU提价明细(confirmList)。

## 用法

```bash
mbs ars erpmonitor-tiktok-reviseprice-confirm-list --currPage <number> --pageSize <string> [--requestdatestart <string>] [--requestdateend <string>] [--revisestatus <string>] [--shopids <string>] [--originskupricemin <string>] [--originskupricemax <string>] [--newskupricemin <string>] [--newskupricemax <string>] [--spuSevenOrdernumMin <string>] [--spuSevenOrdernumMax <string>] [--itemId <string>] [--tab <string>] [--upOrDown <string>] [--requestby <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/tiktokRevisepriceConfirm/tiktokRevisepriceConfirmList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | body | number | 是 | - | 当前页码(初始为1；分页回调赋值) |
| `pageSize` | pageSize | body | string | 是 | - | 每页条数(下拉选择) |
| `requestdatestart` | requestdatestart | body | string | 否 | - | 提价申请时间-起始(默认当前日期前2天,格式 YYYY-MM-DD) |
| `requestdateend` | requestdateend | body | string | 否 | - | 提价申请时间-结束(默认当前日期,格式 YYYY-MM-DD) |
| `revisestatus` | revisestatus | body | string | 否 | - | 提价状态。1=等待提价;2=提价失败;3=提价成功;4=提价中;5=部分成功 |
| `shopids` | shopids | body | string | 否 | - | 店铺ID列表(多选店铺勾选后逗号拼接) |
| `originskupricemin` | originskupricemin | body | string | 否 | - | 原SKU价格-最小 |
| `originskupricemax` | originskupricemax | body | string | 否 | - | 原SKU价格-最大 |
| `newskupricemin` | newskupricemin | body | string | 否 | - | 新SKU价格-最小 |
| `newskupricemax` | newskupricemax | body | string | 否 | - | 新SKU价格-最大 |
| `spuSevenOrdernumMin` | spuSevenOrdernumMin | body | string | 否 | - | SPU近7天订单数-最小 |
| `spuSevenOrdernumMax` | spuSevenOrdernumMax | body | string | 否 | - | SPU近7天订单数-最大 |
| `itemId` | itemId | body | string | 否 | - | 平台商品Item ID(去首尾空格) |
| `tab` | tab | body | string | 否 | - | 页签标识。等待提价 / 提价完毕 |
| `upOrDown` | upOrDown | body | string | 否 | - | 提价/降价筛选(下拉选择) |
| `requestby` | requestby | body | string | 否 | - | 申请人 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 是否成功(前端据此判断,true=成功) | - |
| `desc` | string | 响应提示信息(失败时 alert) | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.content[]` | array | 提价确认单列表(SPU提价行) | - |
| `obj.content[][0]` | string | SPU提价行唯一标识(勾选框 value,提交时作为 spuIds) | - |
| `obj.content[][1]` | string | 提价状态。1=等待提价;2=提价失败;3=提价成功;4=提价中;5=部分成功(仅1/2/5可勾选) | - |
| `obj.content[][2][]` | array | SKU提价明细列表(展开渲染子表,提交时取各明细 id 作为 confirmIds) | - |
| `obj.content[][2][][0]` | string | SKU提价明细ID(提交提价/自动提价时收集为 confirmIds) | - |
| `obj.content[][2][][1]` | string | 变体ID(modulId,子表首列) | - |
| `obj.content[][2][][2]` | string | ERP SKU编号(链接至SKU详情页) | - |
| `obj.content[][2][][3]` | number | 当前售价(原SKU售价) | - |
| `obj.content[][2][][4]` | number | 新售价(新SKU售价) | - |
| `obj.content[][2][][5]` | number | 涨幅(<0绿色,≥0红色) | - |
| `obj.content[][3]` | string | SKU主图URL(空则展示占位图) | - |
| `obj.content[][4]` | string | ERP SPU编号(链接至SPU详情页) | - |
| `obj.content[][5]` | string | ERP SKU编号(链接至SKU详情页) | - |
| `obj.content[][6]` | string | 商品标题 | - |
| `obj.content[][7]` | string | 店铺名称 | - |
| `obj.content[][8]` | string | 员工(负责人)姓名 | - |
| `obj.content[][9]` | string | 平台商品链接(itemid 跳转地址) | - |
| `obj.content[][10]` | string | 平台商品Item ID | - |
| `obj.content[][11]` | number | SPU近7天订单数(null时展示 '---') | - |
| `obj.content[][12]` | number | 原SKU价格-最小(区间展示) | - |
| `obj.content[][13]` | number | 原SKU价格-最大(区间展示) | - |
| `obj.content[][14]` | number | 新SKU价格-最小(区间展示) | - |
| `obj.content[][15]` | number | 新SKU价格-最大(区间展示) | - |
| `obj.content[][16]` | number | 提价涨幅-最小(<0绿色,≥0红色) | - |
| `obj.content[][17]` | number | 提价涨幅-最大(<0绿色,≥0红色) | - |
| `obj.content[][18]` | string | 币种 | - |
| `obj.content[][19]` | number | 折前价格-最小(区间展示) | - |
| `obj.content[][20]` | number | 折前价格-最大(区间展示) | - |
| `obj.content[][21]` | string | 提价响应内容(状态=2失败时展示,超50字截断+悬浮全文) | - |
| `obj.content[][22]` | string | 提价消息(状态=2失败时展示,超50字截断+悬浮全文) | - |
| `obj.content[][23]` | string | 提价申请人 | - |
| `obj.content[][24]` | string | 提价申请时间 | - |
| `obj.content[][25]` | string | 刊登时间(空则展示 '------') | - |
| `obj.content[][26]` | string | 提价时间(空则展示 '------') | - |
| `obj.toatalCount` | number | 满足条件的总记录数(原文拼写) | - |
| `obj.pageSize` | number | 每页条数 | - |
| `obj.totalPage` | number | 总页数(前端据此生成分页) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
