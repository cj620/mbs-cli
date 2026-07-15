<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-getpackaging

包材(包装材料)下拉列表查询：订单详情页编辑时加载“包材(包装材料)”下拉框的可选项列表。无请求参数，POST 空 body；返回全部包材选项(ID/NAME)，前端用 art-template 渲染为 option 并用 select2 美化，同时把当前订单的 packagingid 设为选中值。

## 用法

```bash
mbs oms erp-order-getpackaging
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getpackaging`
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
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息（非200时弹出） | - |
| `obj[]` | array | 包材选项列表 | - |
| `obj[][0]` | string | 包材ID（option 的 value，用于回填/选中 packagingid） | - |
| `obj[][1]` | string | 包材名称（option 的显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
