# mbs pim erp-product-leader-option

创建人组长下拉选项查询：进入违规产品处理页面时调用，获取「创建人组长」筛选下拉框的全部组长名称选项。无入参，返回组长姓名字符串数组，前端用 art-template 的 groupLeaderTemplate 逐项渲染为 option，并在 search2()/exportTable() 的 getSearchParams() 中把所选组长拼进 employees 数组作为查询条件。

## 用法

```bash
mbs pim erp-product-leader-option
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/product/leaderOption`
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
| `code` | number | 响应状态码,200=成功(标准包装,本回调未校验)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准包装,本回调未使用)(待人工确认) | - |
| `obj[]` | array | 创建人组长下拉数据,元素为组长姓名字符串 | - |
| `obj[]` | string | 单个组长姓名(既作option的value,也作显示文本,对应页面「创建人组长」下拉项) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
