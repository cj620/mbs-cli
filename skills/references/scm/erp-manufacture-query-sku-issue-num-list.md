# mbs scm erp-manufacture-query-sku-issue-num-list

SKU纠纷数量明细查询：SMT纠纷分析列表页点击某行 SPU 时触发，按当前筛选条件 + 该行 SPU/产品ID 查询该 SPU 下各 SKU 的纠纷数量、退款金额与纠纷率明细，结果渲染到弹出表格(treedata)。

## 用法

```bash
mbs scm erp-manufacture-query-sku-issue-num-list [--country <string>] [--shopManager <string>] [--shopName <string>] [--sku <string>] [--spu <string>] [--expressType <string>] [--customerName <string>] [--itemId <string>] [--orderId <string>] [--pageSize <number>] [--sortStr <string>] [--startTime <string>] [--endTime <string>]
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/issueInfo/querySkuIssueNumList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `country` | country | body | string | 否 | - | 国家(来源输入框 placeholder=国家) |
| `shopManager` | shopManager | body | string | 否 | - | 店长(来源下拉 el-select，选项 shopmanagerlist) |
| `shopName` | shopName | body | string | 否 | - | 店铺(来源下拉 el-select-v2，选项 shopTypeList) |
| `sku` | sku | body | string | 否 | - | SKU(来源输入框 placeholder=sku) |
| `spu` | spu | body | string | 否 | - | SPU(初始来源输入框 placeholder=spu；下钻时被点击行 row.spu 覆盖) |
| `expressType` | expressType | body | string | 否 | - | 物流方式(来源下拉 el-select-v2，选项 expressList) |
| `customerName` | customerName | body | string | 否 | - | 客户名(searchData 内字段，页面无对应控件，固定传空) |
| `itemId` | itemId | body | string | 否 | - | 产品ID(初始来源输入框 placeholder=产品ID；下钻时被点击行 row.itemId 覆盖) |
| `orderId` | orderId | body | string | 否 | - | 订单ID(来源输入框 placeholder=订单ID) |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数(searchData 固定值 50) |
| `sortStr` | sortStr | body | string | 否 | - | 排序字段。枚举：q.issuenum desc=纠纷数量倒序;q.refundMoney desc=退款金额倒序;q.goodsErrIssueNum desc=货不对板数量倒序;q.expressErrIssueNum desc=物流纠纷数量倒序(默认 q.issuenum desc) |
| `startTime` | startTime | body | string | 否 | - | 订单时间-起始(来源订单时间 daterange time[0]，格式 YYYY-MM-DD) |
| `endTime` | endTime | body | string | 否 | - | 订单时间-结束(来源订单时间 daterange time[1]，格式 YYYY-MM-DD) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(统一响应包装，前端未直接使用) | - |
| `desc` | string | 响应提示信息(统一响应包装，前端未直接使用) | - |
| `obj[]` | array | SKU纠纷明细列表(赋值给 treedata 渲染表格) | - |
| `obj[][0]` | string | SKU编号(表格列 prop=sku) | - |
| `obj[][1]` | number | 纠纷数量(表格列 prop=issueNum) | - |
| `obj[][2]` | number | 退款金额(CNY)(表格列 prop=refundMoney) | - |
| `obj[][3]` | string | 纠纷率(表格列 prop=issueRate) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
