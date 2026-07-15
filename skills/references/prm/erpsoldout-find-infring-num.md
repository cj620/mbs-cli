<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-find-infring-num

侵权信息待审核数量查询：开发员工作台(Dashboard)首页加载及每5分钟定时刷新时调用，统计当前登录员工名下「侵权信息待审核」的商品数量，渲染到工作台 #findInfringNum 角标，并据返回的员工ID拼接跳转链接。无请求参数(后端依据登录态/会话识别员工)。

## 用法

```bash
mbs prm erpsoldout-find-infring-num
```

## API

- Service: `erpsoldout`
- Method: `POST`
- Path: `/erpsoldout/erpsoldout/infringing/findInfringNum`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj` | number | 侵权信息待审核数量。有值时渲染到 #findInfringNum，为空/0(falsy)时显示 '--' | - |
| `content` | string | 当前员工ID(employeeId)，用于拼接跳转链接 /soldout/CommodityInfringement.html?employeeId={content}&status=1 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
