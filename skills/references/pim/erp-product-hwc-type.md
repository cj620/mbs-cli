# mbs pim erp-product-hwc-type

根据海外仓类型查询发货仓库(前缀)列表：订单详情页「海外仓发货设置」弹窗中，用户选择「海外仓类型」后触发；以海外仓类型ID作为路径参数，返回该类型下可选的发货仓库(中转仓/前缀)列表，用于「选择前缀」下拉框。仅有一项时前端默认选中并继续联动 SKU 后缀与收货仓库。

## 用法

```bash
mbs pim erp-product-hwc-type
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/getHWCSuffByHwcType/{hwcType}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `hwcType` | hwcType | path | string | 是 | - | 海外仓类型ID（路径参数）。取自「海外仓类型」下拉选中项的 warehouseTypeId，即 overseaForm.warehouseTypeId；来源控件为 orderdetail.html 海外仓发货设置弹窗的海外仓类型下拉(@change 透传的选中值)。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 业务是否成功。true=取数成功并渲染下拉；false=弹出 desc 错误提示 | - |
| `desc` | string | 提示/错误信息（success=false 时前端 ElMessage 展示） | - |
| `obj[]` | array | 发货仓库(前缀/中转仓)列表，赋给 HWCSuffOptions 作为「选择前缀」下拉数据源 | - |
| `obj[][0]` | string | 中转仓/发货仓库ID。作为下拉 :key 与 value-key（选项唯一标识） | - |
| `obj[][1]` | string | 中转仓/发货仓库名称。作为下拉 :label 显示文本（前缀名称） | - |
| `obj[][2]` | string | SKU 后缀。选中该项后 setSkuSuffix 取用 item.skuSuffix 赋给 overseaForm.skuSuffix，并据此联动查询收货仓库(getReceivingWarehouseId) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
