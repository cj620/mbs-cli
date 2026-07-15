# mbs ars erpmonitor-deleteshopee-reviseprice-confirm-list

Shopee提价确认Listing删除：在“Shopee提价确认”页面勾选一条或多条Listing记录后，点击“删除listing”并确认，将所选记录的唯一ID(uniqueId)以逗号拼接经查询串 ids 提交，批量删除对应提价确认Listing记录；成功后按当前Tab刷新列表。

## 用法

```bash
mbs ars erpmonitor-deleteshopee-reviseprice-confirm-list --ids <string>
```

## API

- Service: `erpmonitor`
- Method: `POST`
- Path: `/erpmonitor/erpmonitor/shopeeRevisepriceConfirm/deleteshopeeRevisepriceConfirmList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `ids` | ids | query | string | 是 | - | 待删除的提价确认Listing唯一ID列表，逗号分隔。取自列表中勾选行复选框 name=inputvals 的 value(渲染自 item.uniqueId)，join(',') 拼接；未勾选时前端拦截不发请求。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `success` | boolean | 操作是否成功。true=删除成功(隐藏loader、按Tab调用 getList()/getList2() 刷新并关闭 #delListingModal)；false=失败(弹出 desc 提示) | - |
| `desc` | string | 结果提示信息，失败时通过 alert(r.desc) 展示 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
