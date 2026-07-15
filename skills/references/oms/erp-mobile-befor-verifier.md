# mbs oms erp-mobile-befor-verifier

侵权审核SKU预校验(审核前查询)：移动端侵权下架审核页打开时，根据侵权记录 id 查询该侵权单下「待审核SKU(listbefore)」与「关联出的SKU(listAfter)」两组列表，分别渲染到审核页两块卡片，供用户勾选后审核通过。

## 用法

```bash
mbs oms erp-mobile-befor-verifier --id <string>
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/infringing/beforVerifier`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | query | string | 是 | - | 侵权审核记录ID。URL查询参数，来源 GetQueryString('id') 读取当前页面 URL 的 id，用于定位待审核的侵权单。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（统一包裹字段，本接口成功回调未直接读取）(待人工确认) | - |
| `desc` | string | 响应提示信息（统一包裹字段）(待人工确认) | - |
| `obj` | object | 业务数据对象，成功回调据 if(data.obj) 判定后渲染 | - |
| `obj.listbefore[]` | array | 待审核SKU列表（渲染至 #auditlistContent，模板变量 list，对应页面“待审核SKU”卡片） | - |
| `obj.listbefore[][0]` | string | SKU编码（复选框 value，渲染 {{v.sku}}） | - |
| `obj.listbefore[][1]` | string | 商品图片URL（渲染 <img src={{v.picture}}>，加载失败回退占位图） | - |
| `obj.listbefore[][2]` | string | 产品名称（渲染 {{v.productName}}） | - |
| `obj.listbefore[][3]` | string | 子SKU（渲染 {{v.sonSKu}}，注意大小写 SKu） | - |
| `obj.listAfter[]` | array | 关联出的SKU列表（渲染至 #auditlistContent2，模板变量 list2，对应页面“关联出的SKU”卡片） | - |
| `obj.listAfter[][0]` | string | SKU编码（复选框 value，渲染 {{value.sku}}） | - |
| `obj.listAfter[][1]` | string | 商品图片URL（渲染 <img src={{value.picture}}>，加载失败回退占位图） | - |
| `obj.listAfter[][2]` | string | 产品名称（渲染 {{value.productName}}） | - |
| `obj.listAfter[][3]` | string | 子SKU（渲染 {{value.sonSKu}}） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
