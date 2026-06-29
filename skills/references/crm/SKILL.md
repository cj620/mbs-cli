# crm - 店铺运营监控：账号健康、违规与合规数据（当前仅 Amazon）

通过 `mbs crm` 命令查询店铺运营监控：账号健康、违规与合规数据（当前仅 Amazon）数据。

## 数据来源

- Service: `-`

## 适用场景

运营/店铺管理人员查询店铺账号健康状态、违规情况、合规评分等运营监控数据

## 意图匹配

关键词：店铺健康 / 账号健康 / 亚马逊 / amazon / shops / 合规

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 获取店铺账号健康信息：获取所有 Amazon 店铺的账号健康信息（账号状况评级、政策合规、各类违规投诉计数、订单缺陷率/迟发率/有效追踪率等运营指标）。数据由 RPA 自动采集，附带健康页截图。 | `mbs crm crm-web-service-get-amazon-acc-health-info` | - |

## 命令详情

- [crm-web-service-get-amazon-acc-health-info.md](crm-web-service-get-amazon-acc-health-info.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
