<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-supply-pool-list

供应商开发池列表：供应商开发池列表

## 用法

```bash
mbs pim instudio-pms-get-supply-pool-list [--searchType <string>] [--keyword <string>] [--keywordList <array<string>>] [--keyword2 <string>] [--category <string>] [--priceMin <integer>] [--priceMax <integer>] [--createBy <string>] [--createTime1 <string>] [--createTime2 <string>] [--status <integer>] [--isRepeat <integer>] [--isTort <integer>] [--orderBy <integer>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/supplyDevelopController/getSupplyPoolList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `searchType` | searchType | body | string | 否 | - | 搜索类型 商品名称：product_name_ch 新品编码：new_product_code |
| `keyword` | keyword | body | string | 否 | - | 关键词 |
| `keywordList` | keywordList | body | array<string> | 否 | - | 关键词列表（字段名推断,语义待核实） |
| `keyword2` | keyword2 | body | string | 否 | - | 关键词2 |
| `category` | category | body | string | 否 | - | 分类 |
| `priceMin` | priceMin | body | integer | 否 | - | 最低价 |
| `priceMax` | priceMax | body | integer | 否 | - | 最高价 |
| `createBy` | createBy | body | string | 否 | - | 创建人 |
| `createTime1` | createTime1 | body | string | 否 | - | 创建时间 |
| `createTime2` | createTime2 | body | string | 否 | - | 创建时间 |
| `status` | status | body | integer | 否 | - | 状态 0草稿,1待审核,2审核通过,3审核不通过,4已开发,已停产 |
| `isRepeat` | isRepeat | body | integer | 否 | - | 是否重复 1是 0否 |
| `isTort` | isTort | body | integer | 否 | - | 是否侵权 1是 0否 |
| `orderBy` | orderBy | body | integer | 否 | - | 排序 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | integer | 总数。前端使用：待核实 | - |
| `totalPages` | integer | 总数Pages。前端使用：待核实 | - |
| `rows[]` | array | 行数据。前端使用：待核实 | - |
| `success` | boolean | 成功。前端使用：待核实 | - |
| `desc` | string | 描述。前端使用：待核实 | - |
| `code` | integer | 编码。前端使用：待核实 | - |
| `footer[]` | array | Footer。前端使用：待核实 | - |
| `sort` | string | 排序。前端使用：待核实 | - |
| `order` | string | 订单。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
