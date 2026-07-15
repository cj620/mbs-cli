# mbs oms erp-order-get-manager-people-name

获取客服人员名称列表：eBay Case 退货任务管理页面初始化时调用，返回客服人员名称列表，用于渲染「客服」筛选下拉框选项。页面加载即自动触发，无请求参数。

## 用法

```bash
mbs oms erp-order-get-manager-people-name
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayCaseTask/getManagerPeopleName`
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
| `code` | number | 响应状态码，200=成功(前端 data.code == 200 判定) | - |
| `desc` | string | 响应提示信息(框架通用包装字段，本页未使用，待人工确认) | - |
| `obj[]` | array | 客服人员名称列表(字符串数组，模板遍历渲染下拉选项) | - |
| `obj[]` | string | 客服人员姓名(数组元素，同时作为 option 的 value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
