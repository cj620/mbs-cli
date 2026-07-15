<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-page-query

修改日志分页查询(海外仓类型展示权限)：海外仓类型展示权限弹窗(iframe)加载时调用，分页查询该权限设置的修改日志(操作时间/操作人/操作内容)，结果渲染到「修改日志」Tab 的时间轴中。

## 用法

```bash
mbs pim erp-product-page-query --currentPage <number> --pageSize <number>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/query/page`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码，函数默认值=1(getUpdateHistory(currentPage = 1)，单位：页) |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，固定传 100(单位：条) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj` | object | 业务数据对象 | - |
| `obj.items[]` | array | 修改日志列表(赋值给 logList) | - |
| `obj.items[][0]` | string | 操作时间(时间轴 :timestamp 展示) | - |
| `obj.items[][1]` | string | 操作人姓名(时间轴节点正文展示) | - |
| `obj.items[][2]` | string | 操作内容/日志正文(时间轴节点 <p> 展示) | - |
| `obj.count` | number | 满足条件的日志总数(分页总数，待人工确认：前端当前未取用) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
