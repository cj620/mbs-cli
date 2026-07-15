<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-smt-ad-campaign-weeks

SMT广告报表-周期(周)列表查询：SMT(速卖通)广告报表页加载时获取可选「周期(周)」下拉列表，并据 isSelect 标记默认选中的当前周；前端用于初始化周期多选框及默认筛选周。

## 用法

```bash
mbs oms erp-order-find-smt-ad-campaign-weeks
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/eabyAdCampaignFee/findSmtAdCampaignWeeks`
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
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 周期(周)列表（前端赋给 option.weeklist） | - |
| `obj[][0]` | string | 周期标识(周)，作为下拉项的 key/label/value，前端展示并作为后续查询的周筛选值 | - |
| `obj[][1]` | number | 是否默认选中。1=默认选中(当前周)；前端 find(isSelect==1) 取该项写入 data.weekList 作为默认筛选周 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
