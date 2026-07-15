# mbs oms erp-order-get-category-develop-info

类目昨日开发/经营表现查询：销售看板右侧「类目昨日表现」卡片数据源：按类目返回昨日发货销售额、发货订单量、发货毛利率、订单缺货率、按时发货率及各项环比涨跌幅，前端遍历渲染为类目表现卡片列表。GET 无入参，由当前登录态(会话/Cookie)确定数据范围。

## 用法

```bash
mbs oms erp-order-get-category-develop-info
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleVistingCard/getCategoryDevelopInfo`
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
| `code` | number | 响应状态码,200=成功(通用响应,前端未显式读取)(待人工确认) | - |
| `desc` | string | 响应提示信息(通用响应,前端未显式读取)(待人工确认) | - |
| `obj[]` | array | 类目昨日表现列表(模板变量 list2);为空/假值时不渲染 | - |
| `obj[][0]` | string | 类目名称(卡片标题"{categoryName} 昨日表现") | - |
| `obj[][1]` | number | 发货销售额(昨日) | - |
| `obj[][2]` | number | 发货销售额环比涨跌幅(%);>=0红色上箭头,<0绿色下箭头 | - |
| `obj[][3]` | number | 发货订单量(昨日) | - |
| `obj[][4]` | number | 发货订单量环比涨跌幅(%);>=0红色上箭头,<0绿色下箭头 | - |
| `obj[][5]` | number | 发货毛利率(%) | - |
| `obj[][6]` | number | 发货毛利率环比涨跌幅(%);>=0红色上箭头,<0绿色下箭头 | - |
| `obj[][7]` | number | 订单缺货率(%) | - |
| `obj[][8]` | number | 订单缺货率环比涨跌幅(%);>=0红色上箭头,<0绿色下箭头 | - |
| `obj[][9]` | number | 按时发货率(%) | - |
| `obj[][10]` | number | 按时发货率环比涨跌幅(%);>=0红色上箭头,<0绿色下箭头 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
