<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-product-task-info-sku

SKU任务信息查询：SKU详情页底部「任务」模块加载：按SKU查询该商品关联的任务工单记录，返回任务发起人/执行人/任务简介/生成时间/任务状态列表，渲染为任务表格(#taskInfoSku)。

## 用法

```bash
mbs pim erp-product-get-product-task-info-sku --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getProductTaskInfoSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | 商品SKU编号(查询参数，拼在URL ?sku= 后；来源=当前页URL查询参数 SKU，经 GetQueryString('SKU') 取得) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(前端据此判断是否渲染任务表格) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 任务工单列表(为空数组时不显示任务模块) | - |
| `obj[][0]` | string | 任务发起人 | - |
| `obj[][1]` | string | 执行人(任务指派的处理人) | - |
| `obj[][2]` | string | 任务简介(任务内容描述) | - |
| `obj[][3]` | string | 生成任务时间 | - |
| `obj[][4]` | string | 任务状态(处理结果) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
