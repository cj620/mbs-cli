<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars erpaccount-lazada-un-read-message-list

Lazada店铺未读消息列表查询：Lazada未读消息看板分页查询：按排序方式分页返回各Lazada店铺的未读消息统计（ID/TH/MY/PH/SG/VN六站点未读数）、店铺状态、是否超过30分钟未同步消息、店铺登录账号密码等信息，前端以卡片形式渲染并支持分页。

## 用法

```bash
mbs fars erpaccount-lazada-un-read-message-list --page <number> [--orderBy <string>]
```

## API

- Service: `erpaccount`
- Method: `POST`
- Path: `/erpaccount/erpaccount/lazadaUnRead/LazadaUnReadMessageList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `page` | page | body | number | 是 | - | 当前页码。首次查询固定传 1；翻页时传分页组件当前页 api.getCurrent() |
| `orderBy` | orderBy | body | string | 否 | - | 排序方式，来源排序下拉框 #orderBy。枚举：空=不指定;1=刷新时间升序;2=刷新时间降序;3=店铺名称升序;4=店铺名称降序;5=店铺密码错误 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（非200时 alert(desc)） | - |
| `desc` | string | 响应提示信息（失败时弹窗展示） | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的店铺总数（写入 #total，每页4条） | - |
| `obj.countPage` | number | 总页数（作为分页组件 pageCount） | - |
| `obj.result[]` | array | 店铺未读消息列表 | - |
| `obj.result[][0]` | string | 店铺/记录ID（点击详情时传给 updateUnReadShopStatus） | - |
| `obj.result[][1]` | string | 店铺名称（卡片标题展示） | - |
| `obj.result[][2]` | number | 店铺状态。1=正常;非1=异常(卡片背景置灰) | - |
| `obj.result[][3]` | string | 店铺登录账号（拼接Lazada卖家中心登录URL，encodeURIComponent） | - |
| `obj.result[][4]` | string | 店铺登录密码/key（拼接登录URL的 key 参数，encodeURIComponent） | - |
| `obj.result[][5]` | string | 消息时间/创建时间（卡片展示） | - |
| `obj.result[][6]` | number | 是否超过30分钟未同步消息。>0=是(红字提示);否则不展示 | - |
| `obj.result[][7]` | number | ID站(印尼)未读消息数（>0时红色加粗） | - |
| `obj.result[][8]` | number | TH站(泰国)未读消息数（>0时红色加粗） | - |
| `obj.result[][9]` | number | MY站(马来西亚)未读消息数（>0时红色加粗） | - |
| `obj.result[][10]` | number | PH站(菲律宾)未读消息数（>0时红色加粗） | - |
| `obj.result[][11]` | number | SG站(新加坡)未读消息数（>0时红色加粗） | - |
| `obj.result[][12]` | number | VN站(越南)未读消息数（>0时红色加粗） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
