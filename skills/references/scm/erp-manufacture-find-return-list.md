<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-find-return-list

退换货情况下拉框查询：查询「退换货情况」下拉枚举列表。后端从 ReturnEnum 枚举构造 code/desc 列表返回，前端用作 SPU 列表筛选区「退换货情况」多选下拉框的选项数据源（item.code 作 value、item.desc 作 label）。无请求参数，仅校验登录会话。

## 用法

```bash
mbs scm erp-manufacture-find-return-list
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/manufactureExtendController/findReturnList`
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
| `code` | number | 响应状态码，200=成功，500=查询错误，601=未登录 | - |
| `desc` | string | 响应提示信息 | - |
| `success` | boolean | 是否成功（CommonResponse 标准字段） | - |
| `obj[]` | array | 退换货情况枚举列表（前端赋值给 returnList 作下拉选项） | - |
| `obj[][0]` | string | 退换货情况编码。0=未沟通;1=可退货;2=可换货;3=可退换货;4=不可退换货（前端作 el-option 的 value 与 key） | - |
| `obj[][1]` | string | 退换货情况中文描述（与 code 对应：未沟通/可退货/可换货/可退换货/不可退换货，前端作 el-option 的 label） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
