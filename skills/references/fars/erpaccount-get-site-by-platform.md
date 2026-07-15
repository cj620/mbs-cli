<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-get-site-by-platform

根据平台查询站点：首页仪表盘「销量趋势图」筛选区，根据已勾选的平台(可多选,逗号拼接)查询对应的站点列表，返回站点名称数组，用于渲染「站点」多选下拉框(#ulSite)。

## 用法

```bash
mbs fars erpaccount-get-site-by-platform --platform <string>
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/dashboard/getSiteByPlatform`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platform` | platform | query | string | 是 | - | 平台标识(多平台逗号拼接)。来源控件 #platform 复选框 input[name=ids]，由 selectId() 取勾选值 join(',')。枚举:ebay/wish/fyndiq/aliexpress/joom/amazon/shopee/lazada/Walmart/TikTok/other。允许为空字符串。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一响应包装，本接口回调未读取)(待人工确认) | - |
| `desc` | string | 响应提示信息(统一响应包装，本接口回调未读取)(待人工确认) | - |
| `obj[]` | array | 站点名称列表(指定平台下的全部站点)，前端遍历渲染为站点多选项 | - |
| `obj[]` | string | 单个站点名称(数组元素，模板中作为复选框 value 及显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
