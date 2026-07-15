# mbs oms erp-mobile-examine-infringing-info

侵权SKU审核(审核通过)：移动端侵权审核页：用户在「待审核SKU」与「关联出的SKU」两个列表中勾选 SKU 后，点击「审核通过已选择的SKU」提交，把所选侵权 SKU 及其关联 SKU 以审核状态=2(通过)提交给后端完成侵权审核处理。

## 用法

```bash
mbs oms erp-mobile-examine-infringing-info --id <string> --verifyStatus <string> [--skus <string>] [--unionSkus <string>]
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/infringing/examineInfringingInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | body | string | 是 | - | 侵权单ID。来源：浏览器地址栏 query 参数 GetQueryString('id')。 |
| `verifyStatus` | verifyStatus | body | string | 是 | - | 审核状态。前端固定传 "2"（2=审核通过）。 |
| `skus` | skus | body | string | 否 | - | 待审核侵权SKU集合。来源：「待审核SKU」列表勾选复选框(name=checkbox)的 value(即 v.sku)，多选逗号拼接，存于 .audited 元素 value 属性。可为空字符串。 |
| `unionSkus` | unionSkus | body | string | 否 | - | 关联出的SKU集合。来源：「关联出的SKU」列表勾选复选框(name=checkbox2)的 value(即 value.sku)，多选逗号拼接，存于 .Relation 元素 value 属性。可为空字符串。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=审核成功(前端据此判断成功/失败分支)。 | - |
| `desc` | string | 响应提示信息(成功/失败均通过 mui.toast 展示)。 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
