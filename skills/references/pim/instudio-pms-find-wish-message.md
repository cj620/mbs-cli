# mbs pim instudio-pms-find-wish-message

查询Wish消息：查询Wish消息(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-find-wish-message --categoryId <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/EbayOrAliexpressMessage/FindWishMessage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryId` | category_id | query | string | 是 | - | 类目ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].id` | integer | 映射表id。前端使用：待核实 | - |
| `obj.obj[].category_id` | string | yinyuan 叶子分类id。前端使用：待核实 | - |
| `obj.obj[].platform_id` | integer | 平台id。前端使用：待核实 | - |
| `obj.obj[].site_code` | string | 站点。前端使用：待核实 | - |
| `obj.obj[].platform_category_id` | string | 平台叶子分类节点id。前端使用：待核实 | - |
| `obj.obj[].platform_mapping_value` | string | 平台信息。前端使用：待核实 | - |
| `obj.obj[].platformProductTag` | string | 平台商品标签。前端使用：待核实 | - |
| `obj.obj[].created_by` | string | 创建人id。前端使用：待核实 | - |
| `obj.obj[].created_on` | string | 创建时间。前端使用：待核实 | - |
| `obj.obj[].update_by` | string | 更新人（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].update_on` | string | 修改时间。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
