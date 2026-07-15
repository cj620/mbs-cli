<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-check-spu-is-live

校验SPU是否存在：SKU详情页(SKUdetails2)中，用户在SPU输入框失焦(onblur)时触发，把SPU值通过查询参数spu提交后端，校验该SPU是否已存在。obj=true表示已存在；obj=false表示不存在，前端弹出确认框走addSpu创建流程。

## 用法

```bash
mbs pim erp-product-check-spu-is-live --spu <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/checkSpuIsLive`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | 待校验的SPU编号，来源控件 #SPU 输入框，值非空时才发起请求 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(后端通用包装字段,本接口成功分支未使用)(待人工确认是否随该接口返回) | - |
| `obj` | boolean | SPU是否已存在。true=已存在(不创建);false=不存在,前端调用addSpu()弹出是否创建该SPU确认框 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
