<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-big-cheif-by-shop-name

根据店铺名称查询店长与销售大酋长：产品问题投诉页选择店铺后(getshopleader)，按店铺名称查询该店铺的销售大酋长与店长，回填到“销售大酋长”“店长”只读输入框。

## 用法

```bash
mbs pim erp-product-get-big-cheif-by-shop-name --shopName <string>
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/infringement/getBigCheifByShopName`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 是 | - | 店铺名称(v-model=shopName，值为店铺下拉项 SHOPNAME；为空时提示“店铺未选择”，来源控件：店铺 el-select) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功；非200时弹出 desc 并中断 | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj` | object | 业务数据对象(店铺负责人信息) | - |
| `obj.bigChief` | string | 销售大酋长(回填“销售大酋长”输入框 shopchief) | - |
| `obj.manager` | string | 店长(回填“店长”输入框 shopleader) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
