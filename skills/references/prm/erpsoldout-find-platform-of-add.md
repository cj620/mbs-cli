<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-find-platform-of-add

获取新增下架平台(及当前创建人)：平台商品下架(PlatformCommodityShelf)页面初始化及点击“提交下架SKU”时调用：无入参，返回当前可选的下架平台列表(平台ID/平台名称)，同时返回当前操作人(创建人)信息；前端取 obj[0].employeeName 作为创建人显示、用 contentTemplate6 渲染下架平台下拉框。

## 用法

```bash
mbs prm erpsoldout-find-platform-of-add
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/soldOut/findPlatformOfAdd`
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
| `code` | number | 响应状态码,200=成功(其余如601=未登录,前端跳登录页) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 业务数据列表(下架平台/创建人列表) | - |
| `obj[][0]` | string | 员工(创建人)姓名,前端取 obj[0].employeeName 显示于创建人栏 | - |
| `obj[][1]` | string | 平台ID(渲染为下拉项 value) | - |
| `obj[][2]` | string | 平台名称(渲染为下拉项显示文本及 data-value) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
