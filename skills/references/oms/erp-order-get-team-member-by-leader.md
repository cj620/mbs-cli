<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-team-member-by-leader

根据大酋长获取组员列表：平台流量看板/商品流量看板页面，选择大酋长(销售主管)下拉后联动调用，根据所选大酋长ID集合查询其名下组员(员工)列表，用于填充组员多选下拉框。请求体为大酋长ID的JSON数组(非对象)，响应obj为组员数组，前端仅取employee_name作为下拉项的value与文本。

## 用法

```bash
mbs oms erp-order-get-team-member-by-leader --root <array<string>>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleReport/getTeamMemberByLeader`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `root` | (root) | body | array<string> | 是 | - | 请求体根：大酋长(销售主管)ID数组，来源#shopManager/#shopManager2多选下拉选中值(.val())。未选中时为空数组 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(统一包裹字段，前端未直接读取，待人工确认枚举) | - |
| `desc` | string | 响应提示信息(统一包裹字段，前端未直接读取) | - |
| `obj[]` | array | 组员(员工)列表；前端if(data.obj)后遍历 | - |
| `obj[]` | string | 组员姓名(员工名称)；前端作为option的value与显示文本，并缓存至sessionStorage(employeName/SHOPID) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
