<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm erpsoldout-get-pantent-country

获取专利国家下拉选项：SPU详情页“专利国家”多选下拉的数据源接口。页面加载时以 axios.get 调用，无请求参数；返回 obj 数组赋给 state.patentCountryOptions，在 #patentCountry el-select 中以 id 为选项值、countryName 为显示文本渲染，并据用户角色与已选专利国家设置选项禁用态。

## 用法

```bash
mbs prm erpsoldout-get-pantent-country
```

## API

- Service: `erpsoldout`
- Method: `GET`
- Path: `/erpsoldout/erpsoldout/infringing/getPantentCountry`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| - | - | - | - | - | - | - |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(本接口回调未显式判断,按站点约定标注)(待人工确认) | - |
| `desc` | string | 响应提示信息(本接口回调未使用)(待人工确认) | - |
| `obj[]` | array | 专利国家选项列表(赋值给 state.patentCountryOptions 作为下拉数据源) | - |
| `obj[][0]` | number | 专利国家ID(el-option 的 :value/:key;与 SPU 的 patentCourtry 逗号分隔ID串匹配,命中则该选项禁用) | - |
| `obj[][1]` | string | 专利国家名称(el-option 的 :label,下拉显示文本) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
