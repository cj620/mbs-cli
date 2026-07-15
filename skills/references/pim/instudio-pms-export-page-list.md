# mbs pim instudio-pms-export-page-list

导出爆款保护列表页面：导出爆款保护列表页面

## 用法

```bash
mbs pim instudio-pms-export-page-list [--pageSize <integer>] [--currentPage <integer>] [--auth <string>] [--dept <string>] [--operator <string>]
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/amazon/hotgoodsProtect/exportPageList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `pageSize` | pageSize | body | integer | 否 | - | 页码 |
| `currentPage` | currentPage | body | integer | 否 | - | 当前页 |
| `auth` | auth | body | string | 否 | - | 授权 |
| `dept` | dept | body | string | 否 | - | 部门 |
| `operator` | operator | body | string | 否 | - | 部门 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 编码。前端使用：待核实 | - |
| `message` | string | 消息。前端使用：待核实 | - |
| `page` | string | 页码。前端使用：待核实 | - |
| `total` | integer | 总数。前端使用：待核实 | - |
| `pageSize` | integer | 每页条数。前端使用：待核实 | - |
| `currentPage` | integer | 当前页码。前端使用：待核实 | - |
| `hasNext` | boolean | 是否有下一个。前端使用：待核实 | - |
| `nextCursor` | object | 下一个Cursor。前端使用：待核实 | - |
| `data[]` | array | 数据。前端使用：待核实 | - |
| `obj.id` | integer | ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.itemId` | string | 条目ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.spu` | string | SPU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.sku` | string | SKU（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.shippingService` | string | 运输服务（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.oneDaySales` | string | 单个天销售（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.currentPrice` | number | 当前价格（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.skuShippingPrice` | number | SKU运输价格（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.shopName` | string | 店铺名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.shopType` | string | 店铺类型（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.shopManager` | string | 店铺管理（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.bigChiefName` | string | BIG主管名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.site` | string | 站点（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.spuThirtyDaysSoldCount` | integer | SPU30天天数已售数量（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.startProtectTime` | string | 开始Protect时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.endProtectTime` | string | 结束Protect时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.createTime` | string | 创建时间（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.isMainSource` | integer | 是否主来源（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.isExcute` | integer | 是否Excute（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.spuCurrency` | string | SPU币种（字段名推断,语义待核实）。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
