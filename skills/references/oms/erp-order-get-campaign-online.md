# mbs oms erp-order-get-campaign-online

某日在线投放计划(活动)查询：Wish商品Boost(PB)趋势图中点击某一天的数据点时，按商品ID与日期查询当天正在进行的投放活动(Campaign)列表，弹窗展示活动名称、起止时间、关键字、订单数、活动状态、花费等明细；返回空数组时提示“此时间无投放计划在进行”。

## 用法

```bash
mbs oms erp-order-get-campaign-online --productId <string> --date <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishProductBoost/getCampaignOnline`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `productId` | productId | body | string | 是 | - | 商品ID。来源：浏览器地址栏查询参数 GetQueryString('productId')，标识要查询投放活动的商品 |
| `date` | date | body | string | 是 | - | 查询日期。来源：echarts 趋势图被点击数据点的 X 轴值 param.name(日期，格式 yyyy-MM-dd) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准封装,200=成功)。(待人工确认：本接口 success 回调未直接读取) | - |
| `desc` | string | 响应提示信息(标准封装)。(待人工确认：本接口 success 回调未直接读取) | - |
| `obj[]` | array | 当天正在进行的投放活动(Campaign)列表；空数组表示当天无投放计划 | - |
| `obj[][0]` | string | 活动名字 | - |
| `obj[][1]` | string | 活动开始时间 | - |
| `obj[][2]` | string | 活动结束时间 | - |
| `obj[][3]` | string | 关键字(投放关键词) | - |
| `obj[][4]` | number | 订单数(活动带来的销量/订单数) | - |
| `obj[][5]` | string | 活动状态 | - |
| `obj[][6]` | number | 活动花费(弹窗以 ${{v.spend}} 加美元符号展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
