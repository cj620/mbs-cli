# mbs oms erp-order-get-leader-shop2-sale-report

获取组长/平台对应店铺列表：客服消息报表页店铺多选下拉的数据源接口，返回当前组长/平台/组员可见的店铺列表。注：示例页面中本 URL 已被注释并由 /erpReport/erpReport/message/getShop 取代，按任务指定方法 GET 文档化，注释态/未引用字段标注待人工确认。

## 用法

```bash
mbs oms erp-order-get-leader-shop2-sale-report [--platformId <string>] [--employeeList <array>] [--bigChiefList <array>]
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleReport/getLeaderShop2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | query | string | 否 | - | 平台ID，取所属平台选择值(待人工确认：注释态参数，来源 #reserve11) |
| `employeeList` | employeeList | query | array | 否 | - | 组员列表，未选时传空数组(待人工确认：注释态参数，来源 #employeeList) |
| `bigChiefList` | bigChiefList | query | array | 否 | - | 客服组长列表，未选时传空数组(待人工确认：注释态参数，来源 #shopManager) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码（框架统一包络，本成功回调未读取）(待人工确认) | - |
| `desc` | string | 响应提示信息（框架统一包络，本成功回调未读取）(待人工确认) | - |
| `obj[]` | array | 店铺列表数组；前端遍历渲染 #shoptypeid 店铺下拉，为空时显示占位项 | - |
| `obj[][0]` | string | 店铺名称；GET 启用态 getLeaderShop2() 用作 option 的 value 与显示文本 | - |
| `obj[][1]` | string | 店铺名称（作为 option value）——来自被注释 POST 态 getTeamByLeaderShop()(待人工确认) | - |
| `obj[][2]` | string | 店铺名称（作为 option 显示文本）——来自被注释 POST 态 getTeamByLeaderShop()(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
