# mbs pim erp-product-get-emp-id-by-emp-name

通过登录人查出其管理的员工ID：以当前登录人为入口，查询其所管理的下级员工ID集合（后端 querySubManagerId）。前端示例页 getlogisticsType()(@deprecated) 复用其 obj 数组渲染物流类型候选项填充 #logisticsType。

## 用法

```bash
mbs pim erp-product-get-emp-id-by-emp-name
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/joomController/getEmpIdByEmpName`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（统一响应包裹） | - |
| `desc` | string | 响应提示信息（统一响应包裹） | - |
| `obj[]` | array | 登录人所管理的员工ID集合；前端 data.obj||[] 取用并渲染候选项 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
