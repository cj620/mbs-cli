# mbs oms erp-order-get-deposit

押款金额查询：按所属平台、店铺、结束月份查询对应账期的押款金额，返回的押款金额写入发货时间业绩报表的“押款金额”列（.amountNum）展示。

## 用法

```bash
mbs oms erp-order-get-deposit [--platformNames <array>] [--shopName <array>] [--endTime <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getDeposit`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformNames` | platformNames | body | array | 否 | - | 所属平台名称列表。来源：平台下拉框 #reserve11 选中项的文本(option.label)；未选中任何平台时传空数组 []。元素类型 string(平台名称) |
| `shopName` | shopName | body | array | 否 | - | 店铺名称列表。来源：店铺输入框 #shopList 的值按英文逗号 , 拆分；未填写时传空数组 []。元素类型 string(店铺名称) |
| `endTime` | endTime | body | string | 否 | - | 结束时间(年月)。来源：结束时间日期控件 #time2 取值后截取前 7 位(substring(0,7))，格式 yyyy-MM；未填写时传空字符串 ''。单位：月 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(前端据此判断是否写入押款金额) | - |
| `obj` | string | 押款金额(直接渲染至发货业绩报表“押款金额”列 .amountNum，对应模板 {{obj.deposit}} 位置) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
