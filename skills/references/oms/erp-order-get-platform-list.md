# mbs oms erp-order-get-platform-list

平台列表查询：销售业绩目标页面在“批量设置店铺目标”弹窗中调用，拉取平台下拉列表（平台ID+平台名称），用于渲染 #platform 平台选择下拉框。GET 无入参。

## 用法

```bash
mbs oms erp-order-get-platform-list
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleReport/getPlatformList`
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
| `code` | number | 响应状态码,200=成功（标准响应封装；本接口 success 回调未直接校验）(待人工确认) | - |
| `desc` | string | 响应提示信息（标准响应封装）(待人工确认) | - |
| `obj[]` | array | 平台列表（success 回调判断 data.obj 存在后用于渲染平台下拉） | - |
| `obj[][0]` | string | 平台ID（渲染为 <option> 的 value） | - |
| `obj[][1]` | string | 平台名称（渲染为 <option> 的显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
