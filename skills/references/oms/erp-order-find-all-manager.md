<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-all-manager

查询全部店长列表：Wish推广(ProductBoost)报表"按照listing查看"页面初始化时调用，无入参，返回全部店长(店铺负责人)列表，用于渲染顶部"请选择店长"下拉框(#Shopowner)；选中后再联动查询其名下店铺。

## 用法

```bash
mbs oms erp-order-find-all-manager
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/wishProductBoost/findAllManager`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本页未显式判断,按域内统一约定)(待人工确认) | - |
| `desc` | string | 响应提示信息(本页未使用)(待人工确认) | - |
| `obj[]` | array | 店长(店铺负责人)列表,前端赋给模板 list | - |
| `obj[]` | string | 店长(店铺负责人)名称,作为下拉 option 的 value 与显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
