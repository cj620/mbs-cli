<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-hwc-list

海外仓列表查询：获取当前用户可见的海外仓(HWC)列表。页面初始化 getHwclist() 调用，GET 无入参；返回海外仓数组，前端用 shopTemplate 渲染顶部'请选择海外仓'多选下拉(#shopContent,值=shopId)，用 shoplistTemplate 渲染新增跟踪单弹窗下拉(#shopList,值=shopId,shopName)。

## 用法

```bash
mbs pim erp-product-get-hwc-list
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/hwcProduct/getHwcList`
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
| `code` | number | 响应状态码,200=成功(本接口成功回调未显式判断,标准壳字段) | - |
| `desc` | string | 响应提示信息(标准壳字段) | - |
| `obj[]` | array | 海外仓列表数组(前端据此渲染海外仓下拉选项) | - |
| `obj[][0]` | string | 海外仓ID(下拉 option 的 value;#shopContent 选中值即 shopId 集合,搜索时作为 shopIds) | - |
| `obj[][1]` | string | 海外仓名称(下拉显示文本;新增跟踪单弹窗 #shopList option value 为 shopId,shopName 拼接) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
