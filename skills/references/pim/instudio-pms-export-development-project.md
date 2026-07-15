# mbs pim instudio-pms-export-development-project

开发项目导出：开发项目导出

## 用法

```bash
mbs pim instudio-pms-export-development-project [--createBy <string>] [--developer <string>] [--startDate <string>] [--endDate <string>] [--spu <string>] [--projectName <string>] [--projectId <string>] [--createList <array<string>>] [--projectIds <array<string>>] [--spuList <array<string>>] [--id <integer>] [--projectContent <string>] [--page <integer>] [--pageSize <integer>] [--startIndex <integer>] [--bigChief <string>] [--isPublic <integer>] [--projectType <integer>] [--saleLevel <string>] [--companyId <string>]
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/developmentProject/exportDevelopmentProject`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `createBy` | createBy | query | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `developer` | developer | query | string | 否 | - | 开发者（字段名推断,语义待核实） |
| `startDate` | startDate | query | string | 否 | - | 开始日期（字段名推断,语义待核实） |
| `endDate` | endDate | query | string | 否 | - | 结束日期（字段名推断,语义待核实） |
| `spu` | spu | query | string | 否 | - | SPU（字段名推断,语义待核实） |
| `projectName` | projectName | query | string | 否 | - | 项目名称（字段名推断,语义待核实） |
| `projectId` | projectId | query | string | 否 | - | 项目ID（字段名推断,语义待核实） |
| `createList` | createList | query | array<string> | 否 | - | 创建列表（字段名推断,语义待核实） |
| `projectIds` | projectIds | query | array<string> | 否 | - | 项目ID列表（字段名推断,语义待核实） |
| `spuList` | spuList | query | array<string> | 否 | - | SPU列表（字段名推断,语义待核实） |
| `id` | id | query | integer | 否 | - | ID（字段名推断,语义待核实） |
| `projectContent` | projectContent | query | string | 否 | - | 项目内容（字段名推断,语义待核实） |
| `page` | page | query | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | query | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `startIndex` | startIndex | query | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `bigChief` | bigChief | query | string | 否 | - | 大酋长名字 |
| `isPublic` | isPublic | query | integer | 否 | - | 是否公开 |
| `projectType` | projectType | query | integer | 否 | - | 项目类型:1.官方立项 2.产品线 3.组内跟进 |
| `saleLevel` | saleLevel | query | string | 否 | - | 售卖级别 |
| `companyId` | companyId | query | string | 否 | - | 公司Id |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
