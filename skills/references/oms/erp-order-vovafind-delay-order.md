<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-vovafind-delay-order

Vova延迟订单查询：按订单时间区间与店铺分页查询 Vova 订单列表（含借用运单/借用物流等信息），用于页面表格渲染与分页。页面加载即自动调用一次。

## 用法

```bash
mbs oms erp-order-vovafind-delay-order [--ordertimestart <string>] [--ordertimeend <string>] --currPage <number> --pageSize <number> [--shopName <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ERPOrder/vovafindDelayOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `ordertimestart` | ordertimestart | body | string | 否 | - | 订单开始时间。来源控件 #ordertimestart(type=date)，格式 yyyy-MM-dd |
| `ordertimeend` | ordertimeend | body | string | 否 | - | 订单结束时间。来源控件 #ordertimeend(type=date)，格式 yyyy-MM-dd；需≥开始时间 |
| `currPage` | currPage | body | number | 是 | - | 当前页码。首次固定1，翻页取分页组件 api.getCurrent() |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数。固定值50 |
| `shopName` | shopName | body | string | 否 | - | 店铺名称。来源控件 #shopName 下拉。枚举：空=全部；vova027=vova027 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `pages` | number | 总页数（赋值给分页组件 pageCount） | - |
| `total` | number | 满足条件的订单总数（渲染到 #total） | - |
| `list[]` | array | 订单列表（模板 {{each obj.list}} 遍历渲染） | - |
| `list[][0]` | string | 订单编号（同时作为导出复选框 value） | - |
| `list[][1]` | string | 订单日期 | - |
| `list[][2]` | string | 订单状态 | - |
| `list[][3]` | string | 国家 | - |
| `list[][4]` | string | 运单号 | - |
| `list[][5]` | string | 借用运单号 | - |
| `list[][6]` | string | 借用物流 | - |
| `list[][7]` | string | 借用国家 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
