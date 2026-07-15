<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-check-infringing-word-list2

检查是否包含违禁词：检查是否包含违禁词

## 用法

```bash
mbs pim instudio-pms-check-infringing-word-list2
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/infringing/checkInfringingWordList2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj.spu` | string | SPU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.categoryId` | string | 类目ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platformIdList` | string | 平台ID列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.text` | string | 文本（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
