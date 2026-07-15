<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-purchase-spu-list

降本任务-SPU列表查询：采购工作台「降本任务」标签页的 SPU 层分页列表查询：按任务状态(未完成/已完成)、任务类型(下单任务/黑马/其他)、SPU 关键词过滤，返回降本任务 SPU 列表及总条数，供 el-table 渲染，展开行再调用 skuList 获取 SKU 明细。

## 用法

```bash
mbs scm erp-purchase-spu-list --status <number> --pageSize <number> [--spu <string>] [--type <number>] --page <number>
```

## API

- Service: `erpPurchase`
- Method: `POST`
- Path: `/erpPurchase/erpPurchase/downCostTask/spuList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | number | 是 | - | 任务状态(恒传，默认1)。1=未完成;2=已完成 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(默认10) |
| `spu` | spu | body | string | 否 | - | SPU 关键词(搜索框，默认空串) |
| `type` | type | body | number | 否 | - | 任务类型(类型下拉，可为空)。1=下单任务;2=黑马产品;3=其他 |
| `page` | page | body | number | 是 | - | 当前页码(从1开始) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(全站统一外壳) | - |
| `desc` | string | 响应提示信息(全站统一外壳) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的 SPU 总条数(前端赋值 page.total) | - |
| `obj.result[]` | array | 降本任务 SPU 列表 | - |
| `obj.result[][0]` | string | 商品 SPU 编号(行主键) | - |
| `obj.result[][1]` | string | 商品主图 URL | - |
| `obj.result[][2]` | string | 商品标题/信息 | - |
| `obj.result[][3]` | string | 销量级别(超爆/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品) | - |
| `obj.result[][4]` | number | 近7天销量 | - |
| `obj.result[][5]` | number | 近30天销量 | - |
| `obj.result[][6]` | number | 近90天销量 | - |
| `obj.result[][7]` | string | 开发员 | - |
| `obj.result[][8]` | string | 创建时间(开发/创建时间) | - |
| `obj.result[][9]` | string | 任务推送时间 | - |
| `obj.result[][10]` | string | 任务完成时间 | - |
| `obj.result[][11]` | number | 任务状态(SPU层)。1=未完成;2=已完成(SKU明细层 1=降本中,2=降本成功,3=降本失败) | - |
| `obj.result[][12]` | string | 任务类型(下单任务/黑马/其他，expend 回调据此换算子接口 type) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
