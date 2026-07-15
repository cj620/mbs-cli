<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-price-information-shopee-singlepublish-controller

图片上传：图片上传

## 用法

```bash
mbs pim instudio-pms-get-price-information-shopee-singlepublish-controller --list <array<object>>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/shopeeSinglepublishController/getPriceInformation`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `list` | list | body | array<object> | 是 | - | 列表列表（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（取值,条件判断，行号待核实） | - |
| `obj.obj.logisticsName` | string | 物流名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.trim` | string | TRIM（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.erpSku` | string | ERPSKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
