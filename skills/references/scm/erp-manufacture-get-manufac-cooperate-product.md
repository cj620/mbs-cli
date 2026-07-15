<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-get-manufac-cooperate-product

厂商合作(候选)产品列表查询：根据厂商(供应商)ID分页查询该厂商向您提供的候选合作产品，返回产品图片、产品编号、产品名称、净重等信息，前端以缩略图卡片形式渲染并分页展示。

## 用法

```bash
mbs scm erp-manufacture-get-manufac-cooperate-product --manufactureId <string> --pageSize <number> --page <number>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/manufactureExtendController/getManufacCooperateProduct`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `manufactureId` | manufactureId | query | string | 是 | - | 厂商(供应商)ID。来源：页面URL参数sequenceid(GetQueryString('sequenceid'))，用于查询该厂商的合作候选产品 |
| `pageSize` | pageSize | query | number | 是 | - | 每页条数。前端固定为50 |
| `page` | page | query | number | 是 | - | 当前页码。初次请求固定为1；翻页时取分页控件api.getCurrent()的当前页 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `countPage` | number | 总页数。前端传入分页控件pageCount用于生成分页 | - |
| `count` | number | 满足条件的产品总条数。展示于#total(共N条) | - |
| `result[]` | array | 候选产品列表 | - |
| `result[][0]` | string | 产品图片URL(模板{{v.image}}，加载失败回退默认图timg2.jpg) | - |
| `result[][1]` | string | 产品编号/ID(模板{{v.productId}}，显示于角标label) | - |
| `result[][2]` | string | 产品名称(模板{{v.productName}}，超出省略号显示) | - |
| `result[][3]` | number | 净重(单位：g；模板{{if v.weight}}净重：{{v.weight}}g{{/if}}，有值才展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
