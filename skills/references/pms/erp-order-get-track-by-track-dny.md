<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms erp-order-get-track-by-track-dny

东南亚战况播报(DeskRank)查询：客服工作台首页(customerservice.html)加载完成后自动调用，拉取东南亚X月战况播报排行榜数据：按销售平台列出店长、入围店铺毛利率、发货毛利率、总积分/奖金等，渲染到#DeskRank表格；同时用content更新更新时间。GET请求，无查询参数。

## 用法

```bash
mbs pms erp-order-get-track-by-track-dny
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/dev/erpOrder/erpOrder/saleVistingCard/getTrackByTrackDny`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 战况播报数据列表；success中判断if(data.obj)后取用并渲染#DeskRankTemplate | - |
| `obj[][0]` | string | 销售平台（表格平台列） | - |
| `obj[][1]` | string | 店长/员工姓名（表格店长列） | - |
| `obj[][2]` | number | 奖金金额(元)，展示为{{bonus}}元并带奖杯图标 | - |
| `obj[][3]` | string | 入围店铺毛利率明细，逗号分隔多店铺；前端split(',')取前两项+...，完整值放tooltip（表格入围店铺列） | - |
| `obj[][4]` | string | 发货毛利率(HTML片段，{{@value}}原样输出)（表格毛利率列） | - |
| `obj[][5]` | string | 总积分/需加油值（表格总积分列） | - |
| `content` | string | 更新时间文本，写入#updateTime（更新:xxx） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
