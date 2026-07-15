# mbs pim instudio-pms-get-shop-manufacturers-list

获取店铺制造商信息：获取店铺制造商信息

## 用法

```bash
mbs pim instudio-pms-get-shop-manufacturers-list [--mainShop <string>] [--siteList <array<string>>] [--syncType <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/tiktokSinglepublishGlobalController/getShopManufacturersList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `mainShop` | mainShop | body | string | 否 | - | 主店铺（字段名推断,语义待核实） |
| `siteList` | siteList | body | array<string> | 否 | - | 站点列表（字段名推断,语义待核实） |
| `syncType` | syncType | body | string | 否 | - | 同步类型： |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.resName` | string | RES名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.responsiblePersonId` | string | Responsible人员ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.manName` | string | MAN名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.manufacturerId` | string | ManufacturerID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.mainShop` | string | 主店铺（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.sites` | string | Sites（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.responsibleIdList` | string | ResponsibleID列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.manufacturerIdList` | string | ManufacturerID列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
