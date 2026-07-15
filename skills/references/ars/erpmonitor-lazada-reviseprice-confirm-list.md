# mbs ars erpmonitor-lazada-reviseprice-confirm-list

Lazada提价确认列表查询：Lazada提价页面「等待提价」/「提价完毕」两个页签共用的列表分页查询：按创建时间区间、店铺、提价结果、涨/降价、当前售价区间、新售价区间、新物流方式、创建人等条件筛选，返回提价确认记录列表及分页汇总字段。

## 用法

```bash
mbs ars erpmonitor-lazada-reviseprice-confirm-list --currPage <number> --pageSize <string> [--requestdatestart <string>] [--requestdateend <string>] [--revisestatus <string>] [--shopids <string>] [--originskupricemin <string>] [--originskupricemax <string>] [--newskupricemin <string>] [--newskupricemax <string>] [--expresstype <string>] [--tab <string>] [--upOrDown <string>] [--requestby <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/lazadaRevisepriceConfirm/lazadaRevisepriceConfirmList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | body | number | 是 | - | 当前页码(pData.currPage,搜索/切换页签重置为1,分页取当前页) |
| `pageSize` | pageSize | body | string | 是 | - | 每页条数(来源#selectPagesize/#selectPagesize2,枚举50/100/200,默认200) |
| `requestdatestart` | requestdatestart | body | string | 否 | - | 创建时间-起始(yyyy-MM-dd,来源#beginTime,默认当前日期前2天) |
| `requestdateend` | requestdateend | body | string | 否 | - | 创建时间-结束(yyyy-MM-dd,来源#endTimes,默认当天) |
| `revisestatus` | revisestatus | body | string | 否 | - | 提价结果状态(来源#selectStatus;1=等待提价;2=提价失败;3=提价成功;4=提价中;空=全部) |
| `shopids` | shopids | body | string | 否 | - | 店铺ID(多选逗号拼接,来源#checkShopId,最多100个店铺) |
| `originskupricemin` | originskupricemin | body | string | 否 | - | 当前售价-区间下限(来源#originskupricemin,number) |
| `originskupricemax` | originskupricemax | body | string | 否 | - | 当前售价-区间上限(来源#originskupricemax,number) |
| `newskupricemin` | newskupricemin | body | string | 否 | - | 新售价-区间下限(来源#newskupricemin,number) |
| `newskupricemax` | newskupricemax | body | string | 否 | - | 新售价-区间上限(来源#newskupricemax,number) |
| `expresstype` | expresstype | body | string | 否 | - | 新物流方式(来源#expresstype;Lazada专线/Lazada经济/Lazada国际程报价虚拟;空=全部) |
| `tab` | tab | body | string | 否 | - | 当前页签标识(来源sessionStorage.tab;等待提价/提价完毕) |
| `upOrDown` | upOrDown | body | string | 否 | - | 涨价/降价筛选(来源#selectupOrDown;up=涨价;down=降价;空=全部) |
| `requestby` | requestby | body | string | 否 | - | 创建人(来源#requestby,text) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 是否成功(true=渲染列表,false=alert(desc)) | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj` | object | 业务数据对象(为空时列表显示0条) | - |
| `obj.content[]` | array | 提价确认记录列表 | - |
| `obj.content[][0]` | string | 记录ID(复选框value,提价/删除操作按此传ids) | - |
| `obj.content[][1]` | number | 提价结果枚举。1=等待提价;2=提价失败;3=提价成功;4=提价中(前端转中文并按2/3着色,仅=1可勾选操作) | - |
| `obj.content[][2]` | string | SKU主图URL(为空时用默认图timg.jpg) | - |
| `obj.content[][3]` | string | ERP SKU编号(链接至SKUdetails.html?SKU=) | - |
| `obj.content[][4]` | string | 商品标题 | - |
| `obj.content[][5]` | string | 店铺名称 | - |
| `obj.content[][6]` | string | 店铺负责人 | - |
| `obj.content[][7]` | string | 商品链接(商品ID跳转地址) | - |
| `obj.content[][8]` | string | 商品ID(平台itemID) | - |
| `obj.content[][9]` | number | 当前售价(与currency拼接展示) | - |
| `obj.content[][10]` | string | 币种(拼接于各价格之后展示) | - |
| `obj.content[][11]` | number | 新售价(与currency拼接展示) | - |
| `obj.content[][12]` | number | 新折前价格(与currency拼接展示) | - |
| `obj.content[][13]` | string | 新物流方式(为空展示------) | - |
| `obj.content[][14]` | string | 提价响应信息(仅revisestatus==2提价失败时展示,前50字+悬浮全文) | - |
| `obj.content[][15]` | string | 创建人 | - |
| `obj.content[][16]` | string | 创建时间 | - |
| `obj.content[][17]` | string | 刊登时间(为空展示------) | - |
| `obj.content[][18]` | string | 提价时间(为空展示------) | - |
| `obj.toatalCount` | number | 满足条件的记录总数(前端写入#toatalCount/#toatalCount2,原文拼写toatalCount) | - |
| `obj.pageSize` | number | 每页条数 | - |
| `obj.totalPage` | number | 总页数(用于分页组件与首页任务汇总) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
