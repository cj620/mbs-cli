<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-performance

ebay政策表现：ebay政策表现

## 用法

```bash
mbs pim instudio-pms-get-performance --shopName <string>
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/middlePanel/ebay/policy/performance/get`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 是 | - | 店铺名称（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj.shopId` | string | 店铺ID。前端使用：否 | - |
| `obj.obj.shopName` | string | 店铺名称。前端使用：否 | - |
| `obj.obj.userName` | string | 用户名。前端使用：否 | - |
| `obj.obj.defectPerformance` | string | 不良交易表现。前端使用：否 | - |
| `obj.obj.categoryManagement` | string | 品类表现。前端使用：否 | - |
| `obj.obj.complianceZone` | string | 合规中心。前端使用：否 | - |
| `obj.obj.logisticsStandard` | string | 物流服务标准。前端使用：否 | - |
| `obj.obj.createDate` | string | 抓取时间。前端使用：否 | - |
| `obj.obj.isDanger` | string | 是否Danger（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.label` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showValue` | string | 展示值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showPercent` | string | 展示百分比（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.notificationId` | string | 通知ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.subject` | string | 科目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.created` | string | 创建（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.ossPath` | string | OSS路径（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.show` | string | 展示（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platform` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopHomePageUrl` | string | 店铺HOME页码URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.DANGER_FLAGS` | string | DangerFlags（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
