# mbs oms erp-order-find-expresstype

查询快递方式(物流方式)列表：订单详情页加载时根据物流类型 logisticsType 查询可选的快递方式(物流方式)列表，结果存入 basedata.expresstypelist 供物流信息下拉选择；保存物流/基本信息时按 ID 匹配 expresstypeid 取 NAME 作为快递方式名称回传。

## 用法

```bash
mbs oms erp-order-find-expresstype [--logisticsType <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/orderNew/findExpresstype`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `logisticsType` | logisticsType | query | string | 否 | - | 物流类型(快递方式筛选条件)，URL查询参数，调用时默认传空串查询全部；枚举取值(待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 快递方式(物流方式)列表,赋值给 basedata.expresstypelist(为空时取[]) | - |
| `obj[][0]` | string | 快递方式ID,与订单 expresstypeid 匹配(前端==松散比较,类型待人工确认,可能为number) | - |
| `obj[][1]` | string | 快递方式名称,匹配后作为 expresstype 回传保存 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
