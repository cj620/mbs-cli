# mbs oms erp-mobile-get-platform-info-hot-product-listing

平台信息列表查询：订单移动端搜索页加载时调用，获取当前登录人可见的平台列表，用于渲染「平台」多选(单选)筛选项。选中后驱动经理(大酋长)、组员、店铺等级联下拉的数据加载。

## 用法

```bash
mbs oms erp-mobile-get-platform-info-hot-product-listing
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/hotProductListing/getPlatformInfo`
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
| `code` | number | 响应状态码,200=成功(统一响应包装) | - |
| `desc` | string | 响应提示信息(统一响应包装) | - |
| `obj[]` | array | 平台列表数组(模板 {{each obj}} 遍历渲染平台多选项) | - |
| `obj[][0]` | string | 平台ID(渲染为复选框 value，选中后用于级联查询经理/组员/店铺) | - |
| `obj[][1]` | string | 平台名称(渲染为复选框 label 展示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
