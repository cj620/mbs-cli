<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-ebay-shop-spk-order

eBay店铺SPK发货比例(周报)查询：按店铺/店铺负责人/国家及周次维度，分页查询 eBay 店铺一周(周日~周六)每天的「符合SPK考核范围订单数 / 客户自选SPK订单数 / 自选并匹配SPK订单数 / 符合且自选且匹配SPK订单数」，并返回考核范围内实际发SPK比例与自选SPK实际发SPK比例；支持上一周/下一周翻页。

## 用法

```bash
mbs oms erp-order-ebay-shop-spk-order --page <number> [--shopId <string>] [--shopManager <string>] [--country <string>] [--week <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/ebayShopSpkRate/ebayShopSpkOrder`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码。search() 固定传 1；分页回调传 api.getCurrent()。来源：分页控件 |
| `shopId` | shopId | body | string | 否 | - | 店铺ID(多选逗号拼接)。来源控件：#shopName 店铺多选下拉(选项 value=SHOPID) |
| `shopManager` | shopManager | body | string | 否 | - | 店铺负责人/店长(多选逗号拼接)。来源控件：#commodity 店铺负责人多选下拉(选项 value=oper.name) |
| `country` | country | body | string | 否 | - | 国家(多选逗号拼接)。来源控件：#countrys 国家多选下拉 |
| `week` | week | body | string | 否 | - | 周次标识。空字符串=本周；翻「上一周」时取上次响应 obj.lastWeek 值(#lastWeek)；翻「下一周」时取 obj.nextWeek 值(#nextWeek)。来源控件：上一周/下一周按钮 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准响应封装，前端逻辑未直接使用，待人工确认枚举) | - |
| `desc` | string | 响应提示信息(标准响应封装，前端逻辑未直接使用) | - |
| `obj` | object | 业务数据对象(前端以 data.obj 是否存在判断有无数据) | - |
| `obj.data` | object | 报表数据对象 | - |
| `obj.data.count` | number | 满足条件的总条数(首屏 search 中显示 #total) | - |
| `obj.data.countPage` | number | 总页数(传入分页控件 findTaskReport 初始化分页) | - |
| `obj.data.result[]` | array | 报表行列表(渲染 #contentTemplate) | - |
| `obj.data.result[][0]` | string | 店铺名称 | - |
| `obj.data.result[][1]` | string | 店长(店铺负责人) | - |
| `obj.data.result[][2]` | string | 国家 | - |
| `obj.data.result[][3]` | number | 周日-符合SPK考核范围的订单数 | - |
| `obj.data.result[][4]` | number | 周日-客户自选SPK的订单数 | - |
| `obj.data.result[][5]` | number | 周日-自选并匹配SPK的订单数 | - |
| `obj.data.result[][6]` | number | 周日-符合SPK且自选且匹配SPK的订单数 | - |
| `obj.data.result[][7]` | number | 周一-符合SPK考核范围的订单数 | - |
| `obj.data.result[][8]` | number | 周一-客户自选SPK的订单数 | - |
| `obj.data.result[][9]` | number | 周一-自选并匹配SPK的订单数 | - |
| `obj.data.result[][10]` | number | 周一-符合SPK且自选且匹配SPK的订单数 | - |
| `obj.data.result[][11]` | number | 周二-符合SPK考核范围的订单数 | - |
| `obj.data.result[][12]` | number | 周二-客户自选SPK的订单数 | - |
| `obj.data.result[][13]` | number | 周二-自选并匹配SPK的订单数 | - |
| `obj.data.result[][14]` | number | 周二-符合SPK且自选且匹配SPK的订单数 | - |
| `obj.data.result[][15]` | number | 周三-符合SPK考核范围的订单数 | - |
| `obj.data.result[][16]` | number | 周三-客户自选SPK的订单数 | - |
| `obj.data.result[][17]` | number | 周三-自选并匹配SPK的订单数 | - |
| `obj.data.result[][18]` | number | 周三-符合SPK且自选且匹配SPK的订单数 | - |
| `obj.data.result[][19]` | number | 周四-符合SPK考核范围的订单数 | - |
| `obj.data.result[][20]` | number | 周四-客户自选SPK的订单数 | - |
| `obj.data.result[][21]` | number | 周四-自选并匹配SPK的订单数 | - |
| `obj.data.result[][22]` | number | 周四-符合SPK且自选且匹配SPK的订单数 | - |
| `obj.data.result[][23]` | number | 周五-符合SPK考核范围的订单数 | - |
| `obj.data.result[][24]` | number | 周五-客户自选SPK的订单数 | - |
| `obj.data.result[][25]` | number | 周五-自选并匹配SPK的订单数 | - |
| `obj.data.result[][26]` | number | 周五-符合SPK且自选且匹配SPK的订单数 | - |
| `obj.data.result[][27]` | number | 周六-符合SPK考核范围的订单数 | - |
| `obj.data.result[][28]` | number | 周六-客户自选SPK的订单数 | - |
| `obj.data.result[][29]` | number | 周六-自选并匹配SPK的订单数 | - |
| `obj.data.result[][30]` | number | 周六-符合SPK且自选且匹配SPK的订单数 | - |
| `obj.data.result[][31]` | number | 考核范围内实际发SPK比例(前端展示为 值%；模板对 0 也展示) | - |
| `obj.data.result[][32]` | number | 自选SPK实际发SPK比例(前端展示为 值%；模板对 0 也展示) | - |
| `obj.total` | number | 总条数(分页回调 findTaskReport 中用于显示 #total) | - |
| `obj.lastWeek` | string | 上一周标识。存在则显示「上一周」按钮并回填 #lastWeek，作为下次请求 week 值 | - |
| `obj.nextWeek` | string | 下一周标识。存在则显示「下一周」按钮并回填 #nextWeek，作为下次请求 week 值 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
