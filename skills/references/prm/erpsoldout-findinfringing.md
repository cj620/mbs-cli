# mbs prm erpsoldout-findinfringing

侵权商品列表查询：按 SKU 列表查询侵权商品记录，分页返回侵权关键词、关联SKU、侵权平台、在售/下架成功/下架失败商品数、审核状态、提交/审核人、侵权图片等明细，用于侵权审核任务列表渲染与分页。

## 用法

```bash
mbs prm erpsoldout-findinfringing [--skuList <array<string>>]
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/findinfringing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `skuList` | skuList | body | array<string> | 否 | - | 待查询的 SKU 列表（来源页面全局变量 SKU，作为侵权商品查询条件） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功；601=未登录(跳登录页)；其他=失败弹出 desc | - |
| `desc` | string | 响应提示信息(失败/未登录时展示) | - |
| `obj` | object | 业务数据对象(无数据时 total 置0) | - |
| `obj.total` | number | 满足条件的侵权记录总条数(写入 #total) | - |
| `obj.pages` | number | 总页数(作为分页插件 pageCount) | - |
| `obj.list[]` | array | 侵权商品记录列表 | - |
| `obj.list[][0]` | string | 侵权记录ID(行主键,操作按钮/详情跳转用) | - |
| `obj.list[][1]` | boolean | 是否已删除(true 时该行置灰 minor-row) | - |
| `obj.list[][2]` | string | 审核状态(枚举:待审核 等;非待审核显示查看线上商品) | - |
| `obj.list[][3]` | boolean | 是否可审核(配合 verifyStatus 控制勾选框与通过/不通过/删除按钮) | - |
| `obj.list[][4]` | string | 移除关键词筛选规则-侵权词大类 | - |
| `obj.list[][5]` | string | 移除关键词筛选规则-包含词 | - |
| `obj.list[][6]` | array<string> | 侵权关键词列表(逗号拼接展示,并显示数量 length) | - |
| `obj.list[][7]` | array<string> | 侵权SPU/SKU列表(逗号拼接展示,并显示个数 length) | - |
| `obj.list[][8]` | string | sku审核员 | - |
| `obj.list[][9]` | string | sku审核时间(仅 skus 长度为1时展示) | - |
| `obj.list[][10]` | string | 关联sku | - |
| `obj.list[][11]` | string | 侵权平台名称 | - |
| `obj.list[][12]` | number | 侵权在售商品数 | - |
| `obj.list[][13]` | number | 侵权下架成功商品数 | - |
| `obj.list[][14]` | number | 侵权下架失败商品数 | - |
| `obj.list[][15]` | string | 描述 | - |
| `obj.list[][16]` | string | 大酋长(负责人) | - |
| `obj.list[][17]` | string | 侵权审核人 | - |
| `obj.list[][18]` | string | 侵权审核日期 | - |
| `obj.list[][19]` | string | 提交人 | - |
| `obj.list[][20]` | string | 提交日期 | - |
| `obj.list[][21]` | number | 是否自动下架(0=自动下架,展示“自动下架”) | - |
| `obj.list[][22]` | number | 是否自动移除图片(0=是,展示“自动移除图片”) | - |
| `obj.list[][23]` | number | 是否自动移除关键词(0=是,展示“自动移除关键词”) | - |
| `obj.list[][24]` | string | 站点 | - |
| `obj.list[][25]` | array<string> | 侵权图片文件名数组(取首张拼前缀 http://instudio.gnway.cc:555/infringement/ 展示,并显示张数 length) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
