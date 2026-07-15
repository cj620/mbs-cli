# mbs pim erp-product-get-smt-group-counfiguration

获取SMT自动刊登模板分组配置：SMT(速卖通)自动刊登店铺参数设置弹窗中，根据店铺类型(零售/批发客户为主)加载该类型下可用的自动刊登模板分组列表，用于渲染自动刊登模板下拉框。仅当模板下拉项不足时才发起请求。

## 用法

```bash
mbs pim erp-product-get-smt-group-counfiguration --isAutopublish <number> [--isCountry <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/smtProductController/getSmtGroupCounfiguration`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `isAutopublish` | isAutopublish | body | number | 是 | - | 是否自动刊登标识，前端固定传1(自动刊登场景) |
| `isCountry` | isCountry | body | string | 否 | - | 店铺类型(客户类型)。1=零售客户为主;0=批发客户为主;空=未选。来源下拉框#isCountry |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息(统一返回结构字段) | - |
| `obj[]` | array | 自动刊登模板分组列表(为空时前端兜底为[]) | - |
| `obj[][0]` | string | 模板分组名(下拉项value,选中后作为groupName提交) | - |
| `obj[][1]` | string | 模板类型名称(下拉项展示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
