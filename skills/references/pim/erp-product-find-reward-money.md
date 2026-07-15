# mbs pim erp-product-find-reward-money

爆款listing奖励排行榜查询：商品中心“爆款listing”页面「排行榜」标签页查询接口：无请求参数，后端返回各店铺负责人(shopPrincipal)的爆款listing数量(listingNum)排行榜列表，前端按返回顺序生成名次、姓名、listing数三列展示；奖励金额(rewardMoney)字段在模板中已注释、当前不展示。

## 用法

```bash
mbs pim erp-product-find-reward-money
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/listingController/findRewardMoney`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（马帮统一响应包装） | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 爆款listing奖励排行榜列表（按 listing 数排序，前端按返回顺序取名次） | - |
| `obj[][0]` | string | 店铺负责人姓名（排行榜「姓名」列） | - |
| `obj[][1]` | number | 该负责人爆款 listing 数量（排行榜「listing数」列） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
