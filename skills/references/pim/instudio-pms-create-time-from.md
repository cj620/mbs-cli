# mbs pim instudio-pms-create-time-from

通过创建时间条件获取SPU：通过创建时间条件获取SPU

## 用法

```bash
mbs pim instudio-pms-create-time-from
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/productApi/findProductList/{currentPage}/{pageNumber}/{createTimeFrom}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | path | integer | 是 | - | 当前页码（字段名推断,语义待核实） |
| `pageNumber` | pageNumber | path | integer | 是 | - | 页码编号（字段名推断,语义待核实） |
| `createTimeFrom` | createTimeFrom | path | string | 是 | - | 创建时间来源（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 编码。前端使用：待核实 | - |
| `data[]` | array | 数据。前端使用：待核实 | - |
| `message` | string | 消息。前端使用：待核实 | - |
| `totalNumberOfPages` | integer | 总数编号Pages。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
