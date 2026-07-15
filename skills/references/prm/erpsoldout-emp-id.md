# mbs prm erpsoldout-emp-id

获取当前登录员工ID(empID)：财务工作台仪表盘加载完成后调用，获取当前登录用户对应的 yy 员工ID(yyemployeeId)，前端将其写入名为 employeeId 的 Cookie(有效期365天)，供后续接口(如 positionName 取岗位、侵权/下架数量跳转链接)使用。

## 用法

```bash
mbs prm erpsoldout-emp-id
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/empID`
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
| `code` | number | 响应状态码,200=成功(统一响应包字段，本接口回调未显式读取，(待人工确认)) | - |
| `desc` | string | 响应提示信息(统一响应包字段，本接口回调未显式读取，(待人工确认)) | - |
| `obj` | object | 业务数据对象 | - |
| `obj.yyemployeeId` | string | 当前登录用户的 yy 员工ID，前端写入 Cookie employeeId(有效期365天) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
