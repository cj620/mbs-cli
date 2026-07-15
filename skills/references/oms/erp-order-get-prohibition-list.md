# mbs oms erp-order-get-prohibition-list

禁售清单查询：销售报表-禁售清单分页查询：按是否禁售、是否违规、平台、禁售政策(二级类目)、侵权产品等条件筛选，返回各平台禁限售政策行(一级/二级政策、触发产品、去重SPU数量、禁售状态、不违规备注及对应SPU图片列表)。

## 用法

```bash
mbs oms erp-order-get-prohibition-list [--platform <string>] [--twoCategory <string>] [--triggerProduct <string>] [--isWeiGui <number>] [--lockupStatus <string>] --page <number> --pageSize <number>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getProhibitionList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platform` | platform | body | string | 否 | - | 平台名称(按平台过滤，传 PLATFORMNAME 文本，初始值空串) |
| `twoCategory` | twoCategory | body | string | 否 | - | 禁售政策(二级禁限售政策名称，初始值空串) |
| `triggerProduct` | triggerProduct | body | string | 否 | - | 侵权/触发产品名称(可手动创建输入，初始值空串) |
| `isWeiGui` | isWeiGui | body | number | 否 | - | 是否违规。1=违规;2=不违规(初始 null，clearable) |
| `lockupStatus` | lockupStatus | body | string | 否 | - | 是否禁售。1=禁售;2=不禁售(初始空串，clearable) |
| `page` | page | body | number | 是 | - | 当前页码(默认1，分页切换时传入) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数(固定 50) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准响应包封字段，本页未直接读取)(待人工确认) | - |
| `desc` | string | 响应提示信息(标准响应包封字段，本页未直接读取)(待人工确认) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的政策行总数(前端赋给分页 total) | - |
| `obj.result[]` | array | 禁售政策清单(表格行数据) | - |
| `obj.result[][0]` | string | 平台(表格列「平台」) | - |
| `obj.result[][1]` | string | 一级禁限售政策(表格列「一级禁限售政策」) | - |
| `obj.result[][2]` | string | 二级禁限售政策(表格列「二级禁限售政策」) | - |
| `obj.result[][3]` | string | 触发产品(表格列「触发产品」；改禁售状态时作为名称入参) | - |
| `obj.result[][4]` | number | 去重SPU数量(表格列；点击可弹出 SPU 图片) | - |
| `obj.result[][5]` | string | 去重SPU列表(JSON字符串，点击数量时 JSON.parse 解析为数组渲染图片，元素含 imgUrl、spu) | - |
| `obj.result[][6]` | string | 禁售状态(单选切换)。1=禁售;2=不禁售(仅未提交售卖) | - |
| `obj.result[][7]` | string | 不违规备注(表格列「不违规备注」) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
