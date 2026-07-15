# mbs oms erp-order-get-developer-info-by-shop

开发员店铺刊登覆盖率明细查询（按店铺）：产品刊登分析报表第三级钻取：在选定大酋长+组员(开发员)、并指定店长(employeeId)后，查询该店长名下各店铺的刊登覆盖明细，返回店铺在线listing、开发员刊登数、总/新品覆盖率、SPU汇总及占比、近30天销售额占比等汇总字段。

## 用法

```bash
mbs oms erp-order-get-developer-info-by-shop [--bigChief <array>] [--developer <array>] --employeeId <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/developerTarget/getDeveloperInfoByShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `bigChief` | bigChief | body | array | 否 | - | 大酋长(名称)数组,仅含1个元素;取选中项peoanme属性,未选时为空字符串 |
| `developer` | developer | body | array | 否 | - | 组员/开发员(员工姓名)集合,来自#commodity多选(employee_name) |
| `employeeId` | employeeId | body | string | 是 | - | 店长(员工)ID,第三级钻取定位的店长;由被点击行thead[data-sid]转字符串传入 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准响应包) | - |
| `desc` | string | 响应提示信息(标准响应包) | - |
| `obj` | object | 业务数据对象(成功回调判断data.obj) | - |
| `obj.developerInfoList[]` | array | 店铺刊登覆盖明细列表(成功回调判断data.obj.developerInfoList,赋给bdlist) | - |
| `obj.developerInfoList[][0]` | string | 店铺名称 | - |
| `obj.developerInfoList[][1]` | number | 店铺在线listing总数(总刊登listing数量) | - |
| `obj.developerInfoList[][2]` | number | 开发员(我的)刊登listing数量 | - |
| `obj.developerInfoList[][3]` | number | 总覆盖率(小数,前端×100取整展示%) | - |
| `obj.developerInfoList[][4]` | number | 近30天新刊登listing数量 | - |
| `obj.developerInfoList[][5]` | number | 新品覆盖率(小数,前端×100取整展示%) | - |
| `obj.developerInfoList[][6]` | number | 我的近30天新刊登listing数量 | - |
| `obj.developerInfoList[][7]` | number | 我的新品覆盖率(小数,前端×100取整展示%) | - |
| `obj.developerInfoList[][8]` | number | 店铺SPU汇总数 | - |
| `obj.developerInfoList[][9]` | number | 店铺刊登我的SPU汇总数 | - |
| `obj.developerInfoList[][10]` | number | 刊登SPU占比(小数,前端×100取整展示%) | - |
| `obj.developerInfoList[][11]` | number | 最近30天销售额占比(小数,前端×100取整展示%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
