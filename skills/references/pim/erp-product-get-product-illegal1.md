<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-product-illegal1

违规/举报产品列表查询：商品违规处理页(registrationForm)的列表查询接口：按 flag 区分两种业务视图——flag=1 违规产品列表(tab1)，flag=2 举报产品列表(tab2)。支持开发经理/开发员/采购员/创建人组长/适用平台/异常原因/SKU/开发时间区间等条件筛选，返回产品行列表及销量、毛利率、退款率、异常/举报信息、审核状态等字段。

## 用法

```bash
mbs pim erp-product-get-product-illegal1 --flag <number> [--startDate <string>] [--endDate <string>] [--productid <string>] [--manager <string>] [--oper3 <string>] [--oper1 <string>] [--abnormaltype <string>] [--employees <array>] [--platformList <array>] --pageSize <number> --page <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getProductIllegal1`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `flag` | flag | body | number | 是 | - | 查询类型标识。1=违规产品(tab1,search1)；2=举报产品(tab2,search2) |
| `startDate` | startDate | body | string | 否 | - | 开发时间-起始(yyyy-MM-dd)。来源控件 #startDate |
| `endDate` | endDate | body | string | 否 | - | 开发时间-结束(yyyy-MM-dd)。来源控件 #endDate |
| `productid` | productid | body | string | 否 | - | SKU编码(按SKU查询)。来源控件 #productid |
| `manager` | manager | body | string | 否 | - | 开发经理(姓名)。来源控件 #manager |
| `oper3` | oper3 | body | string | 否 | - | 开发员(姓名)。来源控件 #oper3(depId=62) |
| `oper1` | oper1 | body | string | 否 | - | 采购员(姓名)。来源控件 #oper1(depId=65) |
| `abnormaltype` | abnormaltype | body | string | 否 | - | 异常/举报原因编码(仅 flag=2)。来源 #abnormaltype。枚举 WG64/WG74/WG75/WG63/WG61/WG69/WG68/WG70/WG71/WG65/WG66/WG67/WG72/WG73 |
| `employees` | employees | body | array | 否 | - | 创建人组长字符串数组(仅 flag=2)。取 #groupLeader 值，有值包成[组长]，无值为[] |
| `platformList` | platformList | body | array | 否 | - | 适用平台名称字符串数组(仅 flag=2)。来源控件 #applicablePlatformSelect 多选 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数。页面固定50；导出(exprotExcel)时为6000 |
| `page` | page | body | number | 是 | - | 当前页码(首次=1，分页回调取 api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功；601=未登录；其他=失败 | - |
| `desc` | string | 响应提示信息(失败/未登录时弹窗展示) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的产品总数(前端据此与pageSize算总页数) | - |
| `obj.pageSize` | number | 每页条数(用于算总页数) | - |
| `obj.result[]` | array | 产品行列表 | - |
| `obj.result[][0]` | string | 商品主图URL(加载失败回退 timg.jpg) | - |
| `obj.result[][1]` | string | SKU编码(链接 SKUdetails.html?SKU=) | - |
| `obj.result[][2]` | string | SPU编号(flag=2，链接 /Setupspu?spu=) | - |
| `obj.result[][3]` | string | SKU名称(为 null 时显示空) | - |
| `obj.result[][4]` | string | 开发经理 | - |
| `obj.result[][5]` | string | 开发人员 | - |
| `obj.result[][6]` | string | 采购人员 | - |
| `obj.result[][7]` | string | 开发(创建)时间 | - |
| `obj.result[][8]` | string | 产品状态(flag=2)。枚举：正常/清仓 | - |
| `obj.result[][9]` | number | 差评数(flag=2) | - |
| `obj.result[][10]` | string | 商品属性 | - |
| `obj.result[][11]` | string | 销量等级。枚举：超爆/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品；后端返回'超级爆款'时前端转为'超爆' | - |
| `obj.result[][12]` | number | 毛利率(原值为小数，前端×100保留2位展示%) | - |
| `obj.result[][13]` | number | 退款率(前端保留2位展示%) | - |
| `obj.result[][14]` | number | 近7天销量 | - |
| `obj.result[][15]` | number | 近30天销量 | - |
| `obj.result[][16]` | number | 近90天销量 | - |
| `obj.result[][17]` | string | 异常编号(flag=1；拼接异常图标图片URL) | - |
| `obj.result[][18]` | string | 异常类型(flag=1)/举报类型(flag=2) | - |
| `obj.result[][19]` | string | 创建人 | - |
| `obj.result[][20]` | string | 创建时间 | - |
| `obj.result[][21]` | string | 创建人组长(flag=2) | - |
| `obj.result[][22]` | string | 平台(flag=2) | - |
| `obj.result[][23]` | string | itemId/asin(flag=2) | - |
| `obj.result[][24]` | string | 举报原因(flag=2，为 null 显示空) | - |
| `obj.result[][25]` | string | 是否有举报图片标志(flag=2，存在时渲染 photoList 缩略图) | - |
| `obj.result[][26][]` | array | 举报图片URL列表(flag=2，item 为图片URL字符串) | - |
| `obj.result[][27]` | string | 处理意见/备注(存在时展示，可编辑) | - |
| `obj.result[][28]` | string | 记录序号ID(编辑/审核/标记处理的键) | - |
| `obj.result[][29]` | number | 审核状态(flag=1)。0=驳回；1=已通过审核；其他/空=待审核 | - |
| `obj.result[][30]` | string | 创建人部门(flag=1)。为'总经办'时显示[审核]入口 | - |
| `obj.result[][31]` | string | 审核备注(flag=1，存在时括号展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
