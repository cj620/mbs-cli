<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-get-primary-category

获取大类(一级类目)列表：移动端「开发搜索」页面初始化时调用，拉取“大类(一级类目)”候选列表，用于渲染大类多选复选框。无任何请求参数，返回大类的 id/name 列表，前端用 id 作为复选框 value、name 作为复选框标签。

## 用法

```bash
mbs oms erp-mobile-get-primary-category
```

## API

- Service: `erpMobile`
- Method: `GET`
- Path: `/erpMobile/erpMobile/saleTrendChart/getPrimaryCategory`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 大类(一级类目)列表(前端据 data.obj 判断是否渲染) | - |
| `obj[][0]` | string | 大类ID(作为复选框 value，确认时存入 sessionStorage 'cate') | - |
| `obj[][1]` | string | 大类名称(作为复选框 label 展示文案) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
