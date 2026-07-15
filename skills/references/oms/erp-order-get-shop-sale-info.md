# mbs oms erp-order-get-shop-sale-info

店铺昨日销售表现查询：销售看板（销售名片页）右侧 店铺昨日表现 卡片数据源。页面加载时无参 GET 调用，返回当前用户可见店铺列表，每个店铺含昨日销售额、订单量、在线量、动销率、缺货率、按时发货率、退款金额及各自的环比涨跌幅，由 #ShopSaleTemplate 循环渲染。

## 用法

```bash
mbs oms erp-order-get-shop-sale-info
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleVistingCard/getShopSaleInfo`
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
| `code` | number | 响应状态码,200=成功(标准响应外壳,前端未直接读取,待人工确认) | - |
| `desc` | string | 响应提示信息(标准响应外壳,前端未直接读取,待人工确认) | - |
| `obj[]` | array | 店铺昨日表现列表(前端 list2 = data.obj 循环渲染) | - |
| `obj[][0]` | number | 店铺排名等级(有值时展示 N级) | - |
| `obj[][1]` | string | 店铺名称 | - |
| `obj[][2]` | string | 店铺销售负责人/组长 | - |
| `obj[][3]` | number | 昨日销售额 | - |
| `obj[][4]` | number | 销售额环比涨跌幅(%),≥0 红色上箭头,<0 绿色下箭头 | - |
| `obj[][5]` | number | 昨日订单量 | - |
| `obj[][6]` | number | 订单量环比涨跌幅(%),≥0 红色上箭头,<0 绿色下箭头 | - |
| `obj[][7]` | number | 在线量(SPU 在线商品数) | - |
| `obj[][8]` | number | 在线量环比涨跌幅(%),≥0 红色上箭头,<0 绿色下箭头 | - |
| `obj[][9]` | number | 动销率(%) | - |
| `obj[][10]` | number | 动销率环比涨跌幅(%),≥0 红色上箭头,<0 绿色下箭头 | - |
| `obj[][11]` | number | 缺货率(%) | - |
| `obj[][12]` | number | 缺货率环比涨跌幅(%),≥0 红色上箭头,<0 绿色下箭头 | - |
| `obj[][13]` | number | 按时发货率(%) | - |
| `obj[][14]` | number | 按时发货率环比涨跌幅(%),可能为 null(为 null 时模板显示 (---)) | - |
| `obj[][15]` | number | 昨日退款金额 | - |
| `obj[][16]` | number | 退款金额环比涨跌幅(%),≥0 红色上箭头,<0 绿色下箭头 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
