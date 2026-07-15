# mbs oms erp-mobile-hot-product-with-shop

在线商品(SPU)列表查询(带店铺)：移动端"在线"页热卖商品列表分页查询：按关键词(店铺名/商品ID)、时间区间、价格区间、缺货标记、平台、大区主管、团队成员、店铺等条件筛选，返回在线商品(SPU)列表及销量、单量、毛利率、备货天数、TikTok佣金率等字段；用于首屏 search() 与加载更多 getMore()。

## 用法

```bash
mbs oms erp-mobile-hot-product-with-shop [--searchKey <string>] --pageSize <number> --currPage <number> [--startTime <string>] [--endTime <string>] [--minPrice <string>] [--maxPrice <string>] [--saleOutFlag <string>] [--plaformId <string>] [--bigChiefEmployeeId <string>] [--teamNumberEmployeeNames <string>] [--shopIds <array>] [--orderFiled <string>] [--orderWay <string>]
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/hotProductListing/hotProductWithShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `searchKey` | searchKey | body | string | 否 | - | 搜索关键词(店铺名/商品ID)。来源搜索输入框 #search |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数。前端固定传 50 |
| `currPage` | currPage | body | number | 是 | - | 当前页码。search() 固定 1；getMore() 自增 |
| `startTime` | startTime | body | string | 否 | - | 开始时间(时间区间筛选-起始)。来源 sessionStorage startTime，无则传空 |
| `endTime` | endTime | body | string | 否 | - | 结束时间(时间区间筛选-结束)。来源 sessionStorage endTime，无则传空 |
| `minPrice` | minPrice | body | string | 否 | - | 最低价格(价格区间-下限)。来源 sessionStorage minPrice，无则传空 |
| `maxPrice` | maxPrice | body | string | 否 | - | 最高价格(价格区间-上限)。来源 sessionStorage maxPrice，无则传空 |
| `saleOutFlag` | saleOutFlag | body | string | 否 | - | 缺货/售罄标记筛选。来源 sessionStorage saleOutFlag，无则传空(枚举待人工确认) |
| `plaformId` | plaformId | body | string | 否 | - | 平台ID(源码键名拼写为 plaformId)。来源 sessionStorage plaformId，无则传空 |
| `bigChiefEmployeeId` | bigChiefEmployeeId | body | string | 否 | - | 大区主管/大队长员工ID(按主管筛选)。来源 sessionStorage bigChiefEmployeeId，无则传空 |
| `teamNumberEmployeeNames` | teamNumberEmployeeNames | body | string | 否 | - | 团队成员员工名(按团队成员筛选)。来源 sessionStorage teamNumberEmployeeNames，无则传空 |
| `shopIds` | shopIds | body | array | 否 | - | 店铺ID列表(按店铺筛选)。来源 sessionStorage shopIds：search() 按逗号拆为数组，getMore() 传字符串；无则传 [] |
| `orderFiled` | orderFiled | body | string | 否 | - | 排序字段(源码键名拼写为 orderFiled)。仅当 sessionStorage 存在 orderFiled 时随 search() 传入(枚举待人工确认) |
| `orderWay` | orderWay | body | string | 否 | - | 排序方式(升/降序)。与 orderFiled 同时传入，来源 sessionStorage orderWay(枚举待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(200=成功，500=失败) | - |
| `desc` | string | 响应提示信息(无数据时展示) | - |
| `obj` | object | 业务数据对象(为空时按无数据处理) | - |
| `obj.list[]` | array | 在线商品(SPU)列表 | - |
| `obj.list[][0]` | string | 商品ID(SPU/商品标识；卡片标题、详情跳转、SKU展开使用) | - |
| `obj.list[][1]` | string | 店铺ID(详情跳转、展开SKU、调价/调库存使用) | - |
| `obj.list[][2]` | string | 平台ID(详情跳转 onlineDetails.html 参数) | - |
| `obj.list[][3]` | string | 改价/修改标记(存在时以黄色徽章展示) | - |
| `obj.list[][4]` | string | 店铺名称 | - |
| `obj.list[][5]` | string | 销售负责人(存在时在店铺名后括号展示) | - |
| `obj.list[][6]` | string | 商品主图URL(加载失败回退默认图) | - |
| `obj.list[][7]` | string | 商品标题 | - |
| `obj.list[][8]` | number | 30天销量 | - |
| `obj.list[][9]` | string | 站点/SPU站点编码类型 | - |
| `obj.list[][10]` | string | 发布时间 | - |
| `obj.list[][11]` | number | 7天单量 | - |
| `obj.list[][12]` | number | 缺货单量 | - |
| `obj.list[][13]` | number | 发货毛利率(模板后缀 % 展示) | - |
| `obj.list[][14]` | string | 预计到货(时间，存在时展示) | - |
| `obj.list[][15]` | number | 备货天数(最大)，存在时展示 | - |
| `obj.list[][16]` | number | TikTok达人佣金率(模板后缀 % 展示)，存在时展示 | - |
| `obj.pages` | number | 总页数(前端用 currentPage == obj.pages 判断末页) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
