# mbs oms erp-order-find-logistics-follow-log

物流跟进记录查询：物流跟进日志看板查询：按国家、类型、物流商及操作时间区间分页查询物流商跟进记录，返回跟进编号、跟进人/时间、国家/类型、物流商类型/物流商、跟进内容、聊天图片、价格附件、下一步跟进计划与下一次联系日期等列表数据。

## 用法

```bash
mbs oms erp-order-find-logistics-follow-log [--country <string>] [--expressType <string>] [--logisticsProviders <string>] [--startTime <string>] [--endTime <string>] --currentPage <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/trackController/findLogisticsFollowLog`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `country` | country | body | string | 否 | - | 国家(来源:URL参数 country 或 #country 国家下拉框;空串=全部) |
| `expressType` | expressType | body | string | 否 | - | 类型(来源:URL参数 expressType 或 #expressType 类型下拉框;空串=全部) |
| `logisticsProviders` | logisticsProviders | body | string | 否 | - | 物流商(来源:#providers 物流商下拉框;空串=全部) |
| `startTime` | startTime | body | string | 否 | - | 操作时间-起始(来源:#startTime 日期控件,格式 yyyy-MM-dd) |
| `endTime` | endTime | body | string | 否 | - | 操作时间-结束(来源:#endTime 日期控件,格式 yyyy-MM-dd) |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码(代码中固定传 1) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(固定传 100) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | number | 满足条件的记录总数(渲染至 #total) | - |
| `totalPages` | number | 总页数(用于初始化分页组件 followLogPage) | - |
| `rows[]` | array | 物流跟进记录列表 | - |
| `rows[][0]` | string | 跟进编号 | - |
| `rows[][1]` | string | 跟进人 | - |
| `rows[][2]` | string | 跟进时间 | - |
| `rows[][3]` | string | 国家 | - |
| `rows[][4]` | string | 类型 | - |
| `rows[][5]` | string | 物流商类型 | - |
| `rows[][6]` | string | 物流商 | - |
| `rows[][7]` | string | 跟进内容 | - |
| `rows[][8][]` | array | 聊天图片URL列表(前端取 picList.length 显示数量,点击 openModal 预览) | - |
| `rows[][9][]` | array | 价格附件URL列表(逐项渲染为附件N下载链接) | - |
| `rows[][10]` | string | 下一步跟进计划 | - |
| `rows[][11]` | string | 下一次联系日期 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
