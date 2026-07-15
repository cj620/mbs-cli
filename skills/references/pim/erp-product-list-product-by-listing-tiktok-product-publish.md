<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-list-product-by-listing-tiktok-product-publish

TikTok刊登-按Listing查询商品列表：TikTok批量刊登页的商品(SPU)列表分页查询：按刊登状态、属性类型、店铺、刊登人、站点、SPU、批量备注、刊登时间区间、是否含风险预警等条件分页，返回SPU行(含子SKU列表 ebayPublishSkuVo)及刊登状态/毛利/店铺等字段。

## 用法

```bash
mbs pim erp-product-list-product-by-listing-tiktok-product-publish [--status <string>] --currentPage <number> [--vtype <string>] [--shopName <string>] [--shopId <string>] [--employeeId <string>] [--site <string>] [--spu <string>] [--submitContent <string>] [--includeRiskwarning <string>] [--publishTimeStart <string>] [--publishTimeEnd <string>] [--targetShops <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/tiktokProductPublish/listProductByListing`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `status` | status | body | string | 否 | - | 刊登状态。等待刊登Tab取 #realStatus 值，空时默认"等待刊登"；刊登完毕Tab取 #status 值 |
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。首查固定为1，翻页取分页控件 api.getCurrent() |
| `vtype` | vtype | body | string | 否 | - | 属性类型(单/多属性筛选)。来源 #property 下拉框(1=单属性，其余=多属性) |
| `shopName` | shopName | body | string | 否 | - | 店铺名称。来源 #shopName 选中值逗号拆分第2段，无则空串 |
| `shopId` | shopId | body | string | 否 | - | 店铺ID。来源 #shopName 选中值逗号拆分第1段，无则空串 |
| `employeeId` | employeeId | body | string | 否 | - | 刊登人(员工ID)。来源 #employeeList 下拉框 |
| `site` | site | body | string | 否 | - | 站点。来源 #station 下拉框 |
| `spu` | spu | body | string | 否 | - | SPU编号(按SPU筛选)。来源 #spuName 输入框(findTaskReport翻页不带) |
| `submitContent` | submitContent | body | string | 否 | - | 批量备注(按备注筛选)。来源 #batchNote 输入框(findTaskReport翻页不带) |
| `includeRiskwarning` | includeRiskwarning | body | string | 否 | - | 是否包含风险预警。来源 #riskwarning 下拉框(仅首查发送) |
| `publishTimeStart` | publishTimeStart | body | string | 否 | - | 刊登时间-起始。来源 #time1(仅刊登完毕发送) |
| `publishTimeEnd` | publishTimeEnd | body | string | 否 | - | 刊登时间-结束。来源 #time2(仅刊登完毕发送) |
| `targetShops` | targetShops | body | string | 否 | - | 目标店铺(刊登过的店铺)。来源 #PublishedShop(仅刊登完毕发送) |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功 | - |
| `desc` | string | 响应提示信息(失败时弹窗展示) | - |
| `obj` | object | 业务数据对象(为空则总数显示0) | - |
| `obj.total` | number | 满足条件的商品总条数 | - |
| `obj.pages` | number | 总页数(传入分页控件 pageCount) | - |
| `obj.list[]` | array | 商品(SPU)行列表 | - |
| `obj.list[][0]` | string | 商品SPU编号 | - |
| `obj.list[][1]` | string | 商品记录ID | - |
| `obj.list[][2]` | string | 商品标题(可编辑，限255字) | - |
| `obj.list[][3]` | string | 唯一ID(修改标题/限字事件传参) | - |
| `obj.list[][4]` | string | 商品主图URL | - |
| `obj.list[][5]` | number | 属性类型枚举。1=单属性；其余=多属性 | - |
| `obj.list[][6]` | string | 站点 | - |
| `obj.list[][7]` | number | 销量 | - |
| `obj.list[][8]` | string | 价格区间 | - |
| `obj.list[][9]` | number | 来源平台枚举。1=ebay源；10=smt源 | - |
| `obj.list[][10]` | number | 刊登状态枚举。10=等待刊登；11/12/13=刊登中；21/22=刊登成功；23=刊登失败 | - |
| `obj.list[][11]` | string | 禁售关键词(有值显示禁售标签) | - |
| `obj.list[][12]` | string | 商品风险关键词(红字展示) | - |
| `obj.list[][13]` | string | 风险词(有值给标题加红框) | - |
| `obj.list[][14]` | string | 风险预警提示(红字展示) | - |
| `obj.list[][15]` | string | 新SKU价格(SPU行展示) | - |
| `obj.list[][16]` | number | 毛利率(小数，前端×100保留2位展示%) | - |
| `obj.list[][17]` | string | 已刊登店铺(逗号分隔) | - |
| `obj.list[][18]` | string | 新刊登(目标)店铺 | - |
| `obj.list[][19]` | string | 刊登人 | - |
| `obj.list[][20]` | string | 批量备注(无值显示'---') | - |
| `obj.list[][21]` | string | 刊登成功链接URL | - |
| `obj.list[][22]` | string | 平台商品(listing)ID(刊登完毕Tab) | - |
| `obj.list[][23]` | string | 刊登结果响应(刊登完毕Tab，悬浮展示) | - |
| `obj.list[][24]` | string | 生成时间 | - |
| `obj.list[][25]` | string | 刊登时间(无值显示—— ——) | - |
| `obj.list[][26]` | string | 预刊登时间(无值显示—— ——) | - |
| `obj.list[][27][]` | array | 子SKU列表(展开行渲染；徽标显示其length) | - |
| `obj.list[][27][][0]` | string | 子SKU图片URL | - |
| `obj.list[][27][][1]` | string | SKU编号 | - |
| `obj.list[][27][][2]` | string | 在线属性 | - |
| `obj.list[][27][][3]` | string | 在线库存 | - |
| `obj.list[][27][][4]` | string | 子SKU记录ID | - |
| `obj.list[][27][][5]` | string | 原价格 | - |
| `obj.list[][27][][6]` | string | 新价格 | - |
| `obj.list[][27][][7]` | string | 币种 | - |
| `obj.list[][27][][8]` | number | 毛利率(前端×100展示%) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
