<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-shop-select2

新人转正第二阶段考核店铺下拉查询：营销新人成绩单详情页“新人转正目标 - 第二阶段”考核店铺下拉框(#shopSelect7_2)的数据源。按员工(新人)姓名查询其可选店铺名称列表，前端用 art-template 渲染成 <option>，并初始化 ySelect 多选下拉。

## 用法

```bash
mbs oms erp-order-get-shop-select2 --employeeName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getShopSelect2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeName` | employeeName | query | string | 是 | - | 员工(新人)姓名。经 decodeURI 解码后作为查询参数拼接到接口URL ?employeeName= 之后，用于查询该新人第二阶段可选考核店铺 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 第二阶段可选考核店铺名称列表(字符串数组)，用于渲染下拉 #shopSelect7_2 | - |
| `obj[]` | string | 数组元素：店铺名称(同时作为 <option> 的 value 与展示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
