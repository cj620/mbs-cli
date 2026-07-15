<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-export-project

导出项目：导出项目(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-export-project [--platformId <string>] [--platformProductId <string>] [--categoryId <string>] [--parentCategoryId <string>] [--commitType <string>] [--productUrl <string>] [--createdBy <string>] [--createdOn <string>] [--platformName <string>] [--classificationId <string>] [--classificationName <string>] [--employeeName <string>] [--createdByName <string>] [--startDate <string>] [--endDate <string>] [--userId <string>] [--platformIdUser <string>] [--teamIdUser <string>] [--giveUpReason <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/submitProduct/exportProject`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | body | string | 否 | - | 平台ID（字段名推断,语义待核实） |
| `platformProductId` | platformProductId | body | string | 否 | - | 平台商品ID（字段名推断,语义待核实） |
| `categoryId` | categoryId | body | string | 否 | - | 类目ID（字段名推断,语义待核实） |
| `parentCategoryId` | parentCategoryId | body | string | 否 | - | 父级类目ID（字段名推断,语义待核实） |
| `commitType` | commitType | body | string | 否 | - | Commit类型（字段名推断,语义待核实） |
| `productUrl` | productUrl | body | string | 否 | - | 商品URL（字段名推断,语义待核实） |
| `createdBy` | createdBy | body | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `createdOn` | createdOn | body | string | 否 | - | 创建（字段名推断,语义待核实） |
| `platformName` | platformName | body | string | 否 | - | 平台名称（字段名推断,语义待核实） |
| `classificationId` | classificationId | body | string | 否 | - | ClassificationID（字段名推断,语义待核实） |
| `classificationName` | classificationName | body | string | 否 | - | Classification名称（字段名推断,语义待核实） |
| `employeeName` | employeeName | body | string | 否 | - | 员工名称（字段名推断,语义待核实） |
| `createdByName` | createdByName | body | string | 否 | - | 创建人名称（字段名推断,语义待核实） |
| `startDate` | startDate | body | string | 否 | - | 开始日期（字段名推断,语义待核实） |
| `endDate` | endDate | body | string | 否 | - | 结束日期（字段名推断,语义待核实） |
| `userId` | userId | body | string | 否 | - | 用户ID（字段名推断,语义待核实） |
| `platformIdUser` | platformIdUser | body | string | 否 | - | 平台ID用户（字段名推断,语义待核实） |
| `teamIdUser` | teamIdUser | body | string | 否 | - | 团队ID用户（字段名推断,语义待核实） |
| `giveUpReason` | giveUpReason | body | string | 否 | - | GIVE上架原因（字段名推断,语义待核实） |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
