# mbs oms erp-order-find-order-type

查询自定义订单类型(下拉数据源)：订单详情页点击编辑时，加载「自定义类型」下拉框的可选项列表。返回全部自定义订单类型(ID+名称)，前端用 art-template 渲染为 select#findOrderType 的 option，并以当前订单的 ordertypeid 回显选中项。

## 用法

```bash
mbs oms erp-order-find-order-type
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/findOrderType`
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
| `code` | number | 响应状态码,200=成功(前端据此判断,否则 alert(data.desc)) | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj[]` | array | 自定义订单类型列表 | - |
| `obj[][0]` | string | 自定义订单类型ID(渲染为 option 的 value,提交时写入 ordertypeid) | - |
| `obj[][1]` | string | 自定义订单类型名称(option 显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
