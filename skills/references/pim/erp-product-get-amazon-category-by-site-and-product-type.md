<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-amazon-category-by-site-and-product-type

按站点与大类目查询亚马逊子类目(itemType)：在亚马逊自动刊登确认列表页，用户点击某行的“子类目”单元格进入编辑时，根据该行所属站点(site)与亚马逊大类目名称(amazonCategoryName)联动查询其下可选的亚马逊子类目(itemType)列表，渲染为下拉选项供修改。

## 用法

```bash
mbs pim erp-product-get-amazon-category-by-site-and-product-type --site <string> --amazonCategoryName <string>
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/amazonProductPublish/getAmazonCategoryBySiteAndProductType`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `site` | site | body | string | 是 | - | 站点代码。来源 td[data-site](baseData.site)。枚举:US=美国;CA=加拿大;ES=西班牙;FR=法国;IT=意大利;MX=墨西哥;DE=德国;UK=英国;JP=日本;AU=澳大利亚;NL=荷兰 |
| `amazonCategoryName` | amazonCategoryName | body | string | 是 | - | 亚马逊大类目名称(产品类型productType)。来源 td[data-categoryName]，作为查询子类目的上级大类条件 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 子类目(itemType)列表。前端 if(data.obj) 判空后渲染 | - |
| `obj[][0]` | string | 子类目ID。渲染为 <option value="{{itemTypeId}}">，提交时作为 itemTypeId 上送 | - |
| `obj[][1]` | string | 子类目名称。渲染为 option 显示文本，提交时作为 itemType 值 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
