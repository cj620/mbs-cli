<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-check-tracking-list-fba

FBA货件校验（checkTrackingListFba）：在出库进度/状态报表页的FBA出库校验弹窗中，输入FBA货件编号、头程运费、包裹称重(kg)、实际发货时间、店铺后点击校验，对货件做出库校验，返回该货件下每个FNSKU的马帮商品编号、本次出库量、重量、头程运费及异常信息列表(含捆绑商品标记)，结果用于 saveTrackingListFba 保存。

## 用法

```bash
mbs pim erp-product-check-tracking-list-fba --groupId <string> [--headFreight <string>] [--weight <number>] [--shopId <string>] [--shopName <string>] [--expressTime <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/fbaProduct/checkTrackingListFba`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `groupId` | groupId | body | string | 是 | - | FBA货件编号(来源输入框#groupId,占位示例FBA15JDVJ1VX,校验后回显于#fbacode) |
| `headFreight` | headFreight | body | string | 否 | - | 头程运费(RMB)(来源输入框#headFreight) |
| `weight` | weight | body | number | 否 | - | 包裹称重。前端输入单位为kg(#weight);有值时Number(值)*1000转为克(g)上送,为空时上送空串 |
| `shopId` | shopId | body | string | 否 | - | 店铺ID(来源隐藏域#shopid,由店铺勾选shopinptVal()写入data-id) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(来源#shopList输入框,支持多店铺空格分隔) |
| `expressTime` | expressTime | body | string | 否 | - | 实际发货时间(日期,来源日期控件#expressTime,格式yyyy-MM-dd) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(前端data.code==200判断) | - |
| `desc` | string | 响应提示信息(失败时alert(data.desc)) | - |
| `obj[]` | array | 校验明细列表(每行对应一个FNSKU的出库校验结果) | - |
| `obj[][0]` | string | FNSKU(亚马逊FBA货件SKU标识,模板首列展示) | - |
| `obj[][1]` | string | 马帮商品编号 | - |
| `obj[][2][]` | array | 商品明细列表;当detailsList.length>1时该行展示捆绑商品,N种产品做捆绑标记(子项字段待人工确认,保存时随obj原样回传) | - |
| `obj[][3]` | number | 本次出库量(件) | - |
| `obj[][4]` | number | 马帮商品重量(g) | - |
| `obj[][5]` | number | 头程运费(RMB);前端!=0时toFixed(2)保留两位展示 | - |
| `obj[][6]` | string | 异常信息(HTML,模板用{{@}}原文输出,标红展示,无异常则为空) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
