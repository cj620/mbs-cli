<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-category-id-get-category-characteristics

查询类目Characteristics：查询类目Characteristics(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-category-id-get-category-characteristics --request <string>
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/yandexBasicDate/getCategoryCharacteristics/{categoryId}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryId` | categoryId | path | integer | 是 | - | 类目ID（字段名推断,语义待核实） |
| `request` | request | query | string | 是 | - | 请求（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.categoryId` | integer | 类目ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.characteristicsId` | integer | CharacteristicsID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.characteristicsName` | string | Characteristics名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.fieldType` | string | 字段类型（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.description` | string | 描述（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.allowCustomValues` | integer | Allow自定义值列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.distinctive` | integer | Distinctive（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.defaultValues` | string | 默认值列表（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.required` | integer | 必填（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.cnCharacteristicsName` | string | 中文Characteristics名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.maxLength` | integer | 最大长度（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.maxValue` | number | 最大值（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.minValue` | number | 最小值（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.characteristicsUnit[]` | array | Characteristics单位（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.constraints` | object | Constraints（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.parameterValueOption[]` | array | 参数值选项（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.unitId` | integer | 单位ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.optionId` | integer | 选项ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.optionValue` | string | 选项值（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.requestId` | integer | 请求ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.requestInfoId` | integer | 请求信息ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
