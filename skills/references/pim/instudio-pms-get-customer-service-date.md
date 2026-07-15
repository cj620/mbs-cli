<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-customer-service-date

查询客服绩效数据：查询客服绩效数据

## 用法

```bash
mbs pim instudio-pms-get-customer-service-date --sortedBy <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/customerServiceDateController/getCustomerServiceDate`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sortedBy` | sortedBy | query | string | 是 | - | Sorted人（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj[].sid` | string | 店铺ID（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].name` | string | 名称（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].createTimeStr` | string | 创建时间字符串（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].orderNum` | integer | 订单数量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonNum` | integer | BAD通用数量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonRate` | number | BAD通用比率（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonDeal` | integer | BAD通用处理（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonDealRate` | number | BAD通用处理比率（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonDelete` | integer | BAD通用删除（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonDeleteRate` | number | BAD通用删除比率（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonDealTime` | integer | BAD通用处理时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseNum` | integer | 工单数量（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseDealNumRate` | number | 工单处理数量比率（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseWon` | integer | 工单WON（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseWonRate` | number | 工单WON比率（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseLose` | integer | 工单LOSE（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseLosetRate` | number | 工单Loset比率（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseNeutral` | integer | 工单Neutral（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseNeutralRate` | number | 工单Neutral比率（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseDealTime` | integer | 工单处理时间（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].orderNumFontColor` | string | 订单数量字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonNumFontColor` | string | BAD通用数量字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonRateFontColor` | string | BAD通用比率字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonDealFontColor` | string | BAD通用处理字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonDealRateFontColor` | string | BAD通用处理比率字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonDeleteFontColor` | string | BAD通用删除字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonDeleteRateFontColor` | string | BAD通用删除比率字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonDealTimeFontColor` | string | BAD通用处理时间字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseNumFontColor` | string | 工单数量字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseDealNumRateFontColor` | string | 工单处理数量比率字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseWonFontColor` | string | 工单WON字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseWonRateFontColor` | string | 工单WON比率字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseLoseFontColor` | string | 工单LOSE字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseLosetRateFontColor` | string | 工单Loset比率字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseNeutralFontColor` | string | 工单Neutral字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseNeutralRateFontColor` | string | 工单Neutral比率字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseDealTimeFontColor` | string | 工单处理时间字体颜色（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].teamLeader` | string | 团队组长（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].headPortraitUrl` | string | HEADPortraitURL（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].region` | string | 地区（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].lengthOfEntry` | string | 长度Entry（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].badCommonDealTimeStr` | string | BAD通用处理时间字符串（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj[].caseDealTimeStr` | string | 工单处理时间字符串（字段名推断,语义待核实）。前端使用：否 | - |
| `content` | string | 内容。前端使用：是（取值，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
