<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs pim erp-product-get-reclassify-by-cate-ids

按父类目分页查询子类目(重新分类)：SPU列表页"重新分类"弹窗中，根据所选父目录(一级类目)分页查询其下子类目列表；支持按子类目名称关键词搜索。返回子类目(sequenceid+name)列表及分页信息(总条数、总页数)，前端渲染为可勾选的子类目复选框列表。

## 用法

```bash
mbs pim erp-product-get-reclassify-by-cate-ids [--primaryCateId <string>] --currpage <number> [--keyWords <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/product/getReclassifyByCateIds`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `primaryCateId` | primaryCateId | body | string | 否 | - | 父级(一级)类目ID列表，多选时以英文逗号拼接；来源父目录多选下拉 #content3 的值(.val().join(","))，未选时传空字符串 |
| `currpage` | currpage | body | number | 是 | - | 当前页码；分页加载取 baseDate.currpage，关键词搜索取 baseDate.searchPage，分页回调时为 api.getCurrent()，每页固定100条 |
| `keyWords` | keyWords | body | string | 否 | - | 子类目名称搜索关键词；来源搜索输入框 #keyWordsName(searchReclassify)，分页加载 getReclassify 中固定传空字符串 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码(标准包装,200=成功;601=未登录)；本接口前端以 obj != null 判断成功，未直接判 code | - |
| `desc` | string | 响应提示信息(标准包装) | - |
| `obj` | object | 业务数据对象；为 null 时前端不渲染 | - |
| `obj.list[]` | array | 子类目列表 | - |
| `obj.list[][0]` | number | 子类目序号ID(主键)；前端收集进 categoryId2，并作为复选框 overInput 的 value | - |
| `obj.list[][1]` | string | 子类目名称；前端展示于列表，并写入复选框 data-name(确定时回填 #categoryName2) | - |
| `obj.total` | number | 满足条件的子类目总条数；写入 #sontotal 展示 | - |
| `obj.pages` | number | 总页数；用于初始化分页组件 ByCateIdsPage/searchCateIdsPage | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
