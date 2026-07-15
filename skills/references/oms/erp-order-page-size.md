# mbs oms erp-order-page-size

销售人均发货毛利额增长排行榜查询：大屏「人均发货毛利额增长榜」榜单数据查询：按页码/每页条数分页（路径参数），按榜单类型 type 取数，返回排行榜列表（名次、小组人数、姓名、人均毛利额增长、预测月业绩、毛利率、预估奖金）及总页数，前端用 art-template 模板渲染表格并定时轮询滚动。

## 用法

```bash
mbs oms erp-order-page-size --type <string>
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/erpOrder/erpOrder/saleVistingCard/getSaleTrackNew/{page}/{pageSize}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | path | number | 是 | - | 页码（路径第1段），本实例固定=1；轮询分支取自增 i |
| `pageSize` | pageSize | path | number | 是 | - | 每页条数（路径第2段），本实例固定=1000；首屏/轮询为10 |
| `type` | type | query | string | 是 | - | 榜单/统计类型，全部调用固定取值=2 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（前端 data.code==200 判定） | - |
| `desc` | string | 响应提示信息（标准响应包装字段，模板未使用）(待人工确认) | - |
| `obj` | object | 业务数据对象（前端取 data.obj 传入模板） | - |
| `obj.countPage` | number | 总页数（轮询分支 page=data.countPage，到末页归零循环） | - |
| `obj.result[]` | array | 排行榜列表（模板 {{each result item i}} 遍历渲染） | - |
| `obj.result[][0]` | number | 名次 | - |
| `obj.result[][1]` | number | 小组人数 | - |
| `obj.result[][2]` | string | 姓名 | - |
| `obj.result[][3]` | number | 人均毛利额增长（单位：万） | - |
| `obj.result[][4]` | number | 预测月业绩（单位：万） | - |
| `obj.result[][5]` | number | 毛利率（原值为小数，前端 ×100 保留2位展示%；小于 aProfitRate 时标红） | - |
| `obj.result[][6]` | number | 毛利率标准/阈值（profitRate < aProfitRate 时该行毛利率红色高亮） | - |
| `obj.result[][7]` | number | 预估奖金 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
