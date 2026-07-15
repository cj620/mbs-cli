# mbs pim instudio-pms-spu-test

获取套图对应信息：获取套图对应信息

## 用法

```bash
mbs pim instudio-pms-spu-test
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/smtSinglepublishController/test/{spu}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | path | string | 是 | - | SPU（字段名推断,语义待核实） |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
