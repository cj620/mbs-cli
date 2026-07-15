# mbs scm erp-manufacture-get-issue-info-list

SMT纠纷信息列表查询：SMT纠纷统计列表分页查询：按物流方式、店铺、店长、订单时间区间、纠纷时间区间、SKU/SPU/产品ID/订单ID/国家等条件筛选，返回各产品纠纷数量、货不对板纠纷数、物流纠纷数、退款金额、纠纷率等汇总列表。

## 用法

```bash
mbs scm erp-manufacture-get-issue-info-list [--country <string>] [--shopManager <string>] [--shopName <string>] [--sku <string>] [--spu <string>] [--expressType <string>] [--customerName <string>] [--itemId <string>] [--orderId <string>] --pageSize <number> [--sortStr <string>] --currentPage <number> [--startTime <string>] [--endTime <string>] [--gmtCreateStartTime <string>] [--gmtCreateEndTime <string>]
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/issueInfo/getIssueInfoList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `country` | country | body | string | 否 | - | 国家。来源：国家输入框 |
| `shopManager` | shopManager | body | string | 否 | - | 店长。来源：店长下拉(querySmtShopManager) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称。来源：店铺下拉(querySmtShop) |
| `sku` | sku | body | string | 否 | - | SKU。来源：sku输入框 |
| `spu` | spu | body | string | 否 | - | SPU。来源：spu输入框 |
| `expressType` | expressType | body | string | 否 | - | 物流方式。来源：物流方式下拉(findPostponeShop.expressList) |
| `customerName` | customerName | body | string | 否 | - | 客户名。无对应输入控件，当前固定传空(待人工确认) |
| `itemId` | itemId | body | string | 否 | - | 产品ID。来源：产品ID输入框/图表行回填 |
| `orderId` | orderId | body | string | 否 | - | 订单ID。来源：订单ID输入框 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数。默认50 |
| `sortStr` | sortStr | body | string | 否 | - | 排序字段。默认'q.issuenum desc'。枚举：q.issuenum desc=纠纷数量倒序;q.refundMoney desc=退款金额倒序;q.goodsErrIssueNum desc=货不对板数量倒序;q.expressErrIssueNum desc=物流纠纷数量倒序 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。分页current-change传入，初始1 |
| `startTime` | startTime | body | string | 否 | - | 订单时间-起始(YYYY-MM-DD)。来源：订单时间区间time[0] |
| `endTime` | endTime | body | string | 否 | - | 订单时间-结束(YYYY-MM-DD)。来源：订单时间区间time[1] |
| `gmtCreateStartTime` | gmtCreateStartTime | body | string | 否 | - | 纠纷时间-起始(YYYY-MM-DD)。来源：纠纷时间区间time2[0] |
| `gmtCreateEndTime` | gmtCreateEndTime | body | string | 否 | - | 纠纷时间-结束(YYYY-MM-DD)。来源：纠纷时间区间time2[1] |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准包装字段，本页未直接读取) | - |
| `content` | number | 满足条件的纠纷记录总数。前端赋值给分页total | - |
| `desc` | string | 响应提示信息(标准包装字段，本页未直接读取) | - |
| `success` | boolean | 是否成功(标准包装字段，本页未直接读取) | - |
| `obj[]` | array | SMT纠纷列表(行数组)。前端赋值给tableData | - |
| `obj[][0]` | string | 店铺 | - |
| `obj[][1]` | string | 店长 | - |
| `obj[][2]` | string | 产品ID(点击切到图表getpie) | - |
| `obj[][3]` | string | SPU编号(点击触发setsueorder查询SKU纠纷明细) | - |
| `obj[][4]` | number | 纠纷数量(点击展示该行订单号) | - |
| `obj[][5]` | number | 货不对板纠纷数 | - |
| `obj[][6]` | number | 物流纠纷数 | - |
| `obj[][7]` | number | 退款金额(CNY) | - |
| `obj[][8]` | string | 纠纷率(前端原样展示) | - |
| `obj[][9]` | string | 订单ID集合(逗号拼接)。setsueorder中按','拆分为订单号气泡展示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
