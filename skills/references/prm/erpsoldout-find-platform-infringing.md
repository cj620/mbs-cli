# mbs prm erpsoldout-find-platform-infringing

查询平台列表(侵权商品筛选用)：进入侵权商品明细页时自动调用，获取全部平台列表，渲染顶部「请选择平台」下拉框(#platformName)的选项，供后续侵权商品查询/导出按平台筛选。该接口为无参 POST 查询。

## 用法

```bash
mbs prm erpsoldout-find-platform-infringing
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/findPlatform`
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
| `code` | number | 响应状态码,200=成功(统一外壳,本接口回调未引用，待人工确认) | - |
| `desc` | string | 响应提示信息(统一外壳,本接口回调未引用，待人工确认) | - |
| `obj[]` | array | 平台列表(模板 {{each obj}} 遍历的数据源) | - |
| `obj[][0]` | string | 平台ID(作为下拉框 <option> 的 value) | - |
| `obj[][1]` | string | 平台名称(作为下拉框 <option> 的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
