# mbs oms erp-order-get-site-list-sale-report

销售报表-站点下拉列表查询：订单时间/发货时间业绩报表页面的站点多选下拉数据源。根据已选所属平台的平台ID列表，查询该平台下的站点集合，用于渲染 #getSiteList 站点多选下拉框。

## 用法

```bash
mbs oms erp-order-get-site-list-sale-report [--platformids <string>]
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleReport/getSiteList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformids` | platformids | query | string | 否 | - | 平台ID列表，来源所属平台多选下拉 #reserve11；前端把数组拼接到URL，数组转字符串后为逗号拼接的多个平台ID(如 10,11,12)；初始化传全部平台ID，切换平台传已选平台ID，未选时可能为空。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(系统统一响应包装字段,本回调未直接读取)(待人工确认) | - |
| `desc` | string | 响应提示信息(系统统一响应包装字段,本回调未直接读取)(待人工确认) | - |
| `obj[]` | array | 站点列表(站点名称/编码字符串数组)，前端遍历渲染站点多选下拉 #getSiteList 的 option | - |
| `obj[]` | string | 单个站点值(字符串)，同时作为下拉项的 value 与展示文本(<option value="{{value}}">{{value}}</option>)；具体为站点名称或站点编码(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
