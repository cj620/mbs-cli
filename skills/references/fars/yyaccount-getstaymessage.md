# mbs fars yyaccount-getstaymessage

待办通知（全部通知）查询：经理看板右侧通知卡片点击【全部】按钮触发，按当前员工 userid 拉取全部待办/通知消息列表，返回 JSON 字符串形式通知数组与新通知条数；前端 JSON.parse(data.obj) 后 shift() 去首行，用 art-template contentComment 渲染到 #comment-section。

## 用法

```bash
mbs fars yyaccount-getstaymessage --userid <string> --callback <string>
```

## API

- Service: `yyaccount`
- Method: `GET`
- Path: `/yyaccount/account/messagecontroller/getstaymessage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `userid` | userid | query | string | 是 | - | 当前员工ID，来源页面URL查询参数 yyemployeeid（getQueryString），按用户拉取通知列表 |
| `callback` | callback | query | string | 是 | - | JSONP 回调函数名参数（jsonp:"callback" 自动生成追加），用于包裹跨域响应 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj` | string | 通知数据（JSON字符串），前端 JSON.parse(data.obj) 得到通知数组 list | - |
| `content` | string | 新通知条数，模板渲染“有{{content}}条新通知！” | - |
| `code` | string | 响应状态码（本 success 回调未校验，仅同类接口使用，取值待人工确认）(待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
