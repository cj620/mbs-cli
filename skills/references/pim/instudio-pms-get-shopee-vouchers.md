<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-shopee-vouchers

获取优惠券列表：获取优惠券列表

## 用法

```bash
mbs pim instudio-pms-get-shopee-vouchers [--name <string>] [--code <string>] [--emps <array<string>>] [--shops <array<string>>] [--startTime <string>] [--endTime <string>] [--displayTime <string>] [--createBy <string>] [--voucherTemplateId <integer>] [--shopsSplice <string>] [--shopname <string>] [--voucherid <string>] [--startIndex <integer>] [--pageSize <integer>] [--currentPage <integer>] [--pt <string>] [--ids <array<integer>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/shopeeVoucherController/getShopeeVouchers`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

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
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].shopname` | string | 店铺名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].voucherid` | string | Voucherid（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].json` | string | JSON（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
