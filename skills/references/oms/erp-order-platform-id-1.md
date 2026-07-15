<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-platform-id-1

获取大酋长列表：进入 Lazada 优惠券看板页面时调用，按平台加载“大酋长”（团队负责人）下拉选项列表，用于填充顶部 #shopManager 多选下拉框。URL 路径中第一段固定为 1，第二段为平台ID（页面内固定为 18=Lazada）。

## 用法

```bash
mbs oms erp-order-platform-id-1 --seg1 <number>
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleReport/getBigChief2/1/{platformId}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | path | number | 是 | - | 平台ID，路径第二段。源码 var platformId = 18（18=Lazada 平台），来源：函数内固定赋值，非页面控件 |
| `seg1` | seg1 | query | number | 是 | - | 路径第一段，源码中固定为常量 1（getBigChief2/1/）。具体业务含义（如类型/标识位）(待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（本接口回调未显式判断，沿用同页统一包结构）(待人工确认) | - |
| `desc` | string | 响应提示信息（失败时 alert(data.desc)，沿用同页统一包结构）(待人工确认) | - |
| `obj[]` | array | 大酋长列表；为空/无数据时下拉填充 -大酋长- 占位项 | - |
| `obj[][0]` | string | 大酋长ID，写入 <option value='...'>，作为下拉选项的取值 | - |
| `obj[][1]` | string | 大酋长名称，作为 <option> 显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
