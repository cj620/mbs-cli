<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-sid

印尼/海外仓SKU刊登校验查询(getSkuInfo)：SKU详情页点击刊登下拉选择平台时，按当前SKU的sid查询该SKU(印尼/海外仓)是否需要刊登提醒。obj===0直接进入对应平台刊登页；obj!==0弹出确认框务必核实海外仓sku是否需要刊登，确认后再刊登。

## 用法

```bash
mbs pim erp-product-sid
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/indonesia/getSkuInfo/{sid}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sid` | sid | path | string | 是 | - | SKU记录ID/序号ID(路径变量)。来源SKU详情对象obj[0].sid，前端以${sku.sid}拼接到URL路径末尾。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(系统统一字段) | - |
| `desc` | string | 响应提示信息(系统统一字段) | - |
| `obj` | number | 刊登校验结果标志。0=无需提醒,直接进入对应平台刊登页(openPublish);非0=需人工核实,前端弹出确认框务必核实海外仓sku是否需要刊登,确认后再刊登。前端用严格相等obj===0判断,非0具体取值含义待人工确认。 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
