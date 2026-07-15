<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-select-smt-related-marketing-template-by-id

按ID查询速卖通Related营销模板：按ID查询速卖通Related营销模板(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-select-smt-related-marketing-template-by-id [--id <integer>] [--templateName <string>] [--templateInfo <string>] [--createBy <string>] [--updateBy <string>] [--url <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/smtSinglepublishController/selectSmtRelatedMarketingTemplateById`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | integer | 否 | - | ID（字段名推断,语义待核实） |
| `templateName` | templateName | body | string | 否 | - | 模板名称（字段名推断,语义待核实） |
| `templateInfo` | templateInfo | body | string | 否 | - | 模板信息（字段名推断,语义待核实） |
| `createBy` | createBy | body | string | 否 | - | 创建人（字段名推断,语义待核实） |
| `updateBy` | updateBy | body | string | 否 | - | 更新人（字段名推断,语义待核实） |
| `url` | url | body | string | 否 | - | URL（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.id` | integer | ID（字段名推断,语义待核实）。前端使用：是（列表行字段,条件判断，行号待核实） | - |
| `obj.obj.templateName` | string | 模板名称（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj.templateInfo` | string | 模板信息（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.createBy` | string | 创建人（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.updateBy` | string | 更新人（字段名推断,语义待核实）。前端使用：否 | - |
| `obj.obj.url` | string | URL（字段名推断,语义待核实）。前端使用：是（表格列，行号待核实） | - |
| `obj.obj.tag` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.props` | string | Props（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.children` | string | Children（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.CANVAS` | string | Canvas（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.badge` | string | Badge（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.title` | string | 标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.price` | string | 价格（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.key` | string | 键（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.remove` | string | 删除（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
