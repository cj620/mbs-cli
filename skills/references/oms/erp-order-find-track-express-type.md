<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-track-express-type

物流跟进-运输类型(下拉)查询：物流跟进日志(logView)页面初始化时调用，无入参，返回全部"类型"(运输/快递类型)字符串列表，前端用 art-template(#expressTypeTemplate) 渲染为类型下拉框选项（既作 option 的 value 又作显示文本）。

## 用法

```bash
mbs oms erp-order-find-track-express-type
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/trackController/findTrackExpressType`
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
| `code` | number | 响应状态码,200=成功（统一返回结构字段，本回调未显式读取）(待人工确认) | - |
| `desc` | string | 响应提示信息（统一返回结构字段，本回调未显式读取）(待人工确认) | - |
| `obj[]` | array | 类型列表：运输/快递类型名称的字符串数组（前端取为下拉数据源 list） | - |
| `obj[]` | string | 数组元素，单个类型名称；既作 <option> 的 value 又作显示文本（具体取值集合由后端数据决定）(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
