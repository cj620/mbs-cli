<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-develop-pk-match

开发员PK榜单查询：开发员PK大屏数据查询：按指定日期与平台，返回各开发员的爆款SKU数量、百元动销率、新品销售额及对应排名，用于 developer.html 全屏轮播榜单展示。

## 用法

```bash
mbs oms erp-order-get-develop-pk-match --time <string> --platform <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/pKmatchController/getDevelopPkMatch`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `time` | time | query | string | 是 | - | 数据日期，格式 YYYYMMDD。前端取昨天日期作为 yesterday 传入 |
| `platform` | platform | query | string | 是 | - | 平台标识。页面固定传 aliexpress(速卖通) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(统一包裹字段，待人工确认具体码值) | - |
| `desc` | string | 响应提示信息(统一包裹字段) | - |
| `obj` | object | 业务数据对象(前端解构使用) | - |
| `obj.result[]` | array | 开发员PK榜单数据列表(绑定 tabledata) | - |
| `obj.result[][0]` | string | 二级部门 | - |
| `obj.result[][1]` | string | 二级部门负责人 | - |
| `obj.result[][2]` | string | 三级部门 | - |
| `obj.result[][3]` | string | 三级部门负责人 | - |
| `obj.result[][4]` | string | 姓名(开发员) | - |
| `obj.result[][5]` | number | 爆款SKU数量 | - |
| `obj.result[][6]` | number | 爆款SKU数量排名(=1 时榜单显示金色奖杯图标) | - |
| `obj.result[][7]` | number | 百元动销率(%)。前端展示：值为 0 显示 0，否则拼接 % | - |
| `obj.result[][8]` | number | 百元动销率排名(=1 时榜单显示金色奖杯图标) | - |
| `obj.result[][9]` | number | 新品销售额 | - |
| `obj.result[][10]` | number | 新品销售额排名(=1 时榜单显示金色奖杯图标) | - |
| `obj.result[][11]` | string | 数据更新时间。页面取 result[0].times 显示“本次播报数据更新至” | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
