# mbs fars erpaccount-shopee-un-read-message-list

Shopee店铺未读消息列表查询：分页查询当前用户名下 Shopee 店铺的未读站内信统计：返回每个店铺下各站点账号的未读消息条数、登录状态(是否需验证码、是否超1小时未同步)等，前端按卡片渲染并提供逐站点登录跳转。

## 用法

```bash
mbs fars erpaccount-shopee-un-read-message-list --page <number> [--pageSize <number>] [--orderBy <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/shopeeUnRead/shopeeUnReadMessageList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码。首次/排序查询固定传1；分页回调传api.getCurrent() |
| `pageSize` | pageSize | body | number | 否 | - | 每页条数，固定20(仅search()首次查询传，分页回调未传) |
| `orderBy` | orderBy | body | string | 否 | - | 排序方式。空=默认;1=刷新时间升序;2=刷新时间降序;3=店铺名称升序;4=店铺名称降序(来源:select#orderBy) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功，否则alert(desc) | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的店铺总条数(写入#total展示) | - |
| `obj.countPage` | number | 总页数(赋给分页控件pageCount，作为search()返回值) | - |
| `obj.result[]` | array | 店铺未读消息列表(每项为一个店铺卡片) | - |
| `obj.result[][0]` | string | 店铺名称(卡片标题展示) | - |
| `obj.result[][1]` | number | 店铺状态。2=禁用/停用(卡片置灰)；其它=正常 | - |
| `obj.result[][2]` | number | 是否需要验证码登录。1=需要(红字展示descr提示) | - |
| `obj.result[][3]` | string | 登录异常/需验证码时的红字提示文案(loginNeedCaptcha=1时展示) | - |
| `obj.result[][4]` | number | 是否超过1小时未同步消息。1=是(红字提示"超过1小时未同步消息") | - |
| `obj.result[][5][]` | array | 该店铺下各站点账号列表 | - |
| `obj.result[][5][][0]` | string | 站点代码。my/ph/id/sg/th/vn/tw/br(映射Shopee卖家后台域名) | - |
| `obj.result[][5][][1]` | string | 站点登录账号(展示并encodeURIComponent拼入登录URL) | - |
| `obj.result[][5][][2]` | string | 站点登录密码/密钥(encodeURIComponent拼入登录URL的key参数) | - |
| `obj.result[][5][][3]` | string | 站点未读记录ID(点击站点链接调用updateUnReadShopStatus?id=用) | - |
| `obj.result[][5][][4]` | number | 该站点未读消息条数(>0红色加粗展示，累加得店铺总未读数;为0普通展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
