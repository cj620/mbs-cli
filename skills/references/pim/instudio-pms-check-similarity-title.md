<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-check-similarity-title

检查标题是否相似：检查标题是否相似

## 用法

```bash
mbs pim instudio-pms-check-similarity-title [--shopName <string>] [--site <string>] [--titles <array<object>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/amazon/checkSimilarityTitle`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `titles` | titles | body | array<object> | 否 | - | Titles（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（列表行字段，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（条件判断，行号待核实） | - |
| `obj.obj.spuLimitPrice` | string | SPU限制价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.minProfitRate` | string | 最小利润比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.saleNotes` | string | 销售Notes（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.checkNotes` | string | 校验Notes（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.descriptionInfo` | string | 描述信息（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.isSuccess` | string | 是否成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.phishingWords` | string | PhishingWords（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.success` | string | 成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.prop` | string | PROP（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.limitPrice` | string | 限制价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.currency` | string | 币种（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.item_name` | string | 条目名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj._WARNING_MESSAGES` | string | 警告Messages（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.item_sku` | string | 条目SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.join` | string | JOIN（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
