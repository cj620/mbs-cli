<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-leader-drop-down

总监下拉列表查询：依据人员类别+公司+所属平台查询团队总监(leader)下拉列表，用于自定义客单价报表页『所有总监』多选下拉的数据源，返回总监 id/name 列表。

## 用法

```bash
mbs oms erp-order-leader-drop-down [--employeeType <string>] [--companyIds <string>] [--platformIds <array>]
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/teamDropDown/leaderDropDown`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `employeeType` | employeeType | body | string | 否 | - | 人员类别/员工类型(取自页面 #orderStaus 控件)(枚举待人工确认) |
| `companyIds` | companyIds | body | string | 否 | - | 公司ID(列表)(取自页面 #componey 控件)(类型/枚举待人工确认) |
| `platformIds` | platformIds | body | array | 否 | - | 所属平台ID集合;#reserve11 为空串时传[],否则传选中平台ID(选项 value=PLATFORMID) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 总监下拉数据列表(赋值给 leaderslist) | - |
| `obj[][0]` | string | 总监ID(el-option 的 value/key;选中写入 leaders 联动下游下拉) | - |
| `obj[][1]` | string | 总监姓名(el-option 的 label 展示文案) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
