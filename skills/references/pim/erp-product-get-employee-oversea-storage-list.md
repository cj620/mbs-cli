# mbs pim erp-product-get-employee-oversea-storage-list

查询员工海外仓库存仓库列表：获取当前登录员工可见的海外仓（仓库）列表，用于「海外仓库存流水/盘点日志」页面的「海外仓类型」「出入库仓库」两个下拉框数据源。前端拿到列表后按 storageType==4 过滤出海外仓类型供「海外仓类型」下拉使用，全量列表供「出入库仓库」下拉使用。

## 用法

```bash
mbs pim erp-product-get-employee-oversea-storage-list
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/storage/getEmployeeOverseaStorageList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（统一响应外层封装,前端未直接判断） | - |
| `desc` | string | 响应提示信息（统一响应外层封装） | - |
| `obj[]` | array | 海外仓（仓库）列表,赋值给 warehouseTypeList | - |
| `obj[][0]` | string | 仓库名称（前端作下拉框 label 与 value；既用于「海外仓类型」下拉,也用于「出入库仓库」下拉） | - |
| `obj[][1]` | number | 库存/仓库类型枚举（前端以 storageType==4 过滤出「海外仓类型」选项；4=海外仓类型,其余值为非海外仓类型,完整枚举待人工确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
