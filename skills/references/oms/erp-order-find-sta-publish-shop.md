<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-sta-publish-shop

刊登统计-按店铺统计查询：刊登统计报表「按照店铺统计」页签的列表查询：按统计月份(date)及站点、大酋长、店铺负责人、店铺等筛选条件分页查询各店铺的销售额、上新量、在线量、上新占比、剩余刊登数量、剩余销售额、卖家等级等汇总指标。

## 用法

```bash
mbs oms erp-order-find-sta-publish-shop --date <string> [--site <string>] [--bigChief <string>] [--shopManager <string>] [--shopName <string>] --currentPage <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/statisticsPublish/findStaPublishShop`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `date` | date | body | string | 是 | - | 统计时间(月份)，取自日期控件 #date(type=date)。为空时前端校验拦截不发请求 |
| `site` | site | body | string | 否 | - | 站点，取自站点下拉 #site 选中项文本；未选(文本为"站点")时传空串 |
| `bigChief` | bigChief | body | string | 否 | - | 大酋长，取自 #bigChief 选中项文本；文本含"]"时截取最后一个"]"之后内容；未选(文本为"大酋长")时传空串 |
| `shopManager` | shopManager | body | string | 否 | - | 店铺负责人(组员)，取自店铺负责人下拉 #saleLeader 的 value(员工姓名 employee_name) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称，取自店铺下拉 #shopName 选中项文本；未选(文本为"店铺")时传空串 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码；首次查询固定为1，翻页时为分页组件 api.getCurrent() |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，固定 50 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `desc` | string | 响应提示信息，前端写入页面 .desc 展示 | - |
| `total` | number | 满足条件的总条数，前端写入 #total；无数据时显示0 | - |
| `totalPages` | number | 总页数，前端用于初始化分页组件 pageCount | - |
| `rows[]` | array | 店铺统计列表；存在时渲染列表，否则总数显示0 | - |
| `rows[][0]` | string | 店铺(名称) | - |
| `rows[][1]` | string | 站点 | - |
| `rows[][2]` | string | 店铺负责人 | - |
| `rows[][3]` | string | 大酋长 | - |
| `rows[][4]` | number | 销售额 | - |
| `rows[][5]` | number | 上新量 | - |
| `rows[][6]` | number | 在线量 | - |
| `rows[][7]` | number | 上新占比，前端拼接"%"展示 | - |
| `rows[][8]` | string | 剩余刊登数量；值为"未同步到"时标红展示 | - |
| `rows[][9]` | string | 剩余销售额；值为"未同步到"时标红，否则与货币符号 huobi 拼接展示 | - |
| `rows[][10]` | string | 货币(符号/单位)，拼接在剩余销售额之后展示 | - |
| `rows[][11]` | string | 卖家等级；值为"未同步到"时标红展示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
