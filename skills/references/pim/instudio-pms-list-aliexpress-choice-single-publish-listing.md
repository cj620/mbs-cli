<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-list-aliexpress-choice-single-publish-listing

列表速卖通Choice单个刊登刊登：列表速卖通Choice单个刊登刊登(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-list-aliexpress-choice-single-publish-listing [--categoryId <string>] [--shopName <string>] [--erpSpu <string>] [--listId <string>] [--createBy <integer>] [--createByName <string>] [--shopsSplice <string>] [--publishStatus <integer>] [--createTimeStart <string>] [--createTimeEnd <string>] [--pageSize <integer>] [--currentPage <integer>] [--startIndex <integer>] [--listIdList <array<string>>] [--erpSpuList <array<string>>] [--autoSet <boolean>] [--erpSku <string>] [--profitRate <number>] [--targetShop <string>] [--skuList <array<string>>] [--copyId <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/aliexpressChoiceSinglePublishController/listAliexpressChoiceSinglePublishListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryId` | categoryId | body | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `shopName` | shopName | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `erpSpu` | erpSpu | body | string | 否 | - | ERPSPU（字段名推断,语义待核实） |
| `listId` | listId | body | string | 否 | - | 列表ID（字段名推断,语义待核实） |
| `createBy` | createBy | body | integer | 否 | - | 创建人（字段名推断,语义待核实） |
| `createByName` | createByName | body | string | 否 | - | 创建人名称（字段名推断,语义待核实） |
| `shopsSplice` | shopsSplice | body | string | 否 | - | 店铺列表Splice（字段名推断,语义待核实） |
| `publishStatus` | publishStatus | body | integer | 否 | - | 刊登状态（字段名推断,语义待核实） |
| `createTimeStart` | createTimeStart | body | string | 否 | - | 创建时间开始（字段名推断,语义待核实） |
| `createTimeEnd` | createTimeEnd | body | string | 否 | - | 创建时间结束（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页码（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `listIdList` | listIdList | body | array<string> | 否 | - | 列表ID列表（字段名推断,语义待核实） |
| `erpSpuList` | erpSpuList | body | array<string> | 否 | - | ERPSPU列表（字段名推断,语义待核实） |
| `autoSet` | autoSet | body | boolean | 否 | - | 自动SET（字段名推断,语义待核实） |
| `erpSku` | erpSku | body | string | 否 | - | ERPSKU（字段名推断,语义待核实） |
| `profitRate` | profitRate | body | number | 否 | - | 利润比率（字段名推断,语义待核实） |
| `targetShop` | targetShop | body | string | 否 | - | 目标店铺（字段名推断,语义待核实） |
| `skuList` | skuList | body | array<string> | 否 | - | SKU列表（字段名推断,语义待核实） |
| `copyId` | copyId | body | string | 否 | - | 复制ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.total` | integer | 总数（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.totalPages` | integer | 总数Pages（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.rows[]` | array | 行数据（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.success` | boolean | 成功（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.desc` | string | 描述（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.code` | integer | 编码（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.footer[]` | array | Footer（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.sort` | string | 排序（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.order` | string | 订单（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.publishStatus` | string | 刊登状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.listId` | string | 列表ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.checked` | string | Checked（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
