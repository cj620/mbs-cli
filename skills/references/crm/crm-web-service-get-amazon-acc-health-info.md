# mbs crm crm-web-service-get-amazon-acc-health-info

获取店铺账号健康信息：获取所有 Amazon 店铺的账号健康信息（账号状况评级、政策合规、各类违规投诉计数、订单缺陷率/迟发率/有效追踪率等运营指标）。数据由 RPA 自动采集，附带健康页截图。

## 用法

```bash
mbs crm crm-web-service-get-amazon-acc-health-info
```

## API

- Service: `crm-web-service`
- Method: `GET`
- Path: `/crm-web-service/rpa/getAmazonAccHealthInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `677e0eeeae32d1dfa49b8592ad87f57652fe790be7715a8400b6daf2777d14fb`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 返回编码。200=成功；非 200=失败 | - |
| `message` | string | 结果描述信息 | - |
| `data[]` | array | 店铺账号健康列表，每个元素为一个店铺。CLI 输出时取 data 作为 data，total=data.length | - |
| `data[].shopName` | string | 店铺名称 | - |
| `data[].screenshot` | object | 健康页截图信息 | - |
| `data[].screenshot.fileTime` | string | 截图生成时间（ISO 8601） | - |
| `data[].screenshot.ossPath` | string | 截图文件访问地址（OSS） | - |
| `data[].health` | object | 账号健康详情 | - |
| `data[].health.dates` | string | 健康数据所属日期 | - |
| `data[].health.policyCompliance` | string | 政策合规状态（如：良好） | - |
| `data[].health.accountHealthRating` | number | 账户状况评级（Amazon 健康评分，越高越好） | - |
| `data[].health.suspectedIntellectualPropertyViolation` | number | 涉嫌侵犯知识产权（计数） | - |
| `data[].health.intellectualPropertyComplaint` | number | 知识产权投诉（计数） | - |
| `data[].health.productAuthenticitycomplaint` | number | 商品真实性买家投诉（计数） | - |
| `data[].health.productConditionComplaint` | number | 商品状况买家投诉（计数） | - |
| `data[].health.foodAndProductSafetyIssue` | number | 食品和商品安全问题（计数） | - |
| `data[].health.listingPolicyViolation` | number | 上架政策违规（计数） | - |
| `data[].health.restrictedProductPolicyViolation` | number | 违反受限商品政策（计数） | - |
| `data[].health.customerReviewPolicyViolation` | number | 违反买家商品评论政策（计数） | - |
| `data[].health.otherPolicyViolation` | number | 其他违反政策（计数） | - |
| `data[].health.regulatoryCompliance` | number | 监管合规性（计数） | - |
| `data[].health.order_defect_rate` | number | 订单缺陷率(%) | - |
| `data[].health.late_shipment_rate` | number | 迟发率(%) | - |
| `data[].health.pre_fulfillment_cancel_rate` | number | 配送前取消率(%) | - |
| `data[].health.valid_tracking_rate` | number | 有效追踪率(%) | - |
| `data[].health.on_time_delivery_rate` | number | 准时交货率(%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
