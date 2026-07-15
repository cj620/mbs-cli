<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs scm erp-manufacture-get-manufacture-images

供应商(公司)图片库查询：根据供应商序号ID(manufactureId)查询该供应商的公司图片库图片列表，前端用于渲染“公司图片库”展示网格(contentTemplate1)及“编辑图片”弹窗网格(contentTemplate2)。上传图片/删除图片后会重新调用本接口刷新图片列表。

## 用法

```bash
mbs scm erp-manufacture-get-manufacture-images --manufactureId <string>
```

## API

- Service: `erpManufacture`
- Method: `POST`
- Path: `/erpManufacture/erpManufacture/uploadFlieController/getManufactureImages`
- Schema version: `1`
- Manifest version: `2026-05-20T00:00:00+08:00`
- Manifest hash: `bb5873b2cc4b4b640f441445fae12e93fdac17e403d4b921ac62cca7bd97b484`

## 参数

| 参数 | API 字段 | 位置 | 类型 | 必填 | 默认值 | 说明 |
|---|---|---|---|---|---|---|
| `manufactureId` | manufactureId | query | string | 是 | - | 供应商序号ID(query参数)。来源：当前页面URL查询串 sequenceid，经 GetQueryString('sequenceid') 获取 |

## 响应字段

| 路径 | 类型 | 说明 | 用途 |
|---|---|---|---|
| `code` | number | 响应状态码，200=成功(统一返回包裹字段，本接口成功回调未显式校验) | - |
| `desc` | string | 响应提示信息(统一返回包裹字段) | - |
| `obj[]` | array | 供应商图片列表，模板遍历渲染 | - |
| `obj[][0]` | string | 图片URL，用于 <img src> 展示及超链接跳转(加载失败回退占位图 /2018ui/assets/images/timg.jpg) | - |
| `obj[][1]` | string | 图片记录序号ID，编辑图片弹窗删除按钮 delImages('{{value.sequenceid}}') 传入(待人工确认类型，按主键ID推断) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
