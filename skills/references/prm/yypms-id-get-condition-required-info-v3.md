# mbs prm yypms-id-get-condition-required-info-v3

Walmart 属性条件必填规则查询：Walmart 刊登商品编辑页加载产品属性时调用：按商品(草稿/listing)ID 获取该模板的条件必填联动规则列表。前端据此规则，当某属性(conditionField)取到指定值(conditionValue)时，把被联动字段(thenRequiredField)从选填动态切换为必填，反之切回选填。

## 用法

```bash
mbs prm yypms-id-get-condition-required-info-v3
```

## API

- Service: `yypms`
- Method: `GET`
- Path: `/yypms/pms/walmart/getConditionRequiredInfoV3/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | string | 是 | - | 路径参数，取自 route.params.id，为 Walmart 刊登编辑页当前商品(草稿/listing)ID；用于定位需要查询条件必填规则的模板对象。直接拼接在 URL 末尾。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码（统一包装字段，200=成功） | - |
| `desc` | string | 响应提示信息（统一包装字段） | - |
| `content` | string | 响应附加内容（统一包装字段） | - |
| `success` | boolean | 是否成功（统一包装字段） | - |
| `obj[]` | array | 条件必填规则列表（前端唯一消费字段，赋值给 FormRequiredInfo） | - |
| `obj[][0]` | string | 条件字段名：被监听的来源属性 fieldName。前端以 item.fieldName == element.conditionField 匹配触发规则。 | - |
| `obj[][1]` | string | 条件取值：触发该规则的来源属性值。前端判断 item.nowValues.includes(conditionValue) || item.nowValues == conditionValue 命中。 | - |
| `obj[][2]` | string | 联动必填字段名：条件命中时该字段由选填移入必填(form.other→form.required)，未命中则移回选填。 | - |
| `obj[][3]` | string | 联动字段名(待人工确认)：仅出现在被注释逻辑中，当前未实际使用，含义疑同 thenRequiredField。 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
