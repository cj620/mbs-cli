<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-difference2

销售报表-差异费项明细查询(findDifference2)：日订单时段报表中点击某日某费项差异数字时弹窗调用，按上级报表筛选条件 + 单日日期(oneDay) + 费项类型(type) 分页查询该费项的逐订单/批次差异明细，返回订单号、店铺、店长、对应费项金额、费项说明与插入时间。

## 用法

```bash
mbs oms erp-order-find-difference2 [--employeeType <string>] [--startTime <string>] [--endTime <string>] [--platformIds <array>] [--siteList <array>] [--categoryNameList <array>] [--categoryNameList2 <array>] [--customerServiceMgr <string>] [--shopName <array>] [--employeeName <array>] [--bigChief <array>] [--oneDay <string>] [--type <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/findDifference2`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 人员类别(上级页下拉 #orderStaus，如店长/组员/店铺等维度) |
| `startTime` | startTime | body | string | 否 | - | 统计起始日期(上级页 #time1，yyyy-MM-dd) |
| `endTime` | endTime | body | string | 否 | - | 统计结束日期(上级页 #time2，yyyy-MM-dd) |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表(上级页 #reserve11 多选，空则 []) |
| `siteList` | siteList | body | array | 否 | - | 站点列表(上级页 #getSiteList 多选) |
| `categoryNameList` | categoryNameList | body | array | 否 | - | 品类名称列表(上级页品类多选 valueData，未选为 []) |
| `categoryNameList2` | categoryNameList2 | body | array | 否 | - | 二级品类列表(上级页 #CategoryList 多选) |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客服经理(上级页 #custService 多选逗号拼接，未选为 "") |
| `shopName` | shopName | body | array | 否 | - | 店铺名称列表(上级页 #shopList 文本按逗号/空白拆分，未命中为 []) |
| `employeeName` | employeeName | body | array | 否 | - | 组员列表(上级页 #employeeList 多选，未选为 []) |
| `bigChief` | bigChief | body | array | 否 | - | 大酋长(店长上级)列表(上级页 #shopManager 多选，未选为 []) |
| `oneDay` | oneDay | body | string | 否 | - | 单日日期(本页 URL ?oneDay=，即所点报表列对应的那一天) |
| `type` | type | body | string | 否 | - | 费项类型(本页 URL ?type=，决定查询的费用大类，并作为 expenseType 缺省说明) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(本页固定 50) |
| `page` | page | body | number | 是 | - | 当前页码(首次固定 1，翻页取 api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息(如“查询成功”) | - |
| `success` | boolean | 业务是否成功标识 | - |
| `obj` | object | 分页业务数据对象(PageDifferenctDto) | - |
| `obj.count` | number | 满足条件的明细总条数(前端写入 #total) | - |
| `obj.countPage` | number | 总页数(前端传入分页控件 pageCount) | - |
| `obj.page` | number | 当前页码(后端分页对象回填，前端未直接使用) | - |
| `obj.pageSize` | number | 每页条数(后端分页对象回填，前端未直接使用) | - |
| `obj.result[]` | array | 费项差异明细列表(ExpenseDTO 行) | - |
| `obj.result[][0]` | string | 订单编号(无 groupId 时渲染为订单详情链接 /eshop/order.do?method=edit&orderid=) | - |
| `obj.result[][1]` | string | 差异批次/分组ID(非空时该行作为批次汇总行加粗显示，并展示 订单号/批次号) | - |
| `obj.result[][2]` | string | 店铺名称 | - |
| `obj.result[][3]` | string | 费项类型(枚举：平台费/付款交易费/罚款/站内推广费/站外推广费/店铺成本，决定展示哪列金额) | - |
| `obj.result[][4]` | number | 平台费金额(expenseType2='平台费' 时展示) | - |
| `obj.result[][5]` | number | 付款交易费金额(expenseType2='付款交易费' 时展示) | - |
| `obj.result[][6]` | number | 罚款金额(expenseType2='罚款' 时展示) | - |
| `obj.result[][7]` | number | 站内推广费金额(expenseType2='站内推广费' 时展示) | - |
| `obj.result[][8]` | number | 站外推广费金额(expenseType2='站外推广费' 时展示) | - |
| `obj.result[][9]` | number | 店铺成本金额(expenseType2='店铺成本' 时展示) | - |
| `obj.result[][10]` | string | 店长 | - |
| `obj.result[][11]` | string | 费项说明(后端按 groupId 匹配 ExpenseFinish.childName，无匹配则取请求 type) | - |
| `obj.result[][12]` | string | 插入时间(后端取 ExpenseFinish.createdOn) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
