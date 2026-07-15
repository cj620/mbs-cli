<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erp-publish-find-shopee-autopublish-spu

Shopee自动刊登SPU列表查询：Shopee 自动刊登管理页右侧 SPU 列表分页查询：按目标店铺、刊登状态、SPU关键词、产品状态、销量级别、站点等条件筛选，返回待刊登/刊登中/已刊登的 SPU 列表（含每个 SPU 下的 SKU 明细、价格、库存、刊登状态等），并返回总数与总页数用于分页。

## 用法

```bash
mbs prm erp-publish-find-shopee-autopublish-spu --currentPage <number> --pageSize <number> [--targetShop <string>] [--publishResult <string>] [--topShopname <string>] [--publishStatus <string>] [--spu <string>] [--spuProductStatus <string>] [--spuSalesLevel <string>] [--site <string>]
```

## API

- Service: `erpPublish`
- Method: `POST`
- Path: `/erpPublish/erpPublish/shopeeProductController/findShopeeAutopublishSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码（num=1 取 baseData.currentPage，num=2 取 baseData.leftcurrentPage，分页回调更新，默认1） |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数（前端固定传 50） |
| `targetShop` | targetShop | body | string | 否 | - | 目标店铺（来自侧边店铺点击 searchStatus 设置的 baseData.targetShop；num=1 时清空） |
| `publishResult` | publishResult | body | string | 否 | - | 刊登状态结果（来自侧边状态点击 baseData.onlineResult，枚举：等待刊登/刊登成功/刊登失败/放弃刊登；num=1 时清空） |
| `topShopname` | topShopname | body | string | 否 | - | 顶部店铺名筛选（来源控件 #shopName 下拉，select2） |
| `publishStatus` | publishStatus | body | string | 否 | - | 刊登状态筛选（来源控件 #onlineStatus 下拉） |
| `spu` | spu | body | string | 否 | - | SPU 编码关键词（来源控件 #keyword 输入框） |
| `spuProductStatus` | spuProductStatus | body | string | 否 | - | 产品状态筛选（来源控件 #status 下拉） |
| `spuSalesLevel` | spuSalesLevel | body | string | 否 | - | 销量级别筛选（来源控件 #salesStatus 下拉，枚举：超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品） |
| `site` | site | body | string | 否 | - | 站点筛选（来源控件 #site 下拉，如 TH/VN/MX/PH/SG/MY/ID/BR 等） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（删除/刊登回调据此判断） | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象（无数据时 #total 置0） | - |
| `obj.total` | number | 满足条件的 SPU 总数（渲染到 #total） | - |
| `obj.totalPages` | number | 总页数（传入 findTaskReport 初始化分页 pageCount） | - |
| `obj.rows[]` | array | SPU 列表（作为 list 传入 contentTemplate） | - |
| `obj.rows[][0]` | number | 刊登状态枚举。0=等待刊登;1=刊登中;2=刊登成功;3=刊登失败;4=放弃刊登 | - |
| `obj.rows[][1]` | string | 批次ID（checkbox value，立刻刊登时作 batchId 提交） | - |
| `obj.rows[][2]` | string | SPU 唯一ID（删除/刊登/改标题入参） | - |
| `obj.rows[][3]` | string | 目标店铺名 | - |
| `obj.rows[][4]` | string | 目标店铺ID | - |
| `obj.rows[][5]` | string | SPU 主图URL | - |
| `obj.rows[][6]` | string | 商品 SPU 编号（链接 SPUdetails.html） | - |
| `obj.rows[][7]` | string | SPU 销量级别（超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品） | - |
| `obj.rows[][8]` | string | SPU 记录ID（标题编辑 DOM id） | - |
| `obj.rows[][9]` | string | 商品标题（可编辑，限100字符） | - |
| `obj.rows[][10]` | number | 属性类型。1=单属性;2=多属性 | - |
| `obj.rows[][11]` | number | 销量 | - |
| `obj.rows[][12]` | string | 站点 | - |
| `obj.rows[][13]` | string | 原价格区间 | - |
| `obj.rows[][14]` | number | 是否差价大。1=差价大(标红提示) | - |
| `obj.rows[][15]` | string | 侵权词（有值则标红展示） | - |
| `obj.rows[][16]` | string | 物流方式名称 | - |
| `obj.rows[][17]` | number | 刊登数量 | - |
| `obj.rows[][18]` | string | 新价格区间 | - |
| `obj.rows[][19]` | number | 毛利率（原值小数，前端×100保留2位展示%） | - |
| `obj.rows[][20]` | number | 折扣率OFF（原值小数，前端×100保留2位展示%，有值才显示） | - |
| `obj.rows[][21]` | string | 刊登操作人 | - |
| `obj.rows[][22]` | string | 刊登成功后的 listing 链接（publishStatus=2 时可点击） | - |
| `obj.rows[][23]` | string | 刊登响应信息（publishStatus=2/3 时悬浮展示） | - |
| `obj.rows[][24]` | string | 创建时间 | - |
| `obj.rows[][25]` | string | 刊登时间 | - |
| `obj.rows[][26]` | string | 开发人 | - |
| `obj.rows[][27]` | string | 开发时间 | - |
| `obj.rows[][28][]` | array | SPU 下的 SKU 明细列表（其 length 作角标显示 SKU 数） | - |
| `obj.rows[][28][][0]` | string | SKU 主图URL | - |
| `obj.rows[][28][][1]` | string | SKU 编号（链接 SKUdetails.html） | - |
| `obj.rows[][28][][2]` | number | 是否捆绑。1=捆绑(展示“（捆绑）”) | - |
| `obj.rows[][28][][3]` | string | 产品状态 | - |
| `obj.rows[][28][][4]` | number | 是否侵权。1=侵权(展示侵权标签) | - |
| `obj.rows[][28][][5]` | string | SKU 销量级别（超级爆款/爆A/爆B/旺A/旺B/平A/平B/滞A/滞B/无销新品） | - |
| `obj.rows[][28][][6]` | string | 禁售平台 | - |
| `obj.rows[][28][][7]` | number | 在线库存 | - |
| `obj.rows[][28][][8]` | number | 当前ERP库存 | - |
| `obj.rows[][28][][9]` | string | 原价格 | - |
| `obj.rows[][28][][10]` | string | 新价格 | - |
| `obj.rows[][28][][11]` | string | 币种 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
