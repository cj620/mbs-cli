# mbs oms erp-order-get-big-chief2

获取大酋长(店长负责人)列表：销售业绩报表(订单时间业绩/发货时间业绩)页面，按人员类别、所属平台、公司维度查询可选的“大酋长”(店长/团队负责人)列表，用于渲染顶部“大酋长”多选下拉框，选中后联动获取组员、店铺并触发业绩查询。

## 用法

```bash
mbs oms erp-order-get-big-chief2 --employeeType <string> [--platformIds <array>] [--companyId <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getBigChief2/`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 是 | - | 人员类别/业绩时间类型，取自 #orderStaus 下拉。枚举：1=订单时间业绩；3=发货时间业绩 |
| `platformIds` | platformIds | body | array | 否 | - | 所属平台ID列表，取自 #reserve11(所属平台多选)；未选择(null)时传空数组[] |
| `companyId` | companyId | body | string | 否 | - | 公司ID，取自 #componey(公司下拉)；该下拉默认隐藏，多数场景为空 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(站点通用约定；本接口回调未显式判断) | - |
| `desc` | string | 响应提示信息(待人工确认，回调中未使用) | - |
| `obj[]` | array | 大酋长(店长/负责人)列表，渲染至 #shopManager 多选下拉 | - |
| `obj[][0]` | string | 大酋长ID，作为 <option> 的 value(后续作为 bigChief 传参) | - |
| `obj[][1]` | string | 大酋长姓名，作为下拉显示文本 | - |
| `obj[][2]` | string | 公司编码，拼接在姓名后展示({{value.name}}{{value.companyCode}}) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
