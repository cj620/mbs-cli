<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-leave-message-spu

SPU留言查询：SPU详情页加载时查询该SPU下的全部留言（含子回复）列表，渲染到"SPU 留言"卡片。返回留言人、头像、留言内容、留言时间、留言目标(SKU/SPU)、留言类型及嵌套子留言。当前用户头像通过顶层 content 字段返回。

## 用法

```bash
mbs pim erp-product-get-leave-message-spu --spu <string> --isAll <string> --isSystem <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getLeaveMessageSpu`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | query | string | 是 | - | 商品SPU编号，按SPU查询其留言列表。来源：页面URL参数 SPU（GetQueryString('SPU')） |
| `isAll` | isAll | query | string | 是 | - | 是否查询全部留言。前端固定传 1（硬编码常量） |
| `isSystem` | isSystem | query | string | 是 | - | 是否含系统留言/系统类型标识。前端固定传 3（硬编码常量，业务取值含义待人工确认） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `content` | string | 当前用户头像URL（顶层字段，渲染至留言输入框旁头像） | - |
| `obj[]` | array | 留言列表（success 回调遍历 data.obj） | - |
| `obj[][0]` | string | 留言人头像URL（加载失败回退默认图） | - |
| `obj[][1]` | string | 留言人（姓名/账号） | - |
| `obj[][2]` | string | 留言时间 | - |
| `obj[][3]` | number | 留言类型。0=普通留言；1=SKU关联留言(展示SKU跳转链接) | - |
| `obj[][4]` | string | 留言目标对象（typeId=1 时为关联SKU，用于拼 SKUdetails.html?SKU= 跳转链接） | - |
| `obj[][5]` | string | 留言内容文本 | - |
| `obj[][6]` | number | 留言记录ID（用于回复定位，作为子留言的 parentMessageId） | - |
| `obj[][7][]` | array | 子回复列表（嵌套于该留言下） | - |
| `obj[][7][][0]` | string | 子回复-回复人 | - |
| `obj[][7][][1]` | string | 子回复-回复时间 | - |
| `obj[][7][][2]` | string | 子回复-回复内容 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
