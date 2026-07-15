<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-get-sale-names

所属销售名称列表查询：获取“所属销售”名称列表，用于 CRM 客户列表页 #saleNames 下拉框的选项数据源。请求无任何业务参数；返回 obj 为销售姓名字符串数组，前端经 saleNamesTemplate 渲染为 <option>。

## 用法

```bash
mbs scm erp-manufacture-get-sale-names
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/customer/getSaleNames`
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
| `obj[]` | array | 所属销售名称列表（销售姓名字符串数组；前端据 obj.length>0 判空后渲染下拉选项） | - |
| `obj[]` | string | 数组元素：单个销售姓名（{{item}} 直接作为 <option> 的 value 与显示文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
