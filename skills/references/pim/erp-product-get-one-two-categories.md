<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-one-two-categories

查询侵权词listing一/二级类别：商品库存中心按类别名称模糊查询商品一/二级类目列表，供侵权授权申请弹框中“侵权词listing类别”多选下拉框渲染选项。name 传空表示拉取全部类别。

## 用法

```bash
mbs pim erp-product-get-one-two-categories [--name <string>]
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/stockProduct/getOneTwoCategories`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `name` | name | query | string | 否 | - | 类别名称(模糊查询关键字)；前端调用处固定传空字符串，实际查询全部一/二级类别 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 一/二级类别列表(侵权词listing类别集合) | - |
| `obj[]` | string | 类别名称。模板中同时作为下拉option的value与显示文本；选中后逗号拼接随 categoryOfInfiringingWord 上送 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
