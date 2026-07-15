# mbs prm erpsoldout-find-creater-sold-out

查询下架任务创建人列表：平台商品下架页加载时调用，拉取“创建人”筛选下拉框的可选项列表，用于按创建人过滤下架任务。无任何请求参数；返回创建人(员工)集合，每项含员工ID与员工姓名，前端用 art-template 渲染为 #Founder 下拉框的 <option>。

## 用法

```bash
mbs prm erpsoldout-find-creater-sold-out
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/soldOut/findCreater`
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
| `code` | number | 响应状态码，200=成功（601=未登录跳登录页） | - |
| `desc` | string | 响应提示信息（异常时前端弹窗展示） | - |
| `obj[]` | array | 创建人(员工)列表，模板遍历项渲染为创建人下拉选项 | - |
| `obj[][0]` | string | 员工(创建人)ID，作为 <option> 的 value，对应查询接口的 creater 参数 | - |
| `obj[][1]` | string | 员工(创建人)姓名，作为 <option> 显示文本 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
