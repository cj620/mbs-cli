<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-find-other-infringement

查询其他侵权listing信息：根据侵权 SKU 列表查询其它平台上的侵权 listing 信息，返回侵权商品的图片、标题、店铺、商品ID、SKU、售价、30天销量、浏览量、收藏量等，用于「侵权listing信息」页面表格展示。

## 用法

```bash
mbs oms erp-order-find-other-infringement --infrigingSkus <string>
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/saleFussionOrder/findOtherInfringement`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `infrigingSkus` | infrigingSkus | query | string | 是 | - | 侵权SKU（标识；从当前页面地址栏 ?infrigingSkus= 取得后原样拼接到接口URL，无单位、无固定枚举） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj[]` | array | 侵权 listing 列表（业务数据数组） | - |
| `obj[][0]` | string | SKU 商品图片URL（图片加载失败时回退默认图 timg.jpg） | - |
| `obj[][1]` | string | SPU 商品查看链接（点击标题/商品ID跳转平台商品页，新窗口打开） | - |
| `obj[][2]` | string | SPU 商品标题（商品信息列展示文本） | - |
| `obj[][3]` | string | 发布时间（商品上架/发布时间） | - |
| `obj[][4]` | string | 店铺名称 | - |
| `obj[][5]` | string | 父级SPU商品ID（平台商品ID，商品ID列展示） | - |
| `obj[][6]` | string | 平台SKU | - |
| `obj[][7]` | number | 售价（与 spuCurrency 拼接展示，如 9.99USD） | - |
| `obj[][8]` | string | 货币/币种（紧跟售价展示的币种标识） | - |
| `obj[][9]` | number | 近30天销售数量（无值时前端展示 0） | - |
| `obj[][10]` | number | 浏览量 | - |
| `obj[][11]` | number | 收藏量 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
