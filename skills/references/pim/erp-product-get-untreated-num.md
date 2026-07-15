<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-untreated-num

售后登记表-未处理数量查询：商品列表页签栏（productTab）加载时调用，查询当前用户「售后登记表」中未处理的记录数量，用于在「售后登记表」页签上展示红色未读角标（badge-untreated-num）。返回值大于0时显示角标并填入数量。

## 用法

```bash
mbs pim erp-product-get-untreated-num
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/getUntreatedNum`
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
| `code` | number | 响应状态码，200=成功（前端判断 code == 200 才处理） | - |
| `obj` | number | 售后登记表未处理数量；前端在 code==200 且 obj>0 时执行 $('#badge-untreated-num').show().text(obj) 展示角标 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
