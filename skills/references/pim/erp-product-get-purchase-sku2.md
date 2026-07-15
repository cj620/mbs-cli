# mbs pim erp-product-get-purchase-sku2

SKU采购在途运单查询(getPurchaseSku2)：SPU管理列表中鼠标悬停某SKU在途小窗时触发，按SKU查询该SKU的采购在途运单明细（运单号、在途数量、到货状态、采购跟进日志、最新物流轨迹），渲染到 popover 弹窗。

## 用法

```bash
mbs pim erp-product-get-purchase-sku2 --sku <string> --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getPurchaseSku2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | URL查询参数，当前SKU编号(来源列表行 data-sid) |
| `sku` | sku | body | string | 是 | - | 请求体参数，与query同值，当前SKU编号 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 采购在途运单列表(前端 data1.obj,模板遍历项 item) | - |
| `obj[][0]` | string | 运单号 | - |
| `obj[][1]` | number | 该运单在途数量(单位:个) | - |
| `obj[][2]` | string | 到货/物流状态(与ordernum拼接展示) | - |
| `obj[][3]` | object | 采购跟进日志对象(存在时显示跟进日志行) | - |
| `obj[][3].m` | string | 跟进日志-内容/留言(item.log.m) | - |
| `obj[][3].o` | string | 跟进日志-操作人(item.log.o) | - |
| `obj[][3].t` | string | 跟进日志-跟进时间(item.log.t) | - |
| `obj[][4]` | string | 最新物流轨迹信息(为null时前端展示"无") | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
