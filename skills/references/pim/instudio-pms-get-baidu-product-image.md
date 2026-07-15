<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get-baidu-product-image

查询重复：查询重复

## 用法

```bash
mbs pim instudio-pms-get-baidu-product-image --img <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/getBaiduProductImage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `img` | img | query | string | 是 | - | 图片（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj[].id` | integer | 主键id。前端使用：否 | - |
| `obj.obj[].missionId` | integer | 开发任务ID。前端使用：否 | - |
| `obj.obj[].type` | integer | 1:SPU2:微信文章3:SKU。前端使用：否 | - |
| `obj.obj[].spuOrArticle` | string | SPU或文章ID。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].sku` | string | 最高相似度SKU。前端使用：否 | - |
| `obj.obj[].imageUrl` | string | 最高相似度图片。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].maxScore` | number | 最大相似分数。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].developBy` | string | 开发员。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].status` | integer | 1:正常2:含侵权禁售。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].tort` | integer | 1:侵权。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].platformForbidCount` | integer | 禁售平台数量。前端使用：否 | - |
| `obj.obj[].createTime` | string | 创建时间。前端使用：否 | - |
| `obj.obj[].title` | string | 标题。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].category` | string | 大类。前端使用：是（列表行字段,条件判断，行号待核实） | - |
| `obj.obj[].spuOrArticleUrl` | string | SPU或文章链接。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].skuCount` | integer | sku数量。前端使用：否 | - |
| `obj.obj[].sellLevel` | integer | 销量级别。前端使用：是（列表行字段,条件判断，行号待核实） | - |
| `obj.obj[].submitSaleTime` | string | 提交销售时间（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].tips` | string | TIPS（字段名推断,语义待核实）。前端使用：是（列表行字段，行号待核实） | - |
| `obj.obj[].refundRate` | number | 退款率。前端使用：否 | - |
| `obj.obj[].evaluateCount` | integer | 差评数量。前端使用：否 | - |
| `obj.obj[].isTort` | integer | 是否侵权（字段名推断,语义待核实）。前端使用：是（列表行字段,条件判断，行号待核实） | - |
| `obj.obj[].spuTag` | string | 商品标签。前端使用：否 | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
