# mbs pim erp-product-querymust-refresh-change-image-info

查询换图结果信息：在"今日必修改"列表中点击某SPU行，按 SPU 查询该商品在各店铺的"必修改/换图"处理结果，返回各店铺待修改项明细（店铺名、原因），前端以弹窗表格展示。

## 用法

```bash
mbs pim erp-product-querymust-refresh-change-image-info --spu <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/pushProduct/querymustRefreshChangeImageInfo`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `spu` | spu | body | string | 是 | - | 商品SPU编号。来源：列表选中行对象 objs.id；无选中行时传空字符串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功（本接口回调未强校验，仅判断 data.obj 是否有值） | - |
| `desc` | string | 响应提示信息（统一返回结构，前端本处未使用）(待人工确认) | - |
| `obj[]` | array | 换图结果列表，每项为一条店铺待修改记录；为空则不弹窗 | - |
| `obj[][0]` | string | 商品/刊登 Item 编号（模板第1列） | - |
| `obj[][1]` | string | 店铺名称（模板第2列） | - |
| `obj[][2]` | string | 需换图/必修改原因（模板第3列） | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
