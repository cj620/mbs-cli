# mbs pim instudio-pms-parent-cat-id-get-category-list

查询类目列表：查询类目列表(源码无注释,按方法名推断)

## 用法

```bash
mbs pim instudio-pms-parent-cat-id-get-category-list
```

## API

- Service: `instudio-pms`
- Method: `POST`
- Path: `/yypms/pms/yandexBasicDate/getCategoryList/{parentCatId}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `parentCatId` | parentCatId | path | integer | 否 | - | 父级CATID（字段名推断,语义待核实） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | integer | 错误代码。前端使用：待核实 | - |
| `desc` | string | 错误类型。前端使用：待核实 | - |
| `obj` | object | 列表信息。前端使用：待核实 | - |
| `obj.obj[].sequenceid` | integer | 序列ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].name` | string | 名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].displayName` | string | 展示名称（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].parentcategoryid` | integer | Parentcategoryid（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].parentcategoryname` | string | Parentcategoryname（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].levelnum` | integer | 分类级别。前端使用：待核实 | - |
| `obj.obj[].levelname1` | string | Levelname1（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].levelname2` | string | Levelname2（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].levelname3` | string | Levelname3（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].levelname4` | string | Levelname4（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].levelname5` | string | Levelname5（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].levelname6` | string | Levelname6（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].levelid1` | integer | Levelid1（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].levelid2` | integer | Levelid2（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].levelid3` | integer | Levelid3（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].levelid4` | integer | Levelid4（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].levelid5` | integer | Levelid5（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].levelid6` | integer | Levelid6（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].isLeaf` | integer | 是否LEAF（字段名推断,语义待核实）。前端使用：待核实 | - |
| `obj.obj[].categoryId` | integer | 类目ID（字段名推断,语义待核实）。前端使用：待核实 | - |
| `content` | string | 内容。前端使用：待核实 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
