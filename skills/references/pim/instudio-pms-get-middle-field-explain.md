# mbs pim instudio-pms-get-middle-field-explain

获取中台报表字段解释：获取中台报表字段解释

## 用法

```bash
mbs pim instudio-pms-get-middle-field-explain --type <string>
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/middlePanel/getMiddleFieldExplain`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `type` | type | query | string | 是 | - | 类型（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.qualifyTotalAmountNum` | string | Qualify总金额数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.qualifyTotalAmountRate` | string | Qualify总金额比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.qualifyfhmaoliNum` | string | Qualifyfhmaoli数量（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.qualifyfhmaoliRate` | string | Qualifyfhmaoli比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformManualMonth` | string | 平台手动月份（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformBatchMonth` | string | 平台批次月份（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.weekPublishNumSd` | string | 周刊登数量SD（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.chiefInfo` | string | 主管信息（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.weekPublishNumPl` | string | 周刊登数量PL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.field` | string | 字段（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopModel` | string | 店铺模型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.customer` | string | 客户（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.class` | string | 类（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rate` | string | 比率（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shop` | string | 店铺（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platform` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
