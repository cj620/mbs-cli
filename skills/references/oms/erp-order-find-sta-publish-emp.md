# mbs oms erp-order-find-sta-publish-emp

按人员统计上新发布报表查询：上新发布统计报表（按人员）：按所选月份(日期)与可选大酋长，分页查询各销售人员在美国/英国/德国/澳大利亚/加拿大/法国/爱尔兰/意大利/奥地利/西班牙等站点的上新量与占比，并汇总毛利额、运营毛利率、销售额、在线量。

## 用法

```bash
mbs oms erp-order-find-sta-publish-emp --date <string> [--bigChief <string>] --currentPage <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/statisticsPublish/findStaPublishEmp`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `date` | date | body | string | 是 | - | 统计月份/日期(格式 yyyy-MM-dd)，来源控件 #date(type=date)，默认当天；为空时拦截不发请求 |
| `bigChief` | bigChief | body | string | 否 | - | 大酋长，来源 #bigChief 下拉选中文本；含「]」则取最后一个「]」之后部分；未选时传空字符串 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码，首次固定为1，翻页取分页插件 api.getCurrent() |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定传 50 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `desc` | string | 统计提示信息(渲染至页面 .desc 标题) | - |
| `total` | number | 总条数(渲染至 #total) | - |
| `totalPages` | number | 总页数(传入 findStaPublishReport() 初始化分页) | - |
| `rows[]` | array | 人员统计数据行列表 | - |
| `rows[][0]` | string | 销售(人员)名称 | - |
| `rows[][1]` | string | 大酋长 | - |
| `rows[][2]` | number | 毛利额 | - |
| `rows[][3]` | number | 运营毛利率(模板后拼「%」展示) | - |
| `rows[][4]` | number | 销售额 | - |
| `rows[][5]` | number | 在线量 | - |
| `rows[][6]` | number | 美国-上新量 | - |
| `rows[][7]` | number | 美国-占比(%) | - |
| `rows[][8]` | number | 英国-上新量 | - |
| `rows[][9]` | number | 英国-占比(%) | - |
| `rows[][10]` | number | 德国-上新量 | - |
| `rows[][11]` | number | 德国-占比(%) | - |
| `rows[][12]` | number | 澳大利亚-上新量 | - |
| `rows[][13]` | number | 澳大利亚-占比(%) | - |
| `rows[][14]` | number | 加拿大-上新量 | - |
| `rows[][15]` | number | 加拿大-占比(%) | - |
| `rows[][16]` | number | 法国-上新量 | - |
| `rows[][17]` | number | 法国-占比(%) | - |
| `rows[][18]` | number | 爱尔兰-上新量 | - |
| `rows[][19]` | number | 爱尔兰-占比(%) | - |
| `rows[][20]` | number | 意大利-上新量 | - |
| `rows[][21]` | number | 意大利-占比(%) | - |
| `rows[][22]` | number | 奥地利-上新量 | - |
| `rows[][23]` | number | 奥地利-占比(%) | - |
| `rows[][24]` | number | 西班牙-上新量 | - |
| `rows[][25]` | number | 西班牙-占比(%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
