<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-optimal-purchase

最优采购/预计到货信息查询：在店铺爆款监控列表中点击某行预计到货/日志入口时，按该行 ERP SKU 查询其最优采购方案下采购发货、采购到货、仓库签收等各环节的开始/完成/预警时间及整体预计到货时间，在预计到货弹窗以步骤表展示。

## 用法

```bash
mbs pim erp-product-get-optimal-purchase --skuQuery <string> --skuBody <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getOptimalPurchase`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `skuQuery` | sku | query | string | 是 | - | URL查询串中的SKU，值=当前列表行ERP SKU(item.erpSku，经 sessionStorage('logsku') 中转) |
| `skuBody` | sku | body | string | 是 | - | 请求体中的SKU，与query中的sku同值({ sku: sku })，冗余双传 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(最优采购/预计到货信息),赋值给 logdata | - |
| `obj.estimatedarrivaltime` | string | 预计到货时间(弹窗顶部展示,存在时才显示) | - |
| `obj.data[]` | array | 采购→到货各环节步骤列表(步骤表逐行渲染) | - |
| `obj.data[][0]` | string | 步骤名称。已知取值:采购发货/采购到货/仓库签收,其余按后端返回展示 | - |
| `obj.data[][1]` | string | 步骤开始时间(实际已发生取实际时间,否则取系统预测时间) | - |
| `obj.data[][2]` | string | 步骤完成时间(实际已发生取实际时间,否则取系统预测时间) | - |
| `obj.data[][3]` | number | 步骤状态。0=未到该步(black);1=当前步骤(高亮);2=已完成(brown) | - |
| `obj.data[][4]` | number | 是否预警。1=预警(当前步骤且isAlert==1显示警示样式nowwarn及感叹号);非1=正常 | - |
| `obj.data[][5]` | string | 其他信息-预留字段1(仅 stepname 为 采购发货/采购到货 时展示) | - |
| `obj.data[][6]` | string | 其他信息-预留字段2(仅 stepname 为 仓库签收 时展示) | - |
| `obj.data[][7]` | string | 预警时间(步骤表预警时间列展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
