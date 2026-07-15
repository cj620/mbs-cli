<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm product-auto-listing-service-get-listing-template-page

刊登模板分页查询：根据 ERP SPU 与平台类型(platformType)分页查询该商品在指定平台下已存在的刊登模板列表；前端取返回列表首条记录的 id，用于刊登模板下拉跳转到对应平台的编辑页(回填模板id)。

## 用法

```bash
mbs prm product-auto-listing-service-get-listing-template-page --erpSpu <string> --platformType <string>
```

## API

- Service: `product-auto-listing-service`
- Method: `POST`
- Path: `/gateway/product-auto-listing-service/listing/listingTemplate/getListingTemplatePage`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `erpSpu` | erpSpu | body | string | 是 | - | ERP 商品 SPU 编号。来源：getCurrentSpu()=this.$route.query.spu 或父组件传入的 spu prop；为空时不发起请求 |
| `platformType` | platformType | body | string | 是 | - | 平台类型编码。来源：platformTypeEnum 枚举接口返回项的 code（遍历 platformList 逐平台传入，如 TIKTOK/OZON 等平台对应的 code） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `page` | object | 分页对象（主访问路径 data.page） | - |
| `page.items[]` | array | 刊登模板列表 | - |
| `page.items[]` | string | 刊登模板ID（前端取列表首条 id，用于跳转编辑页 &id= 回填）；类型可能为 number (待人工确认) | - |
| `data` | object | 二级数据包裹（兼容访问路径 data.data）(待人工确认) | - |
| `data.page` | object | 分页对象（兼容路径 data.data.page） | - |
| `data.page.items[]` | array | 刊登模板列表 | - |
| `data.page.items[]` | string | 刊登模板ID（同 r3，兼容路径取值） | - |
| `data.items[]` | array | 刊登模板列表（无 page 包裹时的兼容路径 data.data.items） | - |
| `data.items[]` | string | 刊登模板ID（同 r3，兼容路径取值） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
