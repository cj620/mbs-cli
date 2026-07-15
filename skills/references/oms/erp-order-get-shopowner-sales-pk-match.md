# mbs oms erp-order-get-shopowner-sales-pk-match

店长销售PK赛榜单查询：大屏轮播看板按平台查询店长销售额PK赛榜单：传入统计日期(time，前端取昨日 yyyyMMdd)与平台(platform)，返回各二/三级部门、店长在指定平台的上月/本月/预计本月/预计增长销售额及平台排名、公司排名，用于大屏自动滚动轮播展示。

## 用法

```bash
mbs oms erp-order-get-shopowner-sales-pk-match --time <string> --platform <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/pKmatchController/getShopownerSalesPkMatch`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `time` | time | body | string | 是 | - | 统计日期。格式 yyyyMMdd；前端取昨日日期(当前时间减24小时后格式化)。来源：JS计算，非控件 |
| `platform` | platform | body | string | 是 | - | 平台标识。枚举：ebay/Amazon/Shopee/aliexpress/Lazada。来源：页面URL查询参数 platform(GetQueryString('platform')) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一封装字段，本页未直接读取)(待人工确认) | - |
| `desc` | string | 响应提示信息(统一封装字段，本页未直接读取)(待人工确认) | - |
| `obj` | object | 业务数据对象(前端解构 let {obj}=await request.post(...)) | - |
| `obj.result[]` | array | 店长销售PK赛榜单列表(赋给表格 tabledata) | - |
| `obj.result[][0]` | string | 本次播报数据更新时间(页头显示 tabledata[0].times) | - |
| `obj.result[][1]` | string | 二级部门 | - |
| `obj.result[][2]` | string | 二级负责人 | - |
| `obj.result[][3]` | string | 三级部门 | - |
| `obj.result[][4]` | string | 三级部负责人 | - |
| `obj.result[][5]` | string | 姓名(店长) | - |
| `obj.result[][6]` | string | 平台 | - |
| `obj.result[][7]` | number | 上月销售额(模板列标题"7月销售额") | - |
| `obj.result[][8]` | number | 本月销售额(模板列标题"8月销售额") | - |
| `obj.result[][9]` | number | 预计本月销售额(模板列标题"预计8月销售额") | - |
| `obj.result[][10]` | number | 预计增长销售额 | - |
| `obj.result[][11]` | number | 预估平台排名(rank==1 时展示奖杯图标) | - |
| `obj.result[][12]` | number | 预估公司排名(rankPersonal==1 时展示奖杯图标) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
