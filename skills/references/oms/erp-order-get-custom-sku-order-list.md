<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-custom-sku-order-list

定制SKU订单列表查询：仪表盘「定制sku」面板分页查询定制订单列表：按确认状态(未确认/已确认/已下单/所有)、店长、店铺过滤，返回订单+SKU+定制内容(文字/图片1/2/3)+采购发货等行数据及总条数，供 Element Plus 表格渲染与批量确认。

## 用法

```bash
mbs oms erp-order-get-custom-sku-order-list --page <number> --pageSize <number> [--isConfirm <string>] [--shopManager <string>] [--shopName <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/customOrder/getCustomSkuOrderList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码(搜索固定传1) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(固定100) |
| `isConfirm` | isConfirm | body | string | 否 | - | 确认状态。0=未确认;1=已确认;2=已下单;3=所有(选3时传null) |
| `shopManager` | shopManager | body | string | 否 | - | 店长(店长下拉的name,空串=全部) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(店铺下拉的SHOPNAME,空串=全部) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | number | 满足条件的订单总条数 | - |
| `list[]` | array | 定制订单SKU行列表 | - |
| `list[][0]` | string | 订单备注(展开行显示) | - |
| `list[][1]` | string | 平台留言(展开行显示) | - |
| `list[][2]` | string | 订单编号(链接订单详情、确认/重发操作key) | - |
| `list[][3]` | string | SKU图片URL(行首缩略图) | - |
| `list[][4]` | string | 订单状态(中文展示) | - |
| `list[][5]` | number | 序号ID(用于站内信message.do链接，存在时显示✉) | - |
| `list[][6]` | string | 交易单号 | - |
| `list[][7]` | string | 产品标题 | - |
| `list[][8]` | string | SKU编号(链接SKUdetails.html) | - |
| `list[][9]` | string | SPU编号(链接Setupspu查看刊登资料) | - |
| `list[][10]` | number | 购买数量(件) | - |
| `list[][11]` | string | 店铺名称 | - |
| `list[][12]` | string | 店长 | - |
| `list[][13]` | string | SKU项状态('已下单'时隐藏定制编辑/上传) | - |
| `list[][14]` | string | 定制内容1(文字)，展示去除前缀'定制内容(0):' | - |
| `list[][15][]` | array | 定制内容1图片URL数组 | - |
| `list[][16]` | string | 定制内容2(图片栏文字回退) | - |
| `list[][17][]` | array | 定制内容2图片URL数组 | - |
| `list[][18]` | string | 定制内容3是否展示标记 | - |
| `list[][19]` | string | 定制内容3(图片+文字)的文字 | - |
| `list[][20][]` | array | 定制内容3图片URL数组 | - |
| `list[][21]` | string | 订单时间 | - |
| `list[][22]` | string | 发货时间 | - |
| `list[][23]` | string | 采购批次 | - |
| `list[][24]` | string | 运单号 | - |
| `list[][25]` | number | 确认状态。1=已确认;2=已下单(非1非2显示确认按钮) | - |
| `list[][26]` | string | SKU明细行ID(主键，用于修改定制内容/图片、上传、确认下单) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
