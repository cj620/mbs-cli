<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-amazon-auto-publish-confirm-list

亚马逊自动刊登待确认列表查询：亚马逊自动刊登中心首页主列表查询：按店铺、刊登状态、SPU、关键词、站点、类目、刊登人、经理、生成时间区间、价格区间及差评/捆绑/批量等多维度分页查询，返回待刊登/刊登中/成功/失败/放弃的 SPU 行，用于刊登前确认与批量操作。

## 用法

```bash
mbs pim erp-product-get-amazon-auto-publish-confirm-list --page <number> --pageSize <string> [--shopIds <array>] [--publishStatus <string>] [--managers <array>] [--erpSpu <string>] [--genericKeywords <string>] [--site <string>] [--categoryId <string>] [--amazonCategoryName <string>] [--publishOpers <array>] [--feedBackNumFlag <number>] [--bindFlag <number>] [--batchFlag <number>] [--startTime <string>] [--endTime <string>] [--minPrice <string>] [--maxPrice <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getAmazonAutoPublishConfirmList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码(num==1 取 baseData.page, num==2 取 leftcurrentPage, 默认1) |
| `pageSize` | pageSize | body | string | 是 | - | 每页条数(来源控件 #paginationCount) |
| `shopIds` | shopIds | body | array | 否 | - | 店铺ID列表(来源控件 #shopNames; num==2 时为 [targetShop]) |
| `publishStatus` | publishStatus | body | string | 否 | - | 刊登状态筛选(来源控件 #publishStatus; num==2 时为 onlineResult) |
| `managers` | managers | body | array | 否 | - | 店铺经理(来源 managers 响应式变量, 店铺负责人筛选) |
| `erpSpu` | erpSpu | body | string | 否 | - | ERP SPU 编号(来源控件 #erpSpu) |
| `genericKeywords` | genericKeywords | body | string | 否 | - | 通用关键词筛选(来源控件 #genericKeywords) |
| `site` | site | body | string | 否 | - | 站点(来源控件 #site, 如 US/UK/DE 等) |
| `categoryId` | categoryId | body | string | 否 | - | 亚马逊类目ID(来源控件 #categoryId, 由 getAmazonCategory 填充) |
| `amazonCategoryName` | amazonCategoryName | body | string | 否 | - | 亚马逊类目名/分类页签(取 productType 或 baseData.typeFlag) |
| `publishOpers` | publishOpers | body | array | 否 | - | 刊登人/刊登员(来源控件 #amazonSaler) |
| `feedBackNumFlag` | feedBackNumFlag | body | number | 否 | - | 是否仅看有差评(来源 feedBackNumFlag 开关, 0=否,1=是) |
| `bindFlag` | bindFlag | body | number | 否 | - | 是否仅看捆绑(来源 bindFlag 开关, 0=否,1=是) |
| `batchFlag` | batchFlag | body | number | 否 | - | 刊登方式筛选(条件参数, 仅 batchFlag 有值时传; 1=批量,2=推荐) |
| `startTime` | startTime | body | string | 否 | - | 生成时间-起始(条件参数, 选择时间区间时取 timeValue[0]) |
| `endTime` | endTime | body | string | 否 | - | 生成时间-结束(条件参数, 选择时间区间时取 timeValue[1]) |
| `minPrice` | minPrice | body | string | 否 | - | 价格区间-最低价(来源控件 #minPrice, 空则 null; 多店铺下不生效) |
| `maxPrice` | maxPrice | body | string | 否 | - | 价格区间-最高价(来源控件 #maxPrice, 空则 null; 多店铺下不生效) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.list[]` | array | SPU 刊登行列表(#homeTemplate 遍历项) | - |
| `obj.list[][0]` | string | ERP SPU 编号(行主键, 链接商品详情) | - |
| `obj.list[][1]` | string | 店铺ID(data-shopid) | - |
| `obj.list[][2]` | string | 店铺名称 | - |
| `obj.list[][3]` | string | 刊登分组ID(data-groupid, 操作主键) | - |
| `obj.list[][4]` | string | 站点 | - |
| `obj.list[][5]` | string | 商品主图URL | - |
| `obj.list[][6]` | string | 父SKU | - |
| `obj.list[][7]` | string | 刊登标题(可点击修改, 必改项) | - |
| `obj.list[][8][]` | array | 标题风险词列表(命中时红框展示) | - |
| `obj.list[][9]` | number | 标题/SKU 是否含捆绑(1=含捆绑,提示检查) | - |
| `obj.list[][10]` | number | 差评数量(>0 时展示N个差评) | - |
| `obj.list[][11]` | string | 退款率(有值时展示) | - |
| `obj.list[][12]` | string | 刊登人 | - |
| `obj.list[][13]` | string | 商品描述 | - |
| `obj.list[][14]` | string | 一级/大类目名称(data-category-name) | - |
| `obj.list[][15]` | string | 大类目(为空展示修改大类目) | - |
| `obj.list[][16]` | string | 子类目(为空展示修改子类目) | - |
| `obj.list[][17]` | string | 变体主题(为空展示修改) | - |
| `obj.list[][18]` | string | 通用关键词(为空展示修改) | - |
| `obj.list[][19]` | string | 卖点(合并展示, 必改项) | - |
| `obj.list[][20]` | string | 卖点1(data-bulletpoint1) | - |
| `obj.list[][21]` | string | 卖点2 | - |
| `obj.list[][22]` | string | 卖点3 | - |
| `obj.list[][23]` | string | 卖点4 | - |
| `obj.list[][24]` | string | 卖点5 | - |
| `obj.list[][25][]` | array | 卖点风险词列表(命中时红框展示) | - |
| `obj.list[][26]` | number | SPU刊登状态枚举。0=待刊登;1=刊登中;2=失败;3=成功;5=放弃(0/2/3 可勾选操作) | - |
| `obj.list[][27]` | string | 刊登失败原因(spuPublishStatus==2 时弹层展示) | - |
| `obj.list[][28]` | string | 生成时间 | - |
| `obj.list[][29]` | string | 上架时间 | - |
| `obj.list[][30]` | string | 定时刊登时间 | - |
| `obj.list[][31]` | number | 刊登方式枚举。1=批量刊登;2=推荐刊登 | - |
| `obj.pages` | number | 总页数(用于分页 findTaskReport) | - |
| `obj.total` | number | 满足条件的总条数(渲染至 #total) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
