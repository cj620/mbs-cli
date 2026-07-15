# mbs oms erp-order-get-leader-shop4

根据平台/大酋长/组员查询店铺列表(getLeaderShop4)：销售报表筛选区联动接口：用户选择平台(可叠加大酋长、组员)后，后端返回对应可选店铺名称列表，前端用于渲染 #shoptypeid 店铺下拉框的 <option>。

## 用法

```bash
mbs oms erp-order-get-leader-shop4 [--platformIds <string>] [--employeeList <array>] [--bigChiefList <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getLeaderShop4`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformIds` | platformIds | body | string | 否 | - | 平台ID集合，取自平台多选框 #reserve11 的值（多选逗号拼接字符串） |
| `employeeList` | employeeList | body | array | 否 | - | 组员列表，取自 #employeeList 组员多选框；未选择时传空数组 [] |
| `bigChiefList` | bigChiefList | body | array | 否 | - | 大酋长列表，取自 #shopManager 大酋长多选框；未选择时传空数组 [] |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(待人工确认，前端未显式校验) | - |
| `desc` | string | 响应提示信息(待人工确认，前端未使用) | - |
| `obj[]` | array | 店铺列表；前端遍历渲染店铺下拉，data.obj 为空时渲染 -店铺- 占位 | - |
| `obj[]` | string | 店铺名称；作为 <option> 的 value 与显示文本（前端唯一使用字段） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
