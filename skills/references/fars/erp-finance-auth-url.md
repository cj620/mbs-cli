# mbs fars erp-finance-auth-url

Payoneer 账号授权链接获取：根据 Payoneer 账号ID获取该账号的 OAuth 授权链接。前端点击「获取授权链接」按钮触发；返回链接非空时 window.open 打开授权，返回空字符串时提示「暂无授权链接」。

## 用法

```bash
mbs fars erp-finance-auth-url --accountId <string>
```

## API

- Service: `erpFinance`
- Method: `GET`
- Path: `/erpFinance/erpFinance/payoneer/account/100049360/auth-url`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `accountId` | accountId | query | string | 是 | - | Payoneer 账号ID，URL 路径参数；指定要获取授权链接的账号。本前端示例中硬编码为 100049360。 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(具体码值约定待人工确认) | - |
| `desc` | string | 响应提示信息 | - |
| `success` | boolean | 是否成功标识(包裹层标准字段,本页未直接使用,待人工确认) | - |
| `content` | string | 附加内容/消息(包裹层标准字段,本页未直接使用,待人工确认) | - |
| `obj` | string | 业务数据:Payoneer 账号授权链接URL。空字符串''表示暂无授权链接(前端弹出警告);非空则 window.open 跳转该链接。 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
