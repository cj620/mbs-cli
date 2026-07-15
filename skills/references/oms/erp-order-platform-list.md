<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-platform-list

平台下拉列表查询：订单列表页初始化时加载所有平台，用于填充顶部筛选区"平台"下拉框(#platformList)。无入参，返回平台集合(序号ID + 平台名称)，前端通过 art-template 渲染为 <option>。

## 用法

```bash
mbs oms erp-order-platform-list
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/platformList`
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
| `code` | number | 响应状态码,200=成功(前端据此判断成功/失败) | - |
| `desc` | string | 响应提示信息(失败时前端 alert 弹出) | - |
| `obj[]` | array | 平台列表(模板 {{each obj}} 遍历渲染下拉项) | - |
| `obj[][0]` | number | 平台序号ID(作为 <option> 的 value,即平台标识) | - |
| `obj[][1]` | string | 平台名称(作为 <option> 的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
