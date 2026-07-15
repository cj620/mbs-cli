# mbs oms erp-mobile-find-infringing-info

商品侵权信息查询：移动端马帮ERP「商品侵权信息」页面分页查询：按关键词(spu/sku/侵权关键字)与审核状态筛选，返回按侵权平台分组的侵权提交记录及其下侵权明细列表，支持加载更多分页。

## 用法

```bash
mbs oms erp-mobile-find-infringing-info --currPage <number> [--search <string>] [--verifyStatus <string>]
```

## API

- Service: `erpMobile`
- Method: `POST`
- Path: `/erpMobile/erpMobile/infringing/findInfringingInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currPage` | currPage | body | number | 是 | - | 当前页码。search()固定传1，getMore()传++currPage(从1开始累加) |
| `search` | search | body | string | 否 | - | 搜索关键字，来源搜索框#search(占位提示 spu/sku/侵权关键字) |
| `verifyStatus` | verifyStatus | body | string | 否 | - | 审核状态筛选。来源URL参数tortType：有值→原值；为空串→""(全部)；无值→默认"1"(待审核)。枚举0/1/2/3/4同响应verifyStatus |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(删除/审核回调中判定) | - |
| `desc` | string | 响应提示/部门信息。等于"销售部"时前端隐藏"提交侵权"入口(.tort)，亦用于toast提示 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.pages` | number | 总页数。前端据currPage==obj.pages判定是否到达最后一页 | - |
| `obj.list[]` | array | 侵权信息分组列表(按侵权平台/提交记录分组) | - |
| `obj.list[][0]` | string | 侵权平台名称 | - |
| `obj.list[][1]` | number | 审核状态枚举。0=审核未通过;1=待审核;2=审核已通过;3=生成完毕;4=生成中 | - |
| `obj.list[][2]` | string | 侵权审核人(展示于审核状态文案中) | - |
| `obj.list[][3]` | boolean | 是否可审核标记。为true且verifyStatus==1时显示通过/不通过/删除按钮 | - |
| `obj.list[][4]` | string | 侵权提交记录ID(用于通过/不通过/删除及查看线上商品跳转) | - |
| `obj.list[][5][]` | array | 该分组下的侵权明细列表 | - |
| `obj.list[][5][][0]` | string | 侵权明细状态。0=正常存在(显示商品);1=提交spu/sku错误,系统无此spu/sku;2=本次没有侵权spu/sku | - |
| `obj.list[][5][][1]` | string | 商品图片URL(isExtence==0时展示，加载失败回退默认图) | - |
| `obj.list[][5][][2]` | string | 商品标题 | - |
| `obj.list[][5][][3]` | string | 商品SPU/SKU编号 | - |
| `obj.list[][5][][4]` | string | 提交人(建单人) | - |
| `obj.list[][5][][5]` | string | 提交日期(建单时间) | - |
| `obj.list[][5][][6]` | string | 侵权关键词 | - |
| `obj.list[][5][][7]` | string | 是否替换/移除侵权词。0=需移除;1=不移除 | - |
| `obj.list[][5][][8]` | string | 侵权描述说明 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
