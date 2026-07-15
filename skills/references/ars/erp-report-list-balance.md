# mbs ars erp-report-list-balance

速卖通店铺余额列表查询：按店铺名称分页查询速卖通(AliExpress)各店铺账户余额（可用余额、总余额、冻结余额、币种、拉取时间），用于运营监控页表格展示与导出。

## 用法

```bash
mbs ars erp-report-list-balance --currentPage <number> --pageSize <number> [--shopNameList <array>]
```

## API

- Service: `erpReport`
- Method: `POST`
- Path: `/erpReport/erpReport/aliexpress/balance/list`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码（分页组件当前页，首次加载固定为1；来源 el-pagination current-change） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（默认100，可选 50/100/150/200；来源 el-pagination page-sizes） |
| `shopNameList` | shopNameList | body | array | 否 | - | 店铺名称列表（多选店铺名，可为空表示全部；来源 header 店铺多选框 shop，值为 SHOPNAME 数组） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(待人工确认，前端未显式读取) | - |
| `desc` | string | 响应提示信息(待人工确认，前端未显式读取) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的店铺总数（前端赋值给分页 total） | - |
| `obj.result[]` | array | 店铺余额列表 | - |
| `obj.result[][0]` | string | 店铺名称 | - |
| `obj.result[][1]` | string | 可用余额 | - |
| `obj.result[][2]` | string | 总余额（字段名源码即为 totaBalance） | - |
| `obj.result[][3]` | string | 冻结余额 | - |
| `obj.result[][4]` | string | 币种 | - |
| `obj.result[][5]` | string | 拉取时间 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
