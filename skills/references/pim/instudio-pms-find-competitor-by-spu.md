# mbs pim instudio-pms-find-competitor-by-spu

通过spu获取竞品信息：通过spu获取竞品信息

## 用法

```bash
mbs pim instudio-pms-find-competitor-by-spu --spu <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/CompetitorController/findCompetitorBySpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | SPU（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：是（取值，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |
| `obj[].obj.fengniaoStatus` | string | Fengniao状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.selectType` | string | 查询类型（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.pmsPictureVoList` | string | 刊登系统图片VO列表（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.dataset` | string | Dataset（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.id` | string | ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.imgUrl` | string | 图片URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.sku` | string | SKU（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.publishColor` | string | 刊登颜色（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.publishSize` | string | 刊登大小（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.replace` | string | Replace（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.url` | string | URL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.detectionStatus` | string | Detection状态（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.tort` | string | 侵权（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.supplyImg` | string | 供应图片（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.platform_id` | string | 平台ID（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.platform` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj[].obj.competing_url` | string | CompetingURL（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
