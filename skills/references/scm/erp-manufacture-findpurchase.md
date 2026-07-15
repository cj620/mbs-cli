<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-findpurchase

固定供应商采购员查询：供应商详情页加载时调用，查询全部「固定供应商」的采购员清单，用于「采购员」下拉框（id=fixedmanuname / fixedmanuname2）选项渲染。无请求参数，返回采购员ID与姓名列表。

## 用法

```bash
mbs scm erp-manufacture-findpurchase
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/manufactureExtendController/findpurchase`
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
| `code` | number | 响应状态码,200=成功(统一返回包装) | - |
| `desc` | string | 响应提示信息(统一返回包装) | - |
| `obj[]` | array | 固定供应商采购员列表(模板 each obj 遍历项) | - |
| `obj[][0]` | string | 采购员ID(渲染为 option value,提交时作为 fixedmanuoper 值) | - |
| `obj[][1]` | string | 采购员姓名(下拉选项显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
