<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-category

侵权下架-分类(一级分类)下拉查询：侵权下架SKU列表页加载时调用，获取「一级分类」下拉选择框的可选分类列表（返回分类名称数组），用于渲染 #category 下拉框的 <option>。无请求参数。

## 用法

```bash
mbs prm erpsoldout-category
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/category`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功；601=未登录/登录失效（跳登录页）；其它=失败弹出 desc | - |
| `desc` | string | 响应提示信息（失败时展示） | - |
| `obj[]` | array | 一级分类列表（分类名称字符串数组），用于渲染分类下拉框 <option> | - |
| `obj[]` | string | 分类名称（一级分类），模板中 {{value}} 同时作为 <option> 的 value 与显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
