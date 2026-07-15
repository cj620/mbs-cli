# mbs oms erp-order-find-defict-ban-order

亏损禁止发货订单列表查询：销售融合订单-亏损禁止发货订单分页列表查询：按店长、店铺筛选，分页返回因亏损被禁止发货的订单列表，并返回总数与总页数用于分页。参数以URL Query String传递，无请求体。

## 用法

```bash
mbs oms erp-order-find-defict-ban-order [--currPage <number>] [--shopid <string>] [--shopManager <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findDefictBanOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | query | number | 否 | - | 当前页码（分页控件 api.getCurrent()；首次查询不传，翻页时传入，未传默认第1页） |
| `shopid` | shopid | query | string | 否 | - | 店铺ID（来源店铺下拉 #shopName1；空=全部店铺） |
| `shopManager` | shopManager | query | string | 否 | - | 店长（来源店长下拉 #saleLeader1；空=全部店长） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息（异常时提示文案） | - |
| `obj` | object | 业务数据对象（为null时前端总数置0） | - |
| `obj.total` | number | 满足条件的订单总数 | - |
| `obj.pages` | number | 总页数（初始化分页控件） | - |
| `obj.list[]` | array | 亏损禁止发货订单列表 | - |
| `obj.list[][0]` | string | 订单号（行主键；详情链接、复选框value、解除禁止/作废/标记处理操作传参） | - |
| `obj.list[][1]` | string | SKU集合（逗号分隔，取第1个跳转SKU详情；null显示斜杠) | - |
| `obj.list[][2]` | string | 订单状态 | - |
| `obj.list[][3]` | number | 延迟天数（展示"{值}天") | - |
| `obj.list[][4]` | string | 店铺名称 | - |
| `obj.list[][5]` | string | 店长 | - |
| `obj.list[][6]` | string | 客户ID | - |
| `obj.list[][7]` | string | 订单原始币种 | - |
| `obj.list[][8]` | number | 原始订单金额（原币种金额） | - |
| `obj.list[][9]` | number | 订单金额（RMB） | - |
| `obj.list[][10]` | number | 亏损额（RMB，toFixed(2)；<0标蓝否则标红，并据 defictAmount/(orderAmount+expressAmount)*100 计算亏损率%） | - |
| `obj.list[][11]` | number | 运费金额（参与亏损率计算并单独展示） | - |
| `obj.list[][12]` | string | 客户国家（中文） | - |
| `obj.list[][13]` | string | 客户国家（英文） | - |
| `obj.list[][14]` | string | 物流方式 | - |
| `obj.list[][15]` | string | 下单时间 | - |
| `obj.list[][16]` | string | 创建订单时间 | - |
| `obj.list[][17]` | string | 交易号（平台交易ID） | - |
| `obj.list[][18]` | string | 订单备注（存在时单独行展示） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
