<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-manage-shop

查询可管理刊登店铺列表：Lazada 批量修改标题页面初始化时调用，拉取当前用户可见/可管理的刊登店铺名称列表，用于渲染「选择刊登店铺」下拉框(#shopName)的选项。无请求参数，前端发起空体 POST，店铺范围由后端依据登录用户上下文确定。

## 用法

```bash
mbs pim erp-product-find-manage-shop
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaExportController/findManageShop`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 可管理刊登店铺名称列表；前端 if(data.obj) 成立才渲染下拉框 | - |
| `obj[]` | string | 店铺名称(shopname)，作为 #shopName 选项的 value 与展示文本(<option value="{{v}}">{{v}}</option>) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
