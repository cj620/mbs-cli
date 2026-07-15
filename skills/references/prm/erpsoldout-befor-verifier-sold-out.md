# mbs prm erpsoldout-befor-verifier-sold-out

下架任务审核前关联SKU查询：平台商品下架页点击某下架任务“审核通过”链接时调用：传任务ID，返回该任务待审核的SKU列表(listbefore，左栏)与系统关联出的SKU列表(listAfter，右栏)，前端用 art-template(contentTemplate7) 渲染双栏勾选框，供审核人勾选后调用 passAudit 通过审核。

## 用法

```bash
mbs prm erpsoldout-befor-verifier-sold-out --id <string>
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/soldOut/beforVerifier`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | query | string | 是 | - | 下架任务ID。来源：列表行数据 value.id(任务编号)，经“审核通过”链接传入；用于查询该任务下待审核SKU及关联SKU |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息(失败时展示，统一响应字段) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.listbefore[]` | array | 待审核SKU列表(左栏)。listbefore.length>0 时渲染勾选区，否则提示不允许下架 | - |
| `obj.listbefore[][0]` | string | 下架任务ID(模板取 listbefore[0].id 作为 passAudit 的任务ID) | - |
| `obj.listbefore[][1]` | string | 商品图片URL(懒加载 data-original) | - |
| `obj.listbefore[][2]` | string | 商品名称 | - |
| `obj.listbefore[][3]` | string | SKU编码(勾选框 value，审核通过时收集) | - |
| `obj.listbefore[][4]` | string | 子SKU(勾选框 data-sku，展示“子SKU:xxx”，审核时拼入 alias) | - |
| `obj.listAfter[]` | array | 关联出的SKU列表(右栏) | - |
| `obj.listAfter[][0]` | string | 任务ID(前端成功回调中由请求 id 补写到每项，非接口原生返回)(待人工确认是否原生返回) | - |
| `obj.listAfter[][1]` | string | 商品图片URL(懒加载 data-original) | - |
| `obj.listAfter[][2]` | string | 商品名称 | - |
| `obj.listAfter[][3]` | string | SKU编码(勾选框 value) | - |
| `obj.listAfter[][4]` | string | 子SKU(勾选框 data-sku) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
