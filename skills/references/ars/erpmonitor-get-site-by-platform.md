# mbs ars erpmonitor-get-site-by-platform

根据平台查找站点：依据平台标识(platform)查询该平台下的全部站点列表，用于「店铺上新统计」页面顶部「站点」下拉框的选项渲染(art-template #siteTemplate)。页面加载即调用，返回站点集合。

## 用法

```bash
mbs ars erpmonitor-get-site-by-platform --platform <number>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/hotProductMonitor/getSiteByPlatform`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platform` | platform | query | number | 是 | - | 平台标识。前端硬编码固定传1(对应平台1)，经URL query传递(?platform=1)，用于筛选该平台下的站点。来源：代码常量(非控件)，枚举取值待人工确认 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(平台统一包装,200/成功；本回调未引用,待人工确认) | - |
| `desc` | string | 响应提示信息(平台统一包装；本回调未引用,待人工确认) | - |
| `obj[]` | array | 站点列表(成功回调 data.obj，作为下拉框数据源) | - |
| `obj[][0]` | string | 站点标识/站点简码(渲染为<option>的value，作为站点选中值) | - |
| `obj[][1]` | string | 站点名称(渲染为<option>的显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
