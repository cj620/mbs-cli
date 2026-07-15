# mbs pim erp-product-list-relisting-results-lazada-publish

Lazada Relisting结果列表查询：查询Lazada平台重新刊登(relisting)结果列表：支持按店铺负责人、店铺、relisting时间区间筛选，分页返回各店铺当日relisting成功/失败数量、负责人、生成日期等汇总信息，用于lazada relisting列表页展示。

## 用法

```bash
mbs pim erp-product-list-relisting-results-lazada-publish [--employeeId <string>] [--shopName <string>] --relistingTimeStart <string> --relistingTimeEnd <string> --pageSize <number> --currentPage <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/lazadaPublish/listRelistingResults`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeId` | employeeId | body | string | 否 | - | 店铺负责人ID(来源#employeeId下拉,仅当未选店铺且选了负责人时传) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(来源#shopName下拉,仅当选了店铺时传) |
| `relistingTimeStart` | relistingTimeStart | body | string | 是 | - | relisting开始时间(yyyy-MM-dd,来源#relistingTimeStart,空时默认昨天) |
| `relistingTimeEnd` | relistingTimeEnd | body | string | 是 | - | relisting结束时间(yyyy-MM-dd,来源#relistingTimeEnd,空时默认昨天) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数,前端固定传100 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码,首次固定1,分页时取api.getCurrent() |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(为空时前端total置0) | - |
| `obj.total` | number | 满足条件的总条数(显示于页面共N条) | - |
| `obj.pages` | number | 总页数(传入分页插件pageCount) | - |
| `obj.list[]` | array | relisting结果列表 | - |
| `obj.list[][0]` | number | 平台ID。18=lazada(前端据此显示lazada) | - |
| `obj.list[][1]` | string | 店铺名称 | - |
| `obj.list[][2]` | string | 店铺负责人姓名 | - |
| `obj.list[][3]` | number | relisting成功数量(点击跳successlazadalisting.html) | - |
| `obj.list[][4]` | number | relisting失败数量(点击跳failLalisting.html) | - |
| `obj.list[][5]` | string | 生成日期 | - |
| `obj.list[][6]` | string | relisting日期(点击行时写入sessionStorage.lazadalistingTime) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
