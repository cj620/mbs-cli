<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-export-developer-mission

导出海外仓任务列表：导出海外仓任务列表

## 用法

```bash
mbs pim instudio-pms-export-developer-mission --categoryOne <number> --categoryTwo <number> --developType <string> --developerCon <string> --developerStatus <string> --flag <string> --orderBy <string> --productKeyword <string> --recommendSource <string> --salePriceUsdMax <number> --salePriceUsdMin <number> --sevenSaleCountMax <number> --sevenSaleCountMin <number> --totalSaleCountMax <number> --totalSaleCountMin <number> --bigChief <integer> --claimSaler <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/exportDeveloperMission`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryOne` | categoryOne | query | number | 是 | - | 类目单个（字段名推断,语义待核实） |
| `categoryTwo` | categoryTwo | query | number | 是 | - | 类目两个（字段名推断,语义待核实） |
| `developType` | developType | query | string | 是 | - | Develop类型（字段名推断,语义待核实） |
| `developerCon` | developerCon | query | string | 是 | - | 开发者CON（字段名推断,语义待核实） |
| `developerStatus` | developerStatus | query | string | 是 | - | 开发者状态（字段名推断,语义待核实） |
| `flag` | flag | query | string | 是 | - | 标志（字段名推断,语义待核实） |
| `orderBy` | orderBy | query | string | 是 | - | 排序（字段名推断,语义待核实） |
| `productKeyword` | productKeyword | query | string | 是 | - | 商品关键词（字段名推断,语义待核实） |
| `recommendSource` | recommendSource | query | string | 是 | - | Recommend来源（字段名推断,语义待核实） |
| `salePriceUsdMax` | salePriceUsdMax | query | number | 是 | - | 销售价格美元最大（字段名推断,语义待核实） |
| `salePriceUsdMin` | salePriceUsdMin | query | number | 是 | - | 销售价格美元最小（字段名推断,语义待核实） |
| `sevenSaleCountMax` | sevenSaleCountMax | query | number | 是 | - | 7天销售数量最大（字段名推断,语义待核实） |
| `sevenSaleCountMin` | sevenSaleCountMin | query | number | 是 | - | 7天销售数量最小（字段名推断,语义待核实） |
| `totalSaleCountMax` | totalSaleCountMax | query | number | 是 | - | 总数销售数量最大（字段名推断,语义待核实） |
| `totalSaleCountMin` | totalSaleCountMin | query | number | 是 | - | 总数销售数量最小（字段名推断,语义待核实） |
| `bigChief` | bigChief | query | integer | 是 | - | BIG主管（字段名推断,语义待核实） |
| `claimSaler` | claimSaler | query | string | 是 | - | ClaimSaler（字段名推断,语义待核实） |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
