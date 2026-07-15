<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-wish-pbof-itemid-every-table-next-or-last

Wish产品PB活动明细-前/后45天翻页查询：PB(Product Boost)推广趋势页点击「前45天/后45天」翻页时，按产品ID、基准日期、方向(前/后)查询该时间段内的PB推广活动明细列表(活动名/起止时间/关键字/订单数/活动状态/花费)，渲染到下方明细表格。

## 用法

```bash
mbs oms erp-order-find-wish-pbof-itemid-every-table-next-or-last --productId <string> --date <string> --days <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishProductBoost/findWishPBOfItemidEveryTableNextOrLast`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `productId` | productId | body | string | 是 | - | 产品ID。来源浏览器URL查询参数 GetQueryString('productId')，PB推广趋势页当前产品的唯一标识 |
| `date` | date | body | string | 是 | - | 基准日期(yyyy-MM-dd)。来源 sessionStorage['times'](由前次接口 res.desc 写入)，作为前/后45天翻页的中心基准日 |
| `days` | days | body | string | 是 | - | 翻页方向。枚举：0=前45天(searchChart('0'))；1=后45天(searchChart('1'))；来源翻页按钮回调入参 num |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(框架统一字段，本页未直接读取) | - |
| `desc` | string | 响应描述/基准日期回写(同页翻页接口将其存入 sessionStorage['times'] 作下次基准日) | - |
| `obj[]` | array | PB活动明细列表(直接为数组，前端 var list=res.obj) | - |
| `obj[][0]` | string | 日期(活动所属日期，模板列「日期」，为空显示----) | - |
| `obj[][1]` | string | 活动名字(模板列「活动名字」，为空显示----) | - |
| `obj[][2]` | string | 活动开始时间(模板列「活动开始时间」，为空显示----) | - |
| `obj[][3]` | string | 活动结束时间(模板列「活动结束时时间」，为空显示----) | - |
| `obj[][4]` | string | 关键字(推广关键词，模板列「关键字」，为空显示----) | - |
| `obj[][5]` | number | 订单数(模板列「订单数」，为空显示----) | - |
| `obj[][6]` | string | 活动状态(模板列「活动状态」，为空显示----) | - |
| `obj[][7]` | number | 活动花费(模板列「活动花费」，详情弹窗以 ${{v.spend}} 展示美元，为空显示----) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
