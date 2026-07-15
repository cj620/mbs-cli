<!-- AUTO-GENERATED FROM audit manifest. DO NOT EDIT. -->
# mbs oms erp-order-get-hr

获取HRBP列表：新人(待审核/历史审核人员)列表页初始化时调用，获取全部 HRBP(人力资源业务伙伴)名称集合，用于填充页面顶部「请选择HRBP」筛选下拉框(#hrbp)的选项。无请求参数。

## 用法

```bash
mbs oms erp-order-get-hr
```

## API

- Service: `erpOrder`
- Method: `POST`
- Path: `/erpOrder/erpOrder/newComerTranscript/getHr`
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
| `code` | number | 响应状态码，200=成功(老项目统一响应结构) | - |
| `desc` | string | 响应提示信息 | - |
| `obj[]` | array | HRBP 名称列表(字符串数组)，前端取此填充 #hrbp 下拉选项；为空/无值时不渲染 | - |
| `obj[]` | string | 单个 HRBP 名称，作为下拉项的 value 与显示文本(具体为姓名或工号 待人工确认) | - |


## 调用规则

- 缺少必填参数时先询问用户。
- 不要自行编造参数值。
