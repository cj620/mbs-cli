# mbs prm erp-publish-list-relisting-results

AliExpress Relisting结果列表查询：速卖通(平台ID=10) relisting 结果列表查询：按店铺负责人、店铺、relisting时间区间分页查询，返回每个店铺/日期的 relisting 成功数量、失败数量及生成/relisting日期，并附分页总页数与总条数。

## 用法

```bash
mbs prm erp-publish-list-relisting-results [--employeeId <string>] [--shopName <string>] --relistingTimeStart <string> --relistingTimeEnd <string> --pageSize <number> --currentPage <number>
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/smtProductPublish/listRelistingResults`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeId` | employeeId | body | string | 否 | - | 店铺负责人ID(来源#employeeId下拉,取employee_id;仅当shopName为空且employeeId非空时传) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称(来源#shopName下拉;仅当shopName非空时传) |
| `relistingTimeStart` | relistingTimeStart | body | string | 是 | - | relisting开始时间(来源#relistingTimeStart,为空默认昨天) |
| `relistingTimeEnd` | relistingTimeEnd | body | string | 是 | - | relisting结束时间(来源#relistingTimeEnd,为空默认昨天) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数,固定100 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码(search固定1,分页回调取api.getCurrent()) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包装字段,本页未直接使用,待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应包装字段,本页未直接使用,待人工确认) | - |
| `obj` | object | 业务数据对象,if(data.obj)存在才渲染 | - |
| `obj.pages` | number | 总页数(传入分页控件pageCount) | - |
| `obj.total` | number | 满足条件的总条数(写入#total展示) | - |
| `obj.list[]` | array | relisting结果列表(模板each obj.list遍历) | - |
| `obj.list[][0]` | number | 平台ID,10=aliexpress(速卖通),前端据此显示平台名称 | - |
| `obj.list[][1]` | string | 店铺名称 | - |
| `obj.list[][2]` | string | 店铺负责人姓名 | - |
| `obj.list[][3]` | number | relisting成功数量(可点击查看明细) | - |
| `obj.list[][4]` | number | relisting失败数量(可点击查看明细) | - |
| `obj.list[][5]` | string | 生成日期 | - |
| `obj.list[][6]` | string | relisting日期(点击成功/失败时写入sessionStorage SmtListingTime) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
