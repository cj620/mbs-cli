# mbs pim erp-product-get-primary-classification-dash-board

一级品类(看板品类下拉)查询：首页综合看板(common.html「销量趋势图」筛选区)加载时调用，拉取全部一级品类(分类)列表，用于渲染「品类」多选下拉框(#ulId3 / #platform3)。无请求参数，返回品类名称数组，前端仅取每项 name。

## 用法

```bash
mbs pim erp-product-get-primary-classification-dash-board
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getPrimaryClassificationDashBoard`
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
| `code` | number | 响应状态码,200=成功(标准响应包字段) | - |
| `desc` | string | 响应提示信息(标准响应包字段) | - |
| `obj[]` | array | 一级品类(分类)列表,前端取作品类下拉数据源 | - |
| `obj[]` | string | 品类(一级分类)名称,渲染为复选框文本，勾选值同样取 name(<input value="{{v.name}}">)。选中后以逗号拼接写入 #platName/#platform3 作为后续销量查询的 name 参数 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
