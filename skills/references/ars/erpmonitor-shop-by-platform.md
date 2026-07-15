# mbs ars erpmonitor-shop-by-platform

平台店铺/店铺负责人下拉查询：热销商品监控页初始化及平台切换时调用：按平台(platformId)查询该平台下的店铺列表与店铺负责人列表，返回结果分别渲染到店铺下拉(shopId/shopName)与店铺负责人下拉(saleLeader)。无 platformId 时返回全部平台的店铺/负责人。

## 用法

```bash
mbs ars erpmonitor-shop-by-platform [--platformId <string>]
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/shopByPlatform`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | query | string | 否 | - | 平台ID(经查询串 ?platformId= 传入,用于筛选该平台下的店铺/负责人;初始化调用不传即查询全部平台) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 店铺列表数组(模板 {{each obj value i}} 迭代对象),每项为一条店铺记录 | - |
| `obj[][0]` | string | 店铺ID(渲染为店铺下拉 #shopId 的 option value,模板 contentTemplate2) | - |
| `obj[][1]` | string | 店铺名称(渲染为店铺下拉 #shopId 的 option 显示文本,模板 contentTemplate2) | - |
| `obj[][2]` | string | 店铺负责人(渲染为店铺负责人下拉 #saleLeader 的 option value 与显示文本,模板 contentTemplate3) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
