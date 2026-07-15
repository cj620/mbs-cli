# mbs oms erp-order-find-order-chinese-rose-shop

月度店销报表(按订单时间)查询：月度店销报表页订单时间业绩维度查询：按平台、品类、客户经理、店铺、组员/大酋长/总监/主管、运营状态、月份、统计指标、公司、海外仓类型、店龄区间等筛选，返回echarts折线序列、动态时间表头及报表行数据。

## 用法

```bash
mbs oms erp-order-find-order-chinese-rose-shop --employeeType <string> [--platformId <string>] [--categoryNameList <array>] [--customerServiceMgr <string>] [--shopName <array>] [--employeeName <array>] [--bigChief <array>] [--leaders <array>] [--littleLeaders <array>] [--operateStatus <number>] [--dateList <array>] [--monthType <array>] [--companyId <string>] [--notFbaHwc <string>] [--opendaySmall <string>] [--opendaysLarge <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/personSaleReport/findOrderChineseRoseShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 是 | - | 业绩时间类型/人员类别。1=订单时间业绩;3=发货时间业绩(本接口=1) |
| `platformId` | platformId | body | string | 否 | - | 所属平台ID(取自#reserve11，值为PLATFORMID，空串=全部) |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 品类名称列表(取自#categoryNameList，逗号拆分，未选为[]) |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客户经理(客服经理),多选逗号拼接(取自#custService，未选为空串) |
| `shopName` | shopName | body | array | 否 | - | 店铺名称列表(取自selectdata.shop，空格连接后再拆分，未选为[]) |
| `employeeName` | employeeName | body | array | 否 | - | 组员/店长列表(取自店长下拉selectdata.shopmanager) |
| `bigChief` | bigChief | body | array | 否 | - | 大酋长/经理列表(取自经理下拉selectdata.manager，id集合) |
| `leaders` | leaders | body | array | 否 | - | 总监列表(取自总监下拉selectdata.leaders，id集合) |
| `littleLeaders` | littleLeaders | body | array | 否 | - | 主管列表(取自主管下拉selectdata.littleLeaders，id集合) |
| `operateStatus` | operateStatus | body | number | 否 | - | 运营状态。1=运营中;2=暂停运营;3=永久关闭(默认1) |
| `dateList` | dateList | body | array | 否 | - | 月份列表(取自#monthList，逗号拆分，未选为[]) |
| `monthType` | monthType | body | array | 否 | - | 统计指标类型(取自#shopTypes，逗号拆分):收入小计/利润/毛利率/订单量/退款金额/平台费/站内推广费 |
| `companyId` | companyId | body | string | 否 | - | 公司ID(取自#componey，值为companyid) |
| `notFbaHwc` | notFbaHwc | body | string | 否 | - | 海外仓类型筛选。空=请选择;0=全部;1=真实海外仓;2=虚拟海外仓 |
| `opendaySmall` | opendaySmall | body | string | 否 | - | 店龄(号龄)起始(下限)(取自#opendaySmall) |
| `opendaysLarge` | opendaysLarge | body | string | 否 | - | 店龄(号龄)结束(上限)(取自#opendaysLarge) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准响应外层；本页成功回调未显式校验)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准响应外层)(待人工确认) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.series[]` | array | echarts折线系列数组(渲染图例与折线；前端最多取前20条) | - |
| `obj.series[][0]` | string | 系列名称(店铺/人员名，用作图例legend) | - |
| `obj.series[][1][]` | array | 系列数据点数组(透传给echarts series渲染折线)(待人工确认) | - |
| `obj.series[][2]` | string | echarts系列类型(如line)，随series透传(待人工确认) | - |
| `obj.x` | object | x轴配置对象 | - |
| `obj.x.data[]` | array | x轴类目数据(时间/日期序列，赋给xAxis.data) | - |
| `obj.title` | object | 动态时间表头对象(渲染#titleTemplate) | - |
| `obj.title.shopName` | string | 店铺列表头名称 | - |
| `obj.title.name` | string | 人员列表头名称 | - |
| `obj.title.tatal` | string | 收入小计列组标题 | - |
| `obj.title.tatalTime[]` | array | 收入小计子列时间标签数组(决定该列组列数) | - |
| `obj.title.profit` | string | 利润列组标题 | - |
| `obj.title.profitTime[]` | array | 利润子列时间标签数组 | - |
| `obj.title.profitRate` | string | 毛利率列组标题 | - |
| `obj.title.profitRateTime[]` | array | 毛利率子列时间标签数组 | - |
| `obj.title.orderNum` | string | 订单量列组标题 | - |
| `obj.title.orderNumTime[]` | array | 订单量子列时间标签数组 | - |
| `obj.title.refundfee` | string | 退款金额列组标题 | - |
| `obj.title.refundfeeTime[]` | array | 退款金额子列时间标签数组 | - |
| `obj.title.platformfee` | string | 平台费列组标题 | - |
| `obj.title.platformfeeTime[]` | array | 平台费子列时间标签数组 | - |
| `obj.title.publishfee` | string | 站内推广费列组标题 | - |
| `obj.title.publishfeeTime[]` | array | 站内推广费子列时间标签数组 | - |
| `obj.saleReportList[]` | array | 报表数据行列表(渲染#listTemplate) | - |
| `obj.saleReportList[][0]` | string | 合计标识:值为"合计"时该行渲染为合计行(跨列展示) | - |
| `obj.saleReportList[][1]` | string | 店铺名称 | - |
| `obj.saleReportList[][2]` | string | 店长(店铺管理人) | - |
| `obj.saleReportList[][3]` | string | 大酋长(以标签label展示) | - |
| `obj.saleReportList[][4]` | string | 号龄(店龄/开店天数) | - |
| `obj.saleReportList[][5]` | string | 平台 | - |
| `obj.saleReportList[][6][]` | array | 收入小计数据列表(按时间分列，对应tatalTime) | - |
| `obj.saleReportList[][7][]` | array | 利润数据列表(按时间分列) | - |
| `obj.saleReportList[][8][]` | array | 毛利率数据列表(按时间分列) | - |
| `obj.saleReportList[][9][]` | array | 订单量数据列表(按时间分列) | - |
| `obj.saleReportList[][10][]` | array | 退款金额数据列表(按时间分列) | - |
| `obj.saleReportList[][11][]` | array | 平台费数据列表(按时间分列) | - |
| `obj.saleReportList[][12][]` | array | 站内推广费数据列表(按时间分列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
