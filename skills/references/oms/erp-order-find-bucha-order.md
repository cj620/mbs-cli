<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-bucha-order

补差大订单列表查询：订单看板「补差大」标签页的分页列表查询：按店铺、店长筛选，分页返回亏损补差较大的订单列表（含订单号、SKU、金额、亏损额、国家、物流方式、下单/建单时间等），用于补差大订单的处理（解除禁止/作废/标记已完成）。

## 用法

```bash
mbs oms erp-order-find-bucha-order --currPage <number> [--shopid <string>] [--shopManager <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findBuchaOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | query | number | 是 | - | 当前页码。首次查询固定传1，翻页时由分页回调 api.getCurrent() 传入 |
| `shopid` | shopid | query | string | 否 | - | 店铺ID（店铺筛选，取自下拉框 #shopName9，未选则为空串） |
| `shopManager` | shopManager | query | string | 否 | - | 店长（按店长筛选，取自下拉框 #saleLeader9，未选则为空串） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.total` | number | 满足条件的订单总数 | - |
| `obj.pages` | number | 总页数（传入分页组件 pageCount） | - |
| `obj.list[]` | array | 补差大订单列表 | - |
| `obj.list[][0]` | string | 订单号（行主键，详情链接、复选框值、解除禁止/标记处理均用此值） | - |
| `obj.list[][1]` | string | 订单SKU集合（逗号拼接，前端取 split(',')[0] 展示首个，为空显示 /） | - |
| `obj.list[][2]` | string | 订单状态 | - |
| `obj.list[][3]` | number | 运费 | - |
| `obj.list[][4]` | string | 店铺名称 | - |
| `obj.list[][5]` | string | 店长 | - |
| `obj.list[][6]` | string | 买家/客户ID | - |
| `obj.list[][7]` | string | 订单原始币种 | - |
| `obj.list[][8]` | number | 原始订单金额（原币种） | - |
| `obj.list[][9]` | number | 订单金额（RMB） | - |
| `obj.list[][10]` | number | 亏损额/补差额（RMB，前端 toFixed(2)；与 (orderAmount+expressAmount) 计算亏损率，<0 标蓝、否则标红） | - |
| `obj.list[][11]` | number | 物流(快递)费用（RMB，参与亏损率计算并展示） | - |
| `obj.list[][12]` | string | 买家国家(中文) | - |
| `obj.list[][13]` | string | 买家国家(英文) | - |
| `obj.list[][14]` | string | 物流方式/快递类型 | - |
| `obj.list[][15]` | string | 下单时间 | - |
| `obj.list[][16]` | string | 建单(创建订单)时间 | - |
| `obj.list[][17]` | string | 交易号/平台单号 | - |
| `obj.list[][18]` | string | 订单备注（存在时单独行展示「订单备注:xxx」） | - |
| `obj.list[][19]` | string | 店铺ID（「标记已完成」flagHandler.open(v) 取 rowData.shopId 提交） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
