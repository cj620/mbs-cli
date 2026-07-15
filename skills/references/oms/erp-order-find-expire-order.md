# mbs oms erp-order-find-expire-order

到期订单列表查询：订单管理「到期订单」页签查询：按店铺、店长、延迟天数区间筛选备货到期/临期订单，分页返回订单列表（含状态、店铺、金额、备货时长、国家、物流、运费等）及总数/总页数。

## 用法

```bash
mbs oms erp-order-find-expire-order [--shopid <string>] [--shopManager <string>] [--delayDaysS <string>] [--delayDaysE <string>] [--currPage <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findExpireOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopid` | shopid | query | string | 否 | - | 店铺ID（来源店铺下拉 #shopName8，空则不限店铺） |
| `shopManager` | shopManager | query | string | 否 | - | 店长/店铺负责人（来源店长下拉 #saleLeader8） |
| `delayDaysS` | delayDaysS | query | string | 否 | - | 延迟天数-起始（来源输入框 #delayDaysS，单位：天；仅首次查询拼接） |
| `delayDaysE` | delayDaysE | query | string | 否 | - | 延迟天数-结束（来源输入框 #delayDaysE，单位：天；仅首次查询拼接） |
| `currPage` | currPage | query | number | 否 | - | 当前页码（来源分页组件 .dueM-box，首次查询不传，翻页时拼接） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（无数据时为 null） | - |
| `obj.pages` | number | 总页数（前端用于分页 pageCount） | - |
| `obj.total` | number | 满足条件的到期订单总数 | - |
| `obj.list[]` | array | 到期订单列表 | - |
| `obj.list[][0]` | string | 订单编号（主键，跳转订单详情 orderdetail.html?orderid=） | - |
| `obj.list[][1]` | string | 订单状态 | - |
| `obj.list[][2]` | string | 禁止发货标记（有值时红色括号提示） | - |
| `obj.list[][3]` | string | 店铺名称 | - |
| `obj.list[][4]` | string | 店长/店铺负责人 | - |
| `obj.list[][5]` | string | 客户ID | - |
| `obj.list[][6]` | string | 原始币种 | - |
| `obj.list[][7]` | number | 原始订单金额（对应 currency 币种） | - |
| `obj.list[][8]` | number | 订单金额（RMB 人民币） | - |
| `obj.list[][9]` | string | 备货日期（截止/关闭时间） | - |
| `obj.list[][10]` | string | 延迟类型标记。1=危险(红色 label)；2=警告(黄色 label)，控制 delaydays 展示颜色 | - |
| `obj.list[][11]` | string | 剩余备货时长（单位：小时 H） | - |
| `obj.list[][12]` | string | 订单天数（距今日天数） | - |
| `obj.list[][13]` | string | 客户国家（中文） | - |
| `obj.list[][14]` | string | 客户国家（英文） | - |
| `obj.list[][15]` | string | 物流方式 | - |
| `obj.list[][16]` | string | 订单类型 | - |
| `obj.list[][17]` | string | 订单日期 | - |
| `obj.list[][18]` | string | 拉单时间（创建订单时间） | - |
| `obj.list[][19]` | number | 运费 | - |
| `obj.list[][20]` | string | 交易单号 | - |
| `obj.list[][21]` | string | 订单备注（有值时展示备注行） | - |
| `obj.list[][22]` | string | 订单SKU（模板中已注释，仍可能由接口返回，逗号分隔取首个，(待人工确认)) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
