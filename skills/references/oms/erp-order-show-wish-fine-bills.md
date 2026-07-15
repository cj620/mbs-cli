<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-show-wish-fine-bills

Wish罚款账单列表查询：按发生时间区间(dateFromStr~dateToStr)分页查询各店铺的Wish平台罚款账单汇总，返回店铺名、罚款类型、罚款金额(美元/人民币)列表及分页信息；前端以 art-template(#contentTemplate) 渲染表格。

## 用法

```bash
mbs oms erp-order-show-wish-fine-bills --dateFromStr <string> --dateToStr <string> --currPage <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/wishFine/showWishFineBills`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `dateFromStr` | dateFromStr | query | string | 是 | - | 发生时间-起始(开始时间)，格式 YYYY-MM-DD；前端校验非空 |
| `dateToStr` | dateToStr | query | string | 是 | - | 发生时间-结束(结束时间)，格式 YYYY-MM-DD；前端校验非空且不得早于开始时间 |
| `currPage` | currPage | query | number | 是 | - | 当前页码；search()固定传1，分页回调传 api.getCurrent()；每页固定20条 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `pages` | number | 总页数；用于初始化分页组件 pageCount | - |
| `total` | number | 满足条件的账单总条数；写入 #total 展示 | - |
| `list[]` | array | Wish罚款账单列表 | - |
| `list[][0]` | string | 店铺名 | - |
| `list[][1]` | string | 罚款类型 | - |
| `list[][2]` | number | 罚款金额（美元） | - |
| `list[][3]` | number | 罚款金额（人民币） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
