<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-purchase-bysku

SKU采购异常消息查询：SKU详情页加载「采购异常」(searchAwait) 面板时调用，按 SKU 查询该商品的采购异常消息列表（异常状态、消息类型、消息详情、反馈、开发员/采购员、任务推送与截止日期等），用于渲染 awaitTempalte 表格。

## 用法

```bash
mbs pim erp-product-get-purchase-bysku --sku <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getPurchaseBysku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | 商品SKU编号（URL query 参数，来源于前端页面 URL 的 SKU 参数，经 GetQueryString('SKU') 取得；无对应输入控件） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（本回调未强校验，仅按其它接口惯例为200成功） | - |
| `desc` | string | 响应提示信息 | - |
| `content` | string | 区域显隐控制标记；为 "0" 时隐藏 #contentA，否则显示 | - |
| `obj[]` | array | 采购异常消息列表（前端判 obj.length>0 才渲染） | - |
| `obj[][0]` | string | 商品主图URL（加载失败回退 /2018ui/assets/images/timg.jpg） | - |
| `obj[][1]` | string | 商品SKU编号（行内链接跳转 SKU 详情） | - |
| `obj[][2]` | string | 商品名称（含 title 悬浮提示） | - |
| `obj[][3]` | number | 处理状态枚举。0=未处理；1=开发已处理 | - |
| `obj[][4]` | string | 消息类型名称 | - |
| `obj[][5]` | string | 消息详情 | - |
| `obj[][6]` | string | 反馈时间（与反馈消息同列展示） | - |
| `obj[][7]` | string | 反馈消息内容 | - |
| `obj[][8]` | string | 创建时间 | - |
| `obj[][9]` | string | 开发员 | - |
| `obj[][10]` | string | 采购员 | - |
| `obj[][11]` | string | 任务推送日期 | - |
| `obj[][12]` | string | 截止完成日期 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
