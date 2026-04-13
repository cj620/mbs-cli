# shops — 店铺运营数据

通过 `mbs shops` 命令查询店铺维度的运营数据。

## 适用场景

运营/店铺管理人员查询店铺账号健康状态、违规情况、合规评分等运营监控数据。

## 不适用场景

- 查询组织架构（平台/人员层级）→ 使用 `org` 模块
- 查询订单/销售数据 → 使用 `orders` 模块（开发中）

## 意图匹配

| 用户说 | 应调用 |
|--------|--------|
| "查账号健康" / "健康评分" / "账号状态" | `shops health` |
| "有没有违规" / "知识产权投诉" / "政策违规" | `shops health` |
| "亚马逊店铺健康" / "Amazon 账号健康" | `shops health` |

## 命令一览

| 命令 | 说明 | 数据来源 |
|------|------|---------|
| `mbs shops health` | 获取所有 Amazon 店铺账号健康信息 | 仅 Amazon |

## 命令详情

### `mbs shops health`

无需任何参数，返回全部 Amazon 店铺的账号健康数据。

```bash
mbs shops health

# 只看店铺名和评分
mbs shops health | jq '.data[] | {shop: .shopName, rating: .health.accountHealthRating}'

# 筛选评分低于 200 的店铺
mbs shops health | jq '[.data[] | select(.health.accountHealthRating < 200)]'

# 查有知识产权投诉的店铺
mbs shops health | jq '[.data[] | select(.health.intellectualPropertyComplaint > 0)]'
```

## 响应字段说明

每条数据包含三个对象：

**顶层**

| 字段 | 说明 |
|------|------|
| `shopName` | 店铺名称 |
| `screenshot` | 健康页截图信息 |
| `health` | 账号健康详情 |

**screenshot 对象**

| 字段 | 说明 |
|------|------|
| `fileTime` | 截图生成时间（ISO 8601） |
| `ossPath` | 截图文件访问地址 |

**health 对象**

| 字段 | 中文名 | 说明 |
|------|--------|------|
| `dates` | 日期 | 健康数据所属日期 |
| `policyCompliance` | 政策合规状态 | 如：良好 |
| `accountHealthRating` | 账户状况评级 | Amazon 健康评分，越高越好 |
| `suspectedIntellectualPropertyViolation` | 涉嫌侵犯知识产权 | |
| `intellectualPropertyComplaint` | 知识产权投诉 | |
| `productAuthenticitycomplaint` | 商品真实性买家投诉 | |
| `productConditionComplaint` | 商品状况买家投诉 | |
| `foodAndProductSafetyIssue` | 食品和商品安全问题 | |
| `listingPolicyViolation` | 上架政策违规 | |
| `restrictedProductPolicyViolation` | 违反受限商品政策 | |
| `customerReviewPolicyViolation` | 违反买家商品评论政策 | |
| `otherPolicyViolation` | 其他违反政策 | |
| `regulatoryCompliance` | 监管合规性 | |

## 注意事项

- 数据由 RPA 自动采集，更新频率取决于采集任务调度
- 当前仅支持 Amazon 平台，其他平台暂无等价接口
- 退出码说明：见 [../global.md](../global.md#退出码)
