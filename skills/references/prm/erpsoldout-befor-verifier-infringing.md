<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-befor-verifier-infringing

侵权审核-关联SKU查询(beforVerifier)：在“商品侵权”列表点击单条/批量审核时，按侵权记录ID(id)查询该记录关联的“审核后(listAfter)”与“审核前(listbefore)”SKU列表，用于侵权审核弹框中展示并勾选要提交的侵权SKU；返回每个SKU的图片、子SKU、相似度评分、是否侵权等。

## 用法

```bash
mbs prm erpsoldout-befor-verifier-infringing --id <string>
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/beforVerifier`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | string | 是 | - | 侵权记录ID(待审核侵权提交记录主键)，来源列表行复选框value(item.id)，以表单字段id提交 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(异常时展示,待人工确认是否本接口返回) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.listAfter[]` | array | 审核后关联SKU列表 | - |
| `obj.listAfter[][0]` | string | SKU编号(行主键标识) | - |
| `obj.listAfter[][1]` | string | 子SKU(空时显示--,审核提交时拼为alias) | - |
| `obj.listAfter[][2]` | string | SKU图片URL(v-lazy懒加载) | - |
| `obj.listAfter[][3]` | string | 商品名称 | - |
| `obj.listAfter[][4]` | number | 相似度评分(0~1,前端×100保留2位展示%,>0才显示) | - |
| `obj.listAfter[][5]` | string | 是否侵权标记。'1'=侵权(显示红色侵权标签);其它=非侵权 | - |
| `obj.listbefore[]` | array | 审核前关联SKU列表(后端键名为小写listbefore) | - |
| `obj.listbefore[][0]` | string | SKU编号(行主键标识,同listAfter) | - |
| `obj.listbefore[][1]` | string | 子SKU(同listAfter) | - |
| `obj.listbefore[][2]` | string | SKU图片URL(同listAfter) | - |
| `obj.listbefore[][3]` | string | 商品名称(同listAfter) | - |
| `obj.listbefore[][4]` | number | 相似度评分(同listAfter) | - |
| `obj.listbefore[][5]` | string | 是否侵权标记(同listAfter) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
