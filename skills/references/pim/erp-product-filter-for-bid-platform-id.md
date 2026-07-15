<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-filter-for-bid-platform-id

过滤禁售平台下拉选项查询：SPU列表（商品管理）高级筛选区「过滤禁售」多选下拉框的数据源接口。页面初始化时无参调用，返回可供过滤的禁售平台选项列表（value 值 + 名称），用于渲染 el-select 多选项；用户选中的 value 集合最终以 forbidPlatformIdList 参数提交到 SPU 列表查询接口。

## 用法

```bash
mbs pim erp-product-filter-for-bid-platform-id
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/filterForBidPlatformId`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（统一响应结构,接口未在源码中直接判读,按平台规范补充） | - |
| `desc` | string | 响应提示信息（统一响应结构） | - |
| `obj[]` | array | 禁售平台过滤选项列表（直接赋值给 state.filterForBidOptions） | - |
| `obj[][0]` | string | 选项值（el-option 的 :value 与 :key，即禁售平台ID，用户选中后以 forbidPlatformIdList 提交） | - |
| `obj[][1]` | string | 选项显示名称（el-option 的 :label，禁售平台名称） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
