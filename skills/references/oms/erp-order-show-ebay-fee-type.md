# mbs oms erp-order-show-ebay-fee-type

查询Ebay账户费用类型：Ebay账单明细页面加载时(freeName())调用，按账单标识 billStr 与店铺 shopId 查询该账单下出现的全部费用类型(entryType)集合，返回字符串数组用于渲染顶部'费用类型'筛选下拉框(#freeType)的选项。

## 用法

```bash
mbs oms erp-order-show-ebay-fee-type --billStr <string> --shopId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayAccountFee/showEbayFeeType`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `billStr` | billStr | query | string | 是 | - | 账单标识/账单字符串，来源：页面URL查询参数 GetQueryString('billStr')，用于定位目标Ebay账单 |
| `shopId` | shopId | query | string | 是 | - | 店铺ID，来源：页面URL查询参数 GetQueryString('shopId')，用于限定店铺范围 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（依框架统一约定，待人工确认具体值） | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 费用类型列表，元素为费用类型名称字符串（前端赋给 list 渲染下拉选项） | - |
| `obj[]` | string | 单个费用类型名称(entryType)，作为下拉选项的 value 与显示文本（模板 <option value="{{v}}">{{v}}</option>） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
