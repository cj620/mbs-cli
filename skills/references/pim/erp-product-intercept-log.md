# mbs pim erp-product-intercept-log

亚马逊刊登拦截词/SKU 操作日志查询：查询亚马逊自动刊登「拦截词/拦截SKU」的操作日志：按拦截关键字模糊检索，分页返回每条日志的操作人、操作时间、类型(拦截词/拦截SKU)与内容。用于「操作日志」弹窗展示。

## 用法

```bash
mbs pim erp-product-intercept-log [--interceptKey <string>] --page <number> --pageSize <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/amazonProductPublish/interceptLog`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `interceptKey` | interceptKey | body | string | 否 | - | 拦截词检索关键字。来源输入框 el-input v-model=interceptKey(placeholder「请输入拦截词」)；为空时查全部 |
| `page` | page | body | number | 是 | - | 当前页码。初始为 1，翻页时取 el-pagination 的 pageChange(e) 当前页 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定为 10(state.pageSize=10) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象(前端赋值给 logData) | - |
| `obj.total` | number | 满足条件的日志总条数(el-pagination :total 据此分页) | - |
| `obj.list[]` | array | 操作日志列表 | - |
| `obj.list[][0]` | string | 操作人(日志标题 item.oper) | - |
| `obj.list[][1]` | string | 操作时间(item.operTime) | - |
| `obj.list[][2]` | number | 日志类型枚举。0=拦截词；1=拦截sku(前端 getTypeName() 转中文展示) | - |
| `obj.list[][3]` | string | 日志内容(拦截词或SKU文本，item.content) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
