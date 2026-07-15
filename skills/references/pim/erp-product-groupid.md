# mbs pim erp-product-groupid

查询刊登确认信息(UPC/刊登编号)：亚马逊自动刊登确认页，点击父SKU时根据变体组ID(groupid)查询该刊登任务下父/子变体的刊登编号(sellerSku)与UPC(productId)信息，回填到「修改UPC并提交刊登」弹窗(upcModal)供编辑确认。

## 用法

```bash
mbs pim erp-product-groupid
```

## API

- Service: `erpProduct`
- Method: `GET`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getPublishConfirmInfo/{groupid}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `groupid` | groupid | path | string | 是 | - | 刊登任务变体组ID(路径参数)，来源列表行模板 {{v.groupid}}，点击父SKU时传入 onClickParentSku(groupid) 并拼接到URL末尾 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(success回调中解构,未显式判定) | - |
| `desc` | string | 响应提示信息(ERP统一返回体字段,本回调未使用) | - |
| `obj[]` | array | 变体确认信息列表(父变体+各子变体) | - |
| `obj[][0]` | number | 变体类型。0=子变体(展示为子变体{i});非0=父变体(展示为父变体) | - |
| `obj[][1]` | string | 变体记录ID(作为行 data-id,提交时回传) | - |
| `obj[][2]` | string | 刊登编号(必填项,回填到 name=publishNumber 输入框) | - |
| `obj[][3]` | string | UPC编码(选填,回填到 name=productId 输入框,空则默认使用系统生成) | - |
| `obj[][4]` | string | UPC编码类型(只读展示于UPC输入框后,如 UPC/EAN) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
