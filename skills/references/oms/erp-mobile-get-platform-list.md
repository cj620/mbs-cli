<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-get-platform-list

平台列表查询：移动端销售趋势图「搜索」页加载时调用，获取当前登录用户可见的平台列表，用于渲染「平台」多选框（art-template getPlatformTemplate）。选中某平台后会以其 PLATFORMID 触发「大酋长」接口 findbigchiefByLogin。

## 用法

```bash
mbs oms erp-mobile-get-platform-list
```

## API

- Service: `erpMobile`
- Method: `GET`
- Path: `/erpMobile/erpMobile/saleTrendChart/getPlatformList`
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
| `obj[]` | array | 平台列表（art-template 直接遍历此数组渲染平台多选框） | - |
| `obj[][0]` | string | 平台ID（作为 checkbox 的 value，选中后作为 platformId 传入 findbigchiefByLogin 接口） | - |
| `obj[][1]` | string | 平台名称（作为 label 展示文本，并写入 checkbox 的 data-name，确认时存入 sessionStorage platName） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
