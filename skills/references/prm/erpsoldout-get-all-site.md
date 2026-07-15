# mbs prm erpsoldout-get-all-site

获取全部站点(站点下拉数据)：商品侵权授权弹框(tortForm)初始化时拉取全部「平台-站点」清单，用于「站点」多选下拉(#site-selector)。前端遍历返回数组为每项拼装 key=平台ID-站点-平台名 与 label=平台名-站点 后绑定到 siteOptions。

## 用法

```bash
mbs prm erpsoldout-get-all-site
```

## API

- Service: `erpsoldout`
- Method: `GET`
- Path: `/erpsoldout/erpsoldout/infringing/getAllSite`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功 | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | 站点列表(全部平台-站点清单),前端赋给 siteOptions | - |
| `obj[][0]` | string | 平台ID(用于拼装 key,并与平台选项 platformId 关联匹配) | - |
| `obj[][1]` | string | 站点(站点代码/名称,下拉 label 与 key 组成部分) | - |
| `obj[][2]` | string | 平台名称(下拉 label 与 key 组成部分) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
