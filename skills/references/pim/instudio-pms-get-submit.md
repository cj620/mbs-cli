# mbs pim instudio-pms-get-submit

查询提交：查询提交(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-get-submit
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/publishedProduct/getSubmit`
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
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].shopId` | string | 店铺ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].shopName` | string | 店铺名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].saleLeader` | string | 销售组长（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].saleLeaderId` | string | 销售组长ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].grossProfitRate` | string | 毛利润比率（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].publishedSources` | string | PublishedSources（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].publishedSourcesLink` | string | PublishedSources链接（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].spu` | string | SPU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].id` | string | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].requestBy` | string | 请求人（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].resultResponse` | string | 结果响应（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].itemId` | string | 条目ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].projectId` | string | 项目ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].dateRequest` | string | 日期请求（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].projectName` | string | 项目名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].resultStatus` | integer | 结果状态（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].employeeName` | string | 员工名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].employeeId` | string | 员工ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].publishFailInfo` | string | 刊登失败信息（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].mainImageUrl` | string | 主图片URL（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].title` | string | 标题（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
