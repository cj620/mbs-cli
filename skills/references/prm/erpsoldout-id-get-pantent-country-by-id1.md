# mbs prm erpsoldout-id-get-pantent-country-by-id1

按专利国家ID查询关联禁售平台/站点：SPU详情页“禁售平台/专利国家”模块中，用户在「专利国家」多选下拉选择一个或多个国家后触发，按所选专利国家ID(列表)查询其对应需禁售的平台与站点集合，前端据此把对应平台名加入禁售平台多选、把站点加入禁售站点多选。

## 用法

```bash
mbs prm erpsoldout-id-get-pantent-country-by-id1
```

## API

- Service: `erpsoldout`
- Method: `GET`
- Path: `/erpsoldout/erpsoldout/infringing/getPantentCountryById1/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | string | 是 | - | 专利国家ID列表(路径变量)。取自「专利国家」多选框 #patentCountry 选中项的 value.id，多选时按逗号串联(如 1,2,3)。来源控件：SPUdetails.html el-select#patentCountry(multiple)，选项 label=countryName、value=id |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `obj` | object | 业务数据对象(按专利国家查得的禁售平台与站点集合) | - |
| `obj.platform[]` | array | 关联禁售平台列表 | - |
| `obj.platform[]` | string | 平台ID(与平台选项 platformsOptions[].sequenceid 匹配，映射出平台名 name 后加入禁售平台多选) | - |
| `obj.site[]` | array | 关联禁售站点列表 | - |
| `obj.site[]` | string | 站点(站点编码/名称，直接加入禁售站点多选) | - |
| `code` | number | 响应状态码(框架统一返回，前端本回调未显式使用) (待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
