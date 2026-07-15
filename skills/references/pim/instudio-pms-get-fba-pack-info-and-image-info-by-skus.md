# mbs pim instudio-pms-get-fba-pack-info-and-image-info-by-skus

按SKU列表查询FBA打包信息图片信息：按SKU列表查询FBA打包信息图片信息(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-get-fba-pack-info-and-image-info-by-skus --skus <string>
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/product/getFbaPackInfoAndImageInfoBySkus`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `skus` | skus | query | string | 是 | - | SKU列表（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：是（取值，行号待核实） | - |
| `obj` | object | 列表信息。前端使用：是（条件判断，行号待核实） | - |
| `obj.obj.indexOf` | string | 索引（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.success` | string | 成功（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.replace` | string | Replace（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.logisticsTrajectory` | string | 物流Trajectory（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.rstatus` | string | Rstatus（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.pdfurl` | string | Pdfurl（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：是（取值，行号待核实） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
