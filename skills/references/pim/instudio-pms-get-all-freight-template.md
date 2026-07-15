<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-all-freight-template

显示运费：显示运费

## 用法

```bash
mbs pim instudio-pms-get-all-freight-template
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/freightTemplateController/getAllFreightTemplate`
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
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].salepricemin` | number | 最小售价。前端使用：待核实 | - |
| `obj.obj[].salepricemax` | string | 最大售价。前端使用：待核实 | - |
| `obj.obj[].countrynameChina` | string | 应用国家中文名。前端使用：待核实 | - |
| `obj.obj[].countrynameEnglish` | string | 应用国家英文名。前端使用：待核实 | - |
| `obj.obj[].freightMethod` | string | 运费方式。前端使用：待核实 | - |
| `obj.obj[].freight` | string | 运费。前端使用：待核实 | - |
| `obj.obj[].wishexpress` | string | 1打开 0关闭。前端使用：待核实 | - |
| `obj.obj[].countrynameChinaBack` | string | 应用国家中文名。前端使用：待核实 | - |
| `obj.obj[].countrynameEnglishBack` | string | 应用国家英文名。前端使用：待核实 | - |
| `obj.obj[].freightMethodBack` | string | 运费方式。前端使用：待核实 | - |
| `obj.obj[].freightBack` | string | 运费。前端使用：待核实 | - |
| `obj.obj[].wishexpressBack` | string | 1打开 0关闭。前端使用：待核实 | - |
| `obj.obj[].platform` | string | 平台。前端使用：待核实 | - |
| `obj.obj[].productPrice` | string | 商品价格（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].oldsalepricemin` | number | Oldsalepricemin（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].oldsalepricemax` | string | Oldsalepricemax（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].count` | integer | 数量（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].freightid` | integer | Freightid（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].saleInterval` | string | 拼接。前端使用：待核实 | - |
| `obj.obj[].creatBy` | string | 创建人。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
