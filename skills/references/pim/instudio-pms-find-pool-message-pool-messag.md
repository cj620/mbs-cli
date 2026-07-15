<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-pool-message-pool-messag

通过用户id 获取物品信息：通过用户id 获取物品信息

## 用法

```bash
mbs pim instudio-pms-find-pool-message-pool-messag --userId <integer>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/PoolMessag/findPoolMessage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `userId` | user_id | query | integer | 是 | - | 用户ID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].STATUS_NOT_MAPPING_CATEGORY` | integer | 分配状态：未映射分类 = 0。前端使用：待核实 | - |
| `obj.obj[].STATUS_ASSIGN_NO` | integer | 分配状态：未分配 = 1。前端使用：待核实 | - |
| `obj.obj[].STATUS_ASSIGN_YES` | integer | 分配状态：已分配 = 2。前端使用：待核实 | - |
| `obj.obj[].STATUS_GIVEUP` | integer | 分配状态：已放弃 = 3。前端使用：待核实 | - |
| `obj.obj[].id` | string | id。前端使用：待核实 | - |
| `obj.obj[].status` | integer | 状态 分配状态：未映射分类(0)，未分配(1)，已分配(2)，已放弃(3)。前端使用：待核实 | - |
| `obj.obj[].platform_id` | integer | 平台id。前端使用：待核实 | - |
| `obj.obj[].category_id` | string | 类目ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].platform_site_code` | string | 平台站点编码（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].platform_product_id` | string | 平台商品id。前端使用：待核实 | - |
| `obj.obj[].platform_product_name` | string | 平台商品名称。前端使用：待核实 | - |
| `obj.obj[].platform_product_url` | string | 平台商品路径。前端使用：待核实 | - |
| `obj.obj[].platform_product_img` | string | 平台商品图片（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].platform_product_price` | string | 平台商品价格（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].platform_product_days7sales` | string | 平台商品Days7sales（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].platform_product_country` | string | 平台商品国家（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].platform_product_tag` | string | 平台商品关键字。前端使用：待核实 | - |
| `obj.obj[].platform_category_id` | string | 平台叶子分类id。前端使用：待核实 | - |
| `obj.obj[].platform_category_name` | string | 平台叶子分类name。前端使用：待核实 | - |
| `obj.obj[].give_up_reason` | string | 放弃原因。前端使用：待核实 | - |
| `obj.obj[].consumerid` | integer | 关系表id。前端使用：待核实 | - |
| `obj.obj[].created_by` | string | 创建人id。前端使用：待核实 | - |
| `obj.obj[].created_on` | string | 创建时间。前端使用：待核实 | - |
| `obj.obj[].user_id` | integer | 用户id。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
