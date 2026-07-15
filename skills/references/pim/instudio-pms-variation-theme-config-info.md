<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-variation-theme-config-info

根据选中的值, 没有选中的值就根据requestId 查询variationTheme字段的配置信息：根据选中的值, 没有选中的值就根据requestId 查询variationTheme字段的配置信息

## 用法

```bash
mbs pim instudio-pms-variation-theme-config-info [--site <string>] [--mainCategory <string>] [--shopName <string>] [--productType <string>] [--requiredField <string>] [--color <string>] [--size <string>] [--requiredFields <array<string>>] [--productTypeId <integer>] [--variationTheme <string>] [--requestId <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/amazon/new/get/variationThemeConfigInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `site` | site | body | string | 否 | - | 站点（字段名推断,语义待核实） |
| `mainCategory` | mainCategory | body | string | 否 | - | 主类目（字段名推断,语义待核实） |
| `shopName` | shopName | body | string | 否 | - | 店铺名称（字段名推断,语义待核实） |
| `productType` | productType | body | string | 否 | - | 商品类型（字段名推断,语义待核实） |
| `requiredField` | requiredField | body | string | 否 | - | 必填字段（字段名推断,语义待核实） |
| `color` | color | body | string | 否 | - | 颜色（字段名推断,语义待核实） |
| `size` | size | body | string | 否 | - | 大小（字段名推断,语义待核实） |
| `requiredFields` | requiredFields | body | array<string> | 否 | - | 必填字段（字段名推断,语义待核实） |
| `productTypeId` | productTypeId | body | integer | 否 | - | 类型id |
| `variationTheme` | variationTheme | body | string | 否 | - | SIZE_NAME |
| `requestId` | requestId | body | string | 否 | - | 刊登请求的记录id |

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
