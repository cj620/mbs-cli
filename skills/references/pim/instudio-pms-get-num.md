# mbs pim instudio-pms-get-num

获取美客多站点在线量和额度：获取美客多站点在线量和额度

## 用法

```bash
mbs pim instudio-pms-get-num --shopName <string>
```

## API

- Service: `instudio-pms`
- Method: `GET`
- Path: `/yypms/pms/middlePanel/mercadolibre/site/listing/num/get`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `shopName` | shopName | query | string | 是 | - | 店铺名称（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：否 | - |
| `desc` | string | 错误类型。前端使用：否 | - |
| `obj` | object | 列表信息。前端使用：否 | - |
| `obj.obj.name` | string | 名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.marker` | string | Marker（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.seriesName` | string | Series名称（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.value` | string | 值（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.country` | string | 国家（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.totalListings` | string | 总数Listings（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.nowListings` | string | NOWListings（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.platform` | string | 平台（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.show` | string | 展示（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.title` | string | 标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.date` | string | 日期（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.subTitle` | string | 子标题（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.xAxis` | string | XAXIS（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.valueUnit` | string | 值单位（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `obj.obj.series` | string | Series（前端推断字段）。前端使用：是（前端推断，行号待核实） | - |
| `content` | string | 内容。前端使用：否 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
