# mbs scm erp-manufacture-query-smt-shop-manager

SMT店长列表查询：查询 SMT 纠纷统计页面"店长"筛选下拉框的可选店长名称列表。无请求参数，返回店长名称字符串数组，前端直接遍历填充 el-select 选项（label 与 value 均为店长名称）。

## 用法

```bash
mbs scm erp-manufacture-query-smt-shop-manager
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/issueInfo/querySmtShopManager`
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
| `code` | number | 响应状态码,200=成功（ApiBase 标准字段） | - |
| `desc` | string | 响应提示信息（ApiBase 标准字段） | - |
| `success` | boolean | 请求是否成功标志（ApiBase 标准字段，是否回传待人工确认） | - |
| `content` | string | 通用扩展/总数字段（ApiBase 标准字段，本接口未使用，待人工确认） | - |
| `obj[]` | array | 店长名称列表（前端取用，填充店长下拉框选项） | - |
| `obj[]` | string | 店长名称（数组元素，下拉框 label 与 value 均取此值） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
