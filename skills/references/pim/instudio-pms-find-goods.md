<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-goods

通过userid 获取总条数：通过userid 获取总条数

## 用法

```bash
mbs pim instudio-pms-find-goods --url <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/Competitor/findGoods`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `url` | url | query | string | 是 | - | URL（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `loginId` | string | 供应商登录 Id(旺旺)。前端使用：待核实 | - |
| `userId` | string | 供应商 Id。前端使用：待核实 | - |
| `memberId` | string | 会员接口 Id。前端使用：待核实 | - |
| `companyName` | string | 供应商公司名称。前端使用：待核实 | - |
| `obj.loginId` | string | 供应商登录 Id(旺旺)。前端使用：待核实 | - |
| `obj.userId` | string | 供应商 Id。前端使用：待核实 | - |
| `obj.memberId` | string | 会员接口 Id。前端使用：待核实 | - |
| `obj.companyName` | string | 供应商公司名称。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
