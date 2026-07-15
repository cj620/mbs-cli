<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-1

大酋长列表查询：大酋长发布统计报表页面初始化时加载"大酋长"下拉选择框的数据源：无业务请求参数，返回全部大酋长(id+name)列表，前端据此渲染下拉框并缓存名称数组，随后触发统计接口调用。

## 用法

```bash
mbs oms erp-order-1
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleReport/getBigChief2/1/1`
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
| `obj[]` | array | 大酋长列表（成功回调取 data.obj，为对象数组） | - |
| `obj[][0]` | string | 大酋长ID（渲染为下拉 option 的 value） | - |
| `obj[][1]` | string | 大酋长名称（下拉 option 文本；名称若含 ']'，前端截取最后一个 ']' 之后部分作为展示/缓存值，存入 allChif） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
