<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-submit

提交人下拉列表查询：SKU下架管理页加载时调用，获取「提交人」筛选下拉框的人员列表（员工ID + 员工姓名），用于渲染 #submitRen 选择框。POST 请求，无请求体参数；返回 obj 数组，前端用 art-template 模板 contentTemplate3 逐项渲染为 option。

## 用法

```bash
mbs prm erpsoldout-submit
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/submit`
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
| `code` | number | 响应状态码。200=成功；601=登录失效(跳登录页)；其他=失败(弹 desc 提示) | - |
| `desc` | string | 响应提示信息（失败/登录失效时展示） | - |
| `obj[]` | array | 提交人(员工)列表 | - |
| `obj[][0]` | string | 员工ID（渲染为 option 的 value，作为 submitBy 查询条件传给列表接口） | - |
| `obj[][1]` | string | 员工姓名（渲染为 option 的显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
