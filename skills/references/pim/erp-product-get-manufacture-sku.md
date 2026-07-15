<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-manufacture-sku

SKU供应商信息查询(getManufactureSku)：SKU详情页加载该SKU的供应商(含主供应商与两个备选供应商)信息：供应商名称/ID、采购价、起批量、采购平台、平台链接、1688/淘宝/天猫备选供应商链接、旺旺号、商品图片等，用于渲染供应商表格(content2/contentTemplate2)。前端对返回数组补位至3条。

## 用法

```bash
mbs pim erp-product-get-manufacture-sku --sku <string> [--oper3 <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getManufactureSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | 要查询供应商信息的SKU编号(取自页面URL查询参数SKU) |
| `oper3` | oper3 | query | string | 否 | - | 开发员/创建人(oper3)，用于按开发员维度过滤供应商；无值时拼为undefined |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准封装) | - |
| `desc` | string | 响应提示信息(标准封装) | - |
| `obj[]` | array | 供应商信息列表;不足3条时前端用无供应商占位对象补齐到3条 | - |
| `obj[][0]` | string | 1688/阿里商品名称(占位值无供应商) | - |
| `obj[][1]` | string | 采购批次号/起批批次(待人工确认与起批量batch的关系) | - |
| `obj[][2]` | number | 成本价/采购成本价 | - |
| `obj[][3]` | string | 备用字段9(源码字段名拼写为filed9)(待人工确认业务含义) | - |
| `obj[][4]` | string | 备用字段10(源码字段名拼写为filed10)(待人工确认业务含义) | - |
| `obj[][5]` | string | 供应商商品图片URL | - |
| `obj[][6]` | string | 是否默认供应商标记(待人工确认取值规则) | - |
| `obj[][7]` | string | 主供应商名称 | - |
| `obj[][8]` | string | 备选供应商一名称(对应弹窗#manufacture2) | - |
| `obj[][9]` | string | 备选供应商二名称(对应弹窗#manufacture3) | - |
| `obj[][10]` | string | 主供应商ID | - |
| `obj[][11]` | string | 备选供应商一ID | - |
| `obj[][12]` | string | 备选供应商二ID | - |
| `obj[][13]` | number | 主供应商采购价 | - |
| `obj[][14]` | number | 备选供应商一采购价(源码字段名manufactureprice1) | - |
| `obj[][15]` | number | 备选供应商二采购价(源码字段名manufactureprice2) | - |
| `obj[][16]` | string | 开通/公开标记(待人工确认取值规则) | - |
| `obj[][17]` | string | 采购平台(占位值无,如1688/淘宝/天猫/供应链平台等) | - |
| `obj[][18]` | string | 采购平台链接URL(占位值空串) | - |
| `obj[][19]` | string | 备用字段1(待人工确认业务含义,采购上下文中常为运单号) | - |
| `obj[][20]` | string | 备选供应商一采购链接(须含taobao/tmall/1688,对应#reserve2) | - |
| `obj[][21]` | string | 备选供应商二采购链接(须含taobao/tmall/1688,对应#reserve3) | - |
| `obj[][22]` | string | SKU编号 | - |
| `obj[][23]` | string | 供应商/销售状态(1=正常销售,0=已下架) | - |
| `obj[][24]` | string | 旺旺号(占位值无,对应#wangwangname) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
