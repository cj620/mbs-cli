# mbs pms erp-log-find-log-exception-information

IP异常登录报表查询：按时间区间分页查询员工登录 IP 异常信息，返回按员工聚合的异常记录（员工、登录IP、异常IP、异常登录详情列表、创建时间、备注）及分页汇总（总条数/总页数）。前端「IP异常报表」页面据此渲染，每页固定20条。

## 用法

```bash
mbs pms erp-log-find-log-exception-information [--starttime2 <string>] [--endtime2 <string>] --currentPage <number>
```

## API

- Service: `erpLog`
- Method: `POST`
- Path: `/erpLog/erpLog/loginLogController/findLogExceptionInformation`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `starttime2` | starttime2 | body | string | 否 | - | 开始时间。来源日期控件 #starttime2(input type=date),格式 yyyy-MM-dd;前端校验开始时间不得大于结束时间 |
| `endtime2` | endtime2 | body | string | 否 | - | 结束时间。来源日期控件 #endtime2(input type=date),格式 yyyy-MM-dd |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。首次搜索固定为1;分页回调取分页组件 api.getCurrent();每页固定20条 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `total` | number | 满足条件的异常记录总条数(写入页面 #total,展示 共N条) | - |
| `totalPages` | number | 总页数(传入分页组件 findStatistics(data.obj.totalPages)) | - |
| `rows[]` | array | 异常记录列表(按员工聚合,{{each obj.rows}} 渲染) | - |
| `rows[][0]` | string | 员工名字(表格 员工名字 列) | - |
| `rows[][1]` | string | 登录IP(表格 IP 列) | - |
| `rows[][2]` | string | 异常IP(触发异常的IP,表格 异常IP 列) | - |
| `rows[][3][]` | array | 异常登录详情列表({{each value.descrlist}} 渲染的明细子表) | - |
| `rows[][3][][0]` | string | 员工名字(明细行) | - |
| `rows[][3][][1]` | string | 登录IP(明细行) | - |
| `rows[][3][][2]` | string | 异常登录详情信息 | - |
| `rows[][3][][3]` | string | 会话ID(sessionid) | - |
| `rows[][3][][4]` | string | 登录内容 | - |
| `rows[][3][][5]` | string | 明细创建时间 | - |
| `rows[][4]` | string | 该记录创建时间(表格 创建时间 列) | - |
| `rows[][5]` | string | 记录ID(用于备注编辑 addopinion(id)/updateLogException(id)) | - |
| `rows[][6]` | string | 备注(表格 备注 列,可编辑) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
