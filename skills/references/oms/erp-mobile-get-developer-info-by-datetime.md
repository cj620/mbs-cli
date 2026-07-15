<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-get-developer-info-by-datetime

开发趋势图-榜单与汇总查询：按日期+开发员+类目查询当日/上一日交易额、热销类目榜、组员排行榜、店铺贡献榜、销售贡献榜。

## 用法

```bash
mbs oms erp-mobile-get-developer-info-by-datetime [--categoryId <string>] [--name <string>]
```

## API

- Service: `erpMobile`
- Method: `GET`
- Path: `/erpMobile/erpMobile/saleTrendChart/{datetime}/getDeveloperInfoByDatetime`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `datetime` | datetime | path | string | 是 | - | 路径段-查询日期(yyyy-MM-dd)。来源 getTody(new Date(), ds).today，默认当日(ds=0) |
| `categoryId` | categoryId | query | string | 否 | - | 查询参数-商品分类ID。来源 sessionStorage.getItem('cate')，无则传空 |
| `name` | name | query | string | 否 | - | 查询参数-开发员姓名。来源 sessionStorage.getItem('developName')；无值时部门=总经办默认'刘艳-开发'，否则传空 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 统一响应状态码(本文件未引用，待人工确认) | - |
| `desc` | string | 统一响应提示信息(本文件未引用，待人工确认) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.totalAmount` | number | 今日交易额(元)。undefined 时展示'----'，否则 toLocaleString() | - |
| `obj.totalAmount2` | number | 上一日交易额(元)。undefined 时展示'----' | - |
| `obj.categoryList[]` | array | 热销类目列表(渲染 #contentTemplate1) | - |
| `obj.categoryList[][0]` | string | 类目名称(空时展示'--') | - |
| `obj.categoryList[][1]` | number | 该类目占比数值(模板后接 % 展示) | - |
| `obj.categoryRatio` | number | 热销类目合计占比(展示为 值%) | - |
| `obj.devloperRankList[]` | array | 组员排行榜列表(渲染 #contentTemplate2；字段名源码即此拼写) | - |
| `obj.devloperRankList[][0]` | string | 组员姓名(点击触发 clickInfo(v)，整行对象回传) | - |
| `obj.devloperRankList[][1]` | number | 该组员交易额(元) | - |
| `obj.developerRatio` | number | 组员排行合计占比(展示为 值%)。undefined 时隐藏组员排行榜 | - |
| `obj.shopContributionList[]` | array | 店铺贡献榜列表(渲染 #contentTemplate3) | - |
| `obj.shopContributionList[][0]` | string | 店铺类型 | - |
| `obj.shopContributionList[][1]` | string | 店铺负责人 | - |
| `obj.shopContributionList[][2]` | number | 该店铺交易额(元) | - |
| `obj.shopContributionRatio` | number | 店铺贡献合计占比(展示为 值%) | - |
| `obj.saleListForDev[]` | array | 销售贡献榜列表(渲染 #contentTemplate4) | - |
| `obj.saleListForDev[][0]` | string | 姓名(空时展示'--') | - |
| `obj.saleListForDev[][1]` | number | 销售交易额(元) | - |
| `obj.saleRatioForDev` | number | 销售贡献合计占比(展示为 值%)。undefined 时隐藏销售贡献榜 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
