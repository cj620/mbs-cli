# mbs oms erp-order-find-sta-publish-big-chief

大酋长上新统计查询：上新发布统计-按大酋长统计：按所选月份(date)与大酋长(bigChief/allChief)统计每位大酋长的毛利额、运营毛利率、销售额、在线量、总上新量、上新/在线占比，以及美国/英国/德国/澳大利亚/加拿大/法国/爱尔兰/意大利/奥地利/西班牙 10 个站点的上新量与占比。

## 用法

```bash
mbs oms erp-order-find-sta-publish-big-chief --date <string> [--bigChief <string>] [--allChief <string>] [--currentPage <number>] [--pageSize <number>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/statisticsPublish/findStaPublishBigChief`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `date` | date | body | string | 是 | - | 统计月份/日期(格式 yyyy-MM-dd)，来源日期控件 #date，默认当天；为空则前端校验拦截不发起请求 |
| `bigChief` | bigChief | body | string | 否 | - | 大酋长名称，来源下拉 #bigChief 选中项文本(含 ] 时取 ] 之后部分)，未选时传空串 |
| `allChief` | allChief | body | string | 否 | - | 全部大酋长名称(逗号拼接)，由 getBigChief2 返回列表的 name 去括号前缀后 , 拼接 |
| `currentPage` | currentPage | body | number | 否 | - | 当前页码，来源 baseData.currentPage，固定从 1 开始 |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数，来源 baseData.pageSize，固定 100 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `desc` | string | 响应提示信息(前端写入 .desc 展示) | - |
| `obj[]` | array | 大酋长统计列表(渲染数据源 list) | - |
| `obj[][0]` | string | 大酋长 | - |
| `obj[][1]` | number | 毛利额 | - |
| `obj[][2]` | number | 运营毛利率(前端拼 % 展示) | - |
| `obj[][3]` | number | 销售额 | - |
| `obj[][4]` | number | 在线量 | - |
| `obj[][5]` | number | 总上新量 | - |
| `obj[][6]` | number | 上新/在线占比(前端拼 % 展示) | - |
| `obj[][7]` | number | 美国-上新量 | - |
| `obj[][8]` | number | 美国-占比(前端拼 % 展示) | - |
| `obj[][9]` | number | 英国-上新量 | - |
| `obj[][10]` | number | 英国-占比(前端拼 % 展示) | - |
| `obj[][11]` | number | 德国-上新量 | - |
| `obj[][12]` | number | 德国-占比(前端拼 % 展示) | - |
| `obj[][13]` | number | 澳大利亚-上新量 | - |
| `obj[][14]` | number | 澳大利亚-占比(前端拼 % 展示) | - |
| `obj[][15]` | number | 加拿大-上新量 | - |
| `obj[][16]` | number | 加拿大-占比(前端拼 % 展示) | - |
| `obj[][17]` | number | 法国-上新量 | - |
| `obj[][18]` | number | 法国-占比(前端拼 % 展示) | - |
| `obj[][19]` | number | 爱尔兰-上新量 | - |
| `obj[][20]` | number | 爱尔兰-占比(前端拼 % 展示) | - |
| `obj[][21]` | number | 意大利-上新量 | - |
| `obj[][22]` | number | 意大利-占比(前端拼 % 展示) | - |
| `obj[][23]` | number | 奥地利-上新量 | - |
| `obj[][24]` | number | 奥地利-占比(前端拼 % 展示) | - |
| `obj[][25]` | number | 西班牙-上新量 | - |
| `obj[][26]` | number | 西班牙-占比(前端拼 % 展示) | - |
| `total` | number | 总条数(前端写入 #total) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
