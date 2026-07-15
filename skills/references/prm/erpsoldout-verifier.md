# mbs prm erpsoldout-verifier

获取侵权审核人列表：商品侵权审核页加载时调用，获取可选的侵权审核人(审核人)员工列表，用于渲染筛选区 #Auditor 下拉框。无请求参数；响应为审核人数组，前端用 art-template 模板 contentTemplate5 遍历 obj 渲染 option，取 employeeId 作为 value、employeeName 作为显示文本。

## 用法

```bash
mbs prm erpsoldout-verifier
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/verifier`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一包装字段) | - |
| `desc` | string | 响应提示信息(统一包装字段) | - |
| `obj[]` | array | 审核人(员工)列表,模板遍历渲染 #Auditor 下拉选项 | - |
| `obj[][0]` | string | 审核人(员工)ID,作为 option 的 value 提交(即筛选参数 infringingVerifier) | - |
| `obj[][1]` | string | 审核人(员工)姓名,作为 option 显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
