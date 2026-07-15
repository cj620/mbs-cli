# mbs oms erp-order-get-company-info

获取公司(地区)信息：FBA产品利润分析表页面加载时调用，获取当前用户可见的公司(地区)列表，用于渲染顶部“请选择地区”多选下拉框(#selectCity)。该接口无请求体参数，success 回调取 data.obj 数组，按 companyId/shortName 渲染为 <option>。

## 用法

```bash
mbs oms erp-order-get-company-info
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getCompanyInfo`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(失败时 alert(data.desc)) | - |
| `obj[]` | array | 公司(地区)列表，渲染为 #selectCity 下拉选项 | - |
| `obj[][0]` | string | 公司ID(作为 <option> 的 value，即地区/公司唯一标识) | - |
| `obj[][1]` | string | 公司简称/地区名称(作为 <option> 的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
