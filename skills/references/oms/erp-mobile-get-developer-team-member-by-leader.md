# mbs oms erp-mobile-get-developer-team-member-by-leader

获取组长下属开发组员列表：移动端马帮ERP「开发搜索」页面加载时调用，返回当前登录组长名下的开发组员(姓名)列表，用于"组员"筛选区渲染可勾选的复选框。GET 请求，无业务请求参数(身份由会话/Cookie 识别)。

## 用法

```bash
mbs oms erp-mobile-get-developer-team-member-by-leader
```

## API

- Service: `erpMobile`
- Method: `GET`
- Path: `/erpMobile/erpMobile/saleTrendChart/getDeveloperTeamMemberByLeader`
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
| `code` | number | 响应状态码,200=成功(标准响应壳,前端未直接读取) (待人工确认) | - |
| `desc` | string | 响应提示信息(标准响应壳,前端未直接读取) (待人工确认) | - |
| `obj[]` | array | 组员(开发组员)姓名列表；前端 if(data.obj) 后用 memberLeaderTemplate 遍历渲染为复选框 | - |
| `obj[]` | string | 数组元素：单个组员姓名/开发员名称(同时作为复选框 label 文本与 value 选中值) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
