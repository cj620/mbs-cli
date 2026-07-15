<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-site-by-mabang-id2

批量更新spu 清仓、停产状态：批量更新spu 清仓、停产状态

## 用法

```bash
mbs pim instudio-pms-find-site-by-mabang-id2 --list <array<string>>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/spu/findSiteByMabangId2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `list` | list | body | array<string> | 是 | - | 列表列表（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |
| `obj[]` | string | 列表元素。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
