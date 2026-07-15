<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-mobile-findbigchief-by-login

按平台查询大酋长(负责人)列表：销售趋势图搜索页(移动端)：选择平台后，按平台ID查询该平台对应的「大酋长」负责人列表，渲染为可多选的复选框供筛选。页面初始化时以空 platformId 调用一次拉取默认列表。

## 用法

```bash
mbs oms erp-mobile-findbigchief-by-login [--platformId <string>]
```

## API

- Service: `erpMobile`
- Method: `GET`
- Path: `/erpMobile/erpMobile/saleTrendChart/findbigchiefByLogin`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `platformId` | platformId | query | string | 否 | - | 平台ID。来源于「平台」复选框 .Platform 选中项的 value(即响应 PLATFORMID)；页面初始化时传空字符串拉取默认列表。URL 查询参数拼接传递 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 大酋长(负责人)列表。成功回调 if(data.obj) 校验后传入模板渲染 | - |
| `obj[]` | string | 大酋长(负责人)名称/登录名。模板中作为复选框 label 文本及 checkbox 的 value(value="{{v.name}}")，确认时存入 sessionStorage('name') | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
