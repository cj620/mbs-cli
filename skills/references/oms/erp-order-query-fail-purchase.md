# mbs oms erp-order-query-fail-purchase

失败采购单查询：按时间区间分页查询导入 odo 系统失败的采购单列表，返回采购单批次号、错误信息、采购时间、导入时间，并返回总记录数与总页数供前端分页。

## 用法

```bash
mbs oms erp-order-query-fail-purchase [--startTime <string>] [--endTime <string>] --currPage <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/Odo/queryFailPurchase`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `startTime` | startTime | body | string | 否 | - | 开始时间，来源日期控件 #starttime2(input type=date)，格式 yyyy-MM-dd |
| `endTime` | endTime | body | string | 否 | - | 结束时间，来源日期控件 #endtime2(input type=date)，格式 yyyy-MM-dd；前端校验开始时间不得大于结束时间 |
| `currPage` | currPage | body | number | 是 | - | 当前页码；search() 固定传 1，翻页回调传 api.getCurrent() |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | number | 满足条件的失败采购单总记录数（前端写入 #total） | - |
| `pages` | number | 总页数（前端传入分页控件 pageCount） | - |
| `list[]` | array | 失败采购单列表 | - |
| `list[][0]` | string | 采购单批次号 | - |
| `list[][1]` | string | 错误信息（导入失败原因） | - |
| `list[][2]` | string | 采购单采购时间（模板“采购单采购时间”列） | - |
| `list[][3]` | string | 采购单导入 odo 系统时间（模板“采购单导入odo系统时间”列） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
