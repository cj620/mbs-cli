<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-hwc-type

获取海外仓类型列表：订单详情页「转海外仓发货」时，打开创建海外仓SKU弹窗，加载「海外仓类型」下拉选项。无请求参数，返回海外仓类型(warehouseType)列表，供前端按 warehouseTypeId 选择并取 warehouseTypeName。

## 用法

```bash
mbs pim erp-product-get-hwc-type
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/getHwcType`
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
| `success` | boolean | 请求是否成功，true=成功取 obj，false=弹出 desc 错误提示 | - |
| `desc` | string | 响应提示信息（失败时前端 ElMessage 展示） | - |
| `obj[]` | array | 海外仓类型列表（作为「海外仓类型」下拉选项数据源） | - |
| `obj[][0]` | string | 海外仓类型ID（下拉选项 value，前端 overseaForm.warehouseTypeId 选中值，提交时作为 storageId/storage 反查依据） | - |
| `obj[][1]` | string | 海外仓类型名称（下拉选项展示文本，按 warehouseTypeId 反查得到，作为创建海外仓 SKU 的 storage 仓库类型名） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
