# mbs oms erp-order-customer-service-mgr

客户经理列表查询：获取店铺业绩(客户服务管理)页面"请选择客户经理"下拉框的全部客户经理(客服经理)名称列表。页面加载时由 getcustomerServiceMgr() 调用，遍历 data.obj(字符串数组)逐项 <option> 填充 #custService 选择器，该值后续作为 shopAchievementsList/downloadShopAchievementsList 的 customerServiceMgr 查询条件。

## 用法

```bash
mbs oms erp-order-customer-service-mgr
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/shopAchievements/customerServiceMgr`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本回调未显式判断,沿用全局统一包装,其它接口以 code==200/500 判断) | - |
| `desc` | string | 响应提示信息(异常时返回提示文案) | - |
| `obj[]` | array | 客户经理(客服经理)名称列表;前端 data.obj.length 遍历填充 #custService 下拉 | - |
| `obj[]` | string | 单个客户经理(客服经理)名称;作为 <option value> 与显示文本(数组元素为纯字符串,非对象) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
