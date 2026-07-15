# mbs pim instudio-pms-published-list

Published列表：Published列表(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-published-list [--projectId <integer>] [--list <array<object>>] [--userid <string>] [--skus <string>] [--publishStatus <string>] [--shopId <string>] [--requestBy <string>] [--currPage <integer>] [--skuList <array<string>>] [--endSubmitDate <string>] [--startSubmitDate <string>] [--shopIds <array<string>>] [--shopManagerList <array<string>>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/publishedProduct/publishedList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `projectId` | projectId | body | integer | 否 | - | 项目ID（字段名推断,语义待核实） |
| `list` | list | body | array<object> | 否 | - | 列表（字段名推断,语义待核实） |
| `userid` | userid | body | string | 否 | - | Userid（字段名推断,语义待核实） |
| `skus` | skus | body | string | 否 | - | SKU列表（字段名推断,语义待核实） |
| `publishStatus` | publishStatus | body | string | 否 | - | 刊登状态（字段名推断,语义待核实） |
| `shopId` | shopId | body | string | 否 | - | 店铺ID（字段名推断,语义待核实） |
| `requestBy` | requestBy | body | string | 否 | - | 请求人（字段名推断,语义待核实） |
| `currPage` | currPage | body | integer | 否 | - | CURR页码（字段名推断,语义待核实） |
| `skuList` | skuList | body | array<string> | 否 | - | SKU列表（字段名推断,语义待核实） |
| `endSubmitDate` | endSubmitDate | body | string | 否 | - | 结束提交日期（字段名推断,语义待核实） |
| `startSubmitDate` | startSubmitDate | body | string | 否 | - | 开始提交日期（字段名推断,语义待核实） |
| `shopIds` | shopIds | body | array<string> | 否 | - | 店铺ID列表（字段名推断,语义待核实） |
| `shopManagerList` | shopManagerList | body | array<string> | 否 | - | 店铺管理列表（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.nextCursor` | string | 下一个Cursor（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.previousCursor` | string | PreviousCursor（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj.list[]` | array | 当前页数据列表。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
