# mbs ars erp-report-download

TikTok活动(年度)列表导出：店铺热销商品监控页「TikTok活动导出」按钮触发，按当前选中店铺(店铺名称数组)导出 TikTok 年度活动 listing 列表为 Excel 文件。请求体直接为店铺名称字符串数组；响应为 .xlsx 二进制文件流，前端以 responseType=blob 接收并触发下载，默认文件名 tiktok.xlsx。

## 用法

```bash
mbs ars erp-report-download --shopNameList <array<string>>
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/tiktok/year/campaign/list/download`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopNameList` | shopNameList | body | array<string> | 是 | - | 请求体根节点，直接为店铺名称字符串数组(非对象包裹)。来源:页面「店铺」多选下拉(el-select v-model=shop)当前选中项;未选店铺时为空数组[] |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `fileStream` | unknown | Excel(.xlsx)二进制文件流。前端以 Blob 接收并下载,默认下载文件名 tiktok.xlsx | - |
| `Content-Disposition` | string | 响应头(非响应体字段)。含 filename=xxx.xlsx,前端优先据此解析文件名;失败则用传入的 download 值 tiktok.xlsx,再失败则用 {时间戳}.xls | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
