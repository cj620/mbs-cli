# mbs crm crm-web-service-get-amazon-acc-health-info

获取店铺账号健康信息：获取所有 Amazon 店铺的账号健康信息（账号状况评级、政策合规、各类违规投诉计数、订单缺陷率/迟发率/有效追踪率等运营指标）。数据由 RPA 自动采集，附带健康页截图。

## 用法

```bash
mbs crm crm-web-service-get-amazon-acc-health-info
```

## API

- Service: `crm-web-service`
- Method: `GET`
- Path: `/rpa/getAmazonAccHealthInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `0e4df16515006d442b1504ad89dfc84b4bd0a51e0ca3377eab13abb1c6f2402e`

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
| `data[][0]` | string | 店铺名称 | - |
| `data[][1]` | object | 健康页截图信息 | - |
| `data[][1].fileTime` | string | 截图生成时间（ISO 8601） | - |
| `data[][1].ossPath` | string | 截图文件访问地址（OSS） | - |
| `data[][2]` | object | 账号健康详情 | - |
| `data[][2].dates` | string | 健康数据所属日期 | - |
| `data[][2].policyCompliance` | string | 政策合规状态（如：良好） | - |
| `data[][2].accountHealthRating` | number | 账户状况评级（Amazon 健康评分，越高越好） | - |
| `data[][2].suspectedIntellectualPropertyViolation` | number | 涉嫌侵犯知识产权（计数） | - |
| `data[][2].intellectualPropertyComplaint` | number | 知识产权投诉（计数） | - |
| `data[][2].productAuthenticitycomplaint` | number | 商品真实性买家投诉（计数） | - |
| `data[][2].productConditionComplaint` | number | 商品状况买家投诉（计数） | - |
| `data[][2].foodAndProductSafetyIssue` | number | 食品和商品安全问题（计数） | - |
| `data[][2].listingPolicyViolation` | number | 上架政策违规（计数） | - |
| `data[][2].restrictedProductPolicyViolation` | number | 违反受限商品政策（计数） | - |
| `data[][2].customerReviewPolicyViolation` | number | 违反买家商品评论政策（计数） | - |
| `data[][2].otherPolicyViolation` | number | 其他违反政策（计数） | - |
| `data[][2].regulatoryCompliance` | number | 监管合规性（计数） | - |
| `data[][2].order_defect_rate` | number | 订单缺陷率(%) | - |
| `data[][2].late_shipment_rate` | number | 迟发率(%) | - |
| `data[][2].pre_fulfillment_cancel_rate` | number | 配送前取消率(%) | - |
| `data[][2].valid_tracking_rate` | number | 有效追踪率(%) | - |
| `data[][2].on_time_delivery_rate` | number | 准时交货率(%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
