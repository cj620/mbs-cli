# mbs fars erpaccount-product-managerqhlv

开发SKU平均订单缺货时长(开发酋长缺货率)查询：看板首页加载时调用，查询各开发酋长(productManager)近60-15天开发SKU在出单后各缺货时长区间(0-4/4-7/7-15/15-20/20天以上)的订单量、SKU数、缺货占比，以及总缺货订单量与总平均缺货天数；前端按 skunum04Ratio 计算最大/最小项加红绿高亮，渲染至 #content11 表格。

## 用法

```bash
mbs fars erpaccount-product-managerqhlv
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/productManagerqhlv`
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
| `code` | number | 响应状态码,200=成功 | - |
| `content` | string | 表格区块显隐标志。'1'=显示#threeLoder表格;'0'=隐藏 | - |
| `obj[]` | array | 开发酋长缺货统计行列表 | - |
| `obj[][0]` | string | 开发酋长(开发负责人姓名) | - |
| `obj[][1]` | string | 总开发SKU-订单量 | - |
| `obj[][2]` | string | 总开发SKU-未出单SKU数 | - |
| `obj[][3]` | string | 总开发SKU-出单SKU数 | - |
| `obj[][4]` | string | 出单后缺货0-4天以上SKU-订单量 | - |
| `obj[][5]` | string | 出单后缺货0-4天以上-SKU数 | - |
| `obj[][6]` | string | 出单后缺货0-4天以上-占比(带'%',前端去%后比较最大/最小，最大标蓝flag=1、最小标红flag=2) | - |
| `obj[][7]` | string | 出单后缺货4-7天以上SKU-订单量 | - |
| `obj[][8]` | string | 出单后缺货4-7天以上-SKU数 | - |
| `obj[][9]` | string | 出单后缺货4-7天以上-占比 | - |
| `obj[][10]` | string | 出单后缺货7-15天以上SKU-订单量 | - |
| `obj[][11]` | string | 出单后缺货7-15天以上-SKU数 | - |
| `obj[][12]` | string | 出单后缺货7-15天以上-占比 | - |
| `obj[][13]` | string | 出单后缺货15-20天SKU-订单量 | - |
| `obj[][14]` | string | 出单后缺货15-20天-SKU数 | - |
| `obj[][15]` | string | 出单后缺货15-20天-占比 | - |
| `obj[][16]` | string | 出单后缺货20天以上SKU-订单量 | - |
| `obj[][17]` | string | 出单后缺货20天以上-SKU数 | - |
| `obj[][18]` | string | 出单后缺货20天以上-占比 | - |
| `obj[][19]` | string | 总缺货订单量 | - |
| `obj[][20]` | string | 总缺货订单占比 | - |
| `obj[][21]` | string | 总平均缺货天数 | - |
| `obj[][22]` | string | 高亮标记，前端赋写(非后端返回):'1'=skunum04Ratio最大;'2'=最小;'0'=其他(待人工确认后端是否亦返回) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
