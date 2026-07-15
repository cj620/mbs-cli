<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-xn-sku-savenum

获取SKU特供虚拟仓库存设置：SKU详情页加载时查询当前SKU的「特供虚拟仓」设置：是否开启特供虚拟仓、保底库存值，用于回显复选框与保底库存输入框；无权限时返回字符串"没有权限"并隐藏整块设置区。

## 用法

```bash
mbs pim erp-product-get-xn-sku-savenum --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getXnSkuSavenum`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | SKU编号。来源=页面URL查询参数 SKU（前端 GetQueryString('SKU') 读取），拼接到接口URL ?sku= 后 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（非200时前端 alert(desc)） | - |
| `desc` | string | 响应提示信息（失败时弹窗展示） | - |
| `obj` | object | 业务数据对象；无权限时为字符串 "没有权限"，此时隐藏特供虚拟仓设置区 #supplywarehouse | - |
| `obj.isSupplyWarehouse` | number | 是否特供虚拟仓。0=否（复选框不勾选）；1=是（复选框勾选）。回显到 #isSupplyWarehouse 复选框 | - |
| `obj.warehouseInventory` | number | 保底库存（特供虚拟仓保底库存值），回显到 #warehouseInventory 输入框（页面占位符“保底库存”） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
