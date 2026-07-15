# mbs ars erpmonitor-shop-by-platform3

店铺列表查询(按平台/shopByPlatform3)：热销商品(店铺)监控页加载时调用，无参 POST，后端按登录上下文返回店铺列表，前端通过 art-template 模板 contentTemplate2 渲染为店铺下拉框(#shopId)的 option 列表。

## 用法

```bash
mbs ars erpmonitor-shop-by-platform3
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/shopByPlatform3`
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
| `obj[]` | array | 店铺列表(模板遍历的数据源 {{each obj value i}})，每项为一个店铺对象 | - |
| `obj[][0]` | string | 店铺ID(渲染为 <option> 的 value，作为店铺筛选取值) | - |
| `obj[][1]` | string | 店铺名称(渲染为 <option> 的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
