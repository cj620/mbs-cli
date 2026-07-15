# mbs pim erp-product-list-relisting-results-shopee-product-publish

Shopee Relisting 结果列表查询：查询 Shopee 重新刊登(relisting)结果列表：按店铺负责人、店铺、relisting 时间区间分页查询，返回各店铺当日 relisting 成功/失败数量、生成日期与 relisting 日期，供 shopee relisting 列表页表格渲染与分页。

## 用法

```bash
mbs pim erp-product-list-relisting-results-shopee-product-publish [--employeeId <string>] [--shopName <string>] [--relistingTimeStart <string>] [--relistingTimeEnd <string>] --pageSize <number> --currentPage <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/shopeeProductPublish/listRelistingResults`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeId` | employeeId | body | string | 否 | - | 店铺负责人ID(下拉框 #employeeId；仅当未选店铺且已选负责人时传，与 shopName 互斥) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(下拉框 #shopName；仅当已选店铺时传，与 employeeId 互斥) |
| `relistingTimeStart` | relistingTimeStart | body | string | 否 | - | relisting开始时间(日期框 #relistingTimeStart；格式 yyyy-MM-dd；未选默认当前日期前一天) |
| `relistingTimeEnd` | relistingTimeEnd | body | string | 否 | - | relisting结束时间(日期框 #relistingTimeEnd；格式 yyyy-MM-dd；未选默认当前日期前一天) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(前端固定传 100) |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码(首次固定 1，翻页取分页组件 api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(平台统一返回结构) | - |
| `desc` | string | 响应提示信息(平台统一返回结构) | - |
| `obj` | object | 业务数据对象(success 回调据 data.obj 是否存在判定有无数据) | - |
| `obj.pages` | number | 总页数(传入分页组件 pageCount) | - |
| `obj.total` | number | 总条数(显示于 #total，共N条) | - |
| `obj.list[]` | array | relisting 结果列表 | - |
| `obj.list[][0]` | number | 平台ID(模板中 ==26 时展示为 shopee) | - |
| `obj.list[][1]` | string | 店铺名称(表格店铺列；点击成功/失败数时写入 sessionStorage 跳详情) | - |
| `obj.list[][2]` | string | 店铺负责人(表格店铺负责人列) | - |
| `obj.list[][3]` | number | relisting 成功数量(可点击，successSmtListing 跳 successShopeeListing.html) | - |
| `obj.list[][4]` | number | relisting 失败数量(可点击，failSmtListing 跳 failShopeeListing.html) | - |
| `obj.list[][5]` | string | 生成日期(表格生成日期列) | - |
| `obj.list[][6]` | string | relisting 日期(表格relisting日期列；点击行写入 sessionStorage ShopeeListingTime) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
