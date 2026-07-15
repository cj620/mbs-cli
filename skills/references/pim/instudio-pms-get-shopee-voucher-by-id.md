# mbs pim instudio-pms-get-shopee-voucher-by-id

获取优惠券明细：获取优惠券明细

## 用法

```bash
mbs pim instudio-pms-get-shopee-voucher-by-id [--name <string>] [--code <string>] [--emps <array<string>>] [--shops <array<string>>] [--startTime <string>] [--endTime <string>] [--displayTime <string>] [--createBy <string>] [--voucherTemplateId <integer>] [--shopsSplice <string>] [--shopname <string>] [--voucherid <string>] [--startIndex <integer>] [--pageSize <integer>] [--currentPage <integer>] [--pt <string>] [--ids <array<integer>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/shopeeVoucherController/getShopeeVoucherById`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `name` | name | body | string | 否 | - | 名称（字段名推断,语义待核实） |
| `code` | code | body | string | 否 | - | 编码（字段名推断,语义待核实） |
| `emps` | emps | body | array<string> | 否 | - | EMPS（字段名推断,语义待核实） |
| `shops` | shops | body | array<string> | 否 | - | 店铺列表（字段名推断,语义待核实） |
| `startTime` | startTime | body | string | 否 | - | 开始时间（字段名推断,语义待核实） |
| `endTime` | endTime | body | string | 否 | - | 结束时间（字段名推断,语义待核实） |
| `displayTime` | displayTime | body | string | 否 | - | 展示时间（字段名推断,语义待核实） |
| `createBy` | createBy | body | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `voucherTemplateId` | voucherTemplateId | body | integer | 否 | - | 凭证模板ID（字段名推断,语义待核实） |
| `shopsSplice` | shopsSplice | body | string | 否 | - | 店铺列表Splice（字段名推断,语义待核实） |
| `shopname` | shopname | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `voucherid` | voucherid | body | string | 否 | - | Voucherid（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `pt` | pt | body | string | 否 | - | PT（字段名推断,语义待核实） |
| `ids` | ids | body | array<integer> | 否 | - | ID列表（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.voucher_id` | integer | 凭证ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.voucher_code` | string | 凭证编码（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.voucher_name` | string | 凭证名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.voucher_type` | integer | 凭证类型（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.reward_type` | integer | Reward类型（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.usage_quantity` | integer | Usage数量（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.current_usage` | integer | 当前Usage（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.start_time` | integer | 开始时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.end_time` | integer | 结束时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.is_admin` | boolean | 是否管理员（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.voucher_purpose` | integer | 凭证Purpose（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.display_channel_list[]` | array | 展示渠道列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.display_channel_list[]` | integer | - | - |
| `obj.obj.min_basket_price` | number | 最小Basket价格（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.percentage` | integer | Percentage（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.max_price` | number | 最大价格（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.discount_amount` | number | 折扣金额（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.cmt_voucher_status` | integer | CMT凭证状态（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.item_id_list[]` | array | 条目ID列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.item_id_list[]` | integer | - | - |
| `obj.obj.display_start_time` | integer | 展示开始时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
