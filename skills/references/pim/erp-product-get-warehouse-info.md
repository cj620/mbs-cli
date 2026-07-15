<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-warehouse-info

SKU包装-获取仓库信息(下拉)：获取SKU包装测量任务可选的仓库列表，用于「添加任务」弹窗中「仓库」多选下拉框的数据源(el-select 的 storageId/storageName)。前端在页面挂载(onMounted)时调用一次，返回的数组直接绑定到下拉选项；下拉中还会前置一条 storageId=-1「所有平台都测」(前端硬编码,非接口返回)。

## 用法

```bash
mbs pim erp-product-get-warehouse-info
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/skuPackage/getWarehouseInfo`
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
| `code` | number | 响应状态码,200=成功(envelope 标准字段) | - |
| `content` | string | 响应内容/分页计数(envelope 标准字段,本接口未使用) | - |
| `desc` | string | 响应提示信息(envelope 标准字段) | - |
| `obj[]` | array | 业务数据：仓库下拉列表(前端赋给 selectOption.WarehouseList) | - |
| `obj[][0]` | number | 仓库ID(el-select value-key,作为选项 value 的主键;前端硬编码 -1=所有平台都测) | - |
| `obj[][1]` | string | 仓库名称(el-option label,下拉显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
