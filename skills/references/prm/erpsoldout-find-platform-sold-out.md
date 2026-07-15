<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-find-platform-sold-out

查询平台列表(下架平台下拉)：平台商品下架页面初始化时调用，无入参，返回全部平台列表(平台ID+平台名称)，用于渲染「请选择平台」下拉框(#platformName)的选项。

## 用法

```bash
mbs prm erpsoldout-find-platform-sold-out
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/soldOut/findPlatform`
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
| `code` | number | 响应状态码，200=成功；601=未登录 | - |
| `desc` | string | 响应提示信息(异常时用于弹窗提示) | - |
| `obj[]` | array | 平台列表数组(模板 {{each obj}} 遍历渲染下拉选项) | - |
| `obj[][0]` | string | 平台ID(渲染为 <option> 的 value，作为提交时的平台标识) | - |
| `obj[][1]` | string | 平台名称(渲染为 <option> 的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
