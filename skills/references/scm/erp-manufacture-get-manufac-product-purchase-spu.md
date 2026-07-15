<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-get-manufac-product-purchase-spu

供应商合作中产品(SPU)列表查询：供应商详情页「合作中产品」Tab：按供应商ID(manufactureId)分页查询该供应商合作中的商品(SPU)汇总列表，返回每个SPU的图片、名称、累计采购笔数/采购量/采购金额、开始与最后采购日，并支持点击展开下钻 SKU 明细。

## 用法

```bash
mbs scm erp-manufacture-get-manufac-product-purchase-spu --manufactureId <string> --pageSize <number> --page <number>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/manufactureExtendController/getManufacProductPurchaseSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `manufactureId` | manufactureId | query | string | 是 | - | 供应商ID(来源：页面URL参数 sequenceid，即 GetQueryString('sequenceid')) |
| `pageSize` | pageSize | query | number | 是 | - | 每页条数(前端固定传 50) |
| `page` | page | query | number | 是 | - | 当前页码(首次固定 1，翻页时取分页器 api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(同类接口回调以 data.code==200 判定) | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(分页结果) | - |
| `obj.count` | number | 合作中产品总条数(写入 #total7 展示) | - |
| `obj.countPage` | number | 总页数(传入 findTaskReport1() 初始化分页器 pageCount) | - |
| `obj.result[]` | array | 合作中产品(SPU)列表 | - |
| `obj.result[][0]` | string | 商品SPU编号(行展开 data-id，并作为 SPU详情链接 /product/SPUdetails.html?SPU= 参数及下钻SKU的 sid) | - |
| `obj.result[][1]` | string | 商品图片URL(加载失败回退 /2018ui/assets/images/timg.jpg) | - |
| `obj.result[][2]` | string | 商品名称 | - |
| `obj.result[][3]` | number | 累计采购笔数 | - |
| `obj.result[][4]` | number | 累计采购量(采购件数) | - |
| `obj.result[][5]` | number | 累计采购金额 | - |
| `obj.result[][6]` | string | 开始采购日(最早采购入库时间) | - |
| `obj.result[][7]` | string | 最后采购日(最近采购入库时间) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
