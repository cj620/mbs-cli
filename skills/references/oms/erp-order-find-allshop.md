<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-allshop

查询全部店铺(店铺下拉)：PB广告费报表(按店铺查看)页面初始化时拉取全部店铺列表，用于渲染「请选择店铺」下拉框。GET 请求，无任何入参；响应 obj 为店铺数组，前端通过 art-template 模板 contentTemplate2 遍历，仅取 shopname 作为 option 的 value 与文本。

## 用法

```bash
mbs oms erp-order-find-allshop
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/wishProductBoost/findAllshop`
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
| `code` | number | 响应状态码,200=成功(标准响应外壳，本页未直接读取)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准响应外壳，本页未直接读取)(待人工确认) | - |
| `obj[]` | array | 店铺列表数组(成功回调据 data.obj 判断有数据后渲染下拉) | - |
| `obj[]` | string | 店铺名称(作为 #shopName 下拉 option 的 value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
