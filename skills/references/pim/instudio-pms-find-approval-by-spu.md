<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim instudio-pms-find-approval-by-spu

根据项目id查询spu：根据项目id查询spu

## 用法

```bash
mbs pim instudio-pms-find-approval-by-spu --spu <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/findApprovalBySpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | SPU（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj.findTagBySpu` | string | 查询标签人SPU。前端使用：待核实 | - |
| `obj.obj.findApprovalBySpu` | object | 查询审批人SPU。前端使用：待核实 | - |
| `obj.obj.findNoPlatformBySpu` | string | 查询编号平台人SPU。前端使用：待核实 | - |
| `obj.obj.pictureUrlBySpu` | object | 图片URL人SPU。前端使用：待核实 | - |
| `obj.obj.findCompetitorBySpu[]` | array | 查询Competitor人SPU。前端使用：待核实 | - |
| `obj.obj.findAllPage` | object | 查询全部页码。前端使用：待核实 | - |
| `obj.obj.findSpuInfo[]` | array | 查询SPU信息。前端使用：待核实 | - |
| `obj.obj.purchaseNote` | string | 采购备注。前端使用：待核实 | - |
| `obj.obj.spuRecheck` | string | SPURecheck。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
