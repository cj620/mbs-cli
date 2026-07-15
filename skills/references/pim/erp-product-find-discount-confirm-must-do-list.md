# mbs pim erp-product-find-discount-confirm-must-do-list

待确认打折任务列表查询：成品任务看板「折扣确认」页签加载时调用，查询当前需要人工确认（恢复原成本价/清仓下架）的打折推送任务列表。无请求体，后端按登录态返回待确认 SKU 任务，前端用于 ElementPlus 表格渲染及顶部角标计数。

## 用法

```bash
mbs pim erp-product-find-discount-confirm-must-do-list
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/pushProduct/findDiscountConfirmMustDoList`
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
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 待确认打折任务列表;Array.isArray(res.obj)才取用,否则置空数组 | - |
| `obj[][0]` | string | 商品SPU编号(确认/放弃时回传后端) | - |
| `obj[][1]` | string | SKU编号(表格主列,链接到SKU详情页;确认/放弃时回传) | - |
| `obj[][2]` | string | 商品主图URL(el-image预览,空则显示无图) | - |
| `obj[][3]` | string | 商品名称(表格显示,空显示--) | - |
| `obj[][4]` | string | 销量级别(超爆/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品等,前端据此着色el-tag) | - |
| `obj[][5]` | string | 商品属性(表格商品属性/类目上行,空显示--) | - |
| `obj[][6]` | string | 类目(表格优先取category,无则回退categoryName) | - |
| `obj[][7]` | string | 类目名称(category缺失时的回退;确认时作为producttype回传) | - |
| `obj[][8]` | number | 近7天销量(空显示--) | - |
| `obj[][9]` | number | 近30天销量(空显示--) | - |
| `obj[][10]` | string | 任务状态(表格prop=status直接展示) | - |
| `obj[][11]` | number | 原成本价(formatPrice保留2位;确认弹窗文案提示恢复该价) | - |
| `obj[][12]` | number | 目前折扣价(formatPrice保留2位) | - |
| `obj[][13]` | string | 开发员(表格开发/建档时间左列;确认时作为developer回传) | - |
| `obj[][14]` | string | 开发/建档时间(formatDate取日期部分) | - |
| `obj[][15]` | string | 推送任务时间(formatDate取日期部分) | - |
| `obj[][16]` | string | 折扣刷新任务ID(确认/放弃时作为refreshid/refreshId回传后端) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
