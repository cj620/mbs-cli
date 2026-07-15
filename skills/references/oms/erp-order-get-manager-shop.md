# mbs oms erp-order-get-manager-shop

销售日报-经理店铺数据查询(getManagerShop)：销售目标/销售日报页面中，按员工(经理)下钻查询其名下各店铺的本周/上周/上上周发布(刊登)数量数据。点击表格行展开图标时触发，传入员工ID、员工姓名及周标识，返回该员工下各店铺(weekList)及每店铺逐日数量(week)，由 art-template 渲染到店铺明细行。

## 用法

```bash
mbs oms erp-order-get-manager-shop --employeeId <string> --employeeName <string> --weekTag <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/salesTarget/getManagerShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeId` | employeeId | query | string | 是 | - | 员工(经理)ID，来源：被点击行 data-id |
| `employeeName` | employeeName | query | string | 是 | - | 员工(经理)姓名，来源：被点击行 data-name，拼接到 URL(中文将被 URL 编码) |
| `weekTag` | weekTag | query | string | 是 | - | 周标识(枚举)。001=本周；010=上周；100=上上周 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(平台统一包装，待人工确认) | - |
| `desc` | string | 响应提示信息(平台统一包装，待人工确认) | - |
| `obj` | object | 业务数据对象(成功回调以 if(data.obj) 判定有数据) | - |
| `obj.flag` | number | 展开标识。前端取 data.obj.flag 写入每个店铺行并用于控制下钻图标显隐(模板中 flag==1 时不显示展开图标) | - |
| `obj.weekList[]` | array | 店铺数据列表(前端封装为 shopList 渲染到 *ShopTemplate) | - |
| `obj.weekList[][0]` | string | 店铺/员工名称(模板 {{value.employeeName}} 展示) | - |
| `obj.weekList[][1]` | number | 该店铺周期内汇总数量(模板 {{value.count}} 展示) | - |
| `obj.weekList[][2][]` | array | 逐日数量列表(模板 {{each value.week}} 遍历) | - |
| `obj.weekList[][2][]` | number | 当日数量(模板 {{objs.count}} 展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
