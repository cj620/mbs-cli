# mbs pim instudio-pms-get-freight-template

获取店铺运费模板信息：获取店铺运费模板信息

## 用法

```bash
mbs pim instudio-pms-get-freight-template --shopName <string>
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/middlePanel/getFreightTemplate`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 是 | - | 店铺名称（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `obj.obj.isDanger` | string | 是否Danger（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.label` | string | 标签（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showValue` | string | 展示值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.showPercent` | string | 展示百分比（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.notificationId` | string | 通知ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.subject` | string | 科目（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.created` | string | 创建（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.ossPath` | string | OSS路径（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.show` | string | 展示（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platform` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.shopHomePageUrl` | string | 店铺HOME页码URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.DANGER_FLAGS` | string | DangerFlags（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
