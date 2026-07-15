<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-check-batch-modify-price

校验批量改价（批量改价前置校验）：亚马逊自动刊登确认列表中，勾选若干待刊登数据后点击“批量改价”时触发：把所选行的分组ID(groupIds)提交后端做改价前置校验。校验通过返回这批数据对应的币种符号(obj)，前端弹出批量改价弹窗并把币种显示在价格输入框旁；校验不通过则返回提示信息(desc)弹框告警。

## 用法

```bash
mbs pim erp-product-check-batch-modify-price --groupIds <array<string>>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/amazonProductPublish/checkBatchModifyPrice`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `groupIds` | groupIds | body | array<string> | 是 | - | 待批量改价的商品分组ID列表。来源：列表所有勾选行的 data-groupid，经 _getSelectedRowsData(["groupid"]).map(i=>i.groupid) 组成数组。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息（校验失败/不允许改价时的告警文案，前端写入 #tishi 弹框） | - |
| `obj` | string | 校验通过时返回的币种/货币符号；前端 data.obj 为真则弹出批量改价弹窗并写入 #currencyBatchPrice 显示在价格输入框旁；为空则视为校验未通过。 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
