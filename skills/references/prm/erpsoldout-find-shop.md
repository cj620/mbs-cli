# mbs prm erpsoldout-find-shop

店铺下拉列表查询(findShop)：商品侵权详情页加载时调用，获取当前可选店铺列表，用于渲染「请选择店铺」下拉框(#shopId)。POST 请求无任何请求参数，返回店铺ID与店铺名称集合。

## 用法

```bash
mbs prm erpsoldout-find-shop
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/findShop`
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
| `code` | number | 响应状态码，200=成功（同系统统一包装；601=未登录需跳转登录） | - |
| `desc` | string | 响应提示信息（同系统统一包装） | - |
| `obj[]` | array | 店铺列表（模板遍历对象，渲染店铺下拉 option） | - |
| `obj[][0]` | string | 店铺ID（作为 <option value>，搜索时回传后端 shopId 参数） | - |
| `obj[][1]` | string | 店铺名称（作为 <option> 显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
