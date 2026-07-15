# mbs oms erp-order-get-leader-shop4-new

店长/店铺列表查询(getLeaderShop4New)：在「订单时间业绩/发货时间业绩」报表页中，根据所属平台、组员、大酋长(店长)、客服经理、公司等条件查询符合条件的店铺清单，用于店铺勾选弹框/店铺下拉的数据渲染。

## 用法

```bash
mbs oms erp-order-get-leader-shop4-new [--platformIds <array>] [--employeeList <array>] [--bigChiefList <array>] [--customerServiceMgr <string>] [--companyId <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getLeaderShop4New`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformIds` | platformIds | body | array | 否 | - | 所属平台ID列表(来源 #reserve11，无选中传[]) |
| `employeeList` | employeeList | body | array | 否 | - | 组员(员工名)列表(来源 #employeeList，无选中传[]) |
| `bigChiefList` | bigChiefList | body | array | 否 | - | 大酋长(店长)ID列表(来源 #shopManager，无选中传[]) |
| `customerServiceMgr` | customerServiceMgr | body | string | 否 | - | 客服(客户)经理，多选逗号拼接(来源 #custService.val().join(','),无选中传"") |
| `companyId` | companyId | body | string | 否 | - | 公司ID(来源公司下拉 #componey) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(待人工确认，回调仅判断 data.obj) | - |
| `desc` | string | 响应提示信息(待人工确认，回调未直接使用) | - |
| `obj[]` | array | 店铺列表数组(满足筛选条件的店铺集合) | - |
| `obj[][0]` | string | 店铺名称(店铺唯一标识，作为勾选 checkbox 的 value 提交) | - |
| `obj[][1]` | string | 店铺显示名称(表格「店铺」列展示文本) | - |
| `obj[][2]` | string | 店长(表格「店长」列) | - |
| `obj[][3]` | string | 大酋长(表格「大酋长」列) | - |
| `obj[][4]` | string | 运营状态(表格「运营状态」列；筛选枚举:1=运营中,2=暂停运营,3=永久关闭中) | - |
| `obj[][5]` | string | 客服(客户)经理(表格「客服经理」列) | - |
| `obj[][6]` | string | 是否虚拟(表格「是否虚拟」列；筛选枚举:1=是,2=否) | - |
| `obj[][7]` | string | 店铺等级(表格「店铺等级」列；枚举:1=A,2=B,3=C,4=D,5=E,6=F) | - |
| `obj[][8]` | string | 开店时间(表格「开店时间」列) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
