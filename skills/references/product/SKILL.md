# product - 线商品监控

通过 `mbs product` 命令查询线商品监控数据。

## 数据来源

- Service: `-`

## 适用场景

商品

## 意图匹配

关键词：在线listing / 商品 / product

## 命令一览

| 意图 | 命令 | 必填参数 |
|---|---|---|
| 在线商品列表展示：按平台/店铺/组织/销量/状态等条件分页查询在线商品(热销Listing)列表。数据源为ES商品SPU索引，查询后回填删除/编辑/改价/复制/同步等任务状态、白名单标记、店铺状态、TikTok差评率、SMT实时调控等。ES scroll分页。 | `mbs product erp-monitor-hot-product-all-listing` | `orderFiled` |
| 商品(SPU)列表查询：商品中心SPU列表多维度分页查询：支持类目、11种关键词类型、销量/售卖/产品状态、开发员、时间区间、店铺、属性、抽检/轻小件/采样等数十项筛选，返回SPU列表及销量/毛利/平台等汇总字段。 | `mbs product erp-product-product` | `pageSize`, `page` |

## 命令详情

- [erp-monitor-hot-product-all-listing.md](erp-monitor-hot-product-all-listing.md)
- [erp-product-product.md](erp-product-product.md)

## 参数规则

- 执行前必须确认必填参数。
- 不要猜测 ID、状态、日期范围或其他筛选条件。
- 未覆盖的临时接口探索使用 `mbs raw GET/POST <endpoint>`。
