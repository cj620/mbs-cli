# mbs pim instudio-pms-get-development-project-diagram

获取项目创建以来一年内的销量趋势图数据：获取项目创建以来一年内的销量趋势图数据

## 用法

```bash
mbs pim instudio-pms-get-development-project-diagram [--createBy <string>] [--developer <string>] [--startDate <string>] [--endDate <string>] [--spu <string>] [--projectName <string>] [--projectId <string>] [--createList <array<string>>] [--projectIds <array<string>>] [--spuList <array<string>>] [--id <integer>] [--projectContent <string>] [--page <integer>] [--pageSize <integer>] [--startIndex <integer>] [--bigChief <string>] [--isPublic <integer>] [--projectType <integer>] [--saleLevel <string>] [--companyId <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developmentProject/getDevelopmentProjectDiagram`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `createBy` | createBy | body | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `developer` | developer | body | string | 否 | - | 开发者（字段名推断,语义待核实） |
| `startDate` | startDate | body | string | 否 | - | 开始日期（字段名推断,语义待核实） |
| `endDate` | endDate | body | string | 否 | - | 结束日期（字段名推断,语义待核实） |
| `spu` | spu | body | string | 否 | - | SPU（字段名推断,语义待核实） |
| `projectName` | projectName | body | string | 否 | - | 项目名称（字段名推断,语义待核实） |
| `projectId` | projectId | body | string | 否 | - | 项目ID（字段名推断,语义待核实） |
| `createList` | createList | body | array<string> | 否 | - | 创建列表（字段名推断,语义待核实） |
| `projectIds` | projectIds | body | array<string> | 否 | - | 项目ID列表（字段名推断,语义待核实） |
| `spuList` | spuList | body | array<string> | 否 | - | SPU列表（字段名推断,语义待核实） |
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `projectContent` | projectContent | body | string | 否 | - | 项目内容（字段名推断,语义待核实） |
| `page` | page | body | integer | 否 | - | 页码（字段名推断,语义待核实） |
| `pageSize` | pageSize | body | integer | 否 | - | 每页条数（字段名推断,语义待核实） |
| `startIndex` | startIndex | body | integer | 否 | - | 开始索引（字段名推断,语义待核实） |
| `bigChief` | bigChief | body | string | 否 | - | 大酋长名字 |
| `isPublic` | isPublic | body | integer | 否 | - | 是否公开 |
| `projectType` | projectType | body | integer | 否 | - | 项目类型:1.官方立项 2.产品线 3.组内跟进 |
| `saleLevel` | saleLevel | body | string | 否 | - | 售卖级别 |
| `companyId` | companyId | body | string | 否 | - | 公司Id |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
