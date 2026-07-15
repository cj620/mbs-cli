# mbs oms erp-order-get-shop-site

店铺站点列表查询(getShopSite)：获取「店铺站点」下拉列表数据。页面加载时(password())无条件调用，返回当前可选的店铺站点字符串数组，用于渲染 #password(店铺站点)下拉选择框；用户选中后作为店铺业绩列表查询/导出的 password 过滤条件。

## 用法

```bash
mbs oms erp-order-get-shop-site
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/shopAchievements/getShopSite`
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
| `code` | number | 响应状态码,200=成功(本接口仅判断 data.obj 是否存在，未直接判 code) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 店铺站点名称列表(字符串数组)；为空/不存在时下拉仅显示「-请选择店铺站点-」 | - |
| `obj[]` | string | 店铺站点名称(数组元素，前端直接用作 <option> 的 value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
