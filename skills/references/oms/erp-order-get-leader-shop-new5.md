# mbs oms erp-order-get-leader-shop-new5

店长店铺列表查询(getLeaderShopNew5)：销售报表(saleReport)模块：根据大区长、客服经理、店长(员工)、平台、关键词、运营状态等条件查询店长名下的店铺列表，返回店铺数组(SHOPID/SHOPNAME)，用于「店铺」多选下拉(el-select)的选项渲染与远程搜索。

## 用法

```bash
mbs oms erp-order-get-leader-shop-new5 [--bigChiefList <array>] [--customerServiceMgr <string>] [--employeeList <array>] [--isvirtual <string>] [--keyWord <string>] [--operatestatus <string>] --page <number> [--platformIds <array>] [--rank <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getLeaderShopNew5`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `bigChiefList` | bigChiefList | body | array | 否 | - | 大区长列表(当前固定传空数组 []);元素类型(待人工确认) |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客服经理(当前固定传空字符串 '') |
| `employeeList` | employeeList | body | array | 否 | - | 店长(员工)列表,来源「店长」下拉 shopleader(取 el-option 的 item.employee_name);getshop 为 shopleader==''?[]:[shopleader],remoteMethod 直接传 shopleader |
| `isvirtual` | isvirtual | body | string | 否 | - | 是否虚拟店铺(当前固定传 null,枚举待人工确认) |
| `keyWord` | keyWord | body | string | 否 | - | 店铺名称搜索关键词;remoteMethod 取下拉远程输入值 val,getshop 传 '' |
| `operatestatus` | operatestatus | body | string | 否 | - | 运营状态(当前固定传 null,枚举待人工确认) |
| `page` | page | body | number | 是 | - | 当前页码(固定传 1) |
| `platformIds` | platformIds | body | array | 否 | - | 平台ID列表,来源「平台」下拉 plantform(取 el-option 的 item.PLATFORMID);plantform==''?[]:[plantform] |
| `rank` | rank | body | string | 否 | - | 排名/等级(当前固定传 null,枚举待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `rows[]` | array | 店铺列表(res.data.rows),赋给 shoplist | - |
| `rows[][0]` | string | 店铺ID(作为 el-option 的 :key 与多选项标识) | - |
| `rows[][1]` | string | 店铺名称(作为 el-option 的 :label 与 :value 展示/选中值) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
