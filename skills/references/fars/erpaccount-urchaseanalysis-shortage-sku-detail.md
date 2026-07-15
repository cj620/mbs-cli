<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-urchaseanalysis-shortage-sku-detail

缺货SKU明细查询：采购分析-缺货SKU明细查询：根据销量级别(typename)、状态(status)、开发员(oper3)查询对应缺货SKU列表，返回每个缺货SKU的图片、名称、SKU、状态、成本价、供应商、缺货量、在途量、开发员/采购员等信息，用于「缺货SKU」看板明细渲染。

## 用法

```bash
mbs fars erpaccount-urchaseanalysis-shortage-sku-detail --typename <string> --status <string> [--oper3 <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/urchaseanalysisShortageSkuDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `typename` | typename | query | string | 是 | - | 销量级别/类型名称，从当前页URL query读取并拼接到接口URL |
| `status` | status | query | string | 是 | - | 状态(如清仓/停产等产品状态)，从当前页URL query读取 |
| `oper3` | oper3 | query | string | 否 | - | 开发员，从当前页URL query读取；为空或'undefined'时置为空串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 缺货SKU明细列表(模板遍历渲染) | - |
| `obj[][0]` | string | 商品图片URL(加载失败回退默认图) | - |
| `obj[][1]` | string | 商品名称 | - |
| `obj[][2]` | string | SKU编号(链接跳转SKU详情) | - |
| `obj[][3]` | string | 状态/产品状态；'清仓'或'停产'显示警告样式,其它显示成功样式 | - |
| `obj[][4]` | string | 产品名称(红色展示) | - |
| `obj[][5]` | number | 成本价 | - |
| `obj[][6]` | string | 销量级别/类型名称(与请求typename对应) | - |
| `obj[][7]` | string | 供应商链接地址 | - |
| `obj[][8]` | string | 供应商名称 | - |
| `obj[][9]` | number | 缺货量 | - |
| `obj[][10]` | number | 总在途量 | - |
| `obj[][11]` | number | 付款在途量 | - |
| `obj[][12]` | string | 开发员(与请求oper3对应) | - |
| `obj[][13]` | string | 采购员 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
