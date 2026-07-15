<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-get-shorage-sku-info

缺货SKU列表查询：仪表盘“缺货SKU”明细查询：按平台分类(sortnum)查询当前缺货的SKU列表，返回每个SKU的图片、商品信息、状态、侵权/淘汰标记、开发员/采购员、缺货单量与件数、销售级别、近7/30/90天销量、产品创建时间、最新采购信息及最后一次跟进日志。

## 用法

```bash
mbs fars erpaccount-get-shorage-sku-info [--sortnum <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/getShorageSkuInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sortnum` | sortnum | query | string | 否 | - | 平台分类序号(URL查询参数)。由页面URL的name参数(平台中文名)映射:ebay虚拟海外仓=1;Shopee=2;Wish=3;Amazon=4;ebay非海外仓=5;aliexpress=6;SeeBee=7;Joom=8;其他=9;Lazada=10;ozon.ru=11;Walmart=12;TikTok=13;Fyndiq=14;SMT全托半托JIT=15 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `obj[]` | array | 缺货SKU列表(业务数据数组) | - |
| `obj[][0]` | string | 商品图片URL | - |
| `obj[][1]` | string | 商品名称/商品信息 | - |
| `obj[][2]` | string | SKU编号(链接至SKU详情及采购单) | - |
| `obj[][3]` | string | 产品状态。枚举:清仓/停产/暂停销售(橙色),其余正常(绿色) | - |
| `obj[][4]` | string | 侵权标记。'1'=侵权 | - |
| `obj[][5]` | string | 淘汰标记。'-1'=已淘汰 | - |
| `obj[][6]` | string | 产品名(红色文字展示) | - |
| `obj[][7]` | number | 成本价 | - |
| `obj[][8]` | string | 开发员 | - |
| `obj[][9]` | string | 采购员 | - |
| `obj[][10]` | number | 缺货单量 | - |
| `obj[][11]` | number | 缺货件数 | - |
| `obj[][12]` | string | 销售级别枚举:超爆/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品 | - |
| `obj[][13]` | number | 近7天销量 | - |
| `obj[][14]` | number | 近30天销量 | - |
| `obj[][15]` | number | 近90天销量 | - |
| `obj[][16]` | string | 产品创建时间 | - |
| `obj[][17]` | string | 采购组ID(最新采购信息,跳转采购单列表) | - |
| `obj[][18]` | string | 采购状态 | - |
| `obj[][19]` | number | 采购数量 | - |
| `obj[][20]` | string | 最后一次跟进日志 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
