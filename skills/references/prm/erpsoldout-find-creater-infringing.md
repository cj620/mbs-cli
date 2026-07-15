# mbs prm erpsoldout-find-creater-infringing

获取提交人(创建人)下拉列表：商品侵权列表页初始化时调用，拉取提交人/创建人候选员工列表，渲染 #Founder 下拉框。前端 findCreater() 通过 $.ajax POST 调用，无请求参数，成功后用 art-template 模板 contentTemplate2 渲染。

## 用法

```bash
mbs prm erpsoldout-find-creater-infringing
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/findCreater`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 提交人(创建人)列表，模板遍历渲染下拉选项 | - |
| `obj[][0]` | string | 提交人(员工)ID，作为 <option value> 提交值 | - |
| `obj[][1]` | string | 提交人(员工)姓名，作为 <option> 显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
