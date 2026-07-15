# mbs pim erp-product-get-employee-category

获取员工发布类目（getEmployeeCategory）：进入“必发SPU”页面时调用，获取当前登录员工对应的发布类目信息（一级类目、二级类目），用于在页面顶部 #categoryTips 处展示“一级类目：xxx； 二级类目：xxx”的提示文案。

## 用法

```bash
mbs pim erp-product-get-employee-category
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/stockProduct/getEmployeeCategory`
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
| `code` | number | 响应状态码,200=成功（统一响应结构，前端本接口未显式判断）(待人工确认) | - |
| `desc` | string | 响应提示信息（统一响应结构）(待人工确认) | - |
| `obj` | object | 业务数据对象（员工发布类目信息；前端 success({obj}) 解构使用） | - |
| `obj.publishFirstCategory` | string | 一级类目（发布一级类目名称，前端展示“一级类目：xxx”，为空时显示“无”） | - |
| `obj.publishSecondCategory` | string | 二级类目（发布二级类目名称，前端展示“二级类目：xxx”，为空时显示“无”） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
