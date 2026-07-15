<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-smt-fail-prop-get-for-write

刊登失败属性回写值查询：在「SMT自动刊登-刊登失败编辑」弹窗中，根据 uniqueId(刊登记录/itemId) 查询该商品此前已写入的失败属性回写值列表，前端把每个属性的 id,en 拼接后回填到对应下拉框 #selectValue{i}，实现编辑回显。

## 用法

```bash
mbs pim erp-product-smt-fail-prop-get-for-write --uniqueId <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/smtProductController/smtFailPropGetForWrite`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `uniqueId` | uniqueId | query | string | 是 | - | 刊登记录唯一标识(itemId/uniqueId)，URL query 拼接 ?uniqueId=，来源列表行 data-uniqueid |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息(统一响应结构字段) | - |
| `obj[]` | array | 已写入的失败属性回写值列表，下标与编辑弹窗下拉框 #selectValue{i} 一一对应 | - |
| `obj[][0]` | number | 属性值ID(回填到下拉框 value 第1段；保存时 Number(split(',')[0])) | - |
| `obj[][1]` | string | 属性值英文名(回填到下拉框 value 第2段；保存时 split(',')[1]) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
