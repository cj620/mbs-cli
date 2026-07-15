<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-get1688-goods-info

通过商品URL获取1688商品数据：通过商品URL获取1688商品数据

## 用法

```bash
mbs pim instudio-pms-get1688-goods-info --goodsUrl <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/get1688GoodsInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `goodsUrl` | goodsUrl | query | string | 是 | - | 货品URL（字段名推断,语义待核实） |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
