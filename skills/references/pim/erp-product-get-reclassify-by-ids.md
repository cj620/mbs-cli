# mbs pim erp-product-get-reclassify-by-ids

根据一级品类ID获取重分类(二级品类)列表：报表页品类下拉(#Category，数据来自一级品类 getPrimaryClassificationDashBoard)勾选一个或多个一级品类后 onchange=CategoryChange() 触发，将所选一级品类 sequenceid 数组以 JSON 数组 POST 给本接口，返回这些一级品类下的重分类(二级品类)名称列表，用于渲染二级品类下拉 #CategoryList。

## 用法

```bash
mbs pim erp-product-get-reclassify-by-ids --ids <array<string>>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getReclassifyByIds`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `ids` | ids | body | array<string> | 是 | - | 请求体根节点：所选一级品类的 sequenceid 数组($('#Category').val()，多选下拉值数组)。未选时为 null/空数组 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(平台统一封装，本页未直接引用)(待人工确认) | - |
| `desc` | string | 响应提示信息(平台统一封装，本页未直接引用)(待人工确认) | - |
| `obj[]` | array | 重分类(二级品类)列表；前端 if(data.obj) 后作为 {list:data.obj} 渲染 #CategoryList 下拉 | - |
| `obj[]` | string | 重分类(二级品类)名称；模板中既作 <option value={{value.name}}> 又作显示文本，是 #CategoryList 唯一使用字段 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
