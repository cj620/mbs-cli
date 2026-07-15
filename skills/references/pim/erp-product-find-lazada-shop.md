# mbs pim erp-product-find-lazada-shop

查询Lazada店铺列表：Lazada批量下架页面初始化时调用，无请求参数，返回当前用户可见的Lazada店铺名称列表（字符串数组），用于渲染顶部筛选店铺多选框与生成下架商品信息模态框店铺多选框。

## 用法

```bash
mbs pim erp-product-find-lazada-shop
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaExportController/findLazadaShop`
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
| `code` | number | 响应状态码,200=成功(本接口成功回调未读取,按系统统一响应结构补充,待人工确认) | - |
| `desc` | string | 响应提示信息(本接口成功回调未读取,按系统统一响应结构补充,待人工确认) | - |
| `obj[]` | array | 店铺名称列表(字符串数组),前端 data.obj 取出后传入模板循环渲染店铺多选项 | - |
| `obj[]` | string | 单个店铺名称,既作复选框 value 又作展示文本(模板 {{value}}) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
