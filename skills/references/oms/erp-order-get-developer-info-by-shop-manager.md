# mbs oms erp-order-get-developer-info-by-shop-manager

开发员覆盖率-按店长查询(第二级下钻)：产品刊登分析-开发覆盖率页面，点击大酋长(第一级)行展开时调用，按所选大酋长/组员(开发员)及该组员 employeeId，查询其名下各店长(shopManager)维度的刊登/覆盖率/SPU汇总/销售额占比等数据，返回店长列表用于二级表格渲染。

## 用法

```bash
mbs oms erp-order-get-developer-info-by-shop-manager --bigChief <array> [--developer <array>] --employeeId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/developerTarget/getDeveloperInfoByShopManager`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `bigChief` | bigChief | body | array | 是 | - | 大酋长名称数组。来源 #bigChief 下拉选中项的 peoanme 属性(选中 option 的人名)；未选中时压入空字符串 ""，即 [""] |
| `developer` | developer | body | array | 否 | - | 开发员(组员)名称数组。来源 #commodity 多选(selectpicker) 的 val()，元素为 employee_name；未选则为 null |
| `employeeId` | employeeId | body | string | 是 | - | 员工(组员)ID。取自被点击一级行下一行的 data-id(模板中 v.employeeId)，调用时经 .toString() 转为字符串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.developerInfoList[]` | array | 店长维度开发覆盖率列表 | - |
| `obj.developerInfoList[][0]` | string | 店长(店铺管理员)员工ID(渲染 data-sid/三级下钻入参) | - |
| `obj.developerInfoList[][1]` | string | 店长(店铺管理员)姓名 | - |
| `obj.developerInfoList[][2]` | number | 总刊登 listing 数量 | - |
| `obj.developerInfoList[][3]` | number | 刊登我的 listing 数量 | - |
| `obj.developerInfoList[][4]` | number | 总覆盖率(小数,前端×100取整展示%) | - |
| `obj.developerInfoList[][5]` | number | 30天新刊登 listing 数量 | - |
| `obj.developerInfoList[][6]` | number | 新品覆盖率(小数,前端×100取整展示%) | - |
| `obj.developerInfoList[][7]` | number | 我的新刊登 listing 数量 | - |
| `obj.developerInfoList[][8]` | number | 我的新品覆盖率(小数,前端×100取整展示%) | - |
| `obj.developerInfoList[][9]` | number | 店铺 SPU 汇总 | - |
| `obj.developerInfoList[][10]` | number | 店铺刊登我的 SPU 汇总 | - |
| `obj.developerInfoList[][11]` | number | 刊登 SPU 占比(小数,前端×100取整展示%) | - |
| `obj.developerInfoList[][12]` | number | 最近30天销售额占比(小数,前端×100取整展示%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
