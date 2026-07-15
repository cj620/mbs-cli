<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-show-ebay-bill-detail

Ebay账户费用账单明细查询：按账单标识(billStr)、店铺、费用类型分页查询某 Ebay 账单下的费用明细，返回明细列表(店铺、账户、费用类型、毛/净明细、增值税率、人民币金额、汇率、itemid、商品标题等)及分页信息(总页数、总条数)。

## 用法

```bash
mbs oms erp-order-show-ebay-bill-detail --billStr <string> --shopId <string> [--type <string>] [--currPage <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayAccountFee/showEbayBillDetail`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `billStr` | billStr | body | string | 是 | - | 账单标识串(账单ID/账单编码)。来源：页面URL查询参数 GetQueryString('billStr') |
| `shopId` | shopId | body | string | 是 | - | 店铺ID。来源：页面URL查询参数 GetQueryString('shopId') |
| `type` | type | body | string | 否 | - | 费用类型(按费用类型筛选)。来源：费用类型下拉框 #freeType；空表示全部 |
| `currPage` | currPage | body | number | 否 | - | 当前页码。来源：分页控件回调 api.getCurrent()；首次加载不传，翻页时传 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `list[]` | array | 费用明细列表 | - |
| `list[][0]` | string | 店铺名 | - |
| `list[][1]` | string | Ebay账户(账户ID) | - |
| `list[][2]` | string | 费用类型 | - |
| `list[][3]` | string | 费用类型描述 | - |
| `list[][4]` | string | 发生时间 | - |
| `list[][5]` | number | 毛明细(原币金额) | - |
| `list[][6]` | number | 净明细(原币金额) | - |
| `list[][7]` | number | 增值税率(前端拼接 % 展示) | - |
| `list[][8]` | number | 毛明细(人民币) | - |
| `list[][9]` | number | 净明细(人民币) | - |
| `list[][10]` | number | 汇率 | - |
| `list[][11]` | string | 相关 itemid(Ebay 商品 itemID) | - |
| `list[][12]` | string | 商品标题 | - |
| `list[][13]` | string | RefNumber(参考号) | - |
| `list[][14]` | string | orderLineItemID(订单行项目ID) | - |
| `total` | number | 满足条件的明细总条数(前端展示"共N条") | - |
| `pages` | number | 总页数(前端用于初始化分页控件 pageCount) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
