<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs fars yyfms-fms-position-name

查询当前用户岗位名称：根据员工ID查询其在财务结算体系中的岗位名称，前端据返回值是否等于"财务组员"来控制仪表盘上提现登记/账户流水登记两组区块的显隐。JSONP 跨域调用。

## 用法

```bash
mbs fars yyfms-fms-position-name --userId <string>
```

## API

- Service: `yyfms(fms)`
- Method: `GET`
- Path: `/yyfms/fms/shopSettlementNew/positionName`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `userId` | userId | body | string | 是 | - | 员工ID，取自 Cookie employeeId（getCookie('employeeId')），用于定位当前用户岗位 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功（标准包装字段，前端未直接使用，(待人工确认)是否返回） | - |
| `desc` | string | 响应提示信息（标准包装字段，前端未直接使用） | - |
| `obj` | string | 当前用户岗位名称。枚举：财务组员=显示提现登记/已请提现登记任务并隐藏账户流水登记/已请账户流水登记；其它值=反向显隐 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
