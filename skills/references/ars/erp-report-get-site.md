<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erp-report-get-site

获取亚马逊账单站点列表：amazonBill「文件上传解析」页面初始化(created)时调用，获取已配置解析规则的亚马逊站点(site)名称列表，用于「设置解析规则」弹窗中的站点下拉选择。选中站点后再调用 getSiteByType 拉取该站点的表头规则。

## 用法

```bash
mbs ars erp-report-get-site
```

## API

- Service: `erpReport`
- Method: `GET`
- Path: `/erpReport/erpReport/amazonHeaderRecord/getSite`
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
| `code` | number | 响应状态码,200=成功(本调用未读取,按 erpReport 统一响应约定，待人工确认) | - |
| `desc` | string | 响应提示信息(本调用未读取，待人工确认) | - |
| `obj[]` | array | 站点名称列表，赋值给 sitelist 作为站点下拉数据源 | - |
| `obj[]` | string | 单个站点名称(亚马逊站点 site)，直接作为 el-option 的 label 与 value | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
