<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pms app-apihost-query-all

会员码列表查询：查询当前登录用户已绑定/生效的 VIP 会员码列表，用于个人中心页展示 VIP 会员信息（会员类型、生效起止时间）。无请求参数，依赖请求头 Authorization: Bearer <token> 标识用户身份；返回结果落到页面 vipList 并渲染为会员信息描述列表。

## 用法

```bash
mbs pms app-apihost-query-all
```

## API

- Service: `APP_APIHOST`
- Method: `GET`
- Path: `/api/vipcode/queryAll`
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
| `data[]` | array | 会员码列表（业务数据数组）；前端赋值 vipList.value = res?.data?.data || [] | - |
| `data[][0]` | string | 会员码记录ID（前端用作 v-for 的 :key） | - |
| `data[][1]` | string | 会员(功能)类型枚举。batchimg=批量图片生成；removebg=批量抠图（前端经 codeType[item.type] 映射为中文标题展示） | - |
| `data[][2]` | string | 会员生效开始时间（前端展示为开始时间） | - |
| `data[][3]` | string | 会员生效结束时间（前端展示为结束时间） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
