# mbs oms erp-order-platform-id-order-status

获取销售大酋长列表(getBigChief2)：平台流量监控/看板页面进入或切换平台时，按「订单状态 + 平台ID」两个路径参数查询销售大酋长(店铺管理者)列表，用于填充页面顶部「-大酋长-」多选下拉(#shopManager)。返回数组，每项含大酋长 id 与 name。

## 用法

```bash
mbs oms erp-order-platform-id-order-status
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleReport/getBigChief2/{orderStatus}/{platformId}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderStatus` | orderStatus | path | string | 是 | - | 路径参数1-订单状态。当前前端硬编码传 '1'；历史取自订单状态控件 #orderStaus(已注释)，具体枚举待人工确认 |
| `platformId` | platformId | path | string | 是 | - | 路径参数2-平台ID。取自平台下拉 #platformId，枚举：1=ebay、89=SeeBee；下拉无值时前端传 0 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(系统统一包装,200=成功)。本回调未读取 (待人工确认) | - |
| `desc` | string | 响应提示信息(系统统一包装)。本回调未读取 (待人工确认) | - |
| `obj[]` | array | 大酋长(店铺管理者)列表，前端遍历生成下拉 option | - |
| `obj[][0]` | string | 大酋长ID，作为下拉 option 的 value | - |
| `obj[][1]` | string | 大酋长名称，作为下拉 option 的展示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
