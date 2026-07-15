# mbs fars yyaccount-instudio-account-getstaymessage1

待办通知-爆单SPU通知查询：经理工作台待办通知区点击「爆单SPU」按钮触发，按当前登录员工 userid 拉取待处理爆单SPU通知列表(JSON字符串)及未读条数，前端 JSON.parse 后 shift() 移除首元素再用 contentComment 模板渲染；JSONP 跨域调用。

## 用法

```bash
mbs fars yyaccount-instudio-account-getstaymessage1 --userid <number> [--callback <string>] [--i <number>]
```

## API

- Service: `yyaccount(instudio-account)`
- Method: `GET`
- Path: `/yyaccount/account/messagecontroller/getstaymessage1`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `userid` | userid | body | number | 是 | - | 当前登录员工ID,来源 JSON.parse(localStorage.getItem('userid')),后端 @RequestParam Integer userid |
| `callback` | callback | body | string | 否 | - | JSONP回调函数名,jQuery据 dataType:jsonp/jsonp:callback 自动生成,后端非空时以 callback(数据) 包裹返回 |
| `i` | i | body | number | 否 | - | 异步调用序号,后端 request.getParameter('i') 读取并回填 code;本 getSurgeOrderNotice() 调用未显式传递(待人工确认) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 状态码,成功置0;JSONP分支被覆盖为调用序号i(默认0) | - |
| `desc` | string | 提示信息,成功时为「成功！」 | - |
| `obj` | string | 通知列表JSON字符串,前端 JSON.parse(data.obj) 得到数组list并 shift() 丢弃首元素后渲染 | - |
| `content` | string | 未读/待处理通知条数,后端 countMessageByStatus1(userid),模板 有{{content}}条新通知！ | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
