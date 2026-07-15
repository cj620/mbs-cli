<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs ars erp-report-get-kf-db-sales-points

客服/开发销售积分榜单查询(getKfDbSalesPoints)：开发积分榜单大屏左侧「榜单」数据查询：按月份与销售人员列表查询各销售人员的开发积分排名，返回排名/姓名/积分列表，供 el-table 自动滚动展示。

## 用法

```bash
mbs ars erp-report-get-kf-db-sales-points --months <string> [--salePersonList <array>]
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/pointsRanking/getKfDbSalesPoints`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `months` | months | body | string | 是 | - | 查询月份，格式 YYYY-MM（如 2026-06）。由 GetNow() 取系统当前年月生成。来源：系统当前时间(new Date()) |
| `salePersonList` | salePersonList | body | array | 否 | - | 销售人员姓名列表，按指定开发人员过滤。来源：getPeople() 通过 /erpOrder/.../teamNumberDropDown 返回 obj 映射 item.name；当前页面 getPeople() 被注释，实际传入空数组（不过滤，查全部）。元素类型：string |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（框架统一返回，前端此处未显式判断） | - |
| `desc` | string | 响应提示信息（框架统一返回） | - |
| `obj[]` | array | 业务数据：开发积分榜单列表（前端赋值给 Leftdata） | - |
| `obj[][0]` | number | 排名（左表列 prop=rownum 标签「排名」） | - |
| `obj[][1]` | string | 销售人员姓名（左表列 prop=salesPerson 标签「姓名」） | - |
| `obj[][2]` | number | 开发积分（左表列 prop=score 标签「积分」） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
