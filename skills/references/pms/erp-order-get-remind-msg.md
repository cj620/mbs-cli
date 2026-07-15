# mbs pms erp-order-get-remind-msg

销售拜访卡-获取提醒消息：客服/销售工作台首页加载时拉取当前登录用户的提醒消息，返回提醒类型(color)与提醒文案(msg)，前端据 color 值以橙色警告条或绿色奖杯成功条的样式渲染到页面顶部 #getRemindMsg 区域，展示 5 秒后自动上滑隐藏。

## 用法

```bash
mbs pms erp-order-get-remind-msg
```

## API

- Service: `erpOrder`
- Method: `GET`
- Path: `/dev/erpOrder/erpOrder/saleVistingCard/getRemindMsg`
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
| `code` | number | 响应状态码(标准包裹字段，前端本接口未直接引用) (待人工确认) | - |
| `desc` | string | 响应提示信息(标准包裹字段，前端本接口未直接引用) (待人工确认) | - |
| `obj` | object | 提醒消息业务对象；res.obj 存在则渲染提醒条，为 null 则不展示并转显示上次登录信息 | - |
| `obj.color` | number | 提醒消息样式类型枚举。1=警告提醒(橙色 background-warning 警示条);2=成功/喜报提醒(绿色 background-success，含奖杯图标)。前端据此选择模板分支 | - |
| `obj.msg` | string | 提醒消息文案内容，直接渲染到提醒条 <div>{{obj.msg}}</div> / <span>{{obj.msg}}</span> | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
