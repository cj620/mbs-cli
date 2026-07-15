<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-shop-id

获取店铺刊登大类(一级类目)列表：亚马逊自动刊登配置弹窗(showModal)打开时，按店铺ID查询该店铺可选的刊登「大类(一级类目)」名称列表，用于渲染 #firstCategory 多选下拉(select2)。店铺ID以路径参数形式传入。

## 用法

```bash
mbs pim erp-product-shop-id
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getFirstCategory/{shopId}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopId` | shopId | path | string | 是 | - | 店铺ID(路径参数)。取自 baseData.shopId，在 showModal(obj) 中由被点击店铺元素的 data-shopid 赋值($(obj).data("shopid"))，来源控件为店铺列表「设置/配置」按钮 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端据 r.code == 200 判断是否渲染下拉) | - |
| `desc` | string | 响应提示信息(标准包裹字段，本接口前端未使用) | - |
| `obj[]` | array | 大类(一级类目)名称列表；元素为字符串，前端 r.obj || [] 兜底为空数组 | - |
| `obj[]` | string | 大类(一级类目)名称(数组元素)。模板中作为 <option value="{{item}}">{{item}}</option>，即 value 与显示文本均为该名称 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
