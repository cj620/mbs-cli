<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm pms-id

商品分类列表查询(级联)：按分类层级与父级分类ID查询商品分类列表，用于 SPU 在线报表页一级/二级分类级联下拉。空 id 查一级分类；传一级分类 sequenceid 查其二级分类。URL 末段 /1/ 为固定层级标识，父级分类 id 拼接其后。axios.post 无请求体，参数全部在 URL 路径上。

## 用法

```bash
mbs prm pms-id --level <string>
```

## API

- Service: `pms`
- Method: `POST`
- Path: `/yypms/pms/category/getCategoryList/1/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | string | 是 | - | 路径参数-父级分类sequenceid；空=查询一级分类，传一级分类sequenceid=查询其二级分类，来源为一级分类下拉选中项sequenceid |
| `level` | level | body | string | 是 | - | 路径参数-分类层级标识，本页面固定传1（URL段 .../getCategoryList/1/...） |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准ApiBase字段) | - |
| `desc` | string | 响应提示信息(标准ApiBase字段) | - |
| `obj[]` | array | 分类列表(一级或二级分类下拉数据源) | - |
| `obj[][0]` | string | 分类名称；下拉label与value均使用该值 | - |
| `obj[][1]` | number | 分类序号ID；选中一级分类后用于查询其二级分类 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
