<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-developer-card-info

开发员名片信息查询：仪表盘加载时查询当前登录开发员的名片信息：返回开发员基本信息(姓名/职位/头像/品类/工龄)及8项考核指标(销售额、30天开发量、动销率、爆旺比例、滞销比例、单SKU产出、累积侵权量、30天发货毛利率)的实际值/排名/进度区间。obj为空则判定为非开发员(展示管理者卡片)。

## 用法

```bash
mbs oms erp-order-get-developer-card-info
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/developerVisting/getDeveloperCardInfo`
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
| `code` | number | 响应状态码(标准响应包装,本接口前端未显式读取,200=成功)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准响应包装,本接口前端未显式读取)(待人工确认) | - |
| `obj` | object | 开发员名片业务数据对象；为空则判定为非开发员(展示管理者卡片) | - |
| `obj.positionName` | string | 职位名称(模板显示"职位") | - |
| `obj.workTimeLength` | string | 入职时长/工龄(模板显示"入职") | - |
| `obj.headerimg` | string | 开发员头像URL(加载失败回退默认头像 user2.png) | - |
| `obj.employeeName` | string | 开发员姓名 | - |
| `obj.categoryName` | string | 所负责品类名称 | - |
| `obj.indexSale` | object | 近30天销售额(万元)指标 | - |
| `obj.indexSale.actualValue` | number | 销售额实际值(万元) | - |
| `obj.indexSale.rank` | number | 销售额当前排名 | - |
| `obj.indexSale.rankCount` | number | 销售额排名总人数(rank/rankCount>0.5 时名次标红) | - |
| `obj.indexSale.actualRatio` | number | 销售额实际百分比(进度条宽度与颜色分段值) | - |
| `obj.indexSale.minValue` | number | 进度条左端("差"侧)标尺最小值 | - |
| `obj.indexSale.manValue` | number | 进度条右端("优"侧)标尺最大值(字段名疑为 maxValue 拼写) | - |
| `obj.devCount` | object | 近30天开发量指标 | - |
| `obj.devCount.actualValue` | number | 30天开发量实际值 | - |
| `obj.devCount.rank` | number | 开发量当前排名 | - |
| `obj.devCount.rankCount` | number | 开发量排名总人数 | - |
| `obj.devCount.actualRatio` | number | 开发量实际百分比(进度条值) | - |
| `obj.devCount.minValue` | number | 进度条左端标尺最小值 | - |
| `obj.devCount.manValue` | number | 进度条右端标尺最大值 | - |
| `obj.dongXiaoRate` | object | 动销率指标(%) | - |
| `obj.dongXiaoRate.actualValue` | number | 动销率实际值(%) | - |
| `obj.dongXiaoRate.rank` | number | 动销率当前排名 | - |
| `obj.dongXiaoRate.rankCount` | number | 动销率排名总人数 | - |
| `obj.dongXiaoRate.actualRatio` | number | 动销率实际百分比(进度条值) | - |
| `obj.dongXiaoRate.minValue` | number | 进度条左端标尺最小值(%) | - |
| `obj.dongXiaoRate.manValue` | number | 进度条右端标尺最大值(%) | - |
| `obj.baoWangRatio` | object | 爆旺比例指标(%) | - |
| `obj.baoWangRatio.actualValue` | number | 爆旺比例实际值(%) | - |
| `obj.baoWangRatio.rank` | number | 爆旺比例当前排名 | - |
| `obj.baoWangRatio.rankCount` | number | 爆旺比例排名总人数 | - |
| `obj.baoWangRatio.actualRatio` | number | 爆旺比例实际百分比(进度条值) | - |
| `obj.baoWangRatio.minValue` | number | 进度条左端标尺最小值(%) | - |
| `obj.baoWangRatio.manValue` | number | 进度条右端标尺最大值(%) | - |
| `obj.stagnantRate` | object | 滞销比例指标(%,颜色逆序:越高越红) | - |
| `obj.stagnantRate.actualValue` | number | 滞销比例实际值(%) | - |
| `obj.stagnantRate.rank` | number | 滞销比例当前排名 | - |
| `obj.stagnantRate.rankCount` | number | 滞销比例排名总人数 | - |
| `obj.stagnantRate.actualRatio` | number | 滞销比例实际百分比(进度条值,颜色逆序) | - |
| `obj.stagnantRate.minValue` | number | 进度条左端标尺最小值(%) | - |
| `obj.stagnantRate.manValue` | number | 进度条右端标尺最大值(%) | - |
| `obj.skuAmount` | object | 单SKU产出指标 | - |
| `obj.skuAmount.actualValue` | number | 单SKU产出实际值 | - |
| `obj.skuAmount.rank` | number | 单SKU产出当前排名 | - |
| `obj.skuAmount.rankCount` | number | 单SKU产出排名总人数 | - |
| `obj.skuAmount.actualRatio` | number | 单SKU产出实际百分比(进度条值) | - |
| `obj.skuAmount.minValue` | number | 进度条左端标尺最小值 | - |
| `obj.skuAmount.manValue` | number | 进度条右端标尺最大值 | - |
| `obj.tortCount` | object | 累积侵权量指标(颜色逆序:越高越红) | - |
| `obj.tortCount.actualValue` | number | 累积侵权量实际值 | - |
| `obj.tortCount.rank` | number | 累积侵权量当前排名 | - |
| `obj.tortCount.rankCount` | number | 累积侵权量排名总人数 | - |
| `obj.tortCount.actualRatio` | number | 累积侵权量实际百分比(进度条值,颜色逆序) | - |
| `obj.tortCount.minValue` | number | 进度条左端标尺最小值 | - |
| `obj.tortCount.manValue` | number | 进度条右端标尺最大值 | - |
| `obj.expressProfitRate` | object | 近30天发货毛利率指标(%) | - |
| `obj.expressProfitRate.actualValue` | number | 30天发货毛利率实际值(%) | - |
| `obj.expressProfitRate.rank` | number | 发货毛利率当前排名 | - |
| `obj.expressProfitRate.rankCount` | number | 发货毛利率排名总人数 | - |
| `obj.expressProfitRate.actualRatio` | number | 发货毛利率实际百分比(进度条值) | - |
| `obj.expressProfitRate.minValue` | number | 进度条左端标尺最小值(%) | - |
| `obj.expressProfitRate.manValue` | number | 进度条右端标尺最大值(%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
