<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-clearance-reward-repoer

清仓任务榜(奖金报表)查询：清仓任务榜页面加载/展开/收起时调用，返回各清仓项目及其下属销售的清仓任务量、在线Listing量、当前清仓量、完成进度、剩余清仓量、销售额、成本与奖金等汇总数据。前端按项目分组渲染，saleList默认取前5条，展开时取全部。

## 用法

```bash
mbs oms erp-order-get-clearance-reward-repoer
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/clearanceReward/getClearanceRewardRepoer`
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
| `code` | number | 响应状态码,200=成功(否则弹窗提示 desc) | - |
| `desc` | string | 响应提示信息(失败时展示) | - |
| `obj[]` | array | 清仓项目列表(按项目分组) | - |
| `obj[][0]` | string | 项目名称 | - |
| `obj[][1]` | string | 清仓任务开始时间 | - |
| `obj[][2]` | string | 清仓任务截止时间 | - |
| `obj[][3]` | number | 清仓sku总数 | - |
| `obj[][4]` | number | 清仓sku总金额(原字段拼写为 productAmonut) | - |
| `obj[][5][]` | array | 该项目下销售明细列表(前端赋给 fiveData 渲染) | - |
| `obj[][5][][0]` | string | 销售(姓名);前3名(j<3)展示奖杯图标 | - |
| `obj[][5][][1]` | number | 清仓任务量 | - |
| `obj[][5][][2]` | number | 清仓在线Listing量 | - |
| `obj[][5][][3]` | number | 当前清仓量 | - |
| `obj[][5][][4]` | number | 完成进度(前端拼接 % 展示) | - |
| `obj[][5][][5]` | number | 剩余清仓量 | - |
| `obj[][5][][6]` | number | 清仓销售额 | - |
| `obj[][5][][7]` | number | 清仓商品成本 | - |
| `obj[][5][][8]` | number | 当前奖金(加粗展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
