# mbs product erp-product-product

商品(SPU)列表查询：商品中心SPU列表多维度分页查询：支持类目、11种关键词类型、销量/售卖/产品状态、开发员、时间区间、店铺、属性、抽检/轻小件/采样等数十项筛选，返回SPU列表及销量/毛利/平台等汇总字段。

## 用法

```bash
mbs product erp-product-product [--categoryId <string>] [--levelNum <number>] [--sku <string>] [--sonSku <string>] [--spu <string>] [--manufacture <string>] [--proName <string>] [--productName <string>] [--englishTitle <string>] [--batchSku <string>] [--proNameForAny <string>] [--fuzzyQuery <string>] [--location <string>] [--salesStatus <string>] [--skuStatus <string>] [--sellingStatus <string>] [--status <string>] [--oper <string>] [--buyer <string>] [--orderBy <string>] [--startDate <string>] [--endDate <string>] [--publishStartTime <string>] [--publishEndTime <string>] [--saleStartTime <string>] [--saleEndTime <string>] [--reduceCost <string>] [--tort <string>] [--shopIdList <string>] [--propertiesid <string>] [--spotcheck <string>] [--tkVideo <string>] [--buyflag <string>] [--purchaseFlag <string>] [--isAll <string>] [--searchCompanyId <string>] [--isAccount <string>] [--positionId <string>] [--pageSize <string>] [--page <number>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/product`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `995055f1ed30462b9fba78171d75c93b5c1ad4d546c8bf3a02d98360813fa352`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryId` | categoryId | body | string | 否 | - | 商品分类ID(类目级联最后一级 sequenceid) |
| `levelNum` | levelNum | body | number | 否 | - | 分类层级数(类目级联选择的层级) |
| `sku` | sku | body | string | 否 | - | 关键词-按SKU查询(搜索类型=SKU时) |
| `sonSku` | sonSku | body | string | 否 | - | 关键词-按子SKU查询 |
| `spu` | spu | body | string | 否 | - | 关键词-按SPU查询 |
| `manufacture` | manufacture | body | string | 否 | - | 关键词-按供应商查询 |
| `proName` | proName | body | string | 否 | - | 关键词-按产品名查询 |
| `productName` | productName | body | string | 否 | - | 关键词-按商品名称查询 |
| `englishTitle` | englishTitle | body | string | 否 | - | 关键词-按英文标题查询 |
| `batchSku` | batchSku | body | string | 否 | - | 关键词-按批量SKU查询 |
| `proNameForAny` | proNameForAny | body | string | 否 | - | 关键词-按产品名模糊(任意)查询 |
| `fuzzyQuery` | fuzzyQuery | body | string | 否 | - | 关键词-全文模糊查询 |
| `location` | location | body | string | 否 | - | 关键词-按仓位查询 |
| `salesStatus` | salesStatus | body | string | 否 | - | 销量状态(多选逗号拼接) |
| `skuStatus` | skuStatus | body | string | 否 | - | 产品状态(SKU状态,多选逗号拼接) |
| `sellingStatus` | sellingStatus | body | string | 否 | - | 售卖状态(超爆/爆/旺/平/滞等) |
| `status` | status | body | string | 否 | - | 产品状态(多选逗号拼接) |
| `oper` | oper | body | string | 否 | - | 开发员(多选逗号拼接) |
| `buyer` | buyer | body | string | 否 | - | 采购员(当前固定传空) |
| `orderBy` | orderBy | body | string | 否 | - | 排序字段(降序排序选择) |
| `startDate` | startDate | body | string | 否 | - | 开发时间-起始 |
| `endDate` | endDate | body | string | 否 | - | 开发时间-结束 |
| `publishStartTime` | publishStartTime | body | string | 否 | - | 刊登时间-起始 |
| `publishEndTime` | publishEndTime | body | string | 否 | - | 刊登时间-结束 |
| `saleStartTime` | saleStartTime | body | string | 否 | - | 销售时间-起始 |
| `saleEndTime` | saleEndTime | body | string | 否 | - | 销售时间-结束 |
| `reduceCost` | reduceCost | body | string | 否 | - | 降本筛选 |
| `tort` | tort | body | string | 否 | - | 侵权筛选 |
| `shopIdList` | shopIdList | body | string | 否 | - | 店铺(店铺ID列表) |
| `propertiesid` | propertiesid | body | string | 否 | - | 商品属性(多选逗号拼接) |
| `spotcheck` | spotcheck | body | string | 否 | - | 是否已抽检 |
| `tkVideo` | tkVideo | body | string | 否 | - | 是否有TikTok视频(固定'2'时) |
| `buyflag` | buyflag | body | string | 否 | - | 是否轻小件 |
| `purchaseFlag` | purchaseFlag | body | string | 否 | - | 是否采样备货 |
| `isAll` | isAll | body | string | 否 | - | 是否查看全公司(1=全公司,0=本人) |
| `searchCompanyId` | searchCompanyId | body | string | 否 | - | 公司ID(按公司过滤) |
| `isAccount` | isAccount | body | string | 否 | - | 是否账期供应商(当前固定传空) |
| `positionId` | positionId | body | string | 否 | - | 岗位ID(取自 localStorage) |
| `pageSize` | pageSize | body | string | 否 | - | 每页条数 |
| `page` | page | body | number | 否 | - | 当前页码(固定从1开始) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的商品总数(前端据此与pageSize算总页数) | - |
| `obj.pageSize` | number | 每页条数 | - |
| `obj.result[]` | array | 商品(SPU)列表 | - |
| `obj.result[]` | unknown | - | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
