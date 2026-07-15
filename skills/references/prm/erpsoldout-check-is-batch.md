# mbs prm erpsoldout-check-is-batch

侵权审核-批量操作前批次校验：商品侵权审核列表中，点击批量「通过/不通过/删除」时，先把列表中勾选的侵权记录ID集合(submitIdList)提交后端校验是否满足批量条件(如是否同一批次/请求)。校验通过(code=200)后前端再弹确认框并调用 batchVerify 执行批量审核；校验不通过则用返回的 desc 文案提示。

## 用法

```bash
mbs prm erpsoldout-check-is-batch --submitIdList <array<string>>
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/checkIsBatch`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `submitIdList` | submitIdList | body | array<string> | 是 | - | 选中的侵权审核记录ID列表(批量操作勾选项)。来源控件：#content 表格复选框 input[name=mychk3]:checked 的 value。批量同审核需为同一批次(requestId)，否则前端拦截 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=校验通过(可继续批量操作)；非200=校验不通过，前端弹 warning 提示 | - |
| `desc` | string | 响应提示信息(校验不通过时作为提示文案展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
