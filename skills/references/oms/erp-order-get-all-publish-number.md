# mbs oms erp-order-get-all-publish-number

销售日刊登报表-获取全部刊登数量(上上周)：销售日刊登报表顶层查询：按周次标记(weekTag)返回各销售员一周每天新刊登listing数量、个人汇总数量及全员每日合计数量，并通过 flag 标识是否可向下钻取。weekTag=100 对应上上周页签。

## 用法

```bash
mbs oms erp-order-get-all-publish-number --weekTag <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/salesTarget/getAllPublishNumber`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `weekTag` | weekTag | query | string | 是 | - | 周次标记。001=本周;010=上周;100=上上周。本接口(上上周)固定传100。来源:页签点击事件写死,无输入控件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(常规包装,本接口前端未直接校验,待人工确认) | - |
| `desc` | string | 响应提示信息(常规包装,待人工确认) | - |
| `obj` | object | 业务数据对象(前端以 if(data.obj) 判定有数据) | - |
| `obj.weekList[]` | array | 销售员明细行列表(模板变量 list),逐行渲染一名销售/末级行的周刊登数据 | - |
| `obj.weekList[][0]` | string | 员工ID。用于行 data-id,并作为下钻(酋长/店铺)查询入参 | - |
| `obj.weekList[][1]` | string | 员工/销售姓名(展示于销售列、行 data-name) | - |
| `obj.weekList[][2]` | number | 层级标记(实际值来源 obj.flag,前端逐行赋值)。1=末级行(不展示展开箭头);其他值=可向下钻取 | - |
| `obj.weekList[][3]` | string | 平台名称(存在时以标签展示,可选) | - |
| `obj.weekList[][4]` | number | 该销售本周新刊登listing汇总数量(汇总列) | - |
| `obj.weekList[][5][]` | array | 一周每日数据列表(周一~周日,顺序渲染7列) | - |
| `obj.weekList[][5][]` | number | 当天新刊登listing数量(单位:条/个) | - |
| `obj.everyDayCount[]` | array | 全员每日合计数据列表(模板变量 weekcount,渲染表尾汇总行) | - |
| `obj.everyDayCount[]` | number | 当天全部销售新刊登listing合计数量 | - |
| `obj.flag` | number | 层级/可展开标记。1=末级不可展开;其他值=可继续下钻(酋长/店铺)。前端赋值给各 weekList 行的 flag 并传入 toggle 逻辑 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
