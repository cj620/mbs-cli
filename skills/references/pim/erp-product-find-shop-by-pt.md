# mbs pim erp-product-find-shop-by-pt

按平台查询可刊登店铺(Wish刊登选店)：库存看板「Wish刊登」弹窗触发：按平台ID(固定'16'=Wish)查询当前用户可刊登的店铺名称列表，前端渲染到 #selectShop 下拉框供用户选择后跳转 /EditInformation 刊登页。

## 用法

```bash
mbs pim erp-product-find-shop-by-pt --platformid <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/smtProductController/findShopByPt`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformid` | platformid | body | string | 是 | - | 平台ID。前端硬编码固定传 '16'(=Wish 平台)，用于按平台过滤可刊登店铺。来源：代码常量(非控件) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口前端未校验) | - |
| `desc` | string | 响应提示信息(本接口前端未使用) | - |
| `obj[]` | array | 可刊登店铺名称列表(前端据此渲染 #selectShop 下拉，data.obj 为真才渲染并弹窗) | - |
| `obj[]` | string | 店铺名称(数组元素为字符串，作为 <option> 的 value 与显示文本；选中后传入 /EditInformation?shopName=<值>) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
