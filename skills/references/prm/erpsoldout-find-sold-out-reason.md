# mbs prm erpsoldout-find-sold-out-reason

查询下架原因列表：进入平台商品下架明细页时调用，获取全部「下架原因」枚举列表，用于渲染顶部筛选区 #Reason 下拉框（contentTemplate4）。无请求参数，响应为下架原因字符串数组。

## 用法

```bash
mbs prm erpsoldout-find-sold-out-reason
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/soldOut/findSoldOutReason`
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
| `code` | number | 响应状态码,200=成功（统一响应封装；本接口回调未校验，(待人工确认)） | - |
| `desc` | string | 响应提示信息（统一响应封装；本接口未使用，(待人工确认)） | - |
| `obj[]` | array | 下架原因列表（模板遍历渲染下拉选项，前端实际使用） | - |
| `obj[]` | string | 单条下架原因文本（直接作为 <option> 的 value 与显示文本，具体枚举值待人工确认） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
