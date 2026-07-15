<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs prm yypms-sequenceid

类目自定义刊登属性(颜色/尺码)查询：海外仓即时开发页选定产品分类(类目最后一级)后，按该类目序号ID查询其自定义刊登属性，返回可用的刊登颜色与刊登尺码候选列表，用于款式表格中刊登颜色/刊登尺码输入框的自动补全。

## 用法

```bash
mbs prm yypms-sequenceid
```

## API

- Service: `yypms`
- Method: `GET`
- Path: `/yypms/pms/product/getCategoryAttributeListCustomize/{sequenceid}`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `sequenceid` | sequenceid | path | number | 是 | - | 商品分类(类目)最后一级序号ID，RESTful路径变量；来源 category-select 组件 changeValueList 回调的 valueList[0].sequenceid |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码,200=成功(标准响应包裹,本接口success回调未显式校验) | - |
| `desc` | string | 响应提示信息(标准响应包裹) | - |
| `obj` | object | 业务数据对象:该类目自定义刊登属性集合,前端赋给 this.autoComplete | - |
| `obj.Color[]` | array | 刊登颜色候选列表(字符串数组),供 querySearchColor 自动补全,取 data.obj.Color,缺省为[] | - |
| `obj.Color[]` | string | 颜色候选项文本,自动补全 value | - |
| `obj.Size[]` | array | 刊登尺码候选列表(字符串数组),供 querySearchSize 自动补全,取 data.obj.Size,缺省为[] | - |
| `obj.Size[]` | string | 尺码候选项文本,自动补全 value | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
