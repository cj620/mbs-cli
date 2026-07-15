# mbs ars erpmonitor-fanno-reviseprice-confirm-list

fanno提价列表查询：fanno提价页面「等待提价 / 提价完毕」两个标签页的列表分页查询：按创建时间、店铺、提价结果、涨价/降价、当前售价区间、新售价区间、创建人、itemid、sku 等条件筛选，返回提价 listing 列表及店铺、负责人、当前售价、新售价、新折前价格、站点、提价结果、刊登/提价时间等字段。

## 用法

```bash
mbs ars erpmonitor-fanno-reviseprice-confirm-list --currPage <number> --pageSize <string> [--requestdatestart <string>] [--requestdateend <string>] [--revisestatus <string>] [--shopids <string>] [--originskupricemin <string>] [--originskupricemax <string>] [--newskupricemin <string>] [--newskupricemax <string>] [--expresstype <string>] [--tab <string>] [--upOrDown <string>] [--requestby <string>] [--itemid <string>] [--erpsku <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/fannoRevisepriceConfirm/fannoRevisepriceConfirmList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | body | number | 是 | - | 当前页码(pData.currPage,搜索/切换页大小时重置为1,分页回调更新) |
| `pageSize` | pageSize | body | string | 是 | - | 每页条数。来源 #selectPagesize/#selectPagesize2,枚举:50/100/200(默认200) |
| `requestdatestart` | requestdatestart | body | string | 否 | - | 创建时间-起始(来源 #beginTime 日期控件,默认当天前2天) |
| `requestdateend` | requestdateend | body | string | 否 | - | 创建时间-结束(来源 #endTimes 日期控件,默认当天) |
| `revisestatus` | revisestatus | body | string | 否 | - | 提价结果。来源 #selectStatus 下拉。枚举:1=等待提价;2=提价失败;3=提价成功;4=提价中 |
| `shopids` | shopids | body | string | 否 | - | 店铺ID(来源隐藏域 #checkShopId,多店铺逗号拼接,最多100个) |
| `originskupricemin` | originskupricemin | body | string | 否 | - | 当前售价-起始范围(来源 #originskupricemin,数值输入) |
| `originskupricemax` | originskupricemax | body | string | 否 | - | 当前售价-结束范围(来源 #originskupricemax,数值输入) |
| `newskupricemin` | newskupricemin | body | string | 否 | - | 新售价-起始范围(来源 #newskupricemin,数值输入) |
| `newskupricemax` | newskupricemax | body | string | 否 | - | 新售价-结束范围(来源 #newskupricemax,数值输入) |
| `expresstype` | expresstype | body | string | 否 | - | 物流/快递类型(仅 getList2()/提价完毕 tab 传,来源 #expresstype;当前页面无对应控件,取值为 undefined/空)(待人工确认) |
| `tab` | tab | body | string | 否 | - | 当前标签页。来源 sessionStorage tab。枚举:等待提价 / 提价完毕 |
| `upOrDown` | upOrDown | body | string | 否 | - | 涨价/降价。来源 #selectupOrDown 下拉。枚举:up=涨价;down=降价 |
| `requestby` | requestby | body | string | 否 | - | 创建人(来源 #requestby 文本输入) |
| `itemid` | itemid | body | string | 否 | - | 商品itemid(来源 #itemid 文本输入) |
| `erpsku` | erpsku | body | string | 否 | - | ERP SKU(来源 #erpsku 文本输入) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 请求是否成功(前端据此判断,false 时 alert(desc)) | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.content[]` | array | 提价 listing 列表 | - |
| `obj.content[][0]` | string | 提价记录ID(行勾选框 value,提价/删除listing 时上送) | - |
| `obj.content[][1]` | number | 提价状态枚举。1=等待提价(可勾选);2=提价失败(红字,展示reviseresponse);3=提价成功(绿字);4=提价中 | - |
| `obj.content[][2]` | string | SKU主图URL(为空时显示占位图) | - |
| `obj.content[][3]` | string | ERP SKU(链接至 /product/SKUdetails.html?SKU=) | - |
| `obj.content[][4]` | string | 商品标题 | - |
| `obj.content[][5]` | string | 店铺名称 | - |
| `obj.content[][6]` | string | 店铺负责人(员工名) | - |
| `obj.content[][7]` | string | 商品/listing 跳转链接(itemid 外链) | - |
| `obj.content[][8]` | string | 商品ID(平台 listing itemid) | - |
| `obj.content[][9]` | number | 当前售价(与 currency 拼接展示) | - |
| `obj.content[][10]` | string | 货币符号/币种(拼接于各价格之后) | - |
| `obj.content[][11]` | number | 新售价(与 currency 拼接展示) | - |
| `obj.content[][12]` | number | 新折前价格(与 currency 拼接展示) | - |
| `obj.content[][13]` | string | 站点(站点编码/类型) | - |
| `obj.content[][14]` | string | 提价响应信息(revisestatus=2 失败时展示,截取前50字符,悬浮显示全文) | - |
| `obj.content[][15]` | string | 创建人 | - |
| `obj.content[][16]` | string | 创建时间 | - |
| `obj.content[][17]` | string | 刊登时间(为空展示 ------) | - |
| `obj.content[][18]` | string | 提价时间(为空展示 ------) | - |
| `obj.toatalCount` | number | 满足条件的总条数(前端写入 #toatalCount/#toatalCount2) | - |
| `obj.pageSize` | number | 每页条数 | - |
| `obj.totalPage` | number | 总页数(前端据此构建分页组件) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
