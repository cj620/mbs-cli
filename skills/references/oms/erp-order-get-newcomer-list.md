# mbs oms erp-order-get-newcomer-list

新人成绩单-新人列表查询：新人成绩单审核页面的新人列表分页查询：按审核人员类型(待审核/历史审核)、人员类型(销售/开发)、HRBP、审核状态、组员(员工姓名)等条件分页查询新人列表，返回新人头像、姓名、入职时间、指导人、HRBP、成绩单描述、部门、审核状态等字段，并附带分页汇总信息。

## 用法

```bash
mbs oms erp-order-get-newcomer-list --currentPage <number> [--isReviewed <string>] [--type <string>] [--hrbp <string>] [--reviewStatus <string>] [--employeeName <string>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getNewcomerList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码（search 首次固定为 1；分页回调取 api.getCurrent()） |
| `isReviewed` | isReviewed | body | string | 否 | - | 审核人员范围。0=待审核人员;1=历史审核人员(来源 #isReviewed) |
| `type` | type | body | string | 否 | - | 人员类型。1=销售;2=开发;空=全部(来源 #peopleType) |
| `hrbp` | hrbp | body | string | 否 | - | HRBP(取值来自 getHr 接口动态选项,来源 #hrbp) |
| `reviewStatus` | reviewStatus | body | string | 否 | - | 审核状态。1=通过;2=不通过;3=转发领导审核;5=我需要审核;空=全部(来源 #reviewStatus) |
| `employeeName` | employeeName | body | string | 否 | - | 员工姓名(组员)。优先取 #groups 值;否则取已勾选大酋长带出的组员数组逗号拼接;均无则为 null |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(待人工确认,前端未直接读取) | - |
| `desc` | string | 响应提示信息(审核类接口成功回调中读取 data.desc) | - |
| `obj` | object | 业务数据对象(为空时前端置总数为 0) | - |
| `obj.total` | number | 满足条件的新人总条数(填入 #total 展示) | - |
| `obj.totalPages` | number | 总页数(传入分页控件 pageCount) | - |
| `obj.rows[]` | array | 新人列表 | - |
| `obj.rows[][0]` | string | 员工头像URL(加载失败回退默认头像) | - |
| `obj.rows[][1]` | string | 员工姓名(展示并作为审核/转发操作的标识) | - |
| `obj.rows[][2]` | string | 入职时间/在职月份(“入职：”展示) | - |
| `obj.rows[][3]` | string | 指导人(为空展示“暂无”) | - |
| `obj.rows[][4]` | string | HRBP(为空展示“暂无”) | - |
| `obj.rows[][5]` | string | 成员/成绩单描述文案 | - |
| `obj.rows[][6]` | number | 部门ID。54=销售(跳转销售成绩单详情);62=产品/开发(跳转产品成绩单详情) | - |
| `obj.rows[][7]` | number | 是否已审核。0=未审核(展示“通过”按钮);1=已审核(隐藏操作按钮) | - |
| `obj.rows[][8]` | number | 审核状态。2=不通过(则隐藏“不通过”按钮);其余值展示按钮 | - |
| `obj.rows[][9]` | string | 审核结果描述(右侧展示) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
