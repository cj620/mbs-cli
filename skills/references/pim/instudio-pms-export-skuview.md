# mbs pim instudio-pms-export-skuview

导出海外仓任务列表：导出海外仓任务列表

## 用法

```bash
mbs pim instudio-pms-export-skuview --chiefName <string> --orderBy <string> --productProperty <string> --searchFinallyExressEndTime <string> --searchFinallyExressStartTime <string> --searchSku <string> --teamName <string> --skuAddStartTime <string> --skuAddEndTime <string> --oper4 <string> [--onTheWayStatus <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/hwcDevelopmentProject/exportSkuview`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `chiefName` | chiefName | query | string | 是 | - | 主管名称（字段名推断,语义待核实） |
| `orderBy` | orderBy | query | string | 是 | - | 排序（字段名推断,语义待核实） |
| `productProperty` | productProperty | query | string | 是 | - | 商品属性（字段名推断,语义待核实） |
| `searchFinallyExressEndTime` | searchFinallyExressEndTime | query | string | 是 | - | 搜索FinallyExress结束时间（字段名推断,语义待核实） |
| `searchFinallyExressStartTime` | searchFinallyExressStartTime | query | string | 是 | - | 搜索FinallyExress开始时间（字段名推断,语义待核实） |
| `searchSku` | searchSku | query | string | 是 | - | 搜索SKU（字段名推断,语义待核实） |
| `teamName` | teamName | query | string | 是 | - | 团队名称（字段名推断,语义待核实） |
| `skuAddStartTime` | skuAddStartTime | query | string | 是 | - | SKU新增开始时间（字段名推断,语义待核实） |
| `skuAddEndTime` | skuAddEndTime | query | string | 是 | - | SKU新增结束时间（字段名推断,语义待核实） |
| `oper4` | oper4 | query | string | 是 | - | 操作4（字段名推断,语义待核实） |
| `onTheWayStatus` | onTheWayStatus | query | string | 否 | - | WAY状态（字段名推断,语义待核实） |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
