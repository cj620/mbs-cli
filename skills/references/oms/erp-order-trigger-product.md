<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-trigger-product

触发产品(禁限售触发产品)下拉列表查询：产品问题投诉页(taskComplaint2.html)在 created 生命周期调用 getgoodslist()，无参 GET 拉取“触发产品”候选名称列表，赋值给 goodslist，用于“平台限售”场景下“触发产品”下拉框(支持 allow-create 手动输入)的候选项。返回值 obj 为字符串数组(简明、准确、含特征的产品名称，如：除藻粉、激光逗猫棒)。

## 用法

```bash
mbs oms erp-order-trigger-product
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleReport/triggerProduct`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本调用未显式校验,为框架统一约定字段)(待人工确认) | - |
| `desc` | string | 响应提示信息(本调用未使用,为框架统一约定字段)(待人工确认) | - |
| `obj[]` | array | 触发产品(禁限售触发产品)名称列表;前端赋值给 goodslist 作为“触发产品”下拉候选项 | - |
| `obj[]` | string | 数组元素:单个触发产品名称(简明、准确、含特征的产品名称,如:除藻粉、激光逗猫棒),前端作为下拉项 label 与 value 直接使用 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
