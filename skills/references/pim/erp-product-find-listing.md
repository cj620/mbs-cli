<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-find-listing

爆款listing列表查询：爆款listing榜单分页查询：按平台、店铺、店铺负责人、总监/经理/主管/店长、店铺名、SPU、开发时间区间、发布时间区间、排序方式等条件筛选，返回 listing 行及分页汇总（total/totalPages）。

## 用法

```bash
mbs pim erp-product-find-listing [--reserve11 <string>] [--shopName <string>] [--shopPrincipal <string>] --currentPage <number> [--skuCreateDateStart <string>] [--skuCreateDateEnd <string>] [--spuDateUploadedStart <string>] [--spuDateUploadedEnd <string>] [--orderBy <number>] [--platformIdQueryList <array>] [--spu <string>] [--employeeNameQueryList <array>] [--shopNameQueryList <array>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/listingController/findListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `reserve11` | reserve11 | body | string | 否 | - | 平台（取自隐藏控件 #plaformId 的值，平台标识） |
| `shopName` | shopName | body | string | 否 | - | 店铺（取自 #shopId） |
| `shopPrincipal` | shopPrincipal | body | string | 否 | - | 店铺负责人（取自 #saleLeader） |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码（首次/搜索固定为1，翻页时取分页控件 api.getCurrent()） |
| `skuCreateDateStart` | skuCreateDateStart | body | string | 否 | - | 开发时间-开始（skuCreateDate[0]，YYYY-MM-DD，仅选了开发时间区间才传） |
| `skuCreateDateEnd` | skuCreateDateEnd | body | string | 否 | - | 开发时间-结束（skuCreateDate[1]，YYYY-MM-DD） |
| `spuDateUploadedStart` | spuDateUploadedStart | body | string | 否 | - | 发布时间-开始（spuDateUploaded[0]，YYYY-MM-DD，仅选了发布时间区间才传） |
| `spuDateUploadedEnd` | spuDateUploadedEnd | body | string | 否 | - | 发布时间-结束（spuDateUploaded[1]，YYYY-MM-DD） |
| `orderBy` | orderBy | body | number | 否 | - | 排序方式枚举（sort.value）。1=上榜时间降序;2=上榜时间升序;3=listing在线时长降序;4=listing在线时长升序;5=30天销量降序;6=30天销量升序;7=平均售价降序;8=平均售价升序;9=成本价降序;10=成本价升序;11=开发时间降序;12=开发时间升序;13=发布时间降序;14=发布时间升序 |
| `platformIdQueryList` | platformIdQueryList | body | array | 否 | - | 平台ID列表（el-select 平台多选 selectdata.platformIds，元素为平台 sequenceid） |
| `spu` | spu | body | string | 否 | - | SPU（spu.value，多个用逗号分隔） |
| `employeeNameQueryList` | employeeNameQueryList | body | array | 否 | - | 店长（员工）名称列表。选了店长时取 selectdata.shopmanager；未选时默认取店长下拉全部 shopmanagerlist.map(name) |
| `shopNameQueryList` | shopNameQueryList | body | array | 否 | - | 店铺名称列表（el-select 店铺多选 selectdata.shop，元素为店铺名 SHOPNAME） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | number | 满足条件的 listing 总条数（前端展示「共 N 条」） | - |
| `totalPages` | number | 总页数（传入分页控件 pageCount） | - |
| `rows[]` | array | listing 行列表 | - |
| `rows[][0]` | string | 店铺名称 | - |
| `rows[][1]` | string | 店铺负责人（点击触发 getSalesInfo 展示销售卡片） | - |
| `rows[][2]` | string | 推荐人 | - |
| `rows[][3]` | string | 商品图片URL（加载失败回退默认图 timg.jpg） | - |
| `rows[][4]` | string | 商品SPU编号（链接到 /product/SPUdetails.html?SPU=） | - |
| `rows[][5]` | number | SPU 在线时长（天） | - |
| `rows[][6]` | string | 商品链接URL（商品信息/店铺ID外链跳转地址） | - |
| `rows[][7]` | string | 商品名称 | - |
| `rows[][8]` | string | 店铺商品ID（平台 itemId，展示并用于单品分析链接） | - |
| `rows[][9]` | string | 店铺类型ID（单品分析链接 singleProductAnalysis.html?shopId=） | - |
| `rows[][10]` | number | 30天销量 | - |
| `rows[][11]` | number | 平均售价 | - |
| `rows[][12]` | number | 成本价 | - |
| `rows[][13]` | string | 开发时间（前端取前11位展示，hover 提示后段时分秒） | - |
| `rows[][14]` | string | 发布时间（前端取前11位展示，hover 提示后段时分秒） | - |
| `rows[][15]` | string | 上榜时间（前端取前11位展示，hover 提示后段时分秒） | - |
| `rows[][16][]` | array | 日期表头数组（渲染连击日期列 <th>，取 rows[0].datez） | - |
| `rows[][17][]` | array | 每日单量数组（逐列展示当日单量 num） | - |
| `rows[][18][]` | array | 每日档位等级数组（1~6 对应不同图标/颜色：1=拳头;2=text-default;3=text-primary;4=text-info;5=text-warning;6=text-danger，连续3列均达标则高亮 fc） | - |
| `rows[][19][]` | array | 每日连击天数标记数组（+0 显示钻石图标，否则显示连击天数文本） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
