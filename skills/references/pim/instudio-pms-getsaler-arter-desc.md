# mbs pim instudio-pms-getsaler-arter-desc

查询销售美工备注：查询销售美工备注

## 用法

```bash
mbs pim instudio-pms-getsaler-arter-desc --missionId <integer>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/developerMission/getsalerArterDesc`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `missionId` | missionId | query | integer | 是 | - | MissionID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].missionId` | integer | 任务id。前端使用：待核实 | - |
| `obj.obj[].arterDesc` | string | 备注。前端使用：待核实 | - |
| `obj.obj[].artPicture` | string | 图片链接。前端使用：待核实 | - |
| `obj.obj[].referenceLink` | string | 参考图片链接。前端使用：待核实 | - |
| `obj.obj[].createTime` | string | 创建时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].createBy` | string | 创建人（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].updateBy` | string | 更新人（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
