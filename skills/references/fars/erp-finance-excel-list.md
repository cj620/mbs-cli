# mbs fars erp-finance-excel-list

账单导入Excel历史记录列表查询：查询账单导入(Excel上传)的历史记录列表，返回每次上传的文件名、上传时间、上传人、总记录/成功数/失败数、成功金额、状态及失败订单文件等信息，供 report/excelList.html 页面渲染历史记录表格。无请求参数。

## 用法

```bash
mbs fars erp-finance-excel-list
```

## API

- Service: `erpFinance`
- Method: `POST`
- Path: `/erpFinance/erpFinance/bill/excelList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码。200=成功；601=登录失效(弹窗后跳转登录页)；其他=失败(弹窗提示 desc) | - |
| `desc` | string | 响应提示信息(失败/登录失效时弹窗展示) | - |
| `obj` | object | 业务数据对象。前端 var list = data.obj 后作为记录列表遍历渲染；同时读取 data.obj.count 写入总数 #total(待人工确认：obj 同时被当作列表遍历与读取 .count 属性) | - |
| `obj.count` | number | 总记录数(写入页面 #total)；亦作为每行“总记录”列展示(value.count) | - |
| `obj.fileName` | string | 文件名称(上传的Excel文件名) | - |
| `obj.creattime` | string | 上传时间 | - |
| `obj.oper` | string | 上传人 | - |
| `obj.successcount` | number | 成功数(成功导入记录数) | - |
| `obj.errorcount` | number | 失败数(导入失败记录数) | - |
| `obj.errFile` | string | 失败订单文件名。非 null 时拼接下载链接 http://www.instudio.me:555/storagePath/paymentErr/{errFile} 展示“下载失败订单” | - |
| `obj.successamount` | number | 成功金额(成功导入的账单金额合计) | - |
| `obj.status` | string | 导入状态 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
