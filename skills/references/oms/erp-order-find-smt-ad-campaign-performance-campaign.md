# mbs oms erp-order-find-smt-ad-campaign-performance-campaign

SMT广告报表-广告活动绩效查询：速卖通(SMT)广告报表页查询：按店铺/人员维度，结合周期、店长、店铺、排序方式等条件分页查询广告活动绩效，返回曝光、点击、下单、毛利、广告费、ACOS、ROI、PB占比等汇总指标列表。

## 用法

```bash
mbs oms erp-order-find-smt-ad-campaign-performance-campaign --groupBy <string> [--weekList <array>] [--shopManager <string>] [--shopName <string>] --orderField <string> --orderSort <string> --pageSize <number> --page <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/eabyAdCampaignFee/findSmtAdCampaignPerformanceCampaign`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `groupBy` | groupBy | body | string | 是 | - | 统计维度。shop=按店铺查看;oper=按人员查看(默认shop) |
| `weekList` | weekList | body | array | 否 | - | 周期(周)列表,多选;元素为周标识week字符串(选项取自findSmtAdCampaignWeeks,默认选中isSelect=1的周) |
| `shopManager` | shopManager | body | string | 否 | - | 店长姓名(选项取自findAllManagerPlatform,默认空串) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(选项取自findAllshopPlatform的shopname,默认空串) |
| `orderField` | orderField | body | string | 是 | - | 排序字段。exposure/click/ctr/cvr/promotionCount/cpc/orderNum/roi/cost/payOrderAmt/acos/orderAmount/payOrderCnt/collectionNum/cartNum/totalAmount/profit/profitRate/pbRate(默认exposure) |
| `orderSort` | orderSort | body | string | 是 | - | 排序方向。desc=降序;asc=升序(默认desc) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数。枚举50/100/150/200(默认50) |
| `page` | page | body | number | 是 | - | 当前页码(由unproxy写入,默认1) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | number | 满足条件的总记录数(前端用于分页total) | - |
| `rows[]` | array | 广告活动绩效行列表 | - |
| `rows[][0]` | string | 店铺名称 | - |
| `rows[][1]` | string | 店长 | - |
| `rows[][2]` | number | 曝光量 | - |
| `rows[][3]` | number | 推广中数量 | - |
| `rows[][4]` | number | 点击量 | - |
| `rows[][5]` | number | 点击率(%)(前端追加%展示) | - |
| `rows[][6]` | number | 平均点击花费(￥) | - |
| `rows[][7]` | number | 下单数 | - |
| `rows[][8]` | number | 下单金额 | - |
| `rows[][9]` | number | 毛利 | - |
| `rows[][10]` | number | 毛利率(原值为小数,前端×100追加%展示) | - |
| `rows[][11]` | number | 总广告费 | - |
| `rows[][12]` | number | 总广告销售额 | - |
| `rows[][13]` | number | 支付订单数 | - |
| `rows[][14]` | number | 销售收入 | - |
| `rows[][15]` | number | 加入收藏夹次数 | - |
| `rows[][16]` | number | 加入购物车次数 | - |
| `rows[][17]` | number | 点击转化率(%)(前端追加%展示) | - |
| `rows[][18]` | number | 总ACOS(%)=总广告费/总广告销售额(前端追加%展示) | - |
| `rows[][19]` | number | ROI=广告销售额/广告费(前端×100后toFixed(2)展示) | - |
| `rows[][20]` | number | 总PB占比(前端toFixed(2)后追加%展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
