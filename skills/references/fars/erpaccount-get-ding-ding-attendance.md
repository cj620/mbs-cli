# mbs fars erpaccount-get-ding-ding-attendance

钉钉考勤(奋斗榜)查询：获取钉钉考勤奋斗榜数据，返回员工加班时长排行列表(含头像、姓名、部门、加班小时数)及考勤统计时间，用于 struggleLlist 看板页面渲染。

## 用法

```bash
mbs fars erpaccount-get-ding-ding-attendance
```

## API

- Service: `erpaccount`
- Method: `GET`
- Path: `/erpaccount/erpaccount/account/getDingDingAttendance`
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
| `code` | number | 响应状态码，200=成功(前端据此判断成功/失败) | - |
| `desc` | string | 响应提示信息(失败时 alert 弹出) | - |
| `obj[]` | array | 业务数据——员工奋斗榜(加班时长排行)列表 | - |
| `obj[][0]` | string | 员工姓名(为空时展示 --) | - |
| `obj[][1]` | string | 员工头像URL(加载失败回退默认头像 header.png) | - |
| `obj[][2]` | string | 部门名称 | - |
| `obj[][3]` | number | 加班时长(单位:小时，前端 toFixed(1) 保留1位展示) | - |
| `obj[][4]` | string | 考勤统计时间(前端取列表首条 obj[0].workTime 显示于看板) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
