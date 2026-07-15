<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-sku-warehouse-list

海外仓SKU仓位查询：订单详情页「转海外仓」弹窗中，选择海外仓类型后，按订单未删除明细行(flag!=3)批量提交 sku/海外仓类型/订单号，查询并返回各 SKU 对应的海外仓 SKU(hwcSku)等信息，渲染「修改前SKU/修改后SKU」对照表。

## 用法

```bash
mbs oms erp-order-sku-warehouse-list --root <array<unknown>>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/skuWarehouseList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `root` | (root) | body | array<unknown> | 是 | - | 请求体根数组(订单明细 SKU 列表，每元素一条) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应外层，本调用未直接读取) | - |
| `desc` | string | 响应提示信息(统一响应外层，本调用未直接读取) | - |
| `obj[]` | array | 海外仓SKU列表(赋值给 basedata.overseaSKUList) | - |
| `obj[][0]` | string | 修改前SKU(原始SKU，模板「修改前SKU」列 {{item.sku}}) | - |
| `obj[][1]` | string | 修改后SKU(海外仓SKU，模板「修改后SKU」el-input v-model=item.hwcSku，可编辑后回传) | - |
| `obj[][2]` | string | 复制SKU(列表渲染 :key=item.copySku 用) | - |
| `obj[][3]` | string | 明细行ID(SKU行标识，overseaConfirm() 提交 updateZhiStatus 时回传 item.sid) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
