<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get

商品异常(售后)原因类型及计数查询：在 SPU 管理页点击「举报异常/添加异常」时，按商品(SPU/productid)拉取可选的异常(售后)原因类型列表及各原因已有的计数，用于填充举报弹窗的「原因」下拉框；下拉项文本为「原因名称(数量)」，数量为 0 时不展示括号。

## 用法

```bash
mbs pim erp-product-get
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/{sku}/abnormal/type/count/get`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | path | string | 是 | - | 路径参数。商品 SPU/产品ID，前端实参为 productid（来源：SPU 列表行「举报异常」按钮 → addAbnormal(productid)）。拼接于 URL 路径 /product/{sku}/abnormal/type/count/get |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 异常(售后)原因类型列表 | - |
| `obj[][0]` | string | 异常类型编码（作为 <option> 的 value，提交时即 abnormaltype） | - |
| `obj[][1]` | string | 异常原因名称（下拉项展示文本） | - |
| `obj[][2]` | number | 该原因下已有的异常计数；>0 时在名称后以 (NUM) 形式展示，=0 不展示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
