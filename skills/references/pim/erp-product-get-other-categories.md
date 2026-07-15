# mbs pim erp-product-get-other-categories

按名称查询子类目(其他类目)：「设置类目」弹窗中，根据输入的类目名称关键字 name 模糊匹配并返回可选的子类目(其他类目)列表，结果赋值给前端 settypeapp 的 sonMenulist，用于子类目选择。name 为空时前端直接 return 不发起请求。

## 用法

```bash
mbs pim erp-product-get-other-categories --name <string>
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/stockProduct/getOtherCategories`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `name` | name | query | string | 是 | - | 类目名称关键字(子类目名称模糊匹配关键字)。来源 getson(val) 入参 val；val 为空时前端直接 return 不请求 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 子类目(其他类目)列表；前端 data.obj || [] 存入 sonMenulist | - |
| `obj[][0]` | string | 类目名称(级联/下拉 label，来源 item.name) | - |
| `obj[][1]` | number | 类目序号ID(级联/下拉 value，来源 item.sequenceid) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
