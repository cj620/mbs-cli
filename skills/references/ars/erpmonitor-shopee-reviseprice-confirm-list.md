<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erpmonitor-shopee-reviseprice-confirm-list

Shopee提价确认列表查询：Shopee提价页「等待提价 / 提价完毕」两个 Tab 的列表分页查询：按创建时间、店铺、提价结果、价格涨跌、当前售价区间、新售价区间、创建人等条件分页查询提价确认记录，返回主记录及其提价明细子列表(confirmList)。getList()/getList2() 复用同一后端接口。

## 用法

```bash
mbs ars erpmonitor-shopee-reviseprice-confirm-list --currPage <number> --pageSize <string> [--requestdatestart <string>] [--requestdateend <string>] [--revisestatus <string>] [--shopids <string>] [--originskupricemin <string>] [--originskupricemax <string>] [--newskupricemin <string>] [--newskupricemax <string>] [--tab <string>] [--upOrDown <string>] [--requestby <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/shopeeRevisepriceConfirmList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | body | number | 是 | - | 当前页码(pData.currPage,搜索/切Tab重置为1) |
| `pageSize` | pageSize | body | string | 是 | - | 每页条数(#selectPagesize/#selectPagesize2,枚举50/100/200,默认200) |
| `requestdatestart` | requestdatestart | body | string | 否 | - | 创建时间-起始(#beginTime,yyyy-MM-dd,默认前2天) |
| `requestdateend` | requestdateend | body | string | 否 | - | 创建时间-结束(#endTimes,yyyy-MM-dd,默认当天) |
| `revisestatus` | revisestatus | body | string | 否 | - | 提价结果/状态(#selectStatus)。1=等待提价;2=提价失败;3=提价成功;4=提价中;5=部分成功(空=全部) |
| `shopids` | shopids | body | string | 否 | - | 店铺ID(#checkShopId,多选逗号拼接) |
| `originskupricemin` | originskupricemin | body | string | 否 | - | 当前售价-最小值(#originskupricemin) |
| `originskupricemax` | originskupricemax | body | string | 否 | - | 当前售价-最大值(#originskupricemax) |
| `newskupricemin` | newskupricemin | body | string | 否 | - | 新售价-最小值(#newskupricemin) |
| `newskupricemax` | newskupricemax | body | string | 否 | - | 新售价-最大值(#newskupricemax) |
| `tab` | tab | body | string | 否 | - | 当前标签页(sessionStorage['tab']:等待提价/提价完毕) |
| `upOrDown` | upOrDown | body | string | 否 | - | 价格涨跌(#selectupOrDown)。1=涨价;2=不变;3=降价(空=全部) |
| `requestby` | requestby | body | string | 否 | - | 创建人(#requestby) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 是否成功(前端 if(r.success) 判定) | - |
| `desc` | string | 响应提示信息(失败 alert(r.desc)) | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.content[]` | array | 提价确认主记录列表(pData.items) | - |
| `obj.content[][0]` | string | 记录唯一ID(复选框value,提价/更新状态传参spuIds) | - |
| `obj.content[][1][]` | array | 提价明细子记录列表(行展开子表,data-confirmlist) | - |
| `obj.content[][1][][0]` | string | 明细确认记录ID(提交提价时收集confirmIds) | - |
| `obj.content[][1][][1]` | string | 变体ID(子表modulId列) | - |
| `obj.content[][1][][2]` | string | ERP SKU | - |
| `obj.content[][1][][3]` | number | 当前售价(明细) | - |
| `obj.content[][1][][4]` | number | 新售价(明细) | - |
| `obj.content[][1][][5]` | number | 价格涨幅(<0绿色,否则红色) | - |
| `obj.content[][1][][6]` | number | 折前价格(明细) | - |
| `obj.content[][1][][7]` | number | 提价状态。1=等待提价;2=提价失败;3=提价成功;4=提价中;5=部分成功 | - |
| `obj.content[][1][][8]` | string | 提价响应/失败信息(status=2时hover展示前50字) | - |
| `obj.content[][1][][9]` | string | 提价时间(空显示------) | - |
| `obj.content[][2]` | number | 提价状态。1=等待提价;2=提价失败;3=提价成功;4=提价中;5=部分成功(=1才可勾选) | - |
| `obj.content[][3]` | string | SKU主图URL(无则默认占位图) | - |
| `obj.content[][4]` | string | ERP SPU(跳转SPUdetails) | - |
| `obj.content[][5]` | string | ERP SKU(跳转SKUdetails) | - |
| `obj.content[][6]` | string | 商品标题 | - |
| `obj.content[][7]` | string | 店铺名 | - |
| `obj.content[][8]` | string | 负责人 | - |
| `obj.content[][9]` | string | 平台商品链接URL | - |
| `obj.content[][10]` | string | 平台商品ID(itemId) | - |
| `obj.content[][11]` | number | 当前售价-最小值(区间展示) | - |
| `obj.content[][12]` | number | 当前售价-最大值(区间展示) | - |
| `obj.content[][13]` | number | 新售价-最小值(区间展示) | - |
| `obj.content[][14]` | number | 新售价-最大值(区间展示) | - |
| `obj.content[][15]` | number | 价格涨幅-最小值(<0绿色,否则红色) | - |
| `obj.content[][16]` | number | 价格涨幅-最大值(<0绿色,否则红色) | - |
| `obj.content[][17]` | string | 币种 | - |
| `obj.content[][18]` | number | 折前价格-最小值(区间展示) | - |
| `obj.content[][19]` | number | 折前价格-最大值(区间展示) | - |
| `obj.content[][20]` | string | 提价响应/失败信息(status=2时hover展示前50字) | - |
| `obj.content[][21]` | string | 创建人 | - |
| `obj.content[][22]` | string | 创建时间 | - |
| `obj.content[][23]` | string | 刊登时间(空显示------) | - |
| `obj.content[][24]` | string | 提价时间(空显示------) | - |
| `obj.toatalCount` | number | 满足条件的总条数(pData.toatalCount,原字段拼写toatalCount) | - |
| `obj.pageSize` | number | 每页条数(pData.pageSize) | - |
| `obj.totalPage` | number | 总页数(pData.totalPage,驱动分页控件) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
