# mbs oms erp-order-get-sales-target-shop

月业绩目标-店铺/组员下钻查询：月业绩目标页面点击行前的展开箭头时，按店长/平台下钻查询其下级（店铺或组员）的月业绩目标、环比涨跌、本月/上月实际销售额、毛利率、毛利额、实际完成率及下月目标等明细，结果渲染为子表格。targetType 固定为 2（月目标）。

## 用法

```bash
mbs oms erp-order-get-sales-target-shop --targetType <string> [--week <string>] [--shopManager <string>] [--platfromId <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/salesTarget/getSalesTargetShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `targetType` | targetType | body | string | 是 | - | 目标类型，固定传 2（2=月目标） |
| `week` | week | body | string | 否 | - | 时段偏移量。0=本月；>0 表示历史时段索引（来自 obj.week / 时段选择），为空串时按当前时段 |
| `shopManager` | shopManager | body | string | 否 | - | 店长/店铺管理者ID，取自被展开行 value.shopManager（顶层下钻时可为空） |
| `platfromId` | platfromId | body | string | 否 | - | 平台ID，取自被展开行 value.platfromId；前端在 undefined/null 时置为空串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.level` | number | 层级标识（1=店铺层；2/3=组织层，影响子表头“店铺/姓名”及继续下钻方式） | - |
| `obj.sales[]` | array | 下级（店铺/组员）业绩目标明细列表 | - |
| `obj.sales[][0]` | string | 店铺名称 / 人员姓名（“汇总”行为合计） | - |
| `obj.sales[][1]` | string | 平台名称（不为 null 时在姓名后括号展示） | - |
| `obj.sales[][2]` | string | 平台ID（用于继续下钻传参） | - |
| `obj.sales[][3]` | string | 店长/管理者ID（用于继续下钻传参） | - |
| `obj.sales[][4]` | boolean | 是否高级主管标记（true 时下钻走 showBigSix/姓名表头） | - |
| `obj.sales[][5]` | number | 排名等级：1=A;2=B;3=C;4=D（其它不展示等级） | - |
| `obj.sales[][6]` | number | 业绩目标记录ID（存在时支持双击修改各档目标） | - |
| `obj.sales[][7]` | number | 第一档业绩目标（万） | - |
| `obj.sales[][8]` | number | 第二档业绩目标（万） | - |
| `obj.sales[][9]` | number | 第三档业绩目标（万） | - |
| `obj.sales[][10]` | string | 业绩目标展示字符串（无 id 时直接展示，含 HTML 富文本） | - |
| `obj.sales[][11]` | number | 第一档目标订单量（=0 时不展示订单块） | - |
| `obj.sales[][12]` | number | 第二档目标订单量 | - |
| `obj.sales[][13]` | number | 第三档目标订单量 | - |
| `obj.sales[][14]` | number | 目标毛利额（万）；为 null 时不展示该块 | - |
| `obj.sales[][15]` | number | 第一档环比涨跌（%），>0 红色上箭头，<0 蓝色下箭头 | - |
| `obj.sales[][16]` | number | 第二档环比涨跌（%） | - |
| `obj.sales[][17]` | number | 第三档环比涨跌（%） | - |
| `obj.sales[][18]` | number | 本月实际销售额（万） | - |
| `obj.sales[][19]` | number | 本月实际订单量 | - |
| `obj.sales[][20]` | number | 作废（已计入绩效后作废）订单金额（元）；≥100 时前端 /10000 保留2位显示“万” | - |
| `obj.sales[][21]` | number | KZ（清仓/特定项目）销售额（万），>0 时绿色展示 | - |
| `obj.sales[][22]` | number | 平台达标状态：0=未达标（毛利率红色标记） | - |
| `obj.sales[][23]` | number | 本月毛利率（%） | - |
| `obj.sales[][24]` | number | 清仓毛利率（%）（与 profitRate 比较判断是否分别展示） | - |
| `obj.sales[][25]` | number | 本月毛利额（万）（源码字段名拼写为 profitAmouit） | - |
| `obj.sales[][26]` | number | KZ（清仓/特定项目）毛利额（万），>0 时绿色展示 | - |
| `obj.sales[][27]` | string | 本月实际完成率展示字符串（含 HTML） | - |
| `obj.sales[][28]` | string | 上月业绩目标展示字符串 | - |
| `obj.sales[][29]` | number | 上月第一档目标订单量 | - |
| `obj.sales[][30]` | number | 上月第二档目标订单量 | - |
| `obj.sales[][31]` | number | 上月第三档目标订单量 | - |
| `obj.sales[][32]` | number | 上月实际销售额（万） | - |
| `obj.sales[][33]` | number | 上月实际订单量 | - |
| `obj.sales[][34]` | number | 上月平台达标状态：0=未达标（毛利率红色标记） | - |
| `obj.sales[][35]` | number | 上月毛利率（%） | - |
| `obj.sales[][36]` | number | 上月毛利额（万）（源码字段名拼写为 lastProfitAmouit） | - |
| `obj.sales[][37]` | string | 上月实际完成率展示字符串 | - |
| `obj.sales[][38]` | string | 下月业绩目标展示字符串 | - |
| `obj.sales[][39]` | number | 下月第一档目标订单量 | - |
| `obj.sales[][40]` | number | 下月第二档目标订单量 | - |
| `obj.sales[][41]` | number | 下月第三档目标订单量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
