# mbs pim erp-product-product-info

商品(SKU)极致版列表查询：商品极致版页面 SKU 维度分页查询：按类目、11种关键词类型、售卖/销量/产品状态、开发员/采购员、开发时间区间、库存/销量/重量/成本区间、国家/平台、黑马、抽检/轻小件/采样、站点等数十项筛选，返回 SKU 列表及毛利/退款/销量/库存/刊登率等汇总字段。

## 用法

```bash
mbs pim erp-product-product-info [--categoryId2 <array>] [--sku <string>] [--sonSku <string>] [--manufacture <string>] [--proName <string>] [--batchSku <string>] [--productName <string>] [--englishTitle <string>] [--fuzzyQuery <string>] [--location <string>] [--spu <string>] [--sellingStatus <string>] [--salesStatus <string>] [--status <string>] [--orderBy <string>] [--buyer <string>] [--savenum1 <string>] [--savenum2 <string>] [--propertiesid <string>] [--startDate <string>] [--endDate <string>] [--reduceCost <string>] [--tort <string>] [--oper <string>] [--minSalesVolume30 <string>] [--maxSalesVolume30 <string>] [--hjreserve4 <string>] [--hjreserve6 <string>] [--priceflag <string>] [--minWeight <string>] [--maxWeight <string>] [--minCostPrice <string>] [--maxCostprice <string>] [--site <string>] [--spotcheck <string>] [--buyflag <string>] [--purchaseFlag <string>] [--positionId <string>] --pageSize <number> --page <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/productInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `categoryId2` | categoryId2 | body | array | 否 | - | 二级分类(子分类 sequenceid 数组；未选具体子类时回填该一级类下全部子类ID) |
| `sku` | sku | body | string | 否 | - | 关键词-按SKU查询(seekType=SKU) |
| `sonSku` | sonSku | body | string | 否 | - | 关键词-按子SKU查询(seekType=子SKU) |
| `manufacture` | manufacture | body | string | 否 | - | 关键词-按供应商查询(seekType=供应商) |
| `proName` | proName | body | string | 否 | - | 关键词-按产品名查询(seekType=proName) |
| `batchSku` | batchSku | body | string | 否 | - | 关键词-按批量SKU查询(seekType=batchSku，逗号分隔) |
| `productName` | productName | body | string | 否 | - | 关键词-按商品名称/关键字查询(seekType=productName) |
| `englishTitle` | englishTitle | body | string | 否 | - | 关键词-按英文标题模糊查询(seekType=englishTitle) |
| `fuzzyQuery` | fuzzyQuery | body | string | 否 | - | 关键词-全文模糊查询(seekType=fuzzy) |
| `location` | location | body | string | 否 | - | 关键词-按仓位编码查询(seekType=location) |
| `spu` | spu | body | string | 否 | - | 关键词-按SPU查询(默认/seekType=SPU) |
| `sellingStatus` | sellingStatus | body | string | 否 | - | 售卖状态(超爆/爆/旺/平/滞等) |
| `salesStatus` | salesStatus | body | string | 否 | - | 销量状态(多选逗号拼接) |
| `status` | status | body | string | 否 | - | 产品状态(正常/清仓/停产/暂停销售等) |
| `orderBy` | orderBy | body | string | 否 | - | 降序排序字段(flag=6 时取 localStorage ranks) |
| `buyer` | buyer | body | string | 否 | - | 采购员 |
| `savenum1` | savenum1 | body | string | 否 | - | 库存(最小值) |
| `savenum2` | savenum2 | body | string | 否 | - | 库存(最大值) |
| `propertiesid` | propertiesid | body | string | 否 | - | 商品属性(多选逗号拼接) |
| `startDate` | startDate | body | string | 否 | - | 开发时间-起始 |
| `endDate` | endDate | body | string | 否 | - | 开发时间-结束 |
| `reduceCost` | reduceCost | body | string | 否 | - | 降本筛选 |
| `tort` | tort | body | string | 否 | - | 侵权筛选 |
| `oper` | oper | body | string | 否 | - | 开发员 |
| `minSalesVolume30` | minSalesVolume30 | body | string | 否 | - | 近30天销量-最小 |
| `maxSalesVolume30` | maxSalesVolume30 | body | string | 否 | - | 近30天销量-最大 |
| `hjreserve4` | hjreserve4 | body | string | 否 | - | 国家(国王榜) |
| `hjreserve6` | hjreserve6 | body | string | 否 | - | 平台(国王榜) |
| `priceflag` | priceflag | body | string | 否 | - | 是否黑马 |
| `minWeight` | minWeight | body | string | 否 | - | 重量-最小 |
| `maxWeight` | maxWeight | body | string | 否 | - | 重量-最大 |
| `minCostPrice` | minCostPrice | body | string | 否 | - | 成本-最小 |
| `maxCostprice` | maxCostprice | body | string | 否 | - | 成本-最大 |
| `site` | site | body | string | 否 | - | 站点 |
| `spotcheck` | spotcheck | body | string | 否 | - | 是否已抽检(1/空) |
| `buyflag` | buyflag | body | string | 否 | - | 是否轻小件(1/空) |
| `purchaseFlag` | purchaseFlag | body | string | 否 | - | 是否采样备货(1/空) |
| `positionId` | positionId | body | string | 否 | - | 岗位ID(取自 localStorage) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数 |
| `page` | page | body | number | 是 | - | 当前页码(首次为1，翻页取当前页) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功；601=未登录；其他=失败 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的SKU总数 | - |
| `obj.pageSize` | number | 每页条数 | - |
| `obj.result[]` | array | 商品(SKU)列表 | - |
| `obj.result[][0]` | string | SKU编码(主键标识) | - |
| `obj.result[][1]` | string | SPU编号 | - |
| `obj.result[][2]` | string | 商品主图URL | - |
| `obj.result[][3]` | string | 商品(SKU)名称 | - |
| `obj.result[][4]` | string | 产品名称 | - |
| `obj.result[][5]` | string | 产品状态(正常/清仓/停产/暂停销售等) | - |
| `obj.result[][6]` | string | 暂停销售恢复时间 | - |
| `obj.result[][7]` | string | 淘汰标记，-1=已淘汰 | - |
| `obj.result[][8]` | string | 侵权标记，1=侵权 | - |
| `obj.result[][9]` | string | 是否已抽检，1=已抽检 | - |
| `obj.result[][10]` | string | 黑马标记(非null展示黑马) | - |
| `obj.result[][11]` | string | 商品视频URL | - |
| `obj.result[][12]` | string | 马帮SPU ID(用于刊登) | - |
| `obj.result[][13]` | number | 泡货数量(>0展示泡货) | - |
| `obj.result[][14]` | string | 开发性质 | - |
| `obj.result[][15]` | string | 降本标记，yes=降本 | - |
| `obj.result[][16]` | number | 成本价(前端保留2位) | - |
| `obj.result[][17]` | number | 降幅百分比(>0展示) | - |
| `obj.result[][18]` | string | 颜色 | - |
| `obj.result[][19]` | string | 尺寸编码 | - |
| `obj.result[][20]` | string | 分类名称 | - |
| `obj.result[][21]` | string | 销量等级(超级爆款→超爆;超爆/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品) | - |
| `obj.result[][22]` | number | 重量(克) | - |
| `obj.result[][23]` | string | 仓位 | - |
| `obj.result[][24]` | string | 供应商 | - |
| `obj.result[][25]` | string | 采购链接 | - |
| `obj.result[][26]` | string | 供应商等级 | - |
| `obj.result[][27]` | number | 刊登量(listing条数) | - |
| `obj.result[][28]` | number | 刊登覆盖率(小数,×100显示%) | - |
| `obj.result[][29]` | number | 毛利率(小数,×100保留2位显示%) | - |
| `obj.result[][30]` | number | 最低毛利率/限价(小数,×100显示%) | - |
| `obj.result[][31]` | number | 退款率(保留2位显示%；≥5高退款) | - |
| `obj.result[][32]` | number | 退包率(小数,×100显示%) | - |
| `obj.result[][33]` | number | 近7天销量 | - |
| `obj.result[][34]` | number | 近30天销量 | - |
| `obj.result[][35]` | number | 近90天销量 | - |
| `obj.result[][36]` | number | 待发货量 | - |
| `obj.result[][37]` | number | 缺货量 | - |
| `obj.result[][38]` | number | 缺货订单量(≥100标红) | - |
| `obj.result[][39]` | number | 警戒库存 | - |
| `obj.result[][40]` | number | 库存 | - |
| `obj.result[][41]` | number | 在途量 | - |
| `obj.result[][42]` | string | 开发员 | - |
| `obj.result[][43]` | string | 开发员头像URL | - |
| `obj.result[][44]` | string | 采购员 | - |
| `obj.result[][45]` | string | 创建(开发)时间 | - |
| `obj.result[][46]` | string | 部门ID(前端回调补写,非接口原始返回) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
