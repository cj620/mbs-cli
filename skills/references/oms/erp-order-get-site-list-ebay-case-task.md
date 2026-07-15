<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-site-list-ebay-case-task

eBay个案-站点下拉列表查询：eBay升级个案（case）处理页面初始化时调用，获取当前用户可见的站点列表，用于填充顶部「请选择站点」下拉框（#siteLists），作为案件列表查询的筛选条件之一。无请求参数，返回站点字符串数组。

## 用法

```bash
mbs oms erp-order-get-site-list-ebay-case-task
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayCaseTask/getSiteList`
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
| `code` | number | 响应状态码,200=成功(前端 data.code == 200 时才渲染下拉) | - |
| `desc` | string | 响应提示信息(失败时同页接口以 alert(data.desc) 提示;本接口成功回调未使用,按统一响应体保留) | - |
| `obj[]` | array | 站点列表(站点名称字符串数组,用于填充「请选择站点」下拉) | - |
| `obj[]` | string | 数组元素-单个站点名称(如 US/UK/DE 等站点标识,模板直接作为 <option> 的 value 及显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
