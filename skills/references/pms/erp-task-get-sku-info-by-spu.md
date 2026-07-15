# mbs pms erp-task-get-sku-info-by-spu

按SPU查询SKU信息(拍照延迟子表)：在「拍照延迟30天」任务列表中，点击某一行(SPU)的展开图标时，按该 SPU 查询其下所有 SKU 的明细(图片、SKU、SKU名称、仓位、库存数量)，渲染为子表格；库存≤0 时前端追加“(缺货)”标识。

## 用法

```bash
mbs pms erp-task-get-sku-info-by-spu
```

## API

- Service: `erpTask`
- Method: `GET`
- Path: `/erpTask/erpTask/developMustDo/{spu}/getSkuInfoBySpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | path | string | 是 | - | 商品SPU编号(路径变量)。来源：拍照延迟任务表格行 data-spu 属性 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 该 SPU 下的 SKU 明细列表(前端赋值 list2) | - |
| `obj[][0]` | string | 商品SPU编号(渲染到子行 data-spu) | - |
| `obj[][1]` | string | SKU图片URL(加载失败回退默认图) | - |
| `obj[][2]` | string | SKU编码(链接跳转 /product/SKUdetails.html?SKU={sku}) | - |
| `obj[][3]` | string | SKU名称 | - |
| `obj[][4]` | string | 仓位/库位ID(表格“仓位”列展示，具体业务含义待人工确认) | - |
| `obj[][5]` | number | 库存数量(quantity<=0 时前端追加显示“(缺货)”) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
