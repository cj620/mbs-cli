# mbs prm yypms-pms-id

Walmart 产品属性条件必填规则查询：Walmart 刊登编辑页加载产品属性时调用：依据刊登任务ID查询该商品/模板下属性条件必填联动规则列表。前端据此在某属性当前值命中 conditionValue 时，把 thenRequiredField 指定的字段由选填动态切换为必填（反之回退为选填）。

## 用法

```bash
mbs prm yypms-pms-id
```

## API

- Service: `yypms/pms`
- Method: `GET`
- Path: `/yypms/pms/walmart/getConditionRequiredInfo/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | string | 是 | - | 刊登任务/草稿详情ID（路径参数）。取自前端路由参数 route.params.id，即编辑页 URL /v3/publish/walmart/edit/{id} 中的 {id}。来源：页面路由，非用户输入框。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码（统一包装，200/成功标识） | - |
| `desc` | string | 响应提示信息（统一包装） | - |
| `obj[]` | array | 条件必填规则列表（前端取 res.data.obj 赋值给 FormRequiredInfo） | - |
| `obj[][0]` | string | 条件字段名。与产品属性项的 fieldName 匹配（item.fieldName == element.conditionField），用于定位触发联动的源属性 | - |
| `obj[][1]` | string | 条件触发值。当源属性当前值 nowValues 包含或等于该值时触发联动 | - |
| `obj[][2]` | string | 命中条件后需置为必填的目标字段名。命中时由 form.other 移入 form.required 并 required=1；未命中时回退至 form.other 并 required=0（PrevRequired==1 时保持必填不回退） | - |
| `obj[][3]` | string | 必填字段名（仅出现在 attrs.vue 注释代码块中，当前版本未实际启用）(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
