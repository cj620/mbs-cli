# mbs pim erp-product-get-leave-message-sku

获取SKU留言列表：商品详情「全部留言」页加载指定SKU的留言列表：按SKU(及SPU)查询全部留言，返回每条留言的留言人/时间/内容/头像、附带的图片与文件附件，以及该留言下的子留言(回复)。

## 用法

```bash
mbs pim erp-product-get-leave-message-sku --sku <string> [--spu <string>] [--isAll <string>] [--isSystem <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/productDetails/getLeaveMessageSku`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sku` | sku | query | string | 是 | - | SKU编号(核心查询键，查询该SKU的留言)；来源页面URL参数 SKU |
| `spu` | spu | query | string | 否 | - | SPU编号；来源页面URL参数 SPU，本页常为空 |
| `isAll` | isAll | query | string | 否 | - | 是否查看全部留言，前端固定传 1(1=全部) |
| `isSystem` | isSystem | query | string | 否 | - | 留言系统/类型标识，前端固定传 3 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `content` | string | 当前登录用户头像URL(顶部添加留言框头像)；加载失败回退默认头像 | - |
| `desc` | string | 当前登录用户名；模板用 desc == value.createOper 判断是否本人留言，决定是否显示删除/上传按钮 | - |
| `obj[]` | array | 留言列表(每个元素为一条主留言) | - |
| `obj[][0]` | string | 留言人头像URL；加载失败回退默认头像 | - |
| `obj[][1]` | string | 留言人(创建人) | - |
| `obj[][2]` | string | 留言时间 | - |
| `obj[][3]` | string | 留言内容(文本) | - |
| `obj[][4]` | number | 留言ID(主键)，用于回复、删除、上传附件 | - |
| `obj[][5][]` | array | 留言附件列表(图片与文件) | - |
| `obj[][5][][0]` | string | 附件类型枚举：1=图片(渲染为图片预览)，0=文件(渲染为下载链接) | - |
| `obj[][5][][1]` | string | 附件URL(图片或文件的访问/下载地址) | - |
| `obj[][5][][2]` | string | 文件名(仅 type=0 文件附件展示) | - |
| `obj[][6][]` | array | 子留言(回复)列表 | - |
| `obj[][6][][0]` | string | 回复人 | - |
| `obj[][6][][1]` | string | 回复时间 | - |
| `obj[][6][][2]` | string | 回复内容 | - |
| `obj[][6][][3]` | number | 回复ID，用于删除子留言 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
