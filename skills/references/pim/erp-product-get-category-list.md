# mbs pim erp-product-get-category-list

商品类目分页列表查询：商品类目维护页查询：按层级(levelnum)与父类目(parentCatId)分页查询某一级类目列表，支持按类目名称(catName)子类搜索、按状态(openflag)开启/关闭筛选；返回类目列表及总数、当前页。

## 用法

```bash
mbs pim erp-product-get-category-list --currentPage <number> --levelnum <number> --pageSize <number> [--parentCatId <number>] [--openflag <string>] [--catName <string>]
```

## API

- Service: `erpProduct`
- Method: `POST`
- Path: `/erpProduct/erpProduct/categoryController/getCategoryList`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `currentPage` | currentPage | body | number | 是 | - | 当前页码。来源 dataPage.page(默认1)；下钻/搜索时固定传1 |
| `levelnum` | levelnum | body | number | 是 | - | 类目层级数(1=一级,2=二级,3=三级,4=四级)，控制查询哪一级类目 |
| `pageSize` | pageSize | body | number | 是 | - | 每页条数，前端固定传50 |
| `parentCatId` | parentCatId | body | number | 否 | - | 父类目ID(sequenceid)，下钻选中行的sequenceid；查一级类目时为null |
| `openflag` | openflag | body | string | 否 | - | 状态筛选(单选按钮组)。''=所有;'1'=开启;'0'=关闭，默认'1' |
| `catName` | catName | body | string | 否 | - | 类目名称(子类搜索关键词)，来源输入框，全类搜索命中后回填 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj` | object | 业务数据对象 | - |
| `obj.count` | number | 满足条件的类目总数(前端赋给 dataPage.total 用于分页) | - |
| `obj.page` | number | 当前页码(前端赋给 dataPage.page) | - |
| `obj.result[]` | array | 类目列表(表格数据) | - |
| `obj.result[][0]` | number | 类目ID(主键;下钻/修改/批量授权均取此值) | - |
| `obj.result[][1]` | string | 类目名称(可点击下钻子级,levelnum==4时不可下钻) | - |
| `obj.result[][2]` | string | 英文名称 | - |
| `obj.result[][3]` | string | 描述 | - |
| `obj.result[][4]` | string | 报关编码 | - |
| `obj.result[][5]` | string | SPU开头规则(一级类目使用) | - |
| `obj.result[][6]` | string | 状态。1=开启(绿色标签);其他(0)=关闭(灰色标签) | - |
| `obj.result[][7]` | string | 负责经理(二级类目维护) | - |
| `obj.result[][8]` | string | 负责人 | - |
| `obj.result[][9]` | string | 创建人 | - |
| `obj.result[][10]` | string | 创建时间 | - |
| `obj.result[][11]` | string | 操作人(最后操作人) | - |
| `obj.result[][12]` | string | 操作时间(最后操作时间) | - |
| `obj.result[][13]` | number | 类目级别(1一级/2二级/3三级/4四级;控制能否继续下钻及多选/权限操作) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
