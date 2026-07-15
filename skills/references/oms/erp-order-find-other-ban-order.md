# mbs oms erp-order-find-other-ban-order

其他禁止订单分页查询：订单监控看板「其他禁止」标签页的列表查询：按店铺、店长筛选并分页拉取“其他原因被禁止发货”的订单，返回订单总数、总页数及订单行，前端用 art-template otherContentTemplate 渲染表格。

## 用法

```bash
mbs oms erp-order-find-other-ban-order [--currPage <number>] [--shopid <string>] [--shopManager <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findOtherBanOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | query | number | 否 | - | 当前页码。来源：分页组件回调 api.getCurrent()；首屏 otherSearch() 不传，翻页时由 otherPaging() 拼接 |
| `shopid` | shopid | query | string | 否 | - | 店铺ID(可多选/为空表示全部)。来源控件：#shopName2 下拉 |
| `shopManager` | shopManager | query | string | 否 | - | 店长/店铺管理员。来源控件：#saleLeader2 下拉 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(部分分支不校验 code,仅判断 obj 是否存在) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象;为空表示无数据(前端将总数置0) | - |
| `obj.total` | number | 满足条件的订单总数(渲染到 #othertotal/#otherspan) | - |
| `obj.pages` | number | 总页数(传入分页组件 pageCount) | - |
| `obj.list[]` | array | 其他禁止订单列表 | - |
| `obj.list[][0]` | string | 订单编号(行主键,用于跳转订单详情、解除禁止、作废、展开明细) | - |
| `obj.list[][1]` | string | 订单状态 | - |
| `obj.list[][2]` | number | 延迟天数(展示为“{delaydays}天”) | - |
| `obj.list[][3]` | string | 店铺名称 | - |
| `obj.list[][4]` | string | 店长/店铺管理员 | - |
| `obj.list[][5]` | string | 客户ID | - |
| `obj.list[][6]` | string | 原始币种 | - |
| `obj.list[][7]` | number | 原币订单金额(与 currency 同行展示) | - |
| `obj.list[][8]` | number | 订单金额(RMB) | - |
| `obj.list[][9]` | number | 订单利润率(展示为“{orderProfit}%”) | - |
| `obj.list[][10]` | string | 客户国家(中文) | - |
| `obj.list[][11]` | string | 客户国家(英文) | - |
| `obj.list[][12]` | string | 物流方式/运输类型 | - |
| `obj.list[][13]` | string | 订单日期(下单时间) | - |
| `obj.list[][14]` | string | 拉单(创建订单)时间 | - |
| `obj.list[][15]` | number | 运费 | - |
| `obj.list[][16]` | string | 交易单号 | - |
| `obj.list[][17]` | string | 订单备注(存在时额外渲染一行“订单备注:{content}”,并用于临时标记处理) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
