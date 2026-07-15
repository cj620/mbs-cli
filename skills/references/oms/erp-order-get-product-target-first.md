# mbs oms erp-order-get-product-target-first

月度业绩目标首页查询：月业绩目标页首屏加载：按 targetType=2（月）与 week（月偏移量）查询当前层级（level 1/2/3）下各销售/主管的本月业绩目标、环比涨跌、实际销售额/毛利率/毛利额、完成率，以及上月、下月目标等数据，并返回历史目标时段（timeSlot）列表用于切换查看。

## 用法

```bash
mbs oms erp-order-get-product-target-first --targetType <string> --week <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/salesTarget/getProductTargetFirst`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `targetType` | targetType | query | string | 是 | - | 目标类型，固定传 2（月维度/月业绩目标） |
| `week` | week | query | string | 是 | - | 月偏移量/历史目标时段索引。0=本月；>0=对应 obj.timeSlot[i] 的时段；来源 sessionStorage productindex、切换链接、返回本月(0) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息（本接口成功回调未使用，同域统一返回，待人工确认） | - |
| `content` | string | 是否大区主管标识，取值 'true'/'false'；决定“设置月目标”跳转地址 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.level` | number | 当前层级，1/2/3，决定渲染层级与展开逻辑 | - |
| `obj.time` | string | 最后更新日期（渲染到 #lastTime） | - |
| `obj.timeRemind` | string | 时间提醒文案（红色提示，渲染到 #timeRemind） | - |
| `obj.sales[]` | array | 业绩目标行列表 | - |
| `obj.sales[][0]` | string | 姓名（值为“汇总”时按汇总行渲染） | - |
| `obj.sales[][1]` | string | 目标记录ID（存在时支持双击修改目标） | - |
| `obj.sales[][2]` | boolean | 是否高级主管标识；true 显示展开图标并调用 showBig | - |
| `obj.sales[][3]` | string | 店长/主管标识，作为下钻入参（getProductTargetSum 的 shopManager） | - |
| `obj.sales[][4]` | boolean | 是否可继续展开下级（htmlTemplate3 据此渲染下钻图标） | - |
| `obj.sales[][5]` | number | 本月业绩目标-第1档（万；双击 settarget num=1 可改） | - |
| `obj.sales[][6]` | number | 本月业绩目标-第2档（万；settarget num=2） | - |
| `obj.sales[][7]` | number | 本月业绩目标-第3档（万；settarget num=3） | - |
| `obj.sales[][8]` | string | 本月业绩目标展示串（无 id 时直接展示，富文本） | - |
| `obj.sales[][9]` | number | 环比涨跌-第1档（%；>0红色上箭头，<0蓝色下箭头） | - |
| `obj.sales[][10]` | number | 环比涨跌-第2档（%） | - |
| `obj.sales[][11]` | number | 环比涨跌-第3档（%） | - |
| `obj.sales[][12]` | string | 本月实际销售额（万，富文本） | - |
| `obj.sales[][13]` | number | 无效金额（元）；≥100 时换算万并括号展示 | - |
| `obj.sales[][14]` | number | KZ 销售额（万）；>0 时绿色展示“KZ x万” | - |
| `obj.sales[][15]` | number | 本月毛利率（%）；<12 时红色高亮 | - |
| `obj.sales[][16]` | number | 本月毛利额（万，原字段拼写 profitAmouit） | - |
| `obj.sales[][17]` | number | KZ 毛利额（万）；>0 时绿色展示“KZ x万” | - |
| `obj.sales[][18]` | string | 本月实际完成率展示串（富文本） | - |
| `obj.sales[][19]` | string | 上月业绩目标展示串（万，富文本） | - |
| `obj.sales[][20]` | string | 上月实际销售额（万，富文本） | - |
| `obj.sales[][21]` | number | 上月毛利率（%）；<12 时红色高亮 | - |
| `obj.sales[][22]` | number | 上月毛利额（万，原字段拼写 lastProfitAmouit） | - |
| `obj.sales[][23]` | string | 上月实际完成率展示串（富文本） | - |
| `obj.sales[][24]` | string | 下月业绩目标展示串（万，富文本） | - |
| `obj.sales[][25][]` | array | 下级目标列表（存在则改为可展开聚合行；结构同 sales） | - |
| `obj.sales[][25][][0]` | string | 下级-姓名 | - |
| `obj.sales[][25][][1]` | string | 下级-目标记录ID | - |
| `obj.sales[][25][][2]` | boolean | 下级-是否高级主管标识 | - |
| `obj.sales[][25][][3]` | string | 下级-店长/主管标识（下钻入参） | - |
| `obj.sales[][25][][4]` | boolean | 下级-是否可继续展开 | - |
| `obj.sales[][25][][5]` | number | 下级-本月业绩目标-第1档（万） | - |
| `obj.sales[][25][][6]` | number | 下级-本月业绩目标-第2档（万） | - |
| `obj.sales[][25][][7]` | number | 下级-本月业绩目标-第3档（万） | - |
| `obj.sales[][25][][8]` | string | 下级-本月业绩目标展示串 | - |
| `obj.sales[][25][][9]` | number | 下级-环比涨跌-第1档（%） | - |
| `obj.sales[][25][][10]` | number | 下级-环比涨跌-第2档（%） | - |
| `obj.sales[][25][][11]` | number | 下级-环比涨跌-第3档（%） | - |
| `obj.sales[][25][][12]` | string | 下级-本月实际销售额（万） | - |
| `obj.sales[][25][][13]` | number | 下级-无效金额（元，≥100 换算万展示） | - |
| `obj.sales[][25][][14]` | number | 下级-KZ 销售额（万） | - |
| `obj.sales[][25][][15]` | number | 下级-本月毛利率（%） | - |
| `obj.sales[][25][][16]` | number | 下级-本月毛利额（万） | - |
| `obj.sales[][25][][17]` | number | 下级-KZ 毛利额（万） | - |
| `obj.sales[][25][][18]` | string | 下级-本月实际完成率展示串 | - |
| `obj.sales[][25][][19]` | string | 下级-上月业绩目标展示串（万） | - |
| `obj.sales[][25][][20]` | string | 下级-上月实际销售额（万） | - |
| `obj.sales[][25][][21]` | number | 下级-上月毛利率（%） | - |
| `obj.sales[][25][][22]` | number | 下级-上月毛利额（万） | - |
| `obj.sales[][25][][23]` | string | 下级-上月实际完成率展示串 | - |
| `obj.sales[][25][][24]` | string | 下级-下月业绩目标展示串（万） | - |
| `obj.timeSlot[]` | array | 历史目标时段列表（渲染为时段切换链接） | - |
| `obj.timeSlot[][0]` | string | 目标时段-开始时间 | - |
| `obj.timeSlot[][1]` | string | 目标时段-结束时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
