# mbs pim erp-product-get-shop-by-group

按店长查询其分组下店铺：必发SPU管理页"换店铺/重新派发"功能：根据选定的店长(oper)查询该店长所管辖分组下的全部店铺，前端用返回的店铺列表渲染 shopnameTemplate(name=chname 多选复选框)并默认全选，供后续重新派发/换店铺使用。

## 用法

```bash
mbs pim erp-product-get-shop-by-group [--oper <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/stockProduct/getShopByGroup`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `oper` | oper | query | string | 否 | - | 店长(取自页面"请选择店长"下拉 #shopmanger 的值，即店长姓名 employee_name；多选时以逗号拼接)。为空则查询不限店长 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 该店长分组下的店铺列表(前端赋给 list 渲染 shopnameTemplate，复选框 name=chname 默认全选) | - |
| `obj[][0]` | string | 店铺ID(复选框/选项的 value，用于后续重新派发)(待人工确认：inventory.html 内 shopnameTemplate 未找到，字段名依同源店铺模板推定) | - |
| `obj[][1]` | string | 店铺名称(选项显示文本)(待人工确认：同上) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
