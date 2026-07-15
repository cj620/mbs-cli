# mbs ars erpmonitor-find-shops-by-shop-manager-fanno-reviseprice-confirm

根据店铺负责人查询店铺列表：fanno提价页"生成提价商品信息"弹窗中，选择"店铺负责人"后联动触发；以负责人(员工名)列表为入参，查询其名下的店铺，返回店铺名称集合用于填充"店铺"多选下拉框。

## 用法

```bash
mbs ars erpmonitor-find-shops-by-shop-manager-fanno-reviseprice-confirm --shopManager <string>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/fannoRevisepriceConfirm/findShopsByShopManager`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopManager` | shopManager | body | string | 是 | - | 店铺负责人(员工名 employee_name，多选时英文逗号拼接)。来源控件 #shopManagerSelect 多选下拉。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `obj[]` | array | 店铺列表(该负责人名下店铺数组，用于渲染店铺多选下拉) | - |
| `obj[]` | string | 店铺名称(模板中作为 option 的 value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
