<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-oper3

高级搜索-开发员下拉数据查询：订单列表页「高级搜索」弹窗中，初始化「开发员」(#selloper)下拉框选项。返回当前用户可选的开发员(销售开发员)名称列表；前端用 art-template selloperTemplate 遍历 obj 渲染为 option，并对 #selloper 启用 select2。无任何请求参数。

## 用法

```bash
mbs oms erp-order-get-oper3
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/getOper3`
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
| `code` | number | 响应状态码,200=成功(前端据此判断渲染或弹错) | - |
| `desc` | string | 响应提示信息(失败时 alert(data.desc) 展示) | - |
| `obj[]` | array | 开发员(销售开发员)名称列表,字符串数组(模板 {{each obj}} 遍历) | - |
| `obj[]` | string | 数组元素-单个开发员名称(同时作为 option 的 value 与文本展示)(待人工确认:具体为姓名/工号) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
