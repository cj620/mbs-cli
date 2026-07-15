# mbs oms erp-order-get-shop-select1

新人转正目标-第一阶段店铺下拉列表查询：新人营销成绩单详情页「新人转正目标」第一阶段(入职次个自然月)考核店铺下拉框的数据源接口：按员工姓名查询其第一阶段可选/已选店铺名称列表，前端用 art-template 渲染为 #shopSelect7_1 下拉选项(ySelect 多选)。

## 用法

```bash
mbs oms erp-order-get-shop-select1 --employeeName <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getShopSelect1`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeName` | employeeName | query | string | 是 | - | 员工姓名(新人姓名)。来源=当前页面地址栏 query 参数 employeeName，经 decodeURI 解码后作为 URL 查询参数传入；用于查询该新人第一阶段考核店铺下拉数据 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准包裹字段,200=成功；本回调未直接读取,待人工确认是否返回) | - |
| `desc` | string | 响应提示信息(标准包裹字段；本回调未直接读取,待人工确认是否返回) | - |
| `obj[]` | array | 第一阶段考核店铺名称列表(字符串数组)，前端渲染为 #shopSelect7_1 下拉选项 | - |
| `obj[]` | string | 数组元素=单个店铺名称(同时作为 <option> 的 value 与显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
