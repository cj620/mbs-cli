# mbs oms erp-order-get-sale-rep-site

销售报表-按店铺查询站点刊登统计(getSaleRepSite)：销售月报表第三层（店铺维度）查询：根据店铺名称与月份描述，查询该店铺各站点的新刊登量、总在线量、新品比例，用于月报表悬浮下拉框中展示站点刊登统计明细。

## 用法

```bash
mbs oms erp-order-get-sale-rep-site --shopName <string> --descr <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getSaleRepSite`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | body | string | 是 | - | 店铺名称（第三层被操作的店铺名，来源为页面店铺行传入的 shopName 参数） |
| `descr` | descr | body | string | 是 | - | 月份描述/标识（查询所属月份，来源 sessionStorage 的 thisMonth/lastMonth/beforeMonth，由调用方以 descr 传入） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功，500=失败 | - |
| `desc` | string | 响应提示信息（code=500 时以红色文本展示） | - |
| `obj[]` | array | 站点刊登统计列表（getEmpTemplate 遍历渲染的数据） | - |
| `obj[][0]` | string | 站点（表头“站点”） | - |
| `obj[][1]` | number | 新刊登量（表头“新刊登量”） | - |
| `obj[][2]` | number | 总在线量（表头“总在线量”；无值/为假时展示 “--”） | - |
| `obj[][3]` | number | 新品比例（表头“新品比例”，百分比数值，展示时追加“%”；为 null 时展示 “--”） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
