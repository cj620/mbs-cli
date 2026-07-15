# mbs prm erpsoldout-id-get-pantent-country-by-id

根据专利国家ID查询关联平台与站点：在商品侵权审核-提交侵权授权弹框中选择专利国家后触发；按所选专利国家ID返回关联的侵权平台(platform)与站点(site)集合，前端据此自动并入已选侵权平台与站点。

## 用法

```bash
mbs prm erpsoldout-id-get-pantent-country-by-id
```

## API

- Service: `erpsoldout`
- Method: `GET`
- Path: `/erpsoldout/erpsoldout/infringing/getPantentCountryById/{id}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `c43f9cf4f1a09260a0eba9565b587654ece4f69a9fa7c9f1cb2929c686a84b79`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `id` | id | path | string | 是 | - | 专利国家ID(路径变量)。取自专利国家多选框(el-select#patentCountry)已选项 value.id，多选时逗号拼接；枚举来源 getPantentCountry 接口的 patentCountryOptions(value.id/value.countryName)。未选则不发请求 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本项目统一响应码,本接口回调未显式判断,按通用约定标注) | - |
| `desc` | string | 响应提示信息(通用约定) | - |
| `obj` | object | 业务数据对象,含该专利国家关联的平台与站点 | - |
| `obj.platform[]` | array | 该专利国家关联的侵权平台列表;前端遍历并将命中 platformOptions 的平台ID并入已选侵权平台 | - |
| `obj.platform[]` | string | 平台ID;前端用 platformMap.includes(item.platformId) 判断后加入 platform 选中集(与 platformOptions[].platformId 比对) | - |
| `obj.site[]` | array | 该专利国家关联的站点列表;前端遍历并将命中站点并入已选站点 | - |
| `obj.site[]` | string | 站点标识;前端用 siteMap.get(item.site)(siteMap 以 siteOptions[].label 为键)匹配后加入 site 选中集 | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
