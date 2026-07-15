<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erp-finance-sku

出库单SKU明细查询：在「商品退回(供应商回款)」列表中点击某条出库单行展开时，按出库单号(orderId)懒加载该单下的 SKU 明细行，返回每个 SKU 的名称、数量、成本价/成本合计、零售价/零售合计及异常处理信息，用于在树形子行中展示。

## 用法

```bash
mbs fars erp-finance-sku --orderId <string>
```

## API

- Service: `erpFinance`
- Method: `GET`
- Path: `/erpFinance/erpFinance/manufacture/payment/get/order/sku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `orderId` | orderId | query | string | 是 | - | 出库单号(订单号)。来源：被展开行 row.orderId（列表行的出库单号） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `obj[]` | array | SKU 明细列表（expendData[]），每个元素为该出库单下的一个 SKU 行 | - |
| `obj[][0]` | string | SKU 编号（子行「回款状态」列展示为 SKU） | - |
| `obj[][1]` | string | 商品名称（子行「出库单号」列展示，列头标注 商品名称） | - |
| `obj[][2]` | number | 数量（子行「运单号」列展示，列头标注 数量） | - |
| `obj[][3]` | number | 成本价（子行「订单状态」列展示，列头标注 成本价） | - |
| `obj[][4]` | number | 成本价合计（子行「创建人」列展示，列头标注 成本价合计） | - |
| `obj[][5]` | number | 零售价（子行「建单日期」列展示，列头标注 零售价） | - |
| `obj[][6]` | number | 零售价合计（子行「发货日期」列展示，列头标注 零售价合计） | - |
| `obj[][7]` | string | 异常处理人（「供应商旺旺号」列在 exceptionMsg 存在时换行展示） | - |
| `obj[][8]` | string | 异常信息/异常说明（「供应商旺旺号」列展示，存在时触发异常信息块渲染） | - |
| `obj[][9]` | string | 异常时间（类型为 string|Date；「供应商旺旺号」列在 exceptionMsg 存在时换行展示） | - |
| `obj[][10]` | string | 商品图片URL（「回款状态」列 <img v-if="row.image"> 引用；expendData 类型未声明该字段，是否由本接口返回(待人工确认)) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
