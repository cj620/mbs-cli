# mbs ars erp-report-get-site-by-type

按站点查询账单表头解析规则(getSiteByType)：amazonBill 文件上传解析页「设置解析规则」弹窗中，选择站点后按站点查询该站点已配置的账单表头解析规则。返回以费项类型名称为键、对应账单表头列名候选列表为值的 Map，前端 for...in 遍历生成解析规则表格。

## 用法

```bash
mbs ars erp-report-get-site-by-type --site <string>
```

## API

- Service: `erpReport`
- Method: `GET`
- Path: `/erpReport/erpReport/amazonHeaderRecord/getSiteByType`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `site` | site | query | string | 是 | - | 站点(Amazon 站点标识)。查询串拼接到 URL 末尾；来源：设置解析规则弹窗站点下拉 el-select(v-model=site,@change=getsitedetail)，候选来自 getSite 接口。枚举随站点数据动态返回(待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准响应封装字段;本接口 success 回调未直接引用) | - |
| `desc` | string | 响应提示信息(标准响应封装字段;本接口 success 回调未直接引用) | - |
| `obj` | object | 业务数据对象。动态键值 Map，键为费项类型名称(前端作费项名 name)，值为该费项对应的账单表头候选列表数组 | - |
| `obj.[费项类型名称][]` | array | 动态键对应的账单表头候选列表(前端 obj[key] 赋值给 arr，作账单表头列名下拉选项数据源) | - |
| `obj.[费项类型名称][]` | string | 账单表头列名(前端下拉选项 label/value，obj[key][0].headerTitle 作默认选中值 normal) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
