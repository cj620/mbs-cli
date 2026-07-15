# mbs prm erpsoldout-get-examine-team-authority

获取审核小组权限：抛重检测页面 packageInfo.vue 在 onMounted 时调用 getPerson()，向后端查询当前登录用户是否具备审核权限及所属部门，用于控制页面审核相关按钮的显示。请求无任何业务参数(POST 空 body)，返回审核标识 isExamine 与部门名称 depart。

## 用法

```bash
mbs prm erpsoldout-get-examine-team-authority
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/getExamineTeamAuthority`
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
| `code` | number | 响应状态码,200=成功(项目 ApiBase 标准字段) | - |
| `desc` | string | 响应提示信息(项目 ApiBase 标准字段) | - |
| `content` | string | 附加内容/分页总数等(项目 ApiBase 标准字段,本接口未使用,(待人工确认)) | - |
| `success` | boolean | 是否成功标识(项目 ApiBase 标准字段) | - |
| `obj` | object | 业务数据对象,含审核权限与部门信息 | - |
| `obj.isExamine` | number | 是否具备审核权限。1=有审核权限(前端置 isaudit=true),其它值=无;前端用 == 1 判断 | - |
| `obj.depart` | string | 当前用户所属部门名称。前端用 == '产品部' 判断是否产品部(置 isProduct=true) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
